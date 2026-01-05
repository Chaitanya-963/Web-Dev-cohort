import bcrypt from "bcryptjs";
import crypto from "crypto";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const registerUser = async (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    console.log("Data is missing");
    res.status(400).json({
      success: false,
      message: "All fileds are required",
    });
  }

  try {
    const exisitingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (exisitingUser) {
      res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    // hash the pass

    const hashedPassword = await bcrypt.hash(password, 10);

    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        verificationToken,
      },
    });

    //send mail - TODO
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDERMAIL,
      to: prisma.user.email,
      subject: "Verify your email",
      text: `Please click on the following link: 
          ${process.env.BASE_URL}/api/v1/users/Verify/${verificationToken}`, // plain‑text body
      html: "<b>Verify your Email</b>", // HTML body
    };

    await transporter.sendMail(mailOption);

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(400).json({
      message: "User not registered",
      error,
      success: false,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("Data is missing");
    res.status(400).json({
      success: false,
      message: "All fileds are required",
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(400).json({
        success: false,
        message: "Invalid email and password",
      });
    }

    const isMatched = bcrypt.compare(password, user.password);
    if (!isMatched) {
      res.status(400).json({
        success: false,
        message: "Invalid email and password",
      });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES,
      }
    );

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };

    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
        email: user.email,
      },
      message: "Login successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
      message: "Login failed",
    });
  }
};

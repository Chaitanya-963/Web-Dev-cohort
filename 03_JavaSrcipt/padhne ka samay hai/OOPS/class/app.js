// class CreatePencil {
//   constructor(name, qyt, price, color, company) {
//     this.name = name;
//     this.qyt = qyt;
//     this.price = price;
//     this.color = color;
//     this.company = company;
//   }

//   delete() {
//     document.body.querySelectorAll("h1").forEach((elem) => {
//       if (elem.style.color === this.color) {
//         elem.remove();
//       }
//     });
//   }

//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     document.body.appendChild(h1);
//   }
// }

// let p1 = new CreatePencil("Doms", 5, 20, "blue", "doms");
// let p2 = new CreatePencil("Natraj", 3, 10, "red", "natraj");

class User {
  constructor(name, address, username, email) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name} : ${text}`;
    document.body.appendChild(h1);
  }
}

class Admin extends User {
  constructor(name, address, username, email) {
    super(name, address, username, email);
    this.role = "admin";
  }

  remove() {
    document.querySelectorAll("h1").forEach(function (elem) {
      elem.remove();
    });
  }
}

let u1 = new User("CM", "Pune", "cm1023", "cm@cm.com");
let u2 = new User("AM", "Canada", "am1423", "am@am.com");
let admin = new Admin("admin1", "Mumbai", "admin123", "admin@admin.com");

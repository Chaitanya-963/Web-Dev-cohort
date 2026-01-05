let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    form.reset();
    this.renderUi();
    this.deleteUser();
  },
  renderUi: function () {
    document.querySelector(".users").innerHTML = "";
    this.users.forEach(function (user) {
      const card = document.createElement("div");
      card.className = "bg-neutral-900 p-6 rounded-xl shadow-lg text-center";

      // Image
      const img = document.createElement("img");
      img.src = user.photo;
      img.className = "w-20 h-20 rounded-full object-cover mx-auto mb-3";

      // Name
      const name = document.createElement("h3");
      name.className = "text-xl font-semibold";
      name.textContent = user.username;

      // Role
      const role = document.createElement("p");
      role.className = "text-gray-400";
      role.textContent = user.role;

      // Bio
      const bio = document.createElement("p");
      bio.className = "mt-2 text-gray-300";
      bio.textContent = user.bio;

      const btn = document.createElement("button");
      btn.className =
        "mt-1 px-6 py-1 text-white bg-slate-700 border border-slate-100";
      btn.textContent = "Delete";

      // Append all inside card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(bio);
      card.appendChild(btn);

      document.querySelector(".users").appendChild(card);
    });
  },
  deleteUser: function () {
    const buttons = document.querySelectorAll(".users button");

    buttons.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        this.users.splice(idx, 1), this.renderUi();
        this.deleteUser();
      });
    });
  },
};

userManager.init();

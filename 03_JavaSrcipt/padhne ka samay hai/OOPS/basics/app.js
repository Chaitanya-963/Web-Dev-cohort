function CreatePencil(name, price, qyt, color, company) {
  this.name = name;
  this.qyt = qyt;
  this.price = price;
  this.color = color;
  this.company = company;

  //   this.write = function (text) {
  //     let h1 = document.createElement("h1");
  //     h1.textContent = text;
  //     h1.style.color = this.color;
  //     document.body.appendChild(h1);
  //   };
}

CreatePencil.prototype.write = function (text) {
  let h1 = document.createElement("h1");
  h1.textContent = text;
  h1.style.color = this.color;
  document.body.appendChild(h1);
};

let p1 = new CreatePencil("Doms", 20, 5, "red", "doms");

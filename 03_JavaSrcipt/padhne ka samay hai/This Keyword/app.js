// this keyword special keyword hai, kyuki jaise ki baaki saare keyword ki value ya  unka nature same rehta hai this ki value ya nature badal jaata hai is baat se ki aap usey kaha youse kar rahe ho

// global scope ---> Windows hoti hai uski value
console.log(this);

// function ke andhar ---> Windows hoti hai uski value
function abcd() {
  console.log(this);
}

abcd();

//Object ke Method ke andhar ---> Object hoti hai uski value
// Method ke andhar ke function ko kabhi bhi arrow [()=>{}] function nhi bnan hai nhi to THIS apni value kho dega or vaps se Window to point krega so always use function(){}
// If method ke function ke andhar or ke funtion bnaya to vaps se this apni value window kr dega 
// sayName: function () {
//     function xyz(){
//       console.log(this);
//     }
//    xyz();
//   }
// Or Agar aapko function ke andhar bhi this ki value obj rakhni hai to function ke andhar vale function ko hamesha arrow function bnano jise this ki value object rahegi
let obj = {
  name: "Chaitanya",
  sayName: function () {
    console.log(this.name);
  },
};

obj.sayName();

// event handler ke andar ---> Jispe event laga hai vo hoti hai this ki value

document.querySelector("div").addEventListener("click", function () {
  console.log((this.style.color = "Orange"));
});

// Class ke andar ---> this ki value blank object hoti hai jab ham usse new keyword ke sath call krte hai

class Abcd {
  constructor() {
    console.log("Hey");
    this.a = 12;
  }
}

let val = new Abcd();
+
// aap ek promise banaate ho jo ki do states mein se ek state me jaa sakta hai and wo yaa to resolve hoga ya to reject hoga ab wo kya hoga ye to waqt bataayega par humein dono ke litye code likhna padta hai

let pr = new Promise(function (res, rej) {
  //   console.log("Resolving.....");

  setTimeout(() => {
    let randomNum = Math.floor(Math.random() * 10);
    if (randomNum > 5) res("Resolved with " + randomNum);
    else rej("Rejected with " + randomNum);
  }, 3000);
});

pr.then(function (val) {
  console.log(val);
}).catch(function (val) {
  console.log(val);
});

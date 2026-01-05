let pr = new Promise(function (res, rej) {
  //   console.log("Resolving.....");

  setTimeout(() => {
    let randomNum = Math.floor(Math.random() * 10);
    if (randomNum > 5) res("Resolved with " + randomNum);
    else rej("Rejected with " + randomNum);
  }, 3000);
});

async function solvingPromise() {
  try {
    let val = await pr;
    console.log(val);
  } catch (err) {
    console.log(err);
  }
}

solvingPromise();

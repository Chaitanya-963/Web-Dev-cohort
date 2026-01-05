// koi bhi code js mein line by. line chalega aur ye natural
// pattern bhi hota hai ki code line by line chale, but kabhi
// kabaar aise cases aate hai life mein jaha par aapka code
// wait krta hai and utni der mein agla code chal jaata hai

// function kuchDerBaadChalega(val) {
//   setTimeout(() => {
//     console.log(val)
//   }, Math.floor(Math.random() * 10) * 1000);
// }

// kuchDerBaadChalega(10)

function profileLekarAao(username, cb) {
  console.log("Fetching profile data...");

  setTimeout(() => {
    console.log(`Profile fetched of ${username}`);
    cb({ _id: 12445, username, age: 23, email: "huihui@huihui.com" });
  }, 2000);
}

function saarePostLekarAao(id, cb) {
  console.log("Fetching Posts data...");

  setTimeout(() => {
    cb({
      _id: id,
      posts: ["Hello", "Good Evening", "I am doing coding righ now"],
    });
  }, 3000);
}

function savedPostNikalo(id, cb) {
  console.log("Fetching saved post data...");
  setTimeout(() => {
    cb({ _id: id, savedPosts: ["Happy Birthday", "I am in Canada"] });
  }, 4000);
}

profileLekarAao("Chaitanya", function (profileData) {
  console.log(profileData);

  saarePostLekarAao(profileData._id, function (posts) {
    console.log(posts);
    savedPostNikalo(profileData._id, function (saved) {
      console.log(saved);
    });
  });
});

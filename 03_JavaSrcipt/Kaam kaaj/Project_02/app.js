// let users = [
//   {
//     name: "Tanjiro",
//     pic: "https://i.pinimg.com/736x/27/7d/ba/277dba95aa1dbde27a04efe00493e6ea.jpg",
//     bio: "Walking through dreams in Doc Martens | Late night thinker",
//   },
//   {
//     name: "Zenitsu",
//     pic: "https://i.pinimg.com/736x/56/59/88/565988c1921d4d90bb94c18b97619d61.jpg",
//     bio: "Minimalist | Coffee enthusiast | Coding my story",
//   },
//   {
//     name: "Kakashi ",
//     pic: "https://i.pinimg.com/736x/eb/a9/5f/eba95f265393577a5109140c023461d4.jpg",
//     bio: "Dreamer with a sketchbook | Finding beauty in chaos",
//   },
//   {
//     name: "Iron Man",
//     pic: "https://i.pinimg.com/736x/64/fa/11/64fa119c4f6d984091b394479c99a2a0.jpg",
//     bio: "Traveler | Story collector | Always chasing sunsets",
//   },
//   {
//     name: "Pain",
//     pic: "https://i.pinimg.com/736x/c8/7b/d6/c87bd654e4581fa63ba2d3512affec46.jpg",
//     bio: "Lost in books | Found in music | Calm soul, wild heart",
//   },
//   {
//     name: "Rengoku",
//     pic: "https://i.pinimg.com/1200x/88/50/ad/8850adcf16f31955657578dd41e4c446.jpg",
//     bio: "Tech geek | Gamer | Building the future one line at a time",
//   },
//   {
//     name: "Madara Uchiha",
//     pic: "https://i.pinimg.com/736x/db/fa/8b/dbfa8b1f9aefd72b5b635b000e978f15.jpg",
//     bio: "Dancer at heart | Chasing vibes | Lover of deep talks",
//   },
//   {
//     name: "Naruto Uzumaki",
//     pic: "https://i.pinimg.com/736x/32/00/40/3200408cbced3e4f794aeba7b7003052.jpg",
//     bio: "Photography addict | Exploring one frame at a time",
//   },
//   {
//     name: "Giyu",
//     pic: "https://i.pinimg.com/736x/e7/2d/4d/e72d4daac60950daf66279320c3a110b.jpg",
//     bio: "Poet in the making | Stargazer | Old soul, new dreams",
//   },
// ];

// function showUsers(arr) {
//   arr.forEach(function (user) {
//     // Create main card div
//     let card = document.createElement("div");
//     card.className = "card";

//     // Create img element
//     let img = document.createElement("img");
//     img.src = user.pic;
//     img.className = "bg-img";

//     // Create blurred layer div
//     let blurredLayer = document.createElement("div");
//     blurredLayer.style.backgroundImage = `url(${user.pic})`;
//     blurredLayer.className = "blurred-layer";

//     // Create content div
//     let content = document.createElement("div");
//     content.className = "content";

//     // Create h3
//     let h3 = document.createElement("h3");
//     h3.textContent = user.name;

//     // Create paragraph
//     let p = document.createElement("p");
//     p.textContent = user.bio;

//     // Append everything
//     content.appendChild(h3);
//     content.appendChild(p);

//     card.appendChild(img);
//     card.appendChild(blurredLayer);
//     card.appendChild(content);

//     // Finally add card to body (or any container)
//     document.querySelector(".main").appendChild(card);
//   });
// }

// showUsers(users);

// let input = document.querySelector(".input");
// input.addEventListener("input", function () {
//   let newUsers = users.filter((user) => {
//     return user.name.startsWith(input.value);
//   });

//   document.querySelector(".main").innerHTML = "";
//   showUsers(newUsers);
// });

const users = [
  {
    name: "Tanjiro",
    pic: "https://i.pinimg.com/736x/27/7d/ba/277dba95aa1dbde27a04efe00493e6ea.jpg",
    bio: "Walking through dreams in Doc Martens | Late night thinker",
  },
  {
    name: "Zenitsu",
    pic: "https://i.pinimg.com/736x/56/59/88/565988c1921d4d90bb94c18b97619d61.jpg",
    bio: "Minimalist | Coffee enthusiast | Coding my story",
  },
  {
    name: "Kakashi",
    pic: "https://i.pinimg.com/736x/eb/a9/5f/eba95f265393577a5109140c023461d4.jpg",
    bio: "Dreamer with a sketchbook | Finding beauty in chaos",
  },
  {
    name: "Iron Man",
    pic: "https://i.pinimg.com/736x/64/fa/11/64fa119c4f6d984091b394479c99a2a0.jpg",
    bio: "Traveler | Story collector | Always chasing sunsets",
  },
  {
    name: "Pain",
    pic: "https://i.pinimg.com/736x/c8/7b/d6/c87bd654e4581fa63ba2d3512affec46.jpg",
    bio: "Lost in books | Found in music | Calm soul, wild heart",
  },
  {
    name: "Rengoku",
    pic: "https://i.pinimg.com/1200x/88/50/ad/8850adcf16f31955657578dd41e4c446.jpg",
    bio: "Tech geek | Gamer | Building the future one line at a time",
  },
  {
    name: "Madara Uchiha",
    pic: "https://i.pinimg.com/736x/db/fa/8b/dbfa8b1f9aefd72b5b635b000e978f15.jpg",
    bio: "Dancer at heart | Chasing vibes | Lover of deep talks",
  },
  {
    name: "Naruto Uzumaki",
    pic: "https://i.pinimg.com/736x/32/00/40/3200408cbced3e4f794aeba7b7003052.jpg",
    bio: "Photography addict | Exploring one frame at a time",
  },
  {
    name: "Giyu",
    pic: "https://i.pinimg.com/736x/e7/2d/4d/e72d4daac60950daf66279320c3a110b.jpg",
    bio: "Poet in the making | Stargazer | Old soul, new dreams",
  },
];

const main = document.querySelector(".main");
const input = document.querySelector(".input");

// ✅ Create card in a cleaner way
const createCard = ({ name, pic, bio }) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${pic}" class="bg-img" />
    <div class="blurred-layer" style="background-image: url(${pic});"></div>
    <div class="content">
      <h3>${name}</h3>
      <p>${bio}</p>
    </div>
  `;
  return card;
};

// ✅ Render users
const showUsers = (arr) => {
  main.innerHTML = "";
  if (arr.length === 0) {
    main.innerHTML = `<p class="no-user">🚫 No user found</p>`;
    return;
  }
  arr.forEach((user) => main.appendChild(createCard(user)));
};

// ✅ Initial render
showUsers(users);

// ✅ Search filter (case insensitive + trims)
input.addEventListener("input", () => {
  const search = input.value.trim().toLowerCase();
  const filtered = users.filter((user) =>
    user.name.toLowerCase().startsWith(search)
  );
  
    showUsers(filtered);
  
});

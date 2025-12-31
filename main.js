const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarLists = document.querySelector(".navbar-lists");
const navbarBtns = document.querySelector(".navbar-btns");

hamburgerMenu.addEventListener("click", () => {
  navbarLists.classList.toggle("active");
  navbarBtns.classList.toggle("active");
});

const cards = [
  {
    photo: "images/boy.png",
    name: "John Doe",
    date: "24 May, 2021",
    stars: "★★★★★",
    review:
      "The counseling I received has been life-changing. The therapists really took the time to understand my struggles and provided me with practical tools to manage my anxiety. I feel like a completely different person now. more at peace and in control.",
  },
  {
    photo: "images/woman.png",
    name: "Alice Smith",
    date: "15 Sep, 2024",
    stars: "★★★★",
    review:
      "The support groups have been an incredible source of comfort for me. It is a safe space where I can openly share my challenges and hear others experiences. Knowing I am not alone has made a huge difference in my healing journey.",
  },
  {
    photo: "images/profile.png",
    name: "Bob Johnson",
    date: "01 Jan, 2022",
    stars: "★★★★★",
    review:
      "I am beyond grateful for the prescription medicine guidance I received. The team worked closely with me to find the right treatment for my condition. The professionals are compassionate, and I felt supported every step of the way.",
  },
  {
    photo: "images/gamer.png",
    name: "Charlie Brown",
    date: "10 Feb, 2024",
    stars: "★★★★",
    review:
      "The therapy sessions have helped me overcome the emotional struggles I’ve faced for years. The strategies I learned, especially through CBT, have been incredibly effective in shifting my mindset. I now feel more resilient and equipped to handle challenges of life.",
  },
  {
    photo: "images/girl.png",
    name: "Eve White",
    date: "09 Nov, 2024",
    stars: "★★★★★",
    review:
      "I was hesitant at first, but the brain stimulation therapy truly worked wonders for my depression. The sessions were easy to follow, and I began to notice improvements in my mood and energy levels almost immediately. I feel like myself again.",
  },
];

let currentIndex = 0;

function changeCard(direction) {
  if (direction === "right") {
    currentIndex = (currentIndex + 1) % cards.length;
  } else if (direction === "left") {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  }

  const card = cards[currentIndex];

  document.getElementById("photo").src = card.photo;
  document.getElementById("name").textContent = card.name;
  document.getElementById("date").textContent = card.date;
  document.getElementById("stars").textContent = card.stars;
  document.getElementById("writtenReview").textContent = card.review;
}

document
  .querySelector(".request-right")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const date = event.target.date.value;

    console.log("Form Submitted");
    console.log("Name:", name);
    console.log("Phone Number:", phone);
    console.log("Date:", date);
  });

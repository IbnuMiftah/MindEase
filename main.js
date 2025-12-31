// Main JavaScript file - handles all interactive features

// Hamburger menu - shows/hides mobile navigation menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarLists = document.querySelector(".navbar-lists");
const navbarBtns = document.querySelector(".navbar-btns");

// When hamburger menu is clicked, show or hide the navigation
// Toggles the "active" class on both lists and buttons to trigger CSS transitions
hamburgerMenu.addEventListener("click", () => {
  navbarLists.classList.toggle("active");
  navbarBtns.classList.toggle("active");
});

// Array of review objects containing client testimonials
// Each object holds the photo path, name, date, star rating, and review text
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
      "The therapy sessions have helped me overcome the emotional struggles I've faced for years. The strategies I learned, especially through CBT, have been incredibly effective in shifting my mindset. I now feel more resilient and equipped to handle challenges of life.",
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

// Keep track of which review is currently showing (starts at first one)
let currentIndex = 0;

// Function to change which review is displayed
// direction: string - "left" or "right" to navigate to the previous or next review respectively
function changeCard(direction) {
  // Move to next review if going right, or previous review if going left
  if (direction === "right") {
    // Modulo operator (%) ensures the index wraps around to 0 when it reaches the end
    currentIndex = (currentIndex + 1) % cards.length;
  } else if (direction === "left") {
    // Adding cards.length before modulo handles negative numbers correctly, wrapping to the last item
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  }

  // Get the current review data
  const card = cards[currentIndex];

  // Update the page to show the new review
  document.getElementById("photo").src = card.photo;
  document.getElementById("name").textContent = card.name;
  document.getElementById("date").textContent = card.date;
  document.getElementById("stars").textContent = card.stars;
  document.getElementById("writtenReview").textContent = card.review;
}

// (Old form handler removed - moved to DOMContentLoaded)

// --- Signup Modal Functionality ---

// Using DOMContentLoaded to ensure elements exist before we try to select them
// This prevents errors if script is loaded before the modal HTML
document.addEventListener("DOMContentLoaded", () => {
  // Get the modal elements
  const modal = document.getElementById("signupModal");
  // Select all signup buttons (desktop/mobile) AND any 'Get Appointment' buttons
  const signupBtns = document.querySelectorAll(".signup-btn, .signup-trigger");
  const closeBtn = document.querySelector(".close-btn");
  const signupForm = document.getElementById("signupForm");

  // New elements for visual success message
  const formContainer = document.getElementById("signupFormContainer");
  const successMessage = document.getElementById("signupSuccess");

  // Safety check to ensure elements exist (prevents errors on pages without modal)
  if (!modal || !closeBtn || !signupForm || !formContainer || !successMessage)
    return;

  // Open modal when any 'Sign Up' button is clicked
  signupBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Reset logic: Always show form and hide success message when opening
      formContainer.style.display = "block";
      successMessage.style.display = "none";
      signupForm.reset();

      modal.style.display = "flex"; // Show the modal using Flexbox to center
    });
  });

  // Close modal when 'X' is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal if user clicks outside the modal content (on the overlay)
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Handle Signup Form Submission
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop page reload

    // Get values (for potential future use)
    const fullname = event.target.fullname.value;
    const age = event.target.age.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirm_password.value;

    // Get Error Message Element
    const errorDisplay = document.getElementById("signupError");

    // Reset Error
    if (errorDisplay) {
      errorDisplay.style.display = "none";
      errorDisplay.textContent = "";
    }

    // 1. Phone Number Validation
    // Regex: Only digits, length 10-15
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
      if (errorDisplay) {
        errorDisplay.textContent =
          "Invalid Phone Number. Please enter 10-15 digits only.";
        errorDisplay.style.display = "block";
      } else {
        alert("Invalid Phone Number. Please enter 10-15 digits only.");
      }
      return;
    }

    // 2. Validate Passwords match
    if (password !== confirmPassword) {
      if (errorDisplay) {
        errorDisplay.textContent = "Passwords do not match!";
        errorDisplay.style.display = "block";
      } else {
        alert("Passwords do not match!");
      }
      return;
    }

    // Simulate registration success
    console.log("Registration Details:", {
      fullname,
      age,
      email,
      phone,
      password,
      confirmPassword,
    });

    // Hide the form and show the success message
    formContainer.style.display = "none";
    successMessage.style.display = "flex";

    // Optional: Close modal automatically after a few seconds
    // setTimeout(() => {
    //   modal.style.display = "none";
    // }, 3000);
  });

  // --- Login Modal Functionality ---

  const loginModal = document.getElementById("loginModal");
  const loginBtns = document.querySelectorAll(".login-btn");
  const loginCloseBtn = document.querySelector(".login-close");
  const loginForm = document.getElementById("loginForm");
  const loginFormContainer = document.getElementById("loginFormContainer");
  const loginSuccess = document.getElementById("loginSuccess");

  // Safety check for login elements
  if (
    loginModal &&
    loginCloseBtn &&
    loginForm &&
    loginFormContainer &&
    loginSuccess
  ) {
    // Open login modal
    loginBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        loginFormContainer.style.display = "block";
        loginSuccess.style.display = "none";
        loginForm.reset();
        loginModal.style.display = "flex";
      });
    });

    // Close login modal
    loginCloseBtn.addEventListener("click", () => {
      loginModal.style.display = "none";
    });

    // Close on outside click
    window.addEventListener("click", (event) => {
      if (event.target === loginModal) {
        loginModal.style.display = "none";
      }
    });

    // Handle Login Submit
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const identifier = event.target.email.value;
      const password = event.target.password.value;
      console.log("Login Attempt:", { identifier, password });

      loginFormContainer.style.display = "none";
      loginSuccess.style.display = "flex";
    });
  }

  // --- Request Call Back Form Functionality ---
  const requestForm = document.getElementById("requestForm");
  const requestFormContainer = document.getElementById("requestFormContainer");
  const requestSuccess = document.getElementById("requestSuccess");

  if (requestForm && requestFormContainer && requestSuccess) {
    requestForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = event.target.name.value;
      const phone = event.target.phone.value;
      const date = event.target.date.value;

      console.log("Callback Request:", { name, phone, date });

      requestFormContainer.style.display = "none";
      requestSuccess.style.display = "block"; // Using block as it's a div, not flex container by default
    });
  }
});

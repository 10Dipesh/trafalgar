const $nextButton = document.getElementById("nextBtn");
const $prevButton = document.getElementById("prevBtn");

const $testimonial = document.querySelector(".testimonial");
const $customerName = document.querySelector(".customer__name");
const $customerTitle = document.querySelector(".customer__title");
const $testimonialText = document.querySelector(".testimonial__text");
const $profilePictureContainer = document.querySelector(
  ".customer__photo_container"
);
const $dotsContainer = document.querySelector(".dots");

const testimonials = [
  {
    customerName: "Bella Hadid",
    customerTitle: "Project Manager",
    customerTestimonial: `"This patient engagement app is amazing! It reminds me to take my medication, tracks my appointments, and allows me to communicate with my healthcare provider. It has put me in control of my health."`,
    profileImageUrl:
      "https://th.bing.com/th/id/OIP.O3VDrDNCrSZISINpOCp4BQHaKX?pid=ImgDet&w=500&h=700&rs=1",
  },
  {
    customerName: "Bea Downey",
    customerTitle: "Account Executive",
    customerTestimonial: `"I recommend this patient engagement app to my patients. It's user-friendly and helps them stay engaged in their care and manage their chronic conditions."`,
    profileImageUrl:
      "https://i.pinimg.com/originals/77/71/68/7771683223d86b237a3304d6f32828b9.jpg",
  },
  {
    customerName: "John Musley",
    customerTitle: "Software Engineer",
    customerTestimonial: `"This app is a game-changer! It keeps everything in one place and accessible from my phone. It has reduced my stress levels and helped me feel more organized."`,
    profileImageUrl:
      "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/34217-MLS-Fabian-Ekker-003flin.jpg",
  },
];

let currentTestimonialIndex = 0;

const setTestimonial = ({
  customerName,
  customerTitle,
  customerTestimonial,
  profileImageUrl,
}) => {
  $customerName.innerText = customerName;
  $customerTitle.innerHTML = customerTitle;
  $testimonialText.innerHTML = customerTestimonial;
  $profilePictureContainer.style.backgroundImage = `url(${profileImageUrl})`;
};

const onCarouselButtonClick = (type) => {
  if (type !== "next" && type !== "prev") return;

  $testimonial.classList.remove("show");

  if (type === "next") {
    currentTestimonialIndex++;
    if (currentTestimonialIndex >= testimonials.length)
      currentTestimonialIndex = 0;
  }

  if (type === "prev") {
    currentTestimonialIndex--;
    if (currentTestimonialIndex < 0)
      currentTestimonialIndex = testimonials.length - 1;
  }

  setAciveControlDot();

  setTimeout(() => {
    setTestimonial(testimonials[currentTestimonialIndex]);
    $testimonial.classList.add("show");
  }, 1000);
};

const createControlDots = () => {
  testimonials.forEach((_, index) => {
    const dot = document.createElement("div");

    if (index === currentTestimonialIndex) dot.classList.add("active");
    dot.classList.add("dot");
    $dotsContainer.appendChild(dot);
  });
};

const setAciveControlDot = () => {
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot, index) => {
    if (index === currentTestimonialIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

$nextButton.addEventListener("click", () => onCarouselButtonClick("next"));
$prevButton.addEventListener("click", () => onCarouselButtonClick("prev"));
setTestimonial(testimonials[0]);
createControlDots();

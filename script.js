document.addEventListener("DOMContentLoaded", () => {
  const titleText = "Welcome to My Website";
  const titleEl = document.getElementById("hero-title");
  const subtextEl = document.getElementById("hero-subtext");

  let i = 0;

  function typeWriter() {
    if (i < titleText.length) {
      titleEl.textContent += titleText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      // Once typing is done, reveal subtext
      setTimeout(() => {
        subtextEl.classList.add("visible");
      }, 500);
    }
  }

  typeWriter();
});


//Updated JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const galleryTitleText = "Photo Gallery";
  const galleryTitleEl = document.getElementById("gallery-title");
  const gallery = document.getElementById("gallery");
  const scrollLeftBtn = document.getElementById("scrollLeft");
  const scrollRightBtn = document.getElementById("scrollRight");
  let j = 0;

  // Typewriter effect
  function typeGalleryTitle() {
    if (j < galleryTitleText.length) {
      galleryTitleEl.textContent += galleryTitleText.charAt(j);
      j++;
      setTimeout(typeGalleryTitle, 100);
    } else {
      revealGalleryImages();
    }
  }

  // Reveal images
  function revealGalleryImages() {
    const images = document.querySelectorAll("#gallery img");
    images.forEach((img, index) => {
      setTimeout(() => {
        img.style.opacity = "1";
        img.style.transform = "translateY(0)";
      }, index * 200);
    });
  }

  // Scroll buttons
  scrollLeftBtn.addEventListener("click", () => {
    gallery.scrollBy({ left: -400, behavior: "smooth" });
  });

  scrollRightBtn.addEventListener("click", () => {
    gallery.scrollBy({ left: 400, behavior: "smooth" });
  });

  // Trigger when section visible
  const gallerySection = document.getElementById("photos");
  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        typeGalleryTitle();
        observer.disconnect();
      }
    },
    { threshold: 0.4 }
  );
  observer.observe(gallerySection);
});


document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  observer.observe(aboutSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const videoSection = document.querySelector(".video-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        videoSection.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  observer.observe(videoSection);
});

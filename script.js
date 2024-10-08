//Page Links
const pageLinks = document.querySelector(".page-links");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
pageLinks.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
  // console.log(entries);
  pageLinks.classList.toggle("sticking", !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher);

//Top Section
// const topSection = document.querySelector("#top-section");

// scrollWatcher.setAttribute("data-scroll-watcher", "");
// topSection.before(scrollWatcher);

// const topSectionObserver = new IntersectionObserver((entries) => {
//   console.log(entries);
//   topSection.classList.toggle(
//     "top-section-sticking",
//     !entries[0].isIntersecting
//   );
// });

// topSectionObserver.before(scrollWatcher);

// Hamburger
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("page-links-hamburger");
  const pageLinks = document.getElementsByClassName("page-links");
  const mainContent = document.getElementsByClassName("main-content");

  // if (!hamburger) {
  //   console.error("Elements with ID 'page-links-hamburger' not found");
  //   return;
  // }
  // if (!pageLinks) {
  //   console.error("Elements with class 'page-links' not found");
  //   return;
  // }
  hamburger.addEventListener("click", function (clickEvent) {
    var displayClass = pageLinks[0].classList.contains("hide");
    // console.log("pageLinks", pageLinks);
    // console.log(displayClass);
    if (displayClass === true) {
      pageLinks[0].classList.remove("hide");
      document.body.style.overflow = "hidden";
    } else {
      pageLinks[0].classList.add("hide");
      document.body.style.overflow = "initial";
    }
  });
});

// iOS click
document.addEventListener("DOMContentLoaded", function () {
  // "querySelector" only looks for the first instance so it will not work with multiple instances of that class
  const iosClick = document.querySelectorAll(".ios-click");

  // Creates an array of  all classes with "ios-click" based off of "querySelectorAll"
  iosClick.forEach((iosClick) => {
    const dropDown = iosClick.querySelector(".dropdown"); // Creates a DOM element for elements with the class ".dropdown-pageLinks"
    var arrow = iosClick.querySelector(".arrow-down");

    // code performed once click event is triggered
    function iosClickEvent() {
      var displayClassPageLinks = window.getComputedStyle(dropDown).display;

      if (displayClassPageLinks === "none") {
        console.log("display content"); // for debugging
        dropDown.classList.remove("displayNone");
        dropDown.classList.add("displayFlex");
        if (arrow) {
          arrow.classList.remove("rotate-arrow");
          arrow.classList.add("rotate46");
        }
      } else {
        console.log("hide content"); // for debugging
        dropDown.classList.remove("displayFlex");
        dropDown.classList.add("displayNone");
        if (arrow) {
          arrow.offsetWidth;
          arrow.classList.remove("rotate46");
          arrow.classList.add("rotate-arrow");
        }
      }
    }
    if (!iosClick.hasListenerattached) {
      iosClick.addEventListener("click", iosClickEvent);
    }
  });
});

// For some reason this is affecting the sticking class from being toggled/added
// Check Display Size to Remove/Add buttonHover
document.addEventListener("DOMContentLoaded", function () {
  const buttonType = document.querySelectorAll(".button-type");
  const phoneWidth = 480;

  function editClasses() {
    buttonType.forEach((buttonType) => {
      var width = document.documentElement.clientWidth;
      if (width > phoneWidth) {
        buttonType.classList.add("buttonHover");
      } else {
        buttonType.classList.remove("buttonHover");
      }
    });
  }

  editClasses(); // calls the function
  window.addEventListener("resize", editClasses); //if window is resized without refreshing page
});

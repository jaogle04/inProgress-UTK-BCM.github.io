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
  const dropDownPageLinks = document.querySelector(".dropdown-pageLinks");
  const iosClick = document.querySelector(".ios-click");

  iosClick.addEventListener("click", function (iosClickEvent) {
    var displayClassPageLinks = window.getComputedStyle(
      ".dropdown-pageLinks"
    ).display;
    return displayClassPageLinks;
    if (displayClassPageLinks === "none") {
    } else {
    }
  });
});

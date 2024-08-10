//Page Links
const pageLinks = document.querySelector(".page-links");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
pageLinks.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
  console.log(entries);
  pageLinks.classList.toggle("sticking", !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher);

//Top Section
const topSection = document.querySelector("#top-section");

new IntersectionObserver((entries) => {
  console.log(entries);
  topSection.classList.toggle(
    "top-section-sticking",
    !entries[0].isIntersecting
  );
});

// Hamburger
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("page-links-hamburger");
  const pageLinks = document.getElementsByClassName("page-links");
  if (!hamburger) {
    console.error("Elements with ID 'page-links-hamburger' not found");
    return;
  }
  if (!pageLinks) {
    console.error("Elements with class 'page-links' not found");
    return;
  }
  hamburger.addEventListener("click", function (clickEvent) {
    var displayClass = pageLinks[0].classList.contains("hide");
    console.log("pageLinks", pageLinks);
    console.log(displayClass);
    if (displayClass === true) {
      pageLinks[0].classList.remove("hide");
    } else {
      pageLinks[0].classList.add("hide");
    }
  });
});

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

alert(test);

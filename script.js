const linkMenu = document.querySelectorAll('.navegacao a[href^="#"]');
console.log(linkMenu);

function linkSuave(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelectorAll(href);
  const topo = section.offsetTop;

  window.scrollTo({
    top: topo,
    behavior: "smooth",
  });
}

linkMenu.forEach((item) => {
  item.addEventListener("click", linkSuave);
});

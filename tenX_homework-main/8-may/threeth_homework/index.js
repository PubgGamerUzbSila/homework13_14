const btn = document.querySelectorAll(".acardion_item");

for (let i = 0; i < btn.length; i++) {
  btn[i].children[0].addEventListener("click", (even) => {
    for (let close of btn) {
      0;
      close.style.height = "90px";
      close.children[0].classList.remove("after");
    }
    btn[i].children[0].classList.add("after");
    btn[i].style.height = "340px";
  });

  btn[i].children[0].addEventListener("dblclick", (even) => {
    btn[i].children[0].classList.remove("after");
    btn[i].style.height = "90px";
  });
}

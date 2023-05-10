const allbutton = document.querySelectorAll(".box_scroll_ul button");
const number = allbutton.length;
const allimg = document.querySelectorAll(".box_push img");
const box_push = document.querySelector(".box_push");
const btn_left = document.querySelector(".box_button_left");
const btn_right = document.querySelector(".box_button_right");
const scroll_ul = document.querySelector(".box_scroll_ul");
const scroll_box = document.querySelector(".box_img");
let num = 0;
let oldItem = 0;

Array.from(Array(number).keys()).map((item) => {
  allbutton[item].addEventListener("click", (even) => {
    push(item);
  });
});

function push(item) {
  box_push.style.transform = `translateY(${-404 * item + "px"})`;
  for (let i = 0; i < allbutton.length; i++) {
    allbutton[i].id = "";
  }
  allbutton[item].id = "blue_border";
  num = item;
  if (item < number && item > 0) {
    if (item - oldItem > 3) {
      scroll_ul.style.transform = `translateX(${-80 * (item - 3) + "px"})`;
      oldItem = item - 3;
    }

    if (item - oldItem < 0) {
      scroll_ul.style.transform = `translateX(${-80 * item + "px"})`;
      oldItem = item;
    }
  }

  if (item == 0) {
    scroll_ul.style.transform = `translateX(${0 + "px"})`;
    oldItem = 0;
  }
}

scroll_ul.style.width = allbutton.length * 80 + 10 + "px";

btn_left.addEventListener("click", (even) => {
  if (num > 0) {
    push(num - 1);
  }
});

btn_right.addEventListener("click", (even) => {
  if (num < allbutton.length - 1) {
    push(num + 1);
  }
});

scroll_box.addEventListener("mousemove", (even) => {
  allimg[num].style.transform = `translate(${
    (even.offsetX - 200) / -4 + "%"
  }, ${(even.offsetY - 200) / -4 + "%"}) scale(2)`;
});

scroll_box.addEventListener("mouseout", (even) => {
  allimg[num].style.transform = `translate(${0 + "px"}, ${0 + "px"}) scale(1)`;
});

window.addEventListener("keyup", (even) => {
  if (even.key == "ArrowRight")
    if (num < allbutton.length - 1) {
      push(num + 1);
    }
  if (even.key == "ArrowLeft")
    if (num > 0) {
      push(num - 1);
    }
});

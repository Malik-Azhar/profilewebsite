const menu = [
  {
    id: 1,
    category: "design",
    img: "image/project1.jpg", 
  },
  {
    id: 2,
    category: "branding",
    img: "image/project2.jpg", 
  },
  {
    id: 3,
    category: "photography",
    img: "image/project3.jpg", 
  },
  {
    id: 4,
    category: "branding",
    img: "image/project4.jpeg", 
  },
  {
    id: 5,
    category: "photography",
    img: "image/project5.jpeg", 
  },
  {
    id: 6,
    category: "design",
    img: "image/project6.jpeg", 
  },
]

const menuBar = document.querySelector("header #menu-bar");
const navBar = document.querySelector("header .navbar");

menuBar.onclick = () => {
  navBar.classList.add("active");
}
const faTimes = document.querySelector("header .navbar .fa-times");

faTimes.onclick = () =>{
  navBar.classList.remove("active");
}
window.onscroll = () => {
  navBar.classList.remove("active");
}

const featuredContainer = document.querySelector(".projects .featured");
const projectWrapper = document.querySelector(".projects .wrapper");

window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<div class="card">
    <img src="${item.img}">
    <div class="desc">
      <a href="#">project link</a>
    </div>
  </div>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  projectWrapper.innerHTML = displayMenu;

}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<a href="javascript: void(0)" data-filter="${category}">${category}</a>`;
    })
    .join("");

  featuredContainer.innerHTML = categoryBtns;
  const featuredLinks = document.querySelectorAll(".projects .featured a");
  console.log(featuredLinks);

  featuredLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.filter;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

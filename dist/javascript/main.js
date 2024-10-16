"use strict";
// Start Humbrgar Action
const Humbrgar = document.querySelector(".humbergar");
// get the drop menu
const dropMenu = document.querySelector(".drop-menu");
// get the overlay
const overlay = document.querySelector(".overlay");
Humbrgar === null || Humbrgar === void 0
  ? void 0
  : Humbrgar.addEventListener("click", () => {
      if (dropMenu) {
        dropMenu.classList.toggle("show");
      }
      if (overlay) {
        overlay.classList.toggle("overlayShow");
      }
      if (Humbrgar) {
        Humbrgar.classList.toggle("closeImg");
      }
    });
// End Humbrgar Action
//  ========================================= Start Features ==================================
// identify the container of boxes to add the boxes using the function
let featuresContainer = document.getElementById("boxes-container");
// Function to create the features boxes
function createBox(btn) {
  let img = document.createElement("img");
  img.src = btn.imgSrc;
  img.alt = "imgS";
  let boxTitle = document.createElement("h3");
  boxTitle.textContent = btn.title;
  let boxDescription = document.createElement("p");
  boxDescription.textContent = btn.description;
  let mainBbox = document.createElement("div");
  mainBbox.setAttribute("data-aos", "flip-left");
  mainBbox === null || mainBbox === void 0 ? void 0 : mainBbox.append(img);
  mainBbox === null || mainBbox === void 0 ? void 0 : mainBbox.append(boxTitle);
  mainBbox === null || mainBbox === void 0
    ? void 0
    : mainBbox.append(boxDescription);
  mainBbox.classList.add(".main-box");
  featuresContainer === null || featuresContainer === void 0
    ? void 0
    : featuresContainer.append(mainBbox);
}
//Add the Boxes
createBox({
  imgSrc: "./src/images/icon-online.svg",
  title: "Online Banking",
  description: `   Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.`,
});
createBox({
  imgSrc: "./src/images/icon-budgeting.svg",
  title: `Simple Budgeting`,
  description: ` See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.`,
});
createBox({
  imgSrc: "./src/images/icon-onboarding.svg",
  title: "Fast Onboarding",
  description: ` We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.`,
});
createBox({
  imgSrc: "./src/images/icon-api.svg",
  title: "Open API",
  description: ` Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.`,
});
//define the articles container
const articlesContainer = document.querySelector(".Articles-container");
function createArticle(params) {
  //create the articleBox
  const articleBox = document.createElement("div");
  articleBox.classList.add("articleBox");
  //create the ImgArticle
  const imgArticle = document.createElement("img");
  imgArticle.src = params.imgSrc;
  imgArticle.alt = "ImgS";
  // create the Author Name
  const authorName = document.createElement("span");
  authorName.textContent = params.AuthorName;
  // create titleArticle
  const titleArticle = document.createElement("h4");
  titleArticle.textContent = params.title;
  // create descriptionArticle
  const descriptionArticle = document.createElement("p");
  descriptionArticle.textContent = params.description;
  // add the all children to the articleBox
  articleBox.append(imgArticle);
  articleBox.append(authorName);
  articleBox.append(titleArticle);
  articleBox.append(descriptionArticle);
  articleBox.setAttribute("data-aos", "zoom-in");
  // add the article box to the ArticleContainer
  articlesContainer === null || articlesContainer === void 0
    ? void 0
    : articlesContainer.append(articleBox);
}
// Start adding the article using the function
createArticle({
  imgSrc: "./src/images/image-currency.jpg",
  title: " Receive money in any currency with no fees",
  AuthorName: "By Claire Robinson",
  description: ` By Claire Robinson
  Receive money in any currency with no fees
  The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …`,
});
createArticle({
  imgSrc: "./src/images/image-restaurant.jpg",
  title: "  Treat yourself without worrying about money",
  AuthorName: " By Wilson Hutton",
  description: `  Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …`,
});
createArticle({
  imgSrc: "./src/images/image-plane.jpg",
  title: " Take your Easybank card wherever you go",
  AuthorName: "By Wilson Hutton",
  description: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …`,
});
createArticle({
  imgSrc: "./src/images/image-confetti.jpg",
  title: " Our invite-only Beta accounts are now live!",
  AuthorName: "By Claire Robinson",
  description: ` After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...`,
});
//  ========================================= End Articles Section ==================================
// Start footer
// change the bg for social icons when hover
const images = [...document.querySelectorAll(".sociles-icons img")];
function changeBgIcons(IconsSrc) {
  IconsSrc.forEach((img) => {
    img.onmouseover = (e) => {
      const newSrc = img.src.slice(0, img.src.lastIndexOf(".")) + "-hover.svg";
      e.target.src = newSrc;
    };
    img.onmouseleave = (e) => {
      const newSrc = img.src.slice(0, img.src.indexOf("-hover")) + ".svg";
      e.target.src = newSrc;
    };
  });
}
changeBgIcons(images);
// ENd footer
//# sourceMappingURL=main.js.map

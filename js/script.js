const welcome = () => {
   console.log("Szukam współgraczy do planszówek");
}

const togglePhoto = () => {
   const photos = document.querySelectorAll(".js-article__photo");

   photos.forEach(photo => {
      photo.classList.toggle("article__photo--hidden");
   });
};

const init = () => {
   const button = document.querySelector(".js-article__button");
   button.addEventListener("click", togglePhoto);

   welcome();
};

init();
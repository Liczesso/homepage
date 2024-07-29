console.log("Szukam współgraczy do planszówek");

let button = document.querySelector(".article__button");

let photo = document.querySelector(".photo")



button.addEventListener("click", () => {
   if (photo.innerHTML === '<img height="250" src="https://i.imgur.com/yygEUAd.jpeg" alt="dwa kwitnące kaktusy Echinopsis hybrid. Duże kwiaty, jeden różowy z żółtym środkiem, drugi pomarańczowy przechodzący w róż">') {
      photo.innerHTML = '<img height="250" src="https://i.imgur.com/Ih3NnDn.jpeg" alt = "kwitnące kaktusy z rodzaju Lobivia na białym tle. Kilkanaście kwiatów, w kolorach: żółty, czerwony, różowy">';
   } else {
      photo.innerHTML = '<img height="250" src="https://i.imgur.com/yygEUAd.jpeg" alt = "dwa kwitnące kaktusy Echinopsis hybrid. Duże kwiaty, jeden różowy z żółtym środkiem, drugi pomarańczowy przechodzący w róż">';
   }
});

console.log(button);
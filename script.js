var family = ["download.jpg", "download (2).jpg","download (1).jpg","download(2)","images.jpg",];
var names = ["", "Son: Jishnu", "Mother: Dhivya Raghuraman", "Grandfather: Raghuraman Nagaraj", "Grandmother: Kala Raghuraman"]
var i=0;
function nextslide() {
    if(i == 5)
    { 
      i=0;
  }
document.getElementById("images").src = family[i];
document.getElementById("name").textContent = names[i];
i++
}
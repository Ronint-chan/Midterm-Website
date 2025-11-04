// Mobile bar section
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

// Product Details

var MainImg = document.getElementById("MainImg");
var smalling = document.getElementById("small-img");

smalling[0].onclick = function(){
  MainImg.src = smalling[0].src;
}
smalling[1].onclick = function(){
  MainImg.src = smalling[1].src;
}
smalling[2].onclick = function(){
  MainImg.src = smalling[2].src;
}
smalling[3].onclick = function(){
  MainImg.src = smalling[3].src;
}

// Searching function



// const search = () =>{
//   const searchbox = document.getElementById("search-item").ariaValueMax.toUpperCase();
//   const storeitems = document.getElementById("product1")
//   const product = document.querySelectorAll(".pro")
//   const pname = storeitems.getElementsByTagName("h5")
//   const ptype = document.getElementsByTagName("span")

//   for(var i=0; i < pname.length; i++){
//     let match = product[i].getElementsByTagName('h5')[0];

//     if(match){
//       let textvalue = match.textContent || match.innerHTML

//       if(textvalue.toUpperCase().indexOf(searchbox) > -1){
//         product[i].style.display = "";
//       } else {
//         product[i].style.display = "none";
//       }
//     }
//   }
// }
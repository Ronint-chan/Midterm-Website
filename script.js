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

const products = document.querySelectorAll(".pro, .pro.block");
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q")?.toUpperCase() || "";

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = query; // แสดงคำค้นหาใน input

  filterProducts(query);

  // สำหรับ live search ถ้าอยากให้กด Enter หรือปุ่มเท่านั้น
  const searchForm = document.querySelector(".search-bar");
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = searchInput.value.toUpperCase();
    filterProducts(inputVal);
  });
});

function filterProducts(input) {
  const products = document.querySelectorAll(".pro");
  let found = false;

  products.forEach(product => {
    const name = product.querySelector("h5")?.textContent.toUpperCase() || "";
    const category = product.querySelector(".description span")?.textContent.toUpperCase() || "";
    const combined = name + " " + category;

    if (combined.indexOf(input) > -1) {
      product.style.display = "";
      found = true;
    } else {
      product.style.display = "none";
    }
  });

  // ข้อความถ้าไม่เจอสินค้า
  const container = document.querySelector(".pro-container");
  const oldMsg = container.querySelector(".no-results");
  if (oldMsg) oldMsg.remove();

  if (!found && input !== "") {
    const msg = document.createElement("div");
    msg.className = "no-results";
    msg.textContent = `ไม่พบสินค้าที่ตรงกับคำค้นหา "${input}"`;
    msg.style.fontSize = "1.2em";
    msg.style.marginTop = "2em";
    msg.style.textAlign = "center";
    msg.style.color = "#666";
    container.appendChild(msg);
  }
}



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
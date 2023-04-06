
// Product
const baoquan = document.querySelector(".baoquan1")
const chitiet = document.querySelector(".chitiet1")
if(baoquan){
    baoquan.addEventListener("click" ,function(){
        document.querySelector(".product-content-content-chitiet").style.dislay = "none"
        document.querySelector(".product-content-content-baoquan").style.dislay = "block"
    })
}

if (chitiet){
    chitiet.addEventListener("click", function(){
        document.querySelector("product-content-content-chitiet").style.dislay="block"
        document.querySelector("product-content-content-baoquan").style.dislay="none"
    })
}


/*
const bigImg = document.querySelector(".product-content-left-big-img")
const smalImg = document.querySelectorAll(".product-constent-left-smalll-img img")
smalImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click", function(){
        bigImg.src = imgItem.src
    })
})
*/
 
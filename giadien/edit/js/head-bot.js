const header = document.querySelector("header")
    window.addEventListener("scroll", function(){
        x = window.pageYOffset
        if(x > 0){
            header.classList.add("sticky")
        }
        else {
            header.classList.remove("sticky")
        }
})


// imtem
const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu, index){
    menu.addEventListener("click" ,function(){ //kick vao se hien thi blockk
        menu.classList.toggle("block") // hien thi block
    })
})
// Product
const bigImg = document.querySelector(".product-content-left-big-img")
const smalImg = document.querySelectorAll(".product-constent-left-smalll-img img")
smalImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click", function(){
        bigImg.src = imgItem.src
    })
})
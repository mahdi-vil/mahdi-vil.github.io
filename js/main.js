

// strat-search-sm&lg
let search_nav = document.querySelector(".search_js");
let search_navA = document.querySelector(".search_jsA");
let search_type = document.querySelector(".searchtype_js");
let back_nav = document.querySelectorAll(".end_nav");

search_nav.addEventListener("click",function(){
    search_type.classList.remove("hidden")
    
});
search_navA.addEventListener("click",function(){
    search_type.classList.remove("hidden")
    
});
back_nav[1].addEventListener("click",function(){
    search_type.classList.add("hidden")
    
});
// end-search-sm&lg

// strat-list-hamberger-sm
let list_sm = document.querySelector(".list_js");
let open_list = document.querySelector(".open_list_js")
back_nav[0].addEventListener("click",function(){
    list_sm.classList.add("hidden")
    
});
open_list.addEventListener("click",function(){
    list_sm.classList.remove("hidden")
    
});

// end-list-hamberger-sm

// strat-user-sm&lg
let docmeh_user = document.querySelectorAll(".js_nav");
let ul_js_nav = document.querySelector(".ul_js_nav");
docmeh_user[0].addEventListener("click",function(){
    ul_js_nav.classList.toggle("hidden")
    
});
docmeh_user[2].addEventListener("click",function(){
    ul_js_nav.classList.toggle("hidden")
    
});
docmeh_user[3].addEventListener("click",function(){
    ul_js_nav.classList.toggle("hidden")
    
});
// end-user-sm&lg
// start-slid-img-zir-nav

    let left = document.querySelector(".left-dokmeh");
    let right = document.querySelector(".right-dokmeh");
    let img_slide = document.querySelectorAll(".img-slide");
    let z_img = document.querySelectorAll(".z-div")
    let img_source = ["images/1.jpeg","images/2.jpeg","images/3.jpeg","images/4.jpeg","images/5.jpeg"];
    let counter = 0;
    right.addEventListener("click",function(){
        counter++;
        if(counter>4){
            counter=0
        }
        // z_img[4].setAttribute("class",`z-${counter}`)
        // img_slide[4].setAttribute("class",`-ml-4`)
        img_slide[2].setAttribute("src",img_source[counter])
    });
    left.addEventListener("click",function(){
        counter--;
        if(counter<0){
            counter=4
        }
        //  z_img[4].setAttribute("class",`z-${counter}`)
        // img_slide[4].setAttribute("class",`ml-4`)
        img_slide[2].setAttribute("src",img_source[counter])
    });



// end-slid-img-zir-nav
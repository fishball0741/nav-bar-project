// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class.

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // classList function, check the list name
    // console.log(links.classList);

    // contains function check the list name is true or false
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));

    // add and remove function, for closing and opening the nav bar.
    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links");
    // }
    // else{
    //     links.classList.add("show-links");
    // }

    // toggle function = combined as add and remove function.
    links.classList.toggle("show-links");


})
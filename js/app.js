//Using a fragment to enhance the page's performance.
const frag = document.createDocumentFragment();
//Selecting all of my sections.
const sections = document.querySelectorAll("section");
//Selecting my Unordered list through the navbar ID.
const navBar= document.getElementById("navbar__list");
/**
 * End Global Variables
*/
//Looping around my sections to create the required amount of sections needed.
for (const section of sections){
  let navList = document.createElement("li"); // Adding a list for each section.
  let navLink = document.createElement("a"); // Creating an Anchor to refer to each section.
  //alert(section.getAttribute("data-nav")); //(4-data nav sections are available).
  let myText = section.getAttribute("data-nav");//targetting my data-navs.
  let myTextNode = document.createTextNode(myText); //creating a textNode/textContent.
  //navLink.textContent= myText;      //appending textNode to my Anchor.
  navLink.appendChild(myTextNode);    //appending textNode to my Anchor in a more professional way.
  navLink.classList.add("menu__link"); //adding the css style to my navigation bar.
  navList.appendChild(navLink);       //appending anchor to the list.
  //navBar.appendChild(navList);        //appending the list to the ul navbar list.  //Isn't actually needed because of the fragment.
  frag.appendChild(navList);          //appending all my list properties to the virtual fragment to lessen the reflow and repain cycles to one.
 //Scrolling to anchor function.
  navLink.addEventListener("click", function scrollToAnchor(){
    section.scrollIntoView({behavior: "smooth"});
  })
};
  navBar.appendChild(frag);   //appending my virtual fragment to my navbar list.
  window.addEventListener("scroll", function(){
    for (const bound of sections) {
      const react = bound.getBoundingClientRect(); //saving my info about the dom size into a variable.
      //alert(bound.getAttribute("data-nav") + react.top)  //checking the top boundaries using alert.
      //console.log(bound.getAttribute("data-nav")+ react.top)  //checking the top boundaries using the console.
      //The Active Section.
      if (react.top >= 0 && react.top <300){
      //  const myNav = bound.getAttribute("data-nav");
        //alert(myNav);//Checking which section im currently looking at.
        for(const activClass of sections){
          activClass.classList.remove('your-active-class'); //removing the active class from the currently active section.
        }
          bound.classList.add('your-active-class');
    }
  }
});

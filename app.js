const header = document.getElementById("header");
const homeNav = document.getElementById("homeNav");
const aboutNav = document.getElementById("aboutNav");
const interestsNav = document.getElementById("interestsNav");
const infoNav = document.getElementById("infoNav")
const pageHeader = document.getElementById("pageHeader");
const contentSection = document.getElementById("content");


homeNav.addEventListener("click", renderHomePage);
aboutNav.addEventListener("click",renderAbout);
interestsNav.addEventListener("click", renderInterests);
infoNav.addEventListener("click", renderInfo);
header.innerHTML = "<h1>Above and Beyond, Second website;</h1>"
function renderHomePage() {
    pageHeader.innerHTML = "<h2>Website Practice</h2>";
    contentSection.innerHTML = `
        <p id="paragraphOne">
            This is an example text inserted to show a degree of proficiency in navigating DOM, CSS, HTML and Javascript to create a functioning webpage.
        </p>
   `;
}
function renderAbout() {
    pageHeader.innerHTML = "<h2> About, life and chronology</h2>";
    contentSection.innerHTML = `
        <p>
            Tom Pringle was born in Liverpool on 31st March 1998
         </p>
    `;
}
function renderInterests(){
    pageHeader.innerHTML = "<h2> Interests</h2>";
    contentSection.innerHTML = `
         <p>
             Tom describes himself as a sporty person and enjoys football, climbing
            and cycling
         </p>
    `;
}
function renderInfo(){
    pageHeader.innerHTML = "<h2>Further Information</h2>";
    contentSection.innerHTML = `
        <p>
            Famous quotes include "parmesan and mozzarella are good but they don't
            get anywhere near most kinds of French cheese."
         </p>
         
    `;
}
renderHomePage();

const newButton = document.createElement("button");
newButton.textContent = "Click me";
document.body.appendChild(newButton);

newButton.addEventListener('click', () => {
    const paragraph = document.getElementById("paragraphOne");
    paragraph.textContent = "why did you do that?";

});

const btn = document.getElementById("btn");
let randomNum = () => {
    return Math.floor(Math.random() * 256);
};
let changeColor = () => {
    let randomColor = `rgb(${randomNum()},
    ${randomNum()},${randomNum()})`;
    document.body.style.backgroundColor = 
    randomColor;
};
btn.addEventListener("click", changeColor);
window.addEventListener("load", changeColor);


  ////need reminder on use of ` within js function definition
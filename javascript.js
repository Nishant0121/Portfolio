
const mainMenu=document.querySelector('.mainMenu');
const closeMenu=document.querySelector('.closeMenu');
const openMenu=document.querySelector('.openMenu');


function showskills() {
    const skills="A Frontend Web Developer, Videographer, Sketch Artist";
    document.getElementById("displayskill").innerText=skills;
    let showskills=document.getElementById("showskills");
    showskills.style.display="none";
    let hideskills=document.getElementById("hideskills");
    hideskills.style.display="block";
}
function hideskills() {
    let hideskills=document.getElementById("displayskill");
    hideskills.style.display="none";
    let showskills=document.getElementById("showskills");
    showskills.style.display="block";
}
function show() {
    mainMenu.style.display='flex'
    mainMenu.style.top='0'
}
function close() {
    mainMenu.style.top='-100%'
}


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

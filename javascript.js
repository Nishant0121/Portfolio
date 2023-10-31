const nav = document.querySelector(".nav");

function changecolor() {
    nav.style.color= "blue";
}
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

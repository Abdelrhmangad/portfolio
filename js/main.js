// Start ASide menu Closing

const closeBtn = document.getElementById("closeBtn");
const asideMenu = document.getElementById('aside');
const dropMenu = document.getElementById('dropMenu');

asideMenu.style.transform = "translateX(" + asideMenu.offsetWidth + "px)";

function closeMenu() {
    asideMenu.style.transform = "translateX(" + asideMenu.offsetWidth + "px)";
};

function openMenu() {
    asideMenu.style.transform = "translateX(0px)";
}

dropMenu.addEventListener("click", function () {
    console.log("CLICKED")
    console.log("translateX(-" + asideMenu.offsetWidth + ")");
    asideMenu.style.transform = "translateX(-" + asideMenu.offsetWidth + ")";
})

// End  ASide menu Closing
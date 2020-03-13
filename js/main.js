// Start ASide menu Closing

const closeBtn = document.getElementById("closeBtn");
const asideMenu = document.getElementById('aside');
const dropMenu = document.getElementById('dropMenu');

console.log(asideMenu.offsetWidth);

function closeMenu(){
    asideMenu.style.transform = `translateX(${asideMenu.offsetWidth}px)`;
    console.log("Helo")
};

function openMenu(){
    asideMenu.style.transform = `translateX(0px)`;
}

// End  ASide menu Closing
const scrollToTopButton = document.getElementById('js-top');

const scrollFunc = () => {
    let y = window.scrollY;

    if (y > 0) {
        scrollToTopButton.className = "top-link show";
    }
    else {
        scrollToTopButton.className = "top-link hide";
    }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 10);
    }
};

scrollToTopButton.onclick = function (e) {
    e.preventDefault();
    scrollToTop();
}

var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex,colorCode) {  
    tabButtons.forEach(function(node){
            node.style.backgroundColor="";
            node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node) {
             node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;

    node.style.backgroundColor = "";
    node.style.color = "";
};

showPanel (0,'#F69F8E')
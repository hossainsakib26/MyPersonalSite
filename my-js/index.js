
function changeSidNav() {
    var selectedElement = document.getElementById('mobile-nav');
    var sideNavWidth = selectedElement.clientWidth;

    if (sideNavWidth > 0) {
        selectedElement.style.width = "0";
    }else {
        selectedElement.style.width = "65%";
    }
}

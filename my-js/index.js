function changeNav(){
    let naveKeeperEll = document.getElementById('side-nav-keeper');
    let mobileNavEll = document.getElementById('mobile-nav');
    const naveKeeper = naveKeeperEll.clientWidth;
    const mobileNav = mobileNavEll.clientWidth;
    console.log(naveKeeper, mobileNav);

    ((naveKeeper > 0) && (mobileNav > 0)) ? closeSideNav(naveKeeperEll, mobileNavEll) : openSideNav(naveKeeperEll, mobileNavEll);

}
function openSideNav(navKeeperEll, mobileNavEll){
    navKeeperEll.style.width = "100%";
    mobileNavEll.style.width = "65%";
}

function closeSideNav(navKeeperEll, mobileNavEll){
    navKeeperEll.style.width = "0";
    // navKeeperEll.style.right = "-1%";
    mobileNavEll.style.width = "0";
    // mobileNavEll.style.right = "-1%";
}

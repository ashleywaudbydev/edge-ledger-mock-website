//----------GOOGLE MAP FUNCTIONALITY------------\\
function initMap(){

    const loc = { lat: 53.782470, lng: -0.324820 };

    const map = new google.maps.Map(document.querySelector(".map"), {
        zoom: 14,
        center: loc
    });

    const marker = new google.maps.Marker({ position: loc, map: map});
}
window.initMap = initMap;

//----------SMOOTH SCROLLING FUNCTIONALITY----------\\
window.addEventListener("scroll", function(){
    if(window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else{
        document.querySelector("#navbar").style.opacity = 1;
    }
});
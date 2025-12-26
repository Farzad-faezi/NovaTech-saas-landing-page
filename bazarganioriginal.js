// Source - https://stackoverflow.com/a
// Posted by Rory O'Kane, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-18, License - CC BY-SA 3.0

document.addEventListener("DOMContentLoaded", function(event) {
  var temp = 0;

  function slider() {
    document.getElementById("pic1").style.display = 'none';
    document.getElementById("pic2").style.display = 'none';
    document.getElementById("pic3").style.display = 'none';
    if (temp == 0) {
      document.getElementById("pic1").style.display = 'block';
    } else if (temp == 1) {
      document.getElementById("pic2").style.display = 'block';
    } else if (temp == 2) {
      document.getElementById("pic3").style.display = 'block';
    }
    temp = (temp + 1) % 3;
    setTimeout(slider, 3000); // decreased delay for demo purposes
  }
  slider();
});
document.addEventListener("DOMContentLoaded", function(){
const slider = document.getElementById('slider');
const nextbtn = document.getElementById('nextbtn');
const prevbtn = document.getElementById('prevbtn');
if(!slider || !nextbtn || !prevbtn){
  console.error("ggg")
  return;
}
const scrollamount = 270;
nextbtn.addEventListener('click', () => {
  slider.scrollBy({
    left: -300,
    behavior:'smooth'
  });
});
prevbtn.addEventListener('click', () => {
  slider.scrollBy({
    left:300,
    behavior:'smooth'
  });
});
});

var s = 0;
var m = 0;
var h = 0;
function time(){
  s = s+1;
  document.getElementById('clock').innerHTML=h+":"+m+":"+s;
  if(s>59){
    m=m+1
    s=0;
  }
  if(m>59){
    h=h+1;
    m=0;
    s=0;
  }
  if(h>23){
    h=0;
  }
};
setInterval(time,1000);

 function myMap() {
	
    var myCenter = new google.maps.LatLng(35.700145, 51.337115);
     
    
        
      var mapCanvas = document.getElementById("map");

      var mapOptions = {
        center: myCenter, 
        zoom: 15,
        // mapTypeId: google.maps.MapTypeId.HYBRID
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      
      
    //INJA TAZE MAP MAN SAKHTE MISHE
    var map = new google.maps.Map(mapCanvas, mapOptions); 


    google.maps.event.addListener(map,'click',function() {click1();});
    
    function click1(){
    var p1 = new google.maps.LatLng(35.800145, 51.437115);
    var marker = new google.maps.Marker({position: p1,  icon: { url: "1.png", scaledSize: new google.maps.Size(50, 50), 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(50, 50)}  });
 
    marker.setMap(map);
};
    
        var infoWindow = new google.maps.InfoWindow();

        google.maps.event.addListener(marker, 'click', function () {
            var markerContent = '<button> click </button> Majid Tejenjari <br><br> توضیحات دلخواه';
            infoWindow.setContent(markerContent);
            infoWindow.open(map, this);
        });
      };
getLocation();


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          var userlat = position.coords.latitude;
          var userlon = position.coords.longitude;
          console.log(userlat, userlon);

          var mymap = L.map('mapid').setView([userlat, userlon], 17);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
            foo: 'bar',
            attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        }).addTo(mymap);
        // marker
        var marker = L.marker([userlat, userlon]).addTo(mymap);
      });
    } else {
        console.log("geolocation not available");
    }
}
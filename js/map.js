var mymap = L.map('mapid').setView([51.35613, 1.40256], 12.4);

        L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=FAtLeCSbY3x2NT7JFKN9', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        }).addTo(mymap);

        var jossbay = L.marker([51.37965,1.44583]).addTo(mymap);
        jossbay.bindPopup("Joss Bay");
        jossbay.on('mouseover', function (e) {
            this.openPopup();
        });
        jossbay.on('mouseout', function (e) {
            this.closePopup();
        });
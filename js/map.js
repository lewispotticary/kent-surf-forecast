var mymap = L.map('mapid').setView([51.35613, 1.40256], 12.4);

        L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=FAtLeCSbY3x2NT7JFKN9', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        }).addTo(mymap);

        //Joss Bay Marker

        var jossBay = L.marker([51.37965,1.44583]).addTo(mymap);
        jossBay.bindPopup("Joss Bay");
        jossBay.on('mouseover', function (e) {
            this.openPopup();
        });
        jossBay.on('mouseout', function (e) {
            this.closePopup();
        });

        //Viking Bay Marker

        var vikingBay = L.marker([51.35777, 1.44358]).addTo(mymap);
        vikingBay.bindPopup("Viking Bay");
        vikingBay.on('mouseover', function (e) {
            this.openPopup();
        });
        vikingBay.on('mouseout', function (e) {
            this.closePopup();
        });

        //Margate Beach Marker

        var margateBeach = L.marker([51.38803, 1.37679]).addTo(mymap);
        margateBeach.bindPopup("Margate Beach");
        margateBeach.on('mouseover', function (e) {
            this.openPopup();
        });
        margateBeach.on('mouseout', function (e) {
            this.closePopup();
        });

        //Ramsgate Main Sands Marker

        var ramsgateBeach = L.marker([51.33145, 1.4249]).addTo(mymap);
        ramsgateBeach.bindPopup("Ramsgate Main Sands");
        ramsgateBeach.on('mouseover', function (e) {
            this.openPopup();
        });
        ramsgateBeach.on('mouseout', function (e) {
            this.closePopup();
        });

        //Western Undercliff Beach Marker

        var westernUndercliff = L.marker([51.3265, 1.40709]).addTo(mymap);
        westernUndercliff.bindPopup("Western Undercliff Beach");
        westernUndercliff.on('mouseover', function (e) {
            this.openPopup();
        });
        westernUndercliff.on('mouseout', function (e) {
            this.closePopup();
        });

        //Herne Bay Beach Marker

        var herneBay = L.marker([51.37297, 1.12366]).addTo(mymap);
        herneBay.bindPopup("Herne Bay");
        herneBay.on('mouseover', function (e) {
            this.openPopup();
        });
        herneBay.on('mouseout', function (e) {
            this.closePopup();
        });

        //Folkstone Marker

        var folkstone = L.marker([51.08133, 1.19151]).addTo(mymap);
        folkstone.bindPopup("Folkstone");
        folkstone.on('mouseover', function (e) {
            this.openPopup();
        });
        folkstone.on('mouseout', function (e) {
            this.closePopup();
        });

        //Dungeness Bay Beach Marker

        var dungeness = L.marker([50.9142, 0.9789]).addTo(mymap);
        dungeness.bindPopup("Dungeness");
        dungeness.on('mouseover', function (e) {
            this.openPopup();
        });
        dungeness.on('mouseout', function (e) {
            this.closePopup();
        });

       



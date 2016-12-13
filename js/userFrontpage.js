$(document).ready(function () {

    //All Ads
    SDK.Ad.getAll(function (err, data) {
        if (err) throw err;

        var $adsTableBody = $("#adsTableBody");
        data.forEach(function (ad) {

            $adsTableBody.append(
                "<tr>" +
                "<td>" + ad.bookTitle + "</td>" +
                "<td>" + ad.bookAuthor + "</td>" +
                "<td>" + ad.bookEdition + "</td>" +
                "<td>" + ad.isbn + "</td>" +
                "<td>" + ad.rating + "</td>" +
                "<td>" + ad.price + "</td>" +
                "<td>" + ad.comment + "</td>" +
                "<td><button class='reserveAdButton' data-adId=" + ad.adId + ">Reserver bog</button></td>" +
                "</tr>");
        });
        $(".reserveAdButton").on("click", function () {
            var $reserveAdButton = $(this);

            var adiÍd = {
                id: $reserveAdButton.data("adid")
            };

            SDK.Ad.reserve(adId, function (err, data) {
                if (err) throw err;
                location.reload();

            });
        });

//Udskriver mine reservationer
        SDK.Ad.myReservations(function (err, ads) {
            if (err) throw err;

            var $myReservationsTableBody = $("#myReservationsTableBody");
            ads.forEach(function (ad) {

                $myReservationsTableBody.append(
                    "<tr>" +
                    "<td>" + ad.adId + "</td>" +
                    "<td>" + ad.timestamp + "</td>" +
                    "<td>" + ad.bookIsbn + "</td>" +
                    "<td>" + ad.userUsername + "</td>" +
                    "<td>" + ad.userPhonenumber + "</td>" +
                    "<td><button class='deleteReservationButton' data-adId=" + ad.adId + ">Fjern reservation</button></td>" +

                    "</tr>");
            });

        });

//Annullerer reservationen
        $(".deleteReservationButton").on("click", function () {
            if (confirm("Er du sikker på, at du vil fjerne din reservervation?") == true) {

                var deleteReservationButton = $(this);


                var adId = {
                    id: deleteReservationButton.data("adid")
                };

                SDK.Ad.deleteReservation(adId, function (err, data) {
                    if (err) throw err;
                    location.reload();

                });
            }
        });

        $("#logOutLink").on("click", function () {
            SDK.logOut(function (err) {

            });
            window.location.href = "index.html";
        });

    });
});


$(document).ready(function () {

    /**
    * Metoden der udskriver annoncetabellen fra HTML
     * Har lavet en reserveAdButton, som heller ikke fungerer
     *
     */
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

        /**
         * Metoden burde reserve annoncen, men det gør den ikke...
         */
        $(".reserveAdButton").on("click", function () {
            if (confirm("Vil du reservere bogen?") == true) {
                var $reserveAdButton = $(this);
            }
            var adId = {
                id: $reserveAdButton.data("adid")
            };

            SDK.Ad.reserve(adId, function (err, data) {
                if (err) {
                    alert("Der opstod en fejl - prøv igen!")
                    throw err;
                }
                else {
                    alert("Bogen er nu reserveret")
                    location.href = "userFrontpage.html";
                }
            })


                /**
                 * Udskriver mine reservationer
                 */

                SDK.Ad.myReservations(function (err, ads) {
                    if (err) throw err;

                    var $myReservationsTableBody = $("#myReservationsTableBody");
                    ads.forEach(function (ad) {

                        $myReservationsTableBody.append(
                            "<tr>" +
                            "<td>" + ad.adId + "</td>" +
                            "<td>" + ad.timestamp + "</td>" +
                            "<td>" + ad.bookISBN + "</td>" + "" +
                            "<td>" + ad.userUsername + "</td>" +
                            "<td>" + ad.userPhonenumber + "</td>" +
                            "<td><button class='deleteReservationButton' data-adId=" + ad.adId + ">Slet reservation</button></td>" +
                            "</tr>");
                    });

                });

                /**
                 * Sletter reservationen, kan ikke få mine reservationer frem, så kan slet ikke tjekke om denne virker
                 */
                $(".deleteReservationButton").on("click", function () {
                    if (confirm("Vil du slette dine reservation?") == true) {

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

            /**
             * Logger brugeren ud
             */

            $("#logOutLink").on("click", function () {
                    SDK.logOut(function (err) {

                    });
                    window.location.href = "index.html";
                });

            });
        });
});


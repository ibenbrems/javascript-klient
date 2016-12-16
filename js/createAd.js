$(document).ready(function () {

    /**
     * Metoden der udskriver alle bøger
     */
    SDK.Book.getAll(function (err, data) {
        if (err) throw err;

        var $booksTableBody = $("#booksTableBody");
        data.forEach(function (book) {

            $booksTableBody.append(
                "<tr>" +
                "<td>" + book.title + "</td>" +
                "<td>" + book.author + "</td>" +
                "<td>" + book.edition + "</td>" +
                "<td>" + book.isbn + "</td>" +
                "</tr>");
        });

        /**
         * Opret ny annonce, metoden virker ikke, den har før virket,
         * men selvom jeg ændrer koden tilbage til det samme, som da den virkede.
         * Fungerer det ikke.
         */
        $("#addNewAdButton").on("click", function () {

            /**
             * Åbner og laver en modal tilhørende knappen: Opret annonce
             */
            $('#newAdModal').modal('show');


            $("#createAdButton").on("click", function () {

                //Create JSON object
                var ad = {
                    isbn: parseInt($("#bookISBN").val()),
                    price: parseInt($("#newAdPrice").val()),
                    rating: parseInt($("#newAdRating").val()),
                    comment: $("#newAdComment").val(),

                };

                /**
                 * Opretter annoncen i databasen
                 */

                SDK.Ad.create(ad, function (err, data) {

                    if (err) {
                        alert("Der opstod en fejl - prøv igen!")
                        throw err
                    }
                    else {
                        $("#newAdModal").modal("hide");
                        alert("Annoncen er oprettet!");
                        location.href = "userFrontpage.html";
                    }

                });
            });
        });
    });
});


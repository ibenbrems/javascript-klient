$(document).ready(function () {

    /**
     * Henter alle bøger, som er ligger i tabllen fra admin HTML
     */
    SDK.Book.getAll(function (err, data) {
        if (err) throw err;
        console.log(data);

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

    });

    /**
     * Henter alle annoncer, som er ligger i tabllen fra admin HTML
     */
    SDK.Ad.getAll(function (err, data) {
        if (err) throw err;
        console.log(data);

        var $adsTableBody = $("#adsTableBody");
        data.forEach(function (ad) {

            $adsTableBody.append(
                "<tr>" +
                "<td>" + ad.isbn + "</td>" +
                "<td>" + ad.bookTitle + "</td>" +
                "<td>" + ad.bookAuthor + "</td>" +
                "<td>" + ad.bookEdition + "</td>" +
                "<td>" + ad.price + "</td>" +
                "<td>" + ad.rating + "</td>" +
                "</tr>");
        });


    });


            /**
             * Tilføj en ny bog
             */
            $("#addNewBookButton").on("click", function () {

                //Show modal
                $('#newBookModal').modal('show');

                $("#createBookButton").on("click", function () {

                    //Opret JSON object
                    var book = {
                        price: $("#bookISBN").val(),
                        title: $("#bookTitle").val(),
                        author: $("#bookAuthor").val(),
                        edition: $("#bookEdition").val(),

                    };


                    /**
                     * Metoden der opretter en ny bog i et pop op vindue
                     */
                    SDK.Book.create(book, function (err) {
                        if (err) throw err;

                        $("#newBookModal").modal("hide");
                    });
                });
            });


            $("#logOutLink").on("click", function () {
                SDK.logOut();
                window.location.href = "index.html";
            });


        });

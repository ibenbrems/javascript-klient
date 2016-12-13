$(document).ready(function () {

    //Alle bøger
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
                "<td><button class='deleteBookButton' data-bookId=" + book.bookId + ">Slet bog</button></td>" +
                "</tr>");
        });

    });

//alle annoncer
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

    //Alle brugere
    SDK.User.getAll(function (err, data) {
        if (err) throw err;
        console.log(data);

        var $usersTableBody = $("#usersTableBody");
        data.forEach(function (data) {

            data.forEach(function (user) {

                function mobilepay() {
                    if (user.mobilepay == 1) {
                        return "Ja"
                    }
                    else {
                        return "Nej"
                    }
                }

                function cash() {
                    if (user.cash == 1) {
                        return "Ja"
                    }
                    else {
                        return "Nej"
                    }
                }

                function transfer() {
                    if (user.transfer == 1) {
                        return "Ja"
                    }
                    else {
                        return "Nej"
                    }
                }

                $usersTableBody.append(
                    "<tr>" +
                    "<td>" + user.id + "</td>" +
                    "<td>" + user.username + "</td>" +
                    "<td>" + user.email + "</td>" +
                    "<td>" + user.phonenumber + "</td>" +
                    "<td>" + user.address + "</td>" +
                    "<td>" + user.mobilepay + "</td>" +
                    "<td>" + user.cash + "</td>" +
                    "<td>" + user.transfer + "</td>" +
                    //"<td><button class='deleteUserButton' data-userId=" + user.userId + ">Slet bruger</button></td>" +
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

                    //Create JSON object
                    var book = {
                        title: $("#bookTitle").val(),
                        author: $("#bookAuthor").val(),
                        edition: $("#bookEdition").val(),
                        price: $("#bookISBN").val(),
                    };


                    //Create book
                    SDK.Book.create(book, function (err) {
                        if (err) throw err;

                        $("#newBookModal").modal("hide");
                    });
                });
            });

            /**
             * Add a new User
             */
            $("#addNewUserButton").on("click", function () {

            });

            $("#logOutLink").on("click", function () {
                SDK.logOut();
                window.location.href = "index.html";
            });


        });

    });

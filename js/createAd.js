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
                "</tr>");
        });

        //Mine annoncer
        SDK.Ad.getMyAds(function (err, ads) {
            if (err) throw err;

            var $myAdsTableBody = $("#myAdsTableBody");
            ads.forEach(function (myAd) {
                console.log(data);

                $myAdsTableBody.append(
                    "<tr>" +
                    "<td>" + myAd.adId + "</td>" +
                    "<td>" + myAd.isbn + "</td>" +
                    "<td>" + myAd.price + "</td>" +
                    "<td>" + myAd.rating + "</td>" +
                    "<td>" + myAd.comment + "</td>" +
                    "<td><button class='deletemyAdButton' data-adId=" + ad.adId + ">Slet</button></td>" +
                    "</tr>");
            });

        });


        $("#addNewAdButton").on("click", function () {

            //Show modal
            $('#newAdModal').modal('show');


            $("#createAdButton").on("click", function () {
                 //Create JSON object
                 var ad = {
                    isbn: parseInt($("#bookISBN").val()),
                    price: parseInt($("#newAdPrice").val()),
                    rating: parseInt($("#newAdRating").val()),
                    comment: $("#newAdComment").val(),

                };

                 //Create annonce til databasen
                 SDK.Ad.create(ad, function (err, data) {

                    if (err)
                        alert("Der opstod en fejl - prøv igen!")
                        throw err


                        $("#newAdModal").modal("hide");
                    location.reload();
                    console.log(data);
                    alert("Annoncen er oprettet!");
                    });
                 });


            });
        });
});

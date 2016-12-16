$(document).ready(function () {

    /**
     * Denne metode opdaterer brugeren, ved at brugeren indtaster alle brugeroplysningerne på ny
     */
    $("#updateUserButton").on("click", function () {


        var mobilepayChecked = 0;
        if ($("input[name=updatemobilepay]:checked").val()) {
            mobilepayChecked = 1;
        }
        var cashChecked = 0;
        if ($("input[name=updatecash]:checked").val()) {
            cashChecked = 1;
        }
        var transferChecked = 0;
        if ($("input[name=updatetransfer]:checked").val()) {
            transferChecked = 1;
        }

        var updateUser = {
            username: $("#updateUserUsername").val(),
            password: $("#updateUserPassword").val(),
            email: $("#updateUserEmail").val(),
            address: $("#updateUserAddress").val(),
            phonenumber: ParseInt($("#updateUserPhonenumber").val()),


            mobilepay: mobilepayChecked,
            cash: cashChecked,
            transfer: transferChecked,
        };

        SDK.User.update(updateUser, function (err, data) {
            if (err) {
                alert("Der opstod en fejl - prøv igen!")

            throw err
        }
        else
        {
            alert("Din profil er nu opdateret!")
            location.href = "userFrontpage.html";
        }

            });
        });
    });

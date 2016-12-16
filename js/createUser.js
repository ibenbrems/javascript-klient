$(document).ready(function () {
    /**
     * Opretter en ny bruger
     * Tjekker først betalingstyper
     * Opretter json opretter
     */

    $("#createNewUserButton").on("click", function () {

        var cashChecked = 0;
        if ($("input[name=cash]:checked").val()) {
            cashChecked = 1;
        }

        var mobilepayChecked = 0;
        if ($("input[name=mobilepay]:checked").val()) {
            mobilepayChecked = 1;
        }

        var transferChecked = 0;
        if ($("input[name=transfer]:checked").val()) {
            transferChecked = 1;
        }
        /** Opretter json objekt
         *
         * @type {{username: (any), password: (any), email: (any), phoneNumber: (any), address: (any), cash: number, mobilePay: number, transfer: number}}
         */
        var user = {
            username: $("#Username").val(),
            password: $("#Password").val(),
            email: $("#Email").val(),
            address: $("#Address").val(),
            phonenumber: parseInt($("#Phonenumber").val()),

            mobilepay: mobilepayChecked,
            cash: cashChecked,
            transfer: transferChecked,
        };


        SDK.User.create(user, function (err, data) {

            if (err) {
                alert("Der opstod en fejl - prøv igen!")
                throw err
            }
            else
                {
                    alert("Brugeren er oprettet, du kan nu logge ind!")
                    location.href = "login.html";
                }
        });
    });

});



$(document).ready(function () {

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

        var updatedUser = {
            username: $("#updateUserUsername").val(),
            password: $("#updateUserPassword").val(),
            email: $("#updateUserEmail").val(),
            phonenumber: parseInt($("#updateUserPhonenumber").val()),
            address: $("#updateUserAddress").val(),

            mobilepay: mobilepayChecked,
            cash: cashChecked,
            transfer: transferChecked,
        };

        SDK.User.update(updatedUser, function (err, data) {
            if (err) {
                window.alert("Der opstod en fejl - prøv igen!")

                throw err
                location.reload()
            } else {
                window.location.href = "user.html";

            }
        });
    });
});

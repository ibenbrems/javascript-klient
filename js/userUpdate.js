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

        var updateUser = {
            username: $("#updateUserUsername").val(),
            password: $("#updateUserPassword").val(),
            email: $("#updateUserEmail").val(),
            phonenumber: $("#updateUserPhonenumber").val(),
            address: $("#updateUserAddress").val(),

            mobilepay: mobilepayChecked,
            cash: cashChecked,
            transfer: transferChecked,
        };

        SDK.User.update(updateUser, function (err) {
            if (err) throw err;

            alert("Din bruger er nu opdateret!")
                location.href = "user.html";

            });
        });
    });

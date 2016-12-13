
    $("#createNewUserButton").on("click", function () {

        var cashChecked = 0;
        if ($("input[name=cash]:checked").val()) {
            cashChecked = 1;
        }

        var mobilePayChecked = 0;
        if ($("input[name=mobilepay]:checked").val()) {
            mobilePayChecked = 1;
        }

        var transferChecked = 0;
        if ($("input[name=transfer]:checked").val()) {
            transferChecked = 1;
        }

        var user = {
            username: $("#newUserUsername").val(),
            password: $("#newUserPassword").val(),
            email: $("#newUserEmail").val(),
            phoneNumber: $("#newUserPhonenumber").val(),
            address: $("#newUserAddress").val(),

            cash: cashChecked,
            mobilePay: mobilePayChecked,
            transfer: transferChecked,
        };


        SDK.User.create(function (user, err) {

            if (err) {
                window.alert("Der opstod en fejl - prøv igen.")

                throw err
                location.reload()
            }
        });

    });



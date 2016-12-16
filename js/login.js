$(document).ready(function () {


    /**
     * Log ind metoden
     */
    $("#loginButton").on("click", function(e){
    e.preventDefault();

    var username = $("#inputUsername").val();
    var pw = $("#inputPassword").val();

    SDK.login(username, pw, function(err, data){

        /**
         * Ved fejl
         */
      if(err) {
          alert("Der opstod en fejl - prøv igen!")
        return $("#loginForm").find(".form-group").addClass("has-error");
      }

        /**
         * Ved succes
         */
      $("#loginForm").find(".form-group").addClass("has-success");

      if(data.type==1)
      {
        window.location.href = "admin.html";
      }
      else {
          window.location.href = "userFrontpage.html";
      }

    });

  });

});

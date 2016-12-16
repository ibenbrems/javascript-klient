$(document).ready(function ()
{

    /**
     * Den metode, der udskriver alle bøger
     */
  SDK.Book.getAll(function(err, data){
    if(err) throw err;
      console.log(data);

    var $booksTableBody = $("#booksTableBody");
    data.forEach(function (book) {

      $booksTableBody.append(
        "<tr>" +
          "<td>" + book.title + "</td>" +
          "<td>" + book.author + "</td>" +
          "<td>" + book.edition  + "</td>" +
          "<td>" + book.isbn + "</td>" +
        "</tr>");
    });

  });

});
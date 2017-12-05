$(function(){
  function getNamedEntities() {
    var queryText = $('#textInput').val();
    $.post("http://localhost:5000/ner", { text: queryText }, function(response){
      $("#entitiesTable").empty();
      $.each(response, function(i, item) {
        $('<tr>').append( 
          $('<td>').text(item.text), 
          $('<td>').text(item.label)
        ).appendTo('#entitiesTable'); 
      });
    }, "json");
  }

  $('#textInput').bind("input", getNamedEntities);
  getNamedEntities();
});

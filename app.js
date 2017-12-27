$(function(){
  function getNamedEntities() {
    var queryText = $('#textInput').val();
    $.post("https://nlp.colindcarroll.com/ner", { text: queryText }, function(response){
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

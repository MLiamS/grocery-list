$(function(){
  $("#form").submit(function(){

    event.preventDefault();
    var items = ["q1", "q2" ,"q3" ,"q4" ,"q5"]
    var itemInputs = [];
    items.forEach(function(item){
      itemInputs.push($("input#" + item).val().toUpperCase());
    });
console.log(itemInputs);
    itemInputs.sort();
console.log(itemInputs);
    itemInputs.forEach(function(list){
      $("#list").append("<li>"+list+"</li>")
    });
    $("#form").toggle();
    $(".answer").toggle();

});

});

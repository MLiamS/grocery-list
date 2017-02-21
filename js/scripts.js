$(function(){
  $("#form").submit(function(){

    event.preventDefault();
    var items = ["q1", "q2" ,"q3" ,"q4" ,"q5"]
    var itemInputs = [];
    // items.forEach(function(item){
    //   itemInputs.push($("input#" + item).val().toUpperCase());//(A) this and (B) do the same thing
     // });

    for(i=0;i<items.length;i++){
      itemInputs.push($("input#" + items[i]).val().toUpperCase());//(B) this and (A) do the same thing
    };
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

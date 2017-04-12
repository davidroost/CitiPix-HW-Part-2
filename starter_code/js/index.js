

var cities  = ["New York City", "San Francisco", "Los Angeles", "Austin"];
cities.forEach(function(element, index){});

//populating the drop-down
for(index=0; index < cities.length; index++){
  $("select").append("<option>"+cities[index]+"</option>");
}

$("select").change(function(){
  console.log( $(this).val() );
  var selection = $(this).val();
  switch (selection){
    case "New York City":
      {$("body").attr("class", "nyc");}
      {$("select").val("");}

    break;

    case "San Francisco":
      {$("body").attr("class", "sf");}
      {$("select").val("");}

    break;

    case "Los Angeles":
      {$("body").attr("class", "la");}
      {$("select").val("");}

    break;

    case "Austin":
      {$("body").attr("class", "austin");}
      {$("select").val("");}

    break;

  }
});

console.log("HI")

$("#submit").on("click", function(){
    event.preventDefault();

    var searchPokemon = $("#userInput").val().trim();

    // console.log(searchPokemon);
    
    var queryURL = "https://pokeapi.co/api/v2/pokemon/" + searchPokemon

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response){
    //     var results = response
    //     var myJSON = JSON.stringify(response);
    //     console.log(myJSON);

        var div1 = $("<div>")

        var pokeName = response.name;

        var p = $("<p>").text("Name: " + pokeName);

        div1.append(p);

        $("#pokeStats").append(div1);

        var stats = response.stats[0].stat.name

        console.log(stats);

       
        

    });
});

    //get the correct recipe
    function getRecipe(name, data) {
        var selectedRecipe;
    
    
        for(var i =0; i < data.recipes.length; i++ ) {
            if(data.recipes[i].name === name) {
                selectedRecipe = data.recipes[i];
                break; 
            }
        }
        console.log(selectedRecipe);
        if(selectedRecipe) {
            console.log("Recipe found:", selectedRecipe);
            if($('#errormessage').length) {
                console.log("error message found");
                $('#errormessage').remove();
            }

            console.log( $("#recipe").children());
            $("#recipe").show();         
            $("#recipe").children().show();
    
            //html part
            //document.getElementById("name").innerHTML = selectedRecipe.name; //update name  
            $('#name').html(selectedRecipe.name);
    
            //update ingredients
            $("#ingredientsList").empty();
            selectedRecipe.ingredients.forEach(ingredient => {
                const li = $('<li></li>').text(`${ingredient.ingredient}, ${ingredient.quantity}`);
                $("#ingredientsList").append(li);
            }); 
    
            //update instructions
            $("#instructionsList").empty();
            selectedRecipe.instructions.forEach(instruction => {
                const li = $('<li></li>').text(instruction);
                $("#instructionsList").append(li);
            }); 
    
            //update serving size
            $("#size").text(selectedRecipe["Serving size"]);
        }
        else {
            if($('#errormessage').length) {
                console.log("error message found");
                $('#errormessage').remove();
            }
            $("#recipe").show();  
            $("#recipe").children().hide();
            $("#recipe").append("<h1 id='errormessage'>Recipe not found.</h1>");
        }
        
    }
    
    const url = "recipes.json";
    $.getJSON(url, function(data){
        $(".foodname").on('click', function() {
            const recipeName = $(this).text().trim(); //get the clicked recipe' name
            console.log(recipeName);
            getRecipe(recipeName, data);
        });
    });

    function showMenu(menuId) {
    var menus = document.querySelectorAll('.food-menus'); // Get all menu elements

    // Loop through all menu elements
    menus.forEach(function (menu) {
        if (menu.id === menuId) {
            menu.style.display = 'block'; // Show the selected menu
        } else {
            menu.style.display = 'none'; // Hide other menus
        }
    });

    $('#feedback').on('click', function() {
        
    });
}


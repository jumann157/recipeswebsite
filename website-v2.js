
    //get the correct recipe
    function getRecipe(name, data) {
        var selectedRecipe;
    
        for(var i =0; i < data.recipes.length; i++ ) {
            if(data.recipes[i].name === name) {
                selectedRecipe = data.recipes[i];
                break; 
            }
        }
    
        if(selectedRecipe) {
            console.log("Recipe found:", recipeFound);
            $("#recipe").show();
    
            //html part
            document.getElementById("name").innerHTML = selectedRecipe.name; //update name
    
            //update ingredients
            $("#ingredients").empty();
            selectedRecipe.ingredients.forEach(ingredient => {
                const li = $('<li></li>').text(`${ingredient.ingredient}, ${ingredient.quantity}`);
                $("#ingredients").append(li);
            })
    
            //update instructions
            $("#instructions").empty();
            selectedRecipe.instructions.forEach(instruction => {
                const li = $('<li></li>').text(instruction);
                $("#instructions").append(li);
            })
    
            //update serving size
            $("#size").text(selectedRecipe["Serving size"]);
        }
        else {
            
            $("#name").text("Recipe was not found.");
            $("#ingredients").empty();
            $("#instructions").empty();
            $("#size").innerHTML(" ");
            $("#recipe").show();
        }
        
    }
    
    const url = "recipes.json";
    $.getJSON(url, function(data){
        $(".foodname").on('click', function() {
            const recipeName = $(this).text(); //get the clicked recipe' name
            getRecipe(recipeName, data);
        })
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
}


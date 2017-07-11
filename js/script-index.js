/*función que llama a la clase donde se encuentra el ícono flecha. Luego mediante css y su propiedad display oculta la flecha*/
$(document).ready( function(){
	$('span.icon-arrow-left-alt').css("display", "none");
});

/*función que llama a la clase donde se encuentra la sección noticias. Luego mediante la función append vamos añadiendo los párrafos*/
$(document).ready( function(){
	$('div.callout-news').append('<p>NUEVAS RECETAS</p>');
});

$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	/*Primero recorremos el arreglo que esta declarado en la variable recipesArray*/
	for (var i=0; i<recipesArray.length; i++) {
	/*luego si el atributo "highlighted" es true, llamará a la función renderRecipe*/ 
		if ('highlighted'===true) {
			renderRecipe();
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	document.getElementsByClassname("list-recipes")
	console.log('Voy a pintar la receta: ', recipe);

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}





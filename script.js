let mixes = []; 
	mixes.push(prompt("Please Add your Favorite Fruit as an ingredient!")); 

	document.getElementById("chosenFruits").innerHTML = "Ingredients: " + mixes;  


function addFruits() {

	let fruitValues = (prompt("Please Add your Favorite Fruit as an ingredient!")); 

	mixes.unshift(fruitValues); 

	let sortedFruits = mixes.sort(); 

	console.log(mixes); 

	document.getElementById("chosenFruits").innerHTML = "Ingredients: " + sortedFruits.join(" with "); 

}
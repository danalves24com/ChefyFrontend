import React from 'react'
import {InputText} from '../components/components.js'
import $ from 'jquery'
import API from '../components/Api.js'

for(var i = 0 ; i < 40; i+=1) {
	$("#list").append("<a>dada</a>")

}


var ingredients = []






function ingredient(name) {
	return `
	<div onclick="tog(this)" data-slected="false" id="opt" class="border-l hover:border-black mx-2" >${name}</div>

	`

}


function getAllSelected() {
	ingredients = []
	console.log($("#opt"))
	var result = document.evaluate("//div[@data-slected='true']", document, null, 0, null), item;

	while (item = result.iterateNext()) {
		ingredients.push(item.innerText)
	}
	localStorage.setItem('ingredients', ingredients.join("~20~"))
	window.location.pathname = "/compile"
}





class Create extends React.Component {


	componentDidMount() {
		localStorage.setItem("ingredients", "")
		var endpoint = "/api/ingredients/get-all"
		var settings = {
	"url": API+"/api/ingredients/get-all",
	"method": "GET",
	"timeout": 0,
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		for(var i in response) {

			$("#list").append(ingredient(response[i]))
		}
		
	});
	}

	render () {

		return (

			<>
				<div class="h-screen mx-10">
				
					<div class="grid md:grid-cols-2 h-1/2">
						<div class="text-center tracking-widest text-3xl flex items-center justify-center h-1/3">
							<h1 class="my-auto">Select what you have</h1>
						</div>
						<div class="h-1/3">
							<center class="h-3/4">
								<InputText placeholder="ingredient" id="ing" color="green" style="w-4/5" />
								<div class="overflow-y-scroll h-full shadow" id="list">
									
								</div>								
								<button onClick={getAllSelected} class="tracking-wide my-4 text-2xl bg-green-200 p-2">Create</button>
							</center>
						</div>
					</div>
				</div>
			</>

		)
	}
}


export default Create;

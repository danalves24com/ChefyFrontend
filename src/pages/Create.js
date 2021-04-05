import React from 'react'
import {InputText} from '../components/components.js'
import $ from 'jquery'


for(var i = 0 ; i < 40; i+=1) {
	$("#list").append("<a>dada</a>")

}


var ingredients = []

function ingredient(name) {
	return `
	<div class="border-l hover:border-black mx-2">${name}</div>

	`

}








class Create extends React.Component {


	componentDidMount() {
		var endpoint = "/api/ingredients/get-all"
		var settings = {
	"url": "http://localhost:62964/api/ingredients/get-all",
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
				
					<div class="grid md:grid-cols-2 h-1/2 py-10">
						<div class="text-center tracking-widest text-3xl flex items-center justify-center h-1/2">
							<h1 class="my-auto">Create</h1>
						</div>
						<div class="h-1/2">
							<center class="h-3/4">
								<InputText placeholder="ingredient" id="ing" color="green" style="w-4/5" />
								<div class="overflow-scroll h-full" id="list">
									
								</div>
							</center>
						</div>
					</div>
				</div>
			</>

		)
	}
}


export default Create;

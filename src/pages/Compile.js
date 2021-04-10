import React from 'react';
import $ from 'jquery';




function recipeLog(data) {

	var ings = ""
	
	for(var ing in data.raw_ingredients) {
	
		ings+=`<div class="m-1 text-center">${data.raw_ingredients[ing]}</div>`
	}

	var color = ""
	var score = data.matched - 0.7;
	score *= 100
	if(score > 0 && score <= 10) {
		color = "red"
	}
	else if (score > 10 && score <= 20) {
		color = "yellow"
	}
	else if (score > 20 && score <= 31) {
		color = "green"
	}

	return `
		<div class="rounded border p-3 border-${color}-300 bg-${color}-100 mx-2 my-3 hover:shadow-lg" id="card">
			<a onclick="window.open('/recipe?q=${data.id}')">
				<center><img src="${data.image_src}"></img></center>
				<div class="py-2">
					<div class="tracking-wide text-xl font-bold">${data.name}</div>
					<div class="text-sm font-light tracking-wide">${data.total_time}</div>
				</div>	
				<div class="grid grid-cols-3">
					${ings}
				</div>
				
			</a>
		</div>
		
		`

}


function filter5() {
	$("#list #card").filter(function() {$(this).toggle($(this).text().toLowerCase().includes("5min") || $(this).text().toLowerCase().includes("5 min"))})
}

function filterBest() {

	$("#list #card").filter(function() {$(this).toggle($(this).attr("class").includes("green"))})
}

function filterNone() {
	console.log("filtering none")
	$("#list #card").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf("") > -1)})

}

class Complite extends React.Component {


	componentDidMount() {

	var ings = localStorage.getItem("ingredients").split("~20~")

	var settings = {
	  "url": "http://localhost:62964/api/ingredients/find-match",
	  "method": "POST",
	  "timeout": 0,
	  "headers": {
	    "Content-Type": "application/json"
	  },
	  "data": JSON.stringify({"id":0,"ingredients":ings}),
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		for(var recipe in response) {
			recipe = response[recipe]
			$("#list").append(recipeLog(recipe))

		}

	});
	var time5 = `
		
		`
	var filters = [time5]
	for(var f in filters) {
		$("#filters").append(filters[f])
	}
	}


	render() {
		return(
			<>
				<div>
					<div class="md:flex my-6">
						<div class="w-1/4">
							<input id="query" class="px-1 mx-2 w-full border-b text-center" placeholder="search the results"></input>
						</div>
						<div class="w-3/4 flex mx-3 border-l px-3">
						<div>Filter by:</div>
						<div class="overflow-x-scroll" id="filters"></div>
							<div class="px-3 hover:shadow" onClick={filterBest}>
								Best Match
							</div>
							<div class="px-3 hover:shadow" onClick={filterNone}>
								None
							</div>
							<div class="px-3 hover:shadow" onClick={filter5}>
								5 min duration
							</div>
							
						</div>
					</div>
					<div id="list" class="grid md:grid-cols-3 mx-5">
					</div>
				</div>
			</>


		)
		
	}
}


export default Complite;

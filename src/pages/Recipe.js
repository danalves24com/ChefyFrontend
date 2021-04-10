import React from 'react';
import $ from 'jquery';
class Recipe extends React.Component {

	componentDidMount() {
		var settings = {
		  "url": "http://localhost:62964/api/recipes/get/"+window.location.search.split("=")[1],
		  "method": "GET",
		  "timeout": 0,
		};

		$.ajax(settings).done(function (response) {
			$("#name").html(response.name)
			$("#image").attr("style", `background-image:url(${response.image_src}); background-repeat: no-repeat;  background-attachment: fixed;
  background-size: cover; `)
			$("#src").html(`by ${response.author} from <a href="${response.source}">${response.source}</a>`)
			$("#desc").html(response.description)
			$("#duration").append(response.total_time)
			for(var step in response.steps) {
				$("#steps").append(`
					<div class="flex hover:shadow-lg">
						<div class="w-1/4 text-center flex items-center justify-center text-xl">${step}</div>
						<div class="text-lg w-3/4 py-2">
							${response.steps[step]}
						</div>
					</div>
					`)
			
			}
			for(var ing in response.ingredients) {
				var data = response.ingredients[ing]
				var sp = data.split(":")
				if(data.includes(':')) {
					$("#ingred").append(`

					<div class="flex hover:shadow-lg py-2 border-b hover:border-black">
						<div class="w-1/4 text-center flex items-center justify-center text-xl">${sp[0].substring(1,sp[0].length-1)}</div>${sp[1]}
					</div>
					`)
				} else {
					$("#ingred").append(`
					<div class="hover:shadow-lg py-2 border-b hover:border-black">
						${data}
					</div>
						`)
				
				}
			}

		});
	}



	render() {
	return (
		<>
			<div id="recipe" class="h-screen">
				<div class="h-1/2" id="image">
					<center class="my-3">
						<img id="img" class="object-cover max-h-80"></img>
					</center>
				</div>
				<div class="grid md:grid-cols-2 py-10">
					<div id="name" class="text-center mx-10 tracking-widest text-3xl py-5"></div>
					<div class="mx-5">
						<div id="desc" class="text-center"></div>						
						<div id="duration" class="text-md py-2 text-center tracking-small">Cooking time: </div>
					</div>
				</div>
				
				<div class="md:flex py-4">
					<div class="md:w-3/5 mx-5" id="steps">
						<div class="text-center text-2xl border-b">Steps</div>
					</div>
					<div class="md:w-2/5 mx-2">
						<ul id="ingred" class="text-center">
							<div class="text-center text-2xl border-b">Ingredients</div>
						</ul>
					</div>
				</div>
				<div class="text-center" id="src">
				</div>
				
			</div>
		</>

	)
	}

}

export default Recipe;

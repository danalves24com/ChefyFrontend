import React from 'react'
import $ from 'jquery';
import Api from '../components/Api';
import xss from 'xss';
import { func } from 'prop-types';


function tagCard(tag) {

    return `<a class="p-2 text-center my-2 shadow-md">${tag}</a>`;
}


function addTagArray(array) {
    for (var a in array) {
        a = array[a]
        console.log(a);
        $($("#tagsS")[0]).append(`<option value="${a}" >${a}</option>`)

    }

}


var ingredients = [];
var steps = [];
var rawIngs = []

function addStep() {

    var step = `<h3>${steps.length + 1} - ${$("#step")[0].value}</h3>`
    $($("#stepList")[0]).append(xss(step))
    steps.push(xss($("#step")[0].value))
}


function addIngredient() {

    var ingredient = $("#ingsSelect")[0].value, quantity = $("#amount")[0].value, units = $("#units")[0].value;
    console.log(ingredient, quantity, units)
    var ind = quantity + "~i~" + units + "~i~" + ingredient, code = `<h4>${quantity} ${units} ${ingredient}</h4>`
    ingredients.push(ind);
    $($("#ingList")[0]).append(xss(code))
    rawIngs.push($("#ingsSelect")[0].value);
}


function fill(element, data) {
    for (var d in data) {
        d = data[d];
        element.append(`<option value="${d}">${d}</option>`)
    }

}


function fillOptions() {
    var units = ["gram", "kilo", "teaspoon", "tablespoon", "cup"]
    var tags = ['gluten-free', 'vegan', 'vegetarian']
    var ingredients = []

    var settings = {
        "url": Api + "/api/ingredients/get-all",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        ingredients = response;
        fill($("#ingsSelect"), ingredients)
    });


    fill($("#tagsS"), tags);
    fill($("#units"), units);
}



function submit() {
    var user = JSON.parse(localStorage.getItem("user"))
    var data = {
        "recipe": {
            "id": 0,
            "name": xss($("#name").val()),
            "steps": steps,
            "ingredients": ingredients,
            "description": xss($("#about").val()),
            "comments": [],
            "tags": tags,
            "total_time": $("#h").val() + "h " + $("#m").val() + "m",
            "raw_ingredients": rawIngs,
            "author": user.name,
            "source": "chefy web",
            "image_src": "",
            "matched": 0
        },
        "author": {
            "id": 0,
            "email": user.email,
            "password": user.password
        }
    }


    console.log(data)


    var settings = {
        "url": Api+"/api/recipes/add",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

}
var tags = []
class Cont extends React.Component {

    componentDidMount() {

        if (localStorage.getItem("user") == null) {
            alert("To be able to contribute, you first need an account")
            window.location.pathname = "/signup"
        }


        fillOptions()




        $($("#tagsS")[0]).on("change", () => { var tag = $($("#tagsS")[0])[0].value; if (!tags.includes(tag)) { tags.push(tag); $($("#showTags")[0]).html($($("#showTags")[0]).html() + tagCard(tag)); } })

    }

    render() {
        return (
            <>
                <div id="top">

                </div>
                <div id="fill" class="my-5 text-white">
                    <div class="grid md:grid-cols-2">
                        <div class="m-5">
                            <div class="my-5"><h1 class="text-2xl">Tell us about your recipe</h1></div>

                            <input placeholder="Name" id="name" class="w-full border-b border-green-200 p-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"></input>
                            <div class="my-5 text-center">
                                <label for="time" class="my-5 w-full text-center text-lg">Total Time</label>
                                <div id="time" class="grid grid-cols-2 my-2 gap-3">
                                    <div><input placeholder="Hours" type="number" id="h" min="0" class=" border-b border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent w-full p-2" ></input></div>

                                    <div><input placeholder="Hours" type="number" id="m" min="0" class=" border-b border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent w-full p-2" ></input></div>
                                </div>
                            </div>
                            <div class="my-5 text-center">
                                <label for="about" class="my-5 w-full text-center text-lg">Short description</label>
                                <textarea placeholder="This recipe is a unique way of ..." id="about" class="border-b border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent w-full p-2">


                                </textarea>
                            </div>
                            <div class="my-5 text-center">
                                <label for="about" class="my-5 w-full text-center text-lg">Tags</label>
                                <div id="showTags" class="my-2"></div>
                                <select id="tagsS" class="border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent w-full p-2">

                                </select>
                            </div>
                        </div>
                        <div class="p-5 md:border-l md:border-black">
                            <div class="my-5"><h1 class="text-2xl">How to make it</h1></div>
                            <div class="my-3">
                                <div class="text-center">
                                </div>
                                <div class="grid md:grid-cols-2">
                                    <div class="m-1 border border-gray rounded" id="ingList"></div>
                                    <div class="m-2">
                                        <h3 class="text-xl">Add ingredient</h3>
                                        <div class="grid grid-cols-2">
                                            <input type="number" id="amount" placeholder="quantity" class=" mx-1 border-b border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent w-full p-2"></input>
                                            <select id="units" class="rounded mx-2 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent w-full p-2 text-center" id="units"><option value="none">-- Units --</option></select>
                                        </div>
                                        <select id="ingsSelect" class="rounded mx-2 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent w-full p-2 text-center my-3"><option>-- Ingredient --</option></select>
                                        <button class="rounded mx-2 border border-green-200 w-full p-2 text-center my-3" onClick={addIngredient}>Add</button>
                                    </div>
                                </div>
                                <div class="grid md:grid-cols-2">
                                    <div class="m-1 border border-gray rounded" id="stepList"></div>
                                    <div class="m-2">
                                        <h3 class="text-xl">Add steps</h3>
                                        <input type="text" id="step" class="rounded mx-2 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent w-full p-2 text-center my-3" placeholder="ex: prepare 4 eggs..."></input>
                                        <button class="rounded mx-2 border border-green-200 w-full p-2 text-center my-3" onClick={addStep}>Add</button>
                                    </div>
                                </div>
                            </div>
                            <div class="my-4">
                                <button class="w-full text-center border border-green-200 py-5" onClick={submit}>Submit recipe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    }

}
export default Cont;

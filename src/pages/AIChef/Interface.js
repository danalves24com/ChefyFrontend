import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import API from '../../components/Api2.js'
var selected = [], selectedFull = [];


function recipeCard(data) {
    var ings = "", steps = "";

    for (var i in data.ingredients) {
        i = data.ingredients[i].ingredient
        ings += `<span class="m-2 p-2 text-center rounded">${i.name}</span>`
    }
    var step = 1;
    for (var s in data.steps) {
        s = data.steps[s]
        if (s.interaction != null) {
            steps += `
                <div class="border-l border-gray-600 hover:border-gray-500 m-5 p-2 "><span class="m-2">${step}</span>${s.interaction} ${s.ingredientA.ingredient.name} and ${s.ingredientB.ingredient.name}</div>
            
            `
            step += 1;
        }
    }
    return `

    <div class="rounded roudnded border border-gray-500 text-gray-50 m-2 p-3">
        <div class="border-b border-gray-600">${ings}</div>
        <div>
            ${steps}
        </div>
    </div>

`
}


class Interface extends React.Component {
    constructor(a) {
        super(a);
        this.state = {"data": null}
    }
    componentDidMount() {
        var s = this
        axios.get(API+"/api/IngredientModels/get/taught/ingredients").then((r) => {
            s.setState({ "data": r.data})
        })
    }
    moveItem(item, ing) {
        ing = {
            "id": 0,
            "ingredient": ing}
        var element = $("#" + item.toLowerCase());
        if (selected.includes(item)) {
            selectedFull[selected.indexOf(item)] = null;
            selected[selected.indexOf(item)] = null;
            element.attr("class", element.attr("class").replace("bg-green-500", ""))
        }
        else {
            selected.push(item);
            selectedFull.push(ing)
            element.attr("class", element.attr("class") + " bg-green-500")
            console.log(element, ing)
        }
        console.log(selectedFull)
    }

    getCombinations() {
        var data = []
        for (var s in selectedFull) {
            s = selectedFull[s]
            if (s != null) {
                data.push(s)
            }
        }
        var settings = {
            "url": API+"/api/IngredientModels/ai/create/inteligent/recipes",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify(data),            
        };
        console.log(settings);
        $.ajax(settings).done(function (response) {
            for (var r in response) {
                r = response[r]
                $("#recipes").append(recipeCard(r))
            }
        });
    }

    render() {
        return (
            <>

                <div class="flex h-screen m-5 p-5 gap-4">
                    <div class="w-2/5 h-4/5 border-r">
                        <h1 class="text-center text-white text-2xl py-3 border-b">Select Ingredients</h1>
                        <div id="list" class="m-2 border-b h-5/6">
                            {
                                this.state.data == null ?<></>:
                                    this.state.data.map((x) => {
                                        return (
                                            <div onClick={() => { this.moveItem(x.ingredient.name, x.ingredient) }} class="text-center hover:border-l text-gray-50 p-2 m-1" id={x.ingredient.name.toLowerCase()}>{x.ingredient.name}</div>
                                            )
                                    })
                            }
                        </div>
                        <div class="mx-2">
                            <button onClick={this.getCombinations} class="text-center p-2 w-full text-gray-50 text-lg bg-gray-700 hover:bg-gray-600 rounded">Create Recipe</button>
                        </div>

                    </div>
                    <div class="w-3/5 h-full">
                        <div class="m-5 p-2" id="recipes">
                        </div>
                    </div>
                </div>

            </>
            )
    }
}
export default Interface;
import React from 'react'
import $ from 'jquery'
import axios from 'axios'

class Slider extends React.Component {
    render() {
        return (
            <div class="my-5 p-4 border-t">
                <div class="md:hidden">{this.props.name}:</div>
                <div class="flex" id="slider">
                    <div class="text-center w-1/5"></div>
                    <div class="w-1/5">0</div>
                    <div class="w-2/5 text-center">5</div>
                    <div class="w-1/5 text-right">10</div>
                </div>
                <div class="flex" id="slider">
                    <div class="text-center text-gray-800 md:text-gray-50 w-1/5">{this.props.name}:</div>
                    <input type="range" min="0" max="1" step="0.01" defaultValue="0.5" class="w-4/5 text-center focus:bg-yellow-300 m-2 text-black rounded" id={(this.props.name).toLowerCase()}></input>
                </div>
            </div>
        )
    }
}

var matchingIngredients = [], name = ""
class Understand extends React.Component {
    constructor(a) {
        super(a);
        var param = a.match.params, runningToken = localStorage.getItem("teach-token-uid")
        if (param.token == runningToken) {
            this.state = { "name": param.recipe }
            name = param.recipe
        }
        else {

        }
        //console.log(a)
    }
    componentDidMount() {

        $("#ing").on("change", () => {
            var ing = $("#ing")
            if (ing.val() == "notListed") {
                var p = prompt("Enter Ingredient Name")
                $("#ing").append(`<option value="${p}">${p}</option>`)                
                $("#ing").val(p);
            }
        })

        axios.get("https://localhost:44317/api/IngredientModels/get/all/ingredients").then((r) => {
            for (var d in r.data) {
                d = r.data[d];                
                $("#ing").append(`<option value="${d}">${d}</option>`)
            }            
            //this.setState({ "understand": unknown })
        })

        var combinationMethods = ["Cook", "Bake", "Mix", "Blend", "On-plate combination"]
        for (var c in combinationMethods) {
            c = combinationMethods[c]
            $("#combo").append(`<option value="${c}">${c}</option>`)
        }
        axios.get("https://emoji-api.com/emojis?search=" + this.state.name + "&access_key=09f6f4d6ccfab1c7ff23fa304713f98f035bfba0").then((r) => { try { $("#emoji").append(r.data[0].character + r.data[1].character);}catch (e) { } })
    }

    addMatchingIngredient() {
        var ing = $("#ing").val()
        if (ing.length > 1) {
            $("#ing").val("")
            var p = $("#combo").val();
            var json = {
                "ingredient": ing,
                "procedure": { "steps": p }
            }
            matchingIngredients.push(json)
            console.log(matchingIngredients)
            $("#lst01").append(`<div class="p-1 m-1 w-full text-center rounded bg-yellow-300 text-black">${ing}</div>`)
        }
    }
    submit() {
        var tags = ["sweet", "sour", "bitter", "salty", "soft", "crunchy", "watery", "dry"]
        var vector = []
        for (var tag in tags) {
            tag = tags[tag]
            var tagData = $("#" + tag).val();
            vector.push(parseFloat(tagData))
        }
        var vec = vector;
        var data = {
            "id": 0,
            "ingredient": {
                "name": name,
                "vector": {
                    "sweet": vec[0],
                    "sour": vec[1],
                    "bitter": vec[2],
                    "salty": vec[3],
                    "soft": vec[4],
                    "crunchy": vec[5],
                    "watery": vec[6],
                    "dry": vec[7]
                },
                "combinations": matchingIngredients   
            },
                    
        }
    
        console.log(data)

        var settings = {
            "url": "https://localhost:44317/teach/ingredient",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify(data)
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            window.location.pathname = "/teach-chefy"
        });

    }
    render() {
        return (
            <>
                <div class="mx-10 text-gray-50">
                    <div class="text-center py-20 text-4xl">
                        <h1>{(this.state.name).toUpperCase()} <span id="emoji"></span></h1>
                    </div>
                    <div class="p-4">
                        <div class="md:grid grid-cols-2 gap-4">
                            <div class="mx-2">
                                <div>
                                    <h3 class="text-center text-xl p-4">What could {this.state.name} be combined with?</h3>
                                    <div class="grid grid-cols-2 gap-2">
                                        <select id="ing" class="text-center w-full focus:bg-yellow-300 p-2 text-black rounded" placeholder="Ingredient">
                                            <option value="def">-- Ingredient --</option>
                                            <option value="notListed">-- Ingredient Not Listed --</option>

                                        </select>
                                        <select id="combo" class="text-center w-full focus:bg-yellow-300 p-2 text-black rounded">
                                            <option value="def">-- Combination Procedure --</option>
                                        </select>
                                    </div>
                                    <div class="">
                                        <button class="bg-gray-50 rounded py-4 my-2 w-full text-black" onClick={this.addMatchingIngredient}>Add</button>
                                    </div>
                                    <div id="lst01" class="grid grid-cols-3 gap-3 my-2 mx-2">
                                    </div>
                                </div>

                            </div>
                            <div>

                                <p>Please use the following sliders to score each listed characteristic on a scale from 0 to 10</p>

                                <Slider name="Sweet" />
                                <Slider name="Sour" />
                                <Slider name="Bitter" />
                                <Slider name="Salty" />
                                <Slider name="Soft" />
                                <Slider name="Crunchy" />
                                <Slider name="Watery" />
                                <Slider name="Dry" />
                                <button onClick={this.submit} class="p-3 w-full text-center bg-gray-50 text-xl rounded text-black">Upload</button>

                            </div>
                        </div>
                    </div>
                </div>
            </>
               )
    }
}

export default Understand;
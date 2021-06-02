import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import $, { data } from 'jquery'
import { v4 as uuidv4 } from 'uuid';


class Element extends React.Component {
    constructor(a) {
        super(a)
    }
    componentDidMount() {

    }
    render() {
        return (
            <>
                <div>{this.props.task}</div>
            </>
        )
    }
}

class Teach extends React.Component {
    constructor(a) {
        super(a)        
        this.state = { "understand": []}
    }
    componentDidMount() {
        var taught = []
        axios.get("https://localhost:44317/api/IngredientModels/get/taught/ingredients").then((rr) => {
            for (var aa in rr.data) {
                aa = rr.data[aa];
                taught.push(aa.ingredient.name)
            }
            var unknown = []
            axios.get("https://localhost:44317/api/IngredientModels/get/all/ingredients").then((r) => {
                for (var d in r.data) {
                    d = r.data[d];
                    if (!taught.includes(d)) {
                        unknown.push(d);
                    }
                }
                console.log(unknown)
                this.setState({ "understand": unknown })
            })


        })
        
    }
    show(x) {
        console.log(x)
        var basePath = "/help/understand/", token = uuidv4();
        localStorage.setItem("teach-token-uid", token)
        var code = `
        <h3 class="p-2 text-center text-xl">Task: Understanding the ingredient ${x}</h3>
        <a class="my-4 p-2 rounded bg-gray-50" href="${basePath+token+"/"+x}">Help Chefy understand</a>
    `
        $("#task").html(code)
    }
    render() {
        return (
            <>
                <div class="h-screen bg-gray-800 text-gray-50">
                    <div class="text-center py-20 text-3xl">
                        Help Chefy learn how to cook
                    </div>
                    <div class="flex mx-10 py-10">
                        <div class="w-2/5 h-screen">
                            <h2 class="text-2xl border-b py-3 text-center">This is what chefy needs help with</h2>
                            <div class="overflow-y-scroll h-4/5" id="items">
                                {
                                    this.state["understand"].map((x) => {
                                        return (
                                            <div class="text-center p-2 m-2 hover:bg-gray-700 rounded text-lg" onClick={() => { this.show(x)}}>Understanding the ingredient {x}</div>
                                            )
                                    })
                                }
                            </div>
                        </div>
                        <div class="w-3/5 h-3/5">
                            <div class="m-4 h-full rounded bg-yellow-300 text-gray-900 text-center p-4" id="task"><h1 class="text-xl">No task has yet been selected</h1></div>
                        </div>
                    </div>
                </div>
            </>
            )
    }

}
export default Teach;
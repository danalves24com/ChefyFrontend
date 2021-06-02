import React from 'react'
import $ from 'jquery'
import Api from '../components/Api';



var data;

class Acount extends React.Component {

    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem("user"));


    }

    componentDidMount() {

    }


    getItem = (id) => {

        var settings = {
            "url": Api + "/api/recipes/get/" + id,
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function (response) {
            return response.name
        });

    }

    render() {
        return (
            <>
                <div class="text-white">
                    <div class="p-4 text-3xl md:flex my-5">
                        <span class="md:w-1/2 text-center">Hello {this.state.name.split("~%20~")[0]}</span>

                    </div>
                    <div class="mx-4 my-20 md:flex">
                        <div class="mx-4 py-4 md:w-2/3 h-4/5">
                            <h1 class="text-2xl text-center border-b">Your contributions</h1>
                            {
                                this.state.contributed == null

                                    ?


                                    <h2 class="py-10 text-xl text-center ">You havent contributed anything</h2>


                                    :

                                    <>

                                        <div class="overflow-scroll ">
                                            {
                                                this.state.contributed.split("~%20~").map((x) => {

                                                    <div>
                                                        {this.getItem(x)}
                                                    </div>

                                                })
                                            }
                                        </div>

                                    </>


                            }

                        </div>
                        <div class="mx-4 py-4 md:w-1/3">
                            <h1 class="text-2xl text-center border-b">Your friends</h1>
                            {this.state.contributed == null ? <h2 class="py-10 text-xl text-center ">You have no friends</h2> : <><div class="overflow-scroll "> {this.state.contributed.split("").map((x) => { <span>x</span> })} </div></>}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Acount;
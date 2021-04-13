import React from 'react'
import $ from 'jquery';

class LinkButton extends React.Component {

    render() {
        return (

            <a href={this.props.href} class="p-full text-center">
                <div class={" rounded text-xl mx-2 my-2 text-white text-center py-3 bg-" + this.props.bg + "-400 " + this.props.style}>
                    {this.props.text}
                </div>
            </a>
        )
    }

}

class NavLink extends React.Component {

    render() {
        return (


            <a href={this.props.href}>
                <div class={`w-full text-center hover:bg-${this.props.color}-200  border-b border-${this.props.color}-200`}>
                    {this.props.text}
                </div>
            </a>


        )

    }
}

class InputText extends React.Component {
    render() {

        return (

            <input class={`text-center border-b border-${this.props.color}-200 focus:border-none hover:border-${this.props.color}-400  focus:ring ring-offset-3 focus:ring-${this.props.color}-500 focus:outline-none my-4 px-2 py-1 ${this.props.style}`} placeholder={this.props.placeholder} id={this.props.id}></input>

        )
    }

}


class InputDropdown extends React.Component {

    render() {

        return (

            <select id={this.props.id} class="outline-none border-none" name={this.props.name}>
            </select>

        )
    }
}


function propperRightCornerText() {

    var user = localStorage.getItem("user");
    if (user == "null") {
        return "Signup"
    }
    else if (user != null) {
        return "Account"
    }

}


function propperAccountHref() {

    var user = localStorage.getItem("user")
    if (user == "null") {
        return "/signup"
    }
    else if (user != null) {
        return "/account"
    }

}

class NavBar extends React.Component {

    render() {
        
        


        return (

            <nav class="bg-green-900">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        </div>
                        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex-shrink-0 flex items-center">
                                <a href="/">
                                    <img class="block h-10 w-auto" src="./favicon.png" alt="Logo"></img>
                                </a>
                            </div>
                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex space-x-4">
                                    <a href="/" class="bg-green-800 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>

                                    <a href="/create" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Create</a>

                                    <a href="/contribute" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contribute</a>

                                    <a href="/book" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Book</a>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div class="ml-3 relative">
                                <a href={propperAccountHref()} id="acc" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    {propperRightCornerText()}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sm:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        <a href="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>

                        <a href="/create" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Create</a>

                        <a href="/contribute" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contribute</a>

                        <a href="/book" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Book</a>
                    </div>
                </div>
            </nav>
        )
    }
}


export { LinkButton, NavLink, InputText, InputDropdown, NavBar };



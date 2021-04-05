import React from 'react'


class LinkButton extends React.Component {

	render () {
		return (

			<a href={this.props.href} class="p-full text-center">
				<div class={" rounded text-xl mx-2 my-2 text-white text-center py-3 bg-"+this.props.bg+"-400 "+this.props.style}>
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

			<input class={`text-center border-b border-${this.props.color}-200 focus:border-none hover:border-${this.props.color}-400  focus:ring ring-offset-3 focus:ring-${this.props.color}-500 focus:outline-none m-4 px-2 py-1`}  placeholder={this.props.placeholder} id={this.props.id}></input>

		)
	}

}


class InputDropdown extends React.Component {

	render() {

		return (

			<select id={this.props.id}   class="outline-none border-none" name={this.props.name}>
			</select>

		)
	}
}

class NavBar extends React.Component {

	render () {

		return (

			<div class="grid grid-cols-2">
				<div class="grid grid-cols-4">
					<NavLink text="Home" id="home" href="/" color="yellow" />
					<NavLink text="Create" id="dish" href="/create" color="green" />
					<NavLink text="Book" id="book" href="/book" color="blue" />
				</div>
				<div class="grid grid-cols-2">
					
				</div>
			</div>
		)
	}
}


export {LinkButton, NavLink, InputText, InputDropdown, NavBar};



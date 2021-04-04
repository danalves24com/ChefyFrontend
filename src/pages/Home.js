import React from 'react'
import $ from 'jquery'
import {NavBar} from '../components/components.js'

class Home extends React.Component {

	render() {

		return (
			<>
				<NavBar />
				<div class="h-80 border-b ">
					<div class="py-40 text-center">
						<h1 class="tracking-wide text-4xl">Chefy</h1>
						<p></p>	
					</div>
				</div>
			</>
			
		)
		
	}

}
export default Home

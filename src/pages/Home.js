import React from 'react'
import $ from 'jquery'
import {NavBar} from '../components/components.js'

class Home extends React.Component {

	render() {

		return (
			<>
				<div class="h-80 border-b text-white ">
					<div class="py-40 text-center">
						<h1 class="tracking-wide text-4xl">Chefy</h1>
						<p>
							Cooking made easy
						</p>	
					</div>
				</div>
				<div class="text-center text-white text-3xl my-5">What can Chefy do?</div>
				<div class="grid md:grid-cols-3 py-4 mx-10">
					<div class="rounded m-2 p-3 bg-green-200 hover:shadow px-6">
						<div class="text-2xl border-b border-black py-2 tracking-wide text-center">Save you time</div>
						<div class="text-lg">
						Going shopping is a hasle, especialy if you dont have to. By telling Chefy what you have at home, you will be provided with a number of meals you could prepare with what you have.
						</div>
					</div>
					<div class="rounded m-2 p-3 bg-blue-200 hover:shadow px-6">
						<div class="text-2xl border-b border-black py-2 tracking-wide text-center">Make you a great chef</div>
						<div class="text-lg">
						By helping you every step of the way towards making your dish, you will never not know what to do.
						</div>
			
					</div>

					<div class="rounded m-2 p-3 bg-red-200 hover:shadow px-6">
						<div class="text-2xl border-b border-black py-2 tracking-wide text-center">Give you a superpower</div>
						<div class="text-lg">
						With Chefy's AI(NLP), you will soon be able to turn neerly anything into a meal.
						</div>
			
					</div>
				</div>
			</>
			
		)
		
	}

}
export default Home

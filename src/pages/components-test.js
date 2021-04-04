import React from 'react';
import {LinkButton, NavLink, InputText, InputDropdown} from '../components/components.js'


function comp_test() {

	return (
		<>
			<div class="grid grid-cols-3">
				<LinkButton text="hello" bg="green" style="mx-5"  href="/test" />
				<LinkButton text="hello" bg="blue"  href="/test" />
				<LinkButton text="hello" bg="red"  href="/test" />
			</div>
			<div class="grid grid-cols-3">
			
				<NavLink text="nav1" href="/test" color="green" />	
				<NavLink text="nav1" href="/test" color="blue" />	
				<NavLink text="nav1" href="/test" color="red" />	
			</div>
			<div>
				<center>
				<InputText placeholder="some data" id="myid" color="green"/>
				<InputDropdown id="drop" name="name" ></InputDropdown>
				</center>		
			</div>
		</>
	)
}

export default comp_test;

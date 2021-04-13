import React , { useState }from 'react'
import $ from 'jquery'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
const clientId = "578407191336-ulb3kvlgu35i2h9dco9786br14s9feqm.apps.googleusercontent.com";




function Signup() {


  const [loading, setLoading] = useState('Loading...');
  const [user, setUser] = useState(null);
 
  const handleLoginSuccess = (response) => {
    console.log("Login Success ", response);
    setUser(response.profileObj);
    localStorage.setItem("google-user", JSON.stringify(response.profileObj));
    window.location.pathname="/google-auth"
    setLoading();
  }
 
  const handleLoginFailure = error => {
    console.log("Login Failure ", error);
    setLoading();
  }
 
  const handleLogoutSuccess = (response) => {
    console.log("Logout Success ", response);
    setUser(null);
  }
 
  const handleLogoutFailure = error => {
    console.log("Logout Failure ", error);
  }
 
  const handleRequest = () => {
    setLoading("Loading...");
  }
 
  const handleAutoLoadFinished = () => {
    setLoading();
  }


	function create() {
		var name = $("#name")[0].value
		var email = $("#email")[0].value
		var pass = $("#password")[0].value

		console.log(name, email, pass)

var data = {
  "id": 0,
  "name": name,
  "email": email,
  "password": pass,
  "about": "web user",
  "hash": "string"
}
	

	
	}

		return (
			<>
				<div class="text-3xl py-8 text-center">Sign-up</div>
				<div class="my-10">
					<center>
					<div class=" items-center justify-center">					
						<div class="g-signin2 py-4" data-onsuccess="onSignIn"><GoogleLogin clientId={clientId} buttonText={loading} onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} onRequest={handleRequest} onAutoLoadFinished={handleAutoLoadFinished} isSignedIn={true} /></div>
					<h3 class="text-xl">Or you can sign up with your email</h3>
					<div class="text-center m-1">
						<div><input id="name" type="name" class="p-1 m-3 border-b border-green-200 text-center" placeholder="Name"></input></div>
						<div><input id="email" type="email" class="p-1 m-3 border-b border-green-200 text-center" placeholder="Email"></input></div>
						<div><input id="password" type="password" class="p-1 m-3 border-b border-green-200 text-center" placeholder="Password"></input></div>
						<button onClick={create} class="rounded border-green-400 p-4 m-4">Sign-up</button>
					</div>
					</div>
					</center>
				</div>
			</>
			
		)
}

export default Signup;

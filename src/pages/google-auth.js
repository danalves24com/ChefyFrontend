import React from 'react'
import API from '../components/Api.js'
import $ from 'jquery'

function authUser(data) {

    var settings = {
        "url": API + "/api/login/auth",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({ "id": 0, "email":  data.email, "password":  data.googleId  }),
    };

    $.ajax(settings).done(function (response) {
        console.log("auth :" + response);
        if (response != undefined) {
            localStorage.setItem("user", JSON.stringify(response));
            window.location.pathname = "/account";
        }
        else {
            var settings = {
                "url": API + "/api/registration/new",
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json"
                },
                "data": JSON.stringify({ "id": 0, "name":  data.name , "email":  data.email  , "password":  data.googleId , "about": "string", "hash": "string" }),
            };

            $.ajax(settings).done(function (response) {
                if (response == true) {
                    window.location.reload();
                }
            });
        }
    });

}


class GoogleAuth extends React.Component {


    componentDidMount() {
        var data = JSON.parse(localStorage.getItem("google-user"))
        authUser(data);
    }

    render() {
        return (
            <>
            </>
        )
    }
}


export default GoogleAuth;

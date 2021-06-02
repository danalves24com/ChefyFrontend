import ComponentTest from './pages/components-test.js'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './pages/Home.js'
import Create from './pages/Create.js'
import Complie from './pages/Compile.js'
import Recipe from './pages/Recipe.js'
import Contribute from './pages/contribute.js'
import Signup from './pages/Signup.js'
import GoogleAuth from './pages/google-auth.js';
import Account from './pages/Account.js'
import Teach from './pages/AIChef/Teach.js'
import Understand from './pages/AIChef/Understand.js'


import { NavBar } from './components/components.js'
import Modal from './components/Modal'
import Interface from './pages/AIChef/Interface.js';

function giveFeedback() {
    prompt("Feedback")
}

function feedback() {
    return ( 
        <svg width="30px" height="30px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink">            
            <g id="-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="ic_fluent_person_feedback_24_regular" fill="#212121" fill-rule="nonzero">
                    <path d="M10.75,14 C11.9926407,14 13,15.0073593 13,16.25 L13,17.7519766 L12.9921156,17.8604403 C12.6813607,19.9866441 10.7715225,21.0090369 7.5667905,21.0090369 C4.37361228,21.0090369 2.43330141,19.9983408 2.01446278,17.8965776 L2,17.75 L2,16.25 C2,15.0073593 3.00735931,14 4.25,14 L10.75,14 Z M10.75,15.5 L4.25,15.5 C3.83578644,15.5 3.5,15.8357864 3.5,16.25 L3.5,17.670373 C3.77979024,18.870787 5.05062598,19.5090369 7.5667905,19.5090369 C10.082858,19.5090369 11.2966388,18.8777026 11.5,17.6931543 L11.5,16.25 C11.5,15.8357864 11.1642136,15.5 10.75,15.5 Z M7.5,6 C9.43299662,6 11,7.56700338 11,9.5 C11,11.4329966 9.43299662,13 7.5,13 C5.56700338,13 4,11.4329966 4,9.5 C4,7.56700338 5.56700338,6 7.5,6 Z M19.75,2 C20.9926407,2 22,3.00735931 22,4.25 L22,7.75 C22,8.99264069 20.9926407,10 19.75,10 L18.2951017,10 L16.1285541,12.1414295 C15.637473,12.6266415 14.846031,12.6218837 14.360819,12.1308026 C14.1296416,11.8968289 14,11.5811661 14,11.2526232 L13.9993676,9.98619781 C12.8746845,9.86154927 12,8.90792139 12,7.75 L12,4.25 C12,3.00735931 13.0073593,2 14.25,2 L19.75,2 Z M7.5,7.5 C6.3954305,7.5 5.5,8.3954305 5.5,9.5 C5.5,10.6045695 6.3954305,11.5 7.5,11.5 C8.6045695,11.5 9.5,10.6045695 9.5,9.5 C9.5,8.3954305 8.6045695,7.5 7.5,7.5 Z M19.75,3.5 L14.25,3.5 C13.8357864,3.5 13.5,3.83578644 13.5,4.25 L13.5,7.75 C13.5,8.16421356 13.8357864,8.5 14.25,8.5 L15.4986255,8.5 L15.4997012,10.6539324 L17.6788983,8.5 L19.75,8.5 C20.1642136,8.5 20.5,8.16421356 20.5,7.75 L20.5,4.25 C20.5,3.83578644 20.1642136,3.5 19.75,3.5 Z" id="🎨-Color"></path>
                </g>
            </g>
        </svg>
        )
}

function App() {
    
    return (
        <>            
            <div class="h-full">
                <div class="fixed bottom-0 right-0 h-16 w-16 m-3">
                    <div class="bg-gray-50 rounded m-1 p-3" onClick={giveFeedback}>
                        <center>
                            {feedback()}
                        </center>
                    </div>
                </div>
            </div>
            <NavBar />
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/create" component={Create} />
                <Route exact path="/compile" component={Complie} />
                <Route exact path="/recipe" component={Recipe} />
                <Route exact path="/contribute" component={Contribute} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/google-auth" component={GoogleAuth} />
                <Route exact path="/account" component={Account} />
                <Route exact path="/teach-chefy" component={Teach} />
                <Route exact path="/help/understand/:token/:recipe" component={Understand} />
                <Route exact path="/ai" component={Interface} />
            </BrowserRouter>
            <footer class="border-t border-gray-600 py-10 my-40">                
                <div class="grid md:grid-cols-3 gap-4 mx-10 text-gray-300 h-1/2">
                    <div class="border-r border-gray-700 h-full">
                        <h4 class="text-center text-2xl">Social</h4>
                        <ul class="text-center text-lg p-10">
                            <li ><a href="https://www.instagram.com/inovy.social/">Instagram</a></li>
                            <li ><a href="https://www.facebook.com/Chefy-102136991480809">Facebook</a></li>
                            <li ><a href="https://twitter.com/AppChefy">Twitter</a></li>
                        </ul>
                    </div>
                    <div class="border-r border-gray-700 h-full">
                        <h4 class="text-center text-2xl">Contact</h4>
                        <h3 class="text-center w-full py-5"><a href="mailto:danalves24@outlook.com">Author</a></h3>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;

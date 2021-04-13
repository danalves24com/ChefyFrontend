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
import { NavBar } from './components/components.js'


function App() {
    return (
        <>
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
            </BrowserRouter>
        </>
    );
}

export default App;

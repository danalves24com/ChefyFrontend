import ComponentTest from './pages/components-test.js'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './pages/Home.js' 

function App() {
  return (
  	<>
		<BrowserRouter>
	  		<Route exact path="/" component={Home} />
	  	</BrowserRouter>
	</>
  );
}

export default App;

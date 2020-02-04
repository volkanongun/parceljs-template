import name from "./multipleFiles";
import ReactDOM from 'react-dom';
import React from 'react';

console.log("hello console", name);

function App(){
	return <div>
		<h2>I'm React</h2>
	</div>
}

ReactDOM.render(<App />, document.getElementById('app'))
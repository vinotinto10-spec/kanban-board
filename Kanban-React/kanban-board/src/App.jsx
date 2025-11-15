import { useState } from 'react'; //useState is react hook
import './style.css'; //import styles

//defining app component
export default function App() {
  const [items, setItems] = useState(["eggs", "chicken", "milk"]);

   const add = () => {
	setItems([...items, "food"]);
   };


const remove = () => {
	if(items.length>0){
		setItems(items.slice(0,-1));
	}
};



  return (
	
	//JSX Syntax
	
    <div>
      
	<div class="Grocery">
	<h1>My Grocery List</h1>
		<script src="script.js"></script>
		<link rel="stylesheet" href="style.css"/>
		<title>My Grocery List</title>

			<ul id="list">
			{items.map((num) => (
				<li key={num}>{num}</li>

			))}
			</ul>
		
		<button onClick={remove}>Remove</button>
		<button onClick={add}>Add</button>
		
	
	   </div>
	   </div>
  );
}
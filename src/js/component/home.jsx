import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home () {
	const [selectedColor, setSelectedColor] = useState("red");


	return (
		<div className="traffic-light">
			<p>This is a color: {selectedColor}</p>
			<div 
			onClick={() => setSelectedColor("red") }
			className={
				 (selectedColor === "red") ? "glow light red" : "light red"}></div>
				 <div 
			onClick={() => setSelectedColor("yellow")}
			className={
				 (selectedColor ==="yellow") ? "glow light yellow" : "light yellow"}></div>
			<div 
			onClick={() => setSelectedColor("green")}
			className={
				(selectedColor === "green") ? "glow light green" : "light green"}></div>




		</div>
		// <div className="traffic-light">
		// 	<p>This is a color: {selectedColor}</p>
		// 	<div 
		// 	onClick={() => setSelectedColor("red") }
		// 	className={
		// 		"light red" + (selectedColor === "red") ? "glow" : ""}></div>
		// 	<div 
		// 	onClick={() => setSelectedColor("yellow")}
		// 	className={
		// 		"light yellow" + (selectedColor ==="yellow") ? "glow" : ""}></div>
		// 	<div 
		// 	onClick={() => setSelectedColor("green")}
		// 	className={
		// 		"light green" + (selectedColor === "green") ? "glow" : ""}></div>
			
		// </div>
	);
};

export default Home;

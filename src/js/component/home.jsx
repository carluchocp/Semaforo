import React, {useState} from "react";
import Light from "./Light.jsx";

//create your first component
const Home = () => {
	const [activeLight, setActiveLight] = useState("")
	const handleLight = (color) => {
		setActiveLight(color)
	}
	return (
		<div className="container d-flex flex-column align-items-center">
			<div className="palito"></div>
			<div className="semaforo d-flex flex-column align-items-center justify-content-around rounded py-1">
			<Light color={"red"} activeLight={activeLight} handleLight={handleLight}/>
			<Light color={"yellow"} activeLight={activeLight} handleLight={handleLight}/>
			<Light color={"green"} activeLight={activeLight} handleLight={handleLight}/>
			</div>
		</div>
	);
};

export default Home;

import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Shelter from "./Views/Shelter";
import NewPet from "./Views/NewPet";
import Detail from "./Views/Detail";
import EditPet from "./Views/EditPet";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Shelter path="/" />
				<NewPet path="/pets/new" />
				<Detail path="/pets/:id" />
				<EditPet path="/pets/:id/edit" />
			</Router>
		</div>
	);
}

export default App;

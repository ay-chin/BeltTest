import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import ShelterForm from "../Components/ShelterForm";
import { Container, Row, Col } from "react-bootstrap";

const EditPet = (props) => {
	const [errors, setErrors] = useState([]);
	const [pet, setPet] = useState({});
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		axios.get("http://localhost:8000/api/pets/" + props.id)
			.then((res) => {
				setPet({ ...res.data });
				setLoaded(true);
			})
			.catch((err) => console.log(err));
	});

	const onSubmitHandler = (e, data) => {
		e.preventDefault();
		axios.put("http://localhost:8000/api/pets/" + props.id, data)
			.then((res) => {
				console.log(res);
				if (res.data.errors) {
					setErrors({ ...res.data.errors });
				} else {
					navigate("/");
				}
			})
			.catch((err) => {
				console.log(err);
				const errorResponse = err.response.data.errors;
				console.log(errorResponse);
				const errorMsgs = [];
				for (const msg of Object.keys(errorResponse)) {
					console.log(errorResponse[msg]);
					errorMsgs.push(errorResponse[msg].properties.message);
				}
				console.log(errorMsgs);
				setErrors(errorMsgs);
			});
	};

	return (
		<div>
			<Container>
				<Row>
					<Col>
						<h1 className="text-left">Pet Shelter</h1>
					</Col>
					<Col>
						<Link to="/">Back to home</Link>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col>
						<h3 className="text-left">Edit {pet.name}</h3>
					</Col>
					<Col></Col>
				</Row>
			</Container>
			{loaded && (
				<ShelterForm
					onSubmitHandler={onSubmitHandler}
					submitName={pet.name}
					submitPetType={pet.petType}
					submitDescription={pet.description}
					submitSkill1={pet.skill1}
					submitSkill2={pet.skill2}
					submitSkill3={pet.skill3}
				/>
			)}
			{errors.map((err, idx) => {
				return (
					<p key={idx} style={{ color: "red" }}>
						{err}
					</p>
				);
			})}
		</div>
	);
};
export default EditPet;

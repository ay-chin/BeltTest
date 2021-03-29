import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import ShelterForm from "../Components/ShelterForm";
import { Container, Row, Col } from "react-bootstrap";

const NewPet = (props) => {
	const [errors, setErrors] = useState([]);

	const onSubmitHandler = (e, data) => {
		e.preventDefault();
		axios.post("http://localhost:8000/api/pets/", data)
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
						<h3 className="text-left">
							Know a pet needing a home?
						</h3>
					</Col>
					<Col></Col>
				</Row>
			</Container>
			<ShelterForm
				onSubmitHandler={onSubmitHandler}
				submitName=""
				submitPetType=""
				submitDescription=""
				submitSkill1=""
				submitSkill2=""
				submitSkill3=""
			/>
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
export default NewPet;

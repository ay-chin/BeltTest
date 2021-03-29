import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import { Table, Container, Row, Col, Button } from "react-bootstrap";

const PetDetail = (props) => {
	const [pet, setPet] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8000/api/pets/" + props.id)
			.then((res) => setPet({ ...res.data }))
			.catch((err) => console.log(err));
	});

	function handleDelete(e) {
		axios.delete("http://localhost:8000/api/pets/" + e._id)
			.then((res) => {
				console.log(res);
				navigate("/");
			})
			.catch((err) => console.log(err));
	}

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
						<h2 className="text-left">
							Details about: {pet.name}
						</h2>
					</Col>
					<Col>
						<Button
							onClick={(e) => {
								handleDelete(pet);
							}}
						>
							Adopt {pet.name}
						</Button>
					</Col>
				</Row>
			</Container>
			<Table bordered size="sm">
				<tbody>
					<tr>
						<td>Pet Type:</td>
						<td>{pet.petType}</td>
					</tr>
					<tr>
						<td>Description:</td>
						<td>{pet.description}</td>
					</tr>
					<tr>
						<td>Skills:</td>
						<ul className="list-unstyled">
							<li>{pet.skill1}</li>
							<li>{pet.skill2}</li>
							<li>{pet.skill3}</li>
						</ul>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default PetDetail;

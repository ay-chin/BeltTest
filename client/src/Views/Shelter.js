import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import { Table, Container, Row, Col } from "react-bootstrap";

const Shelter = (props) => {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8000/api/pets")
			.then((res) => setPets(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<Container>
				<Row>
					<Col>
						<h1 className="text-left">Pet Shelter</h1>
					</Col>
					<Col>
						<Link to="/pets/new">
							add a pet to the shelter
						</Link>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col>
						<h3 className="text-left">
							These pets are looking for a good home
						</h3>
					</Col>
					<Col></Col>
				</Row>
			</Container>
			<Table striped bordered size="sm">
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{pets
						.sort((pets, petIdx) =>
							pets.petType.toLowerCase() >
							petIdx.petType.toLowerCase()
								? 1
								: -1
						)
						.map((pet) => {
							return (
								<tr>
									<td>{pet.name}</td>
									<td>{pet.petType}</td>
									<td>
										<Link to={`/pets/${pet._id}`}>
											details
										</Link>{" "}
										|{" "}
										<Link
											to={`/pets/${pet._id}/edit`}
										>
											edit
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
			</Table>
		</div>
	);
};

export default Shelter;

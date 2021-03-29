import React, { useState } from "react";
import { Form, Table, Button } from "react-bootstrap";

const ShelterForm = (props) => {
	const {
		onSubmitHandler,
		submitName,
		submitPetType,
		submitDescription,
		submitSkill1,
		submitSkill2,
		submitSkill3,
	} = props;

	const [name, setName] = useState(submitName);
	const [petType, setPetType] = useState(submitPetType);
	const [description, setDescription] = useState(submitDescription);
	const [skill1, setSkill1] = useState(submitSkill1);
	const [skill2, setSkill2] = useState(submitSkill2);
	const [skill3, setSkill3] = useState(submitSkill3);

	return (
		<div>
			<Form
				onSubmit={(e) => {
					onSubmitHandler(e, {
						name,
						petType,
						description,
						skill1,
						skill2,
						skill3,
					});
				}}
			>
				<Table>
					<tbody>
						<tr>
							<td>
								<label>Pet Name:</label>
							</td>
							<td>
								<input
									type="text"
									name="name"
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label>Pet Type:</label>
							</td>
							<td>
								<input
									type="text"
									name="petType"
									value={petType}
									onChange={(e) => {
										setPetType(e.target.value);
									}}
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label>Description:</label>
							</td>
							<td>
								<input
									type="text"
									name="description"
									value={description}
									onChange={(e) => {
										setDescription(
											e.target.value
										);
									}}
								/>
							</td>
						</tr>
						<tr>Skills (Optional):</tr>
						<tr>
							<td>
								<label>Skill 1:</label>
							</td>
							<td>
								<input
									type="text"
									name="skill1"
									value={skill1}
									onChange={(e) => {
										setSkill1(e.target.value);
									}}
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label>Skill 2:</label>
							</td>
							<td>
								<input
									type="text"
									name="skill2"
									value={skill2}
									onChange={(e) => {
										setSkill2(e.target.value);
									}}
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label>Skill 3:</label>
							</td>
							<td>
								<input
									type="text"
									name="skill3"
									value={skill3}
									onChange={(e) => {
										setSkill3(e.target.value);
									}}
								/>
							</td>
						</tr>
						<Button type="submit">Submit</Button>
					</tbody>
				</Table>
			</Form>
		</div>
	);
};

export default ShelterForm;

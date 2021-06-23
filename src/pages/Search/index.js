import React, { useState } from 'react';
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const SearchPage = ({ query, inputChange }) => {
	const [inputValue, setInputValue] = useState(query);
	const history = useHistory();

	const onTextInputChange = (e) => {
		setInputValue(e.target.value);
	}

	const searchBtnHandler = () => {
		inputChange(inputValue);
		history.push('/results');
	}

	return (
		<div className="d-flex justify-content-center align-items-center pg bg-gradient">
			<Container fluid>
				<Container className="p-5">
					<Form>
						<InputGroup size="lg">
							<Form.Control className="rounded" type="text" placeholder="Search Book / Author /ISBN"
								value={inputValue} onChange={(e) => onTextInputChange(e)} />
							<InputGroup.Append>
								<Button className="btn btn-grad" disabled={inputValue === ""} onClick={searchBtnHandler}>Search</Button>
							</InputGroup.Append>
						</InputGroup>

					</Form>
				</Container>
			</Container>
		</div>
	)
}

export default SearchPage;
import React from 'react';
import {Container, Form, InputGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const SearchPage = ({query, inputChange}) => {

	function onTextInputChange(e) {
		inputChange(e)
	}

	return (
		<div className="d-flex justify-content-center align-items-center pg bg-gradient">
			<Container fluid>
				<Container className="p-5">
					<Form>
						<InputGroup size="lg">
							<Form.Control className="rounded" type="text" placeholder="Search Book / Author /ISBN"
							              value={query} onChange={onTextInputChange}/>
							<InputGroup.Append>
								<Link className="btn btn-grad" to="/results">Search</Link>
							</InputGroup.Append>
						</InputGroup>

					</Form>
				</Container>
			</Container>
		</div>
	)
}

export default SearchPage;
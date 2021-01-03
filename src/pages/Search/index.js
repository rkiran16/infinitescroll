import React from 'react';
import {Container, Form} from "react-bootstrap";

const SearchPage = ({id, query, inputChange}) => {

	function onTextInputChange(e) {
		inputChange(e)
	}

	return (
		<div id={id} className="d-flex justify-content-center align-items-center bg-gradient pg">
			<Container fluid>
				<Container className="p-5">
					<Form>
						<Form.Group>
							<Form.Control className="rounded" size="lg" type="text" placeholder="Search Book/Author/ISBN"
							              value={query} onChange={onTextInputChange}/>
						</Form.Group>
					</Form>
				</Container>
			</Container>
		</div>
	)
}

export default SearchPage;
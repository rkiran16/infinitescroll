import React from "react";
import {Form} from "react-bootstrap";

const Search = (query,onTextInputChange) => {
	const onTextChangeHandler = () => {
		onTextInputChange();
	}
	return (
		<Form>
			<Form.Group>
				<Form.Control size="lg" type="text" placeholder="Search Books" value={query} onChange={onTextChangeHandler}/>
			</Form.Group>
		</Form>
	)
}


export default Search;
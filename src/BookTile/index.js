import React from "react";
import { Card } from 'react-bootstrap';
import './style.scss';

export default function BookTile({volumeInfo: { title, authors, imageLinks }}) {
	return (
		<Card>
			<Card.Img variant="top" src={imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : 'https://placeimg.com/300/300/book'} />
			<Card.Body>
				<Card.Title className="text-truncate">{title}</Card.Title>
				{authors && authors.length > 0 && authors.map(author => {
					return (
						<Card.Text>
							{author}
						</Card.Text>
					)
				})}
			</Card.Body>
		</Card>
	)
}
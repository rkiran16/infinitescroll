import React from "react";
import { Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import './style.scss';

export default function BookTile({volumeInfo: { title, imageLinks, publishedDate, ratingsCount, averageRating }}) {
	return (
		<Card className="bookTile text-white bg-dark">
			<Card.Img variant="top" src={imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : 'https://placeimg.com/300/300/book'} />
			<Card.Body>
				<h6 className="card-title text-truncate">{title}</h6>
				<ReactStars
					count={averageRating ? parseInt(averageRating) : 5}
					value={ratingsCount}
					size={24}
					activeColor="#ffd700"
				/>
			</Card.Body>
			<div className="card-footer">
				<small className="text-muted">{`Published Date ${publishedDate}`}</small>
			</div>
		</Card>
	)
}
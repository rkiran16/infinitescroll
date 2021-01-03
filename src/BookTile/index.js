import React from "react";
import './style.scss';

export default function BookTile({volumeInfo: { title, authors, imageLinks }}) {
	return (
		<figure className="bookTile">
			<img src={imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : 'https://placeimg.com/300/300/book'}/>
			<figcaption>
				{authors && authors.length > 0 && authors.map(author => <h5>{author}</h5>)}
				<h4>{title}</h4>
			</figcaption>
		</figure>
	)
}
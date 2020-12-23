import React from "react";
import './style.scss';

export default function BookTile({id, title, authorName, elementRef}) {
	return (
		<figure style={{ minHeight: '300px' }} ref={elementRef && elementRef} className="bookTile">
			{console.log(id)}
			<img src={id ? `http://covers.openlibrary.org/b/olid/${id}-L.jpg` : 'https://placeimg.com/300/300/book'}/>
			<figcaption>
				<h5>{authorName}</h5>
				<h4>{title}</h4>
			</figcaption>
		</figure>
	)
}
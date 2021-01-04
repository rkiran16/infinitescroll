import React from 'react';
import { Row, Col, Card} from "react-bootstrap";
import BookTile from "../../BookTile";
import Skeleton from "react-loading-skeleton";
import './searchResultsPage.scss';

const SearchResultsPage = ({id, books, loading, lastElementRef, error}) => {
	return (
		<div id={id} className="pg bg-gradient">
			<Row className="searchResultsPage">
				{books && books.map((book, index) => {
					if (index === books.length - 2) {
						return (
							<div ref={lastElementRef} key={`book-${Math.random()}`}>
								<BookTile volumeInfo={book.volumeInfo}/>
							</div>
						)
					} else {
						return <div key={`book-${Math.random()}`}><BookTile volumeInfo={book.volumeInfo}/></div>
					}
				})}
			</Row>
			{loading && <Row>
				{Array(3).fill("").map(index => {
					return (
						<Col className="p-2" sm={12} md={4} key={`skeleton-${Math.random()}`}>
							<Card>
								<Skeleton height={150}/>
								<Card.Body>
									<Skeleton/>
								</Card.Body>
							</Card>
						</Col>
					)
				})}
			</Row>}
			{error && <p>Error</p>}
		</div>
	)
}

export default SearchResultsPage;
import React from 'react';
import './landingPage.scss';
import {Container, Button } from 'react-bootstrap';

const LandingPage = ({id, onPageChange}) => {

	function onBtnClick() {
		onPageChange(id);
	}
	return (
		<div id={id} className="landingContainer pg pg-current bg-gradient">
			<Container className="d-flex flex-column-reverse flex-md-row justify-content-center justify-content-lg-around">
				<div>
					<h1 className="h2 font-weight-normal text-white mb-3">Welcome to Book Finder</h1>
					<h3 className="h1 font-weight-light text-white">
						New Way To Explore Books
					</h3>
					<h3 className="h1 font-weight-light text-white mb-3">
						Read Reviews, Find New Books, Collect Quotes
					</h3>
					<hr className="w-25 ml-0 border-warning mb-5"/>
					<div className="w-75">
						<Button className="btn-grad btn-lg btn-block" onClick={onBtnClick}>Find Your Book</Button>
					</div>
				</div>
				<div className="book-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.433 125">
						<path d="M71.862 0H9.725C7.761 0 4.947 1.064 3.473 2.362l-.792.698C1.206 4.36 0 7.031 0 8.995V96.428A3.583 3.583 0 003.572 100h62.132a3.581 3.581 0 003.572-3.572V11.722a3.58 3.58 0 00-3.572-3.572H24.172a2.352 2.352 0 10-4.703 0V32.667l-5.917-5.777-5.12 5.777V8.148h-4.86c-.026 0-.049.006-.075.008L7.34 3.755h64.463V93.04h.057a3.585 3.585 0 003.573-3.572V3.573A3.581 3.581 0 0071.862 0z"/>
					</svg>
				</div>
			</Container>
		</div>
	)
}

export default LandingPage;
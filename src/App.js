import useBooksSearch from './useBooksSearch';
import React, {useState, useRef, useCallback} from 'react';
import { Container, Navbar} from 'react-bootstrap';
import './app.scss';
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/Search";
import SearchResultsPage from "./pages/SearchResultsPage";


export default function App() {
	const [query, setQuery] = useState('');
	const [pageNumber, setPageNumber] = useState(0)
	const {books, loading, error, hasMore} = useBooksSearch(query, pageNumber);
	const observer = useRef();
	const lastElementRef = useCallback(node => {
		if (loading) return;
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting && hasMore) {
				setPageNumber(prevPageNumber => prevPageNumber + 40);
			}
		})
		if (node) observer.current.observe(node);
	}, [loading, hasMore])


	function onTextInputChange(e) {
		setQuery(e.target.value);
		setPageNumber(0)
	}

	function onPageChangeHandler(e) {
		const searchPage = document.getElementById('searchPage');
		const landingPage = document.getElementById('landingPage');
		const searchResultsPage = document.getElementById('searchResultsPage');
		if(e === "landingPage") {
			searchPage.classList.toggle('pg-current');
			searchPage.classList.toggle('pt-page-moveToTopFade');
			landingPage.classList.toggle('pg-current');
			setTimeout(function () {
				searchPage.classList.toggle('pt-page-moveToTopFade');
			}, 800)
		}
	}

	return (
		<>
			<Container fluid className="p-0">
				<Navbar sticky="top" expand="lg" variant="dark" bg="dark">
					<Navbar.Brand href="/">BOOK FINDER</Navbar.Brand>
				</Navbar>
			</Container>
			<main>
				<LandingPage id="landingPage" onPageChange={(e) => onPageChangeHandler(e)} />
				<SearchPage id="searchPage" query={query} inputChange={(e) => onTextInputChange(e)} />
				<SearchResultsPage id="searchResultsPage" loading={loading} books={books} error={error} lastElementRef={lastElementRef} />
			</main>
		</>
	);
}

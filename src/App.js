import useBooksSearch from './useBooksSearch';
import React, { useState, useRef, useCallback } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
import './app.scss';
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/Search";
import SearchResultsPage from "./pages/SearchResultsPage";

export default function App() {
	const [query, setQuery] = useState('');
	const [pageNumber, setPageNumber] = useState(0)
	const { books, loading, error, hasMore } = useBooksSearch(query, pageNumber);
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
		setQuery(e);
		setPageNumber(0)
	}

	const Home = () => <LandingPage />;
	const Search = () => <SearchPage query={query} inputChange={(e) => onTextInputChange(e)} />;
	const Results = () => <SearchResultsPage books={books} lastElementRef={lastElementRef} error={error} loading={loading} />;

	return (
		<BrowserRouter>
			<Route
				render={({ location }) => {
					return (
						<PageTransition
							preset="fadeTopFadeBottom"
							transitionKey={location.pathname}
						>
							<Switch location={location}>
								<Route exact path="/infinitescroll" component={Home} />
								<Route exact path="/search" component={Search} />
								<Route exact path="/results" component={Results} />
							</Switch>
						</PageTransition>
					);
				}}
			/>
		</BrowserRouter>
	);
}

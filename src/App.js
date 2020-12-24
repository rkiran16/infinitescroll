import useBooksSearch from './useBooksSearch';
import {useState, useRef, useCallback } from 'react';
import Skeleton from 'react-loading-skeleton';
import {Card,  Row, Col, Container, Form, Navbar} from 'react-bootstrap';
import './app.scss';
import BookTile from "./BookTile";
import Lottie from "./Lottie";


export default function App() {
	const [query, setQuery] = useState('');
	const [pageNumber,setPageNumber] = useState('')
	const { books,loading,error, hasMore } = useBooksSearch(query,pageNumber);
	const observer = useRef();
	const lastElementRef = useCallback(node => {
		 if(loading) return;
		 if(observer.current) observer.current.disconnect();
		 observer.current = new IntersectionObserver(entries => {
		 	 if(entries[0].isIntersecting && hasMore) {
		 	 	setPageNumber(prevPageNumber => prevPageNumber + 1);
		     }
		 })
		 if(node) observer.current.observe(node);
	}, [loading,hasMore])


	function onTextInputChange(e) {
        setQuery(e.target.value);
        setPageNumber(1)
	}

	return (
		<>
			<Container fluid className="bg-warning p-0">
				<Navbar sticky="top" expand="lg" variant="dark" bg="dark">
					<Navbar.Brand href="/">BOOK SHOP</Navbar.Brand>
				</Navbar>
			</Container>
			<Container fluid className="bg-warning p-0">
				<Lottie />
			</Container>
			<Container fluid className="bg-warning" style={{ height: '250px' }}>
				<Container className="p-5">
					<Form>
						<Form.Group>
							<Form.Control className="rounded"  size="lg" type="text" placeholder="Search Books" value={query} onChange={onTextInputChange}/>
							<Form.Text className="text-muted">
								Start typing to see your favorite books.
							</Form.Text>
						</Form.Group>
					</Form>
				</Container>
			</Container>
			<Container fluid className="bg-info" style={{ minHeight: '100vh' }}>
				<Container className="p-5">
					<Row>
						{books && books.map((book,index) => {
							if(index === books.length - 1) {
								return (
									<Col className="p-2" xs={12} sm={6} md={4} ref={lastElementRef} key={`book-${Math.random()}`}>
										<BookTile
											id={book.edition_key && book.edition_key[0]}
											title={book.title}
											authorName={book.author_name && book.author_name[0]}
											elementRef={lastElementRef()} />
									</Col>
								)
							} else {
								return <Col className="p-2" xs={12} sm={6} md={4} key={`book-${Math.random()}`}>
									<BookTile
										id={book.edition_key && book.edition_key[0]}
										authorName={book.author_name && book.author_name[0]}
										title={book.title} />
								</Col>
							}
						})}
					</Row>
					{loading && <Row>
						{Array(3).fill("").map(index => {
							return (
								<Col className="p-2" sm={12} md={4} ref={lastElementRef} key={`skeleton-${Math.random()}`}>
									<Card>
										<Skeleton height={150} />
										<Card.Body>
											<Skeleton/>
										</Card.Body>
									</Card>
								</Col>
							)
						})}
					</Row>}
					{error && <p>Error</p>}
				</Container>
			</Container>
		</>
	);
}

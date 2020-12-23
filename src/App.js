import useBooksSearch from './useBooksSearch';
import {useState, useRef, useCallback } from 'react';
import Skeleton from 'react-loading-skeleton';
import {Card,  Row, Col, Container, Form} from 'react-bootstrap'


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
			<Container fluid className="bg-warning">
				<Container className="p-5">
					<Form>
						<Form.Group>
							<Form.Control className="rounded"  size="lg" type="text" placeholder="Search Books" value={query} onChange={onTextInputChange}/>
						</Form.Group>
					</Form>
				</Container>
			</Container>
			<Container fluid className="bg-info" style={{ height: '100vh' }}>
				<Container className="p-5">
					<Row>
						{books && books.map((book,index) => {
							if(index === books.length - 1) {
								return (
									<Col className="p-2" sm={12} md={4} ref={lastElementRef} key={`book-${Math.random()}`}>
										<Card style={{ height: '100%' }}>
											<Card.Img style={{ maxHeight: '325px' }} className="img-fluid" variant="top" src={`http://covers.openlibrary.org/b/olid/${book.edition_key && book.edition_key[0]}-L.jpg`} />
											<Card.ImgOverlay>
												<Card.Body>
													<Card.Title>{book.title}</Card.Title>
												</Card.Body>
											</Card.ImgOverlay>
										</Card>
									</Col>
								)
							} else {
								return <Col className="p-2" sm={12} md={4} key={`book-${Math.random()}`}>
									<Card style={{ height: '100%' }}>
										<Card.Img style={{ maxHeight: '325px' }} className="img-fluid" variant="top" src={`http://covers.openlibrary.org/b/olid/${book.edition_key && book.edition_key[0]}-L.jpg`} />
										<Card.ImgOverlay>
											<Card.Body>
												<Card.Title>{book.title}</Card.Title>
											</Card.Body>
										</Card.ImgOverlay>
									</Card>
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

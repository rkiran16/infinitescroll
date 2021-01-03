import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'https://www.googleapis.com/books/v1/volumes?maxResults=40&key=AIzaSyDpJWo6qYp0bfGhR-rbKtcbgSoxCUUiKN0';

export default function useBooksSearch (query,pageNumber) {
	const [books,setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [hasMore,setHasMore] = useState(true);
	let cancel

	useEffect(() => {
		setBooks([])
	},[query])

	useEffect(() => {
		setLoading(true);
		setError(false);
		if(query !== '') {
			axios({
				method: 'GET',
				url: URL,
				params: {q: query, startIndex: pageNumber},
				cancelToken: new axios.CancelToken(c => cancel = c)
			}).then(response => {
				//console.log(response.data.docs);
				setLoading(false);
				setBooks((prevBooks) => {
					return [...new Set([...prevBooks, ...response.data.items])]
				})
				setHasMore(response.data.items.length > 0)
			}).catch(err => {
				if(axios.isCancel(err)) return
				setError(true)
				setLoading(false);
			})
			return () => cancel();
		} else {
			setLoading(false);
		}

	},[query,pageNumber])

	return {
		books,
		loading,
		error,
		hasMore
	};
}
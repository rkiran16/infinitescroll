import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'https://openlibrary.org/search.json';

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
		axios({
			method: 'GET',
			url: URL,
			params: {q: query, page: pageNumber},
			cancelToken: new axios.CancelToken(c => cancel = c)
		}).then(response => {
			console.log(response.data.docs);
			setLoading(false);
			setBooks((prevBooks) => {
				return [...new Set([...prevBooks, ...response.data.docs])]
			})
			setHasMore(response.data.docs.length > 0)
		}).catch(err => {
			if(axios.isCancel(err)) return
			setError(true)
			setLoading(false);
		})
		return () => cancel();
	},[query,pageNumber])

	return {
		books,
		loading,
		error,
		hasMore
	};
}
import { useState, useEffect } from 'react'
import './App.scss'
import { FaSpinner } from 'react-icons/fa';
import { Book } from './components/Book';

function App() {
	const [books, setBooks] = useState([]);
	const [searchText, setSearchText] = useState([]);
	const [searchingBooks, setSearchingBooks] = useState(true);



	const handleButtonClick = () => {
		setBooks([]);
		lookupBooks();
	}

	return (
		<div className="App">
			<h1>Gutenberg Project Books Search</h1>
			{searchingBooks && (
				<div><FaSpinner className="spinner" /></div>
			)}
			{!searchingBooks && (
				<>
					<input className="searchText" autoFocus type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
					<button className="btnSearch" onClick={handleButtonClick}>Search</button>
					{books.length === 0 && (
						<div className="message">No books found.</div>
					)}
					<div className="books">
						{books.map((book, i) => {
							<Book book={book} key={i} />
						})}
					</div>
				</>
			)}
		</div>
	)
}

export default App

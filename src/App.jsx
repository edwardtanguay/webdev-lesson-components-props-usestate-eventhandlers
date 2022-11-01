import { useState } from 'react';
import './App.scss';

const _books = [
	{
		id: 1,
		title: 'Building Microservices',
		author: 'Sam Newman',
		bookUrl: 'https://edwardtanguay.vercel.app/techBooks?id=1',
		imageUrl:
			'https://edwardtanguay.vercel.app/customImages/techBooks/buildingMicroservices.jpg'
	},
	{
		id: 2,
		title: 'Gatsby E-Commerce',
		author: 'Alex Libby',
		bookUrl: 'https://edwardtanguay.vercel.app/techBooks?id=2',
		imageUrl:
			'https://edwardtanguay.vercel.app/customImages/techBooks/gatsbyEcommerce.jpg'
	},
	{
		id: 3,
		title: 'Rust Web Programming',
		author: 'Maxwell Flitton',
		bookUrl: 'https://edwardtanguay.vercel.app/techBooks?id=3',
		imageUrl:
			'https://edwardtanguay.vercel.app/customImages/techBooks/rustWeb.jpg'
	}
];

function App() {
	const [books, setBooks] = useState(_books);

	return (
		<div className="App">
			<div className="books">
				{books.map((book, i) => {
					<div className="book">
						<a href={book.bookUrl} target="_blank">
							<img className="cover" src={book.imageUrl} />
						</a>
						<div className="info">
							<div className="title">
								<a href={book.bookUrl} target="_blank">
									{book.title}
								</a>
							</div>
							<div className="author">{book.author}</div>
						</div>
					</div>
				})}
			</div>
		</div>
	);
}

export default App;

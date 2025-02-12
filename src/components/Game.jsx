import {useState} from 'react';

export default function Game({}){

	// Instance Variables

	const [words, setWords] = useState([]);
	const [guesses, setGuesses] = useState(0);

	// Render

	return (
		<div>
			<div className="words-display">

			</div>
			<div className="past-guesses">

			</div>
			<div className="input-area">

			</div>
		</div>
	);
};
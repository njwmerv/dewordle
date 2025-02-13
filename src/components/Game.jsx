import Select from 'react-select';
import {useState} from 'react';
import LANGUAGES from '../utility/lang.js';
import {MAX_GUESSES} from '../utility/constants.js';

function displayWords(words, guessesCount){
	let display = [];
	for(let i = 0; i < guessesCount; i++){
		display.push(words[i]);
	}
	return display.map((word, index) => <p key={`word-${index}`}>{word}</p>);
}

function displayGuesses(guesses){
	return guesses.map((guess, index) => <p key={`guess-${index}`}>{guess.label}</p>);
}

export default function Game({index}){

	// Instance Variables

	const [words, setWords] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	const [guessString, setGuessString] = useState('');
	const [pastGuesses, setPastGuesses] = useState([]);
	const [currentGuess, setCurrentGuess] = useState(null);

	const languageOptions = LANGUAGES.map((language) => {
		return {value:language.code, label:`${language.name} (${language.native})`};
	});

	// Helpers

	const handleSubmit = () => {
		if(!currentGuess || pastGuesses.length >= MAX_GUESSES) return;
		for(const guess of pastGuesses){
			if(guess.value === currentGuess.value) return;
		}
		setPastGuesses([...pastGuesses, currentGuess]);
	};

	// Render

	return (
		<div className="game">
			<div className="words-display">
				{displayWords(words, pastGuesses.length)}
			</div>

			<hr />

			<div className="past-guesses">
				{displayGuesses(pastGuesses)}
			</div>

			<hr />

			<div className="input-area">
				<Select value={currentGuess}
				        options={languageOptions}
						onChange={(aOption) => setCurrentGuess(aOption)}
				        className="lang-select"
				        placeholder="Select a language..."
				        isClearable={true}
				        isSearchable={true}
				        inputValue={guessString}
				        onInputChange={(newValue) => setGuessString(newValue)}
 				/>

				<button onClick={handleSubmit}>
					<p>Submit</p>
				</button>
			</div>
		</div>
	);
};
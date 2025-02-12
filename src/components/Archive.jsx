import '../scss/styles.scss';
import {useState} from 'react';

function GameCell({index}){

	// Render

	return (
		<button key={`game-cell-${index}`}>{index}</button>
	);
}

function createArchiveList(size){
	let cells = [];
	for(let i = size; i > 0; i--){
		cells.push(<GameCell index={i}/>);
	}
	return cells
}

export default function Archive({}){

	// Instance Variables

	const [archiveSize, setArchiveSize] = useState(50);

	// Render

	return (
		<div className="archive">
			{createArchiveList(archiveSize)}
		</div>
	);
};
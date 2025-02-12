import Game from './Game.jsx';
import {useParams} from 'react-router';

export default function OldGame({}){

	// Instance Variables

	let {index} = useParams();

	// Render

	return <Game index={index} />;
}
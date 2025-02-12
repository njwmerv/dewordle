import '../scss/styles.scss';
import {Link} from 'react-router';
import viteLogo from '/vite.svg';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import {ARCHIVE_PAGE_ROUTE, HOME_PAGE_ROUTE} from '../utility/routes.js';

export default function NavBar({}){

	// Instance Variables

	// Render

	return (
		<header className="navbar">
			<Link to={HOME_PAGE_ROUTE} className="left">
				<img src={viteLogo} className="logo" alt="Vite logo" />

				<h1>Dewordle</h1>
			</Link>

			<div className="right">
				<Link to={ARCHIVE_PAGE_ROUTE}><CalendarTodayRoundedIcon /></Link>

				<a><HelpOutlineRoundedIcon /></a>

				<a><SettingsRoundedIcon /></a>
			</div>
		</header>
	);
};

import './scss/styles.scss';
import Game from './components/Game.jsx';
import NavBar from './components/NavBar.jsx';
import Archive from './components/Archive.jsx';
import OldGame from './components/OldGame.jsx';
import {Routes, Route} from 'react-router';
import {HOME_PAGE_ROUTE, ARCHIVE_PAGE_ROUTE, OLD_GAME_ROUTE} from './utility/routes.js';

export default function App() {

    // Render

    return (
        <>
            <NavBar />
            <Routes>
                <Route path={HOME_PAGE_ROUTE} element={<Game />} />
                <Route path={ARCHIVE_PAGE_ROUTE} element={<Archive />}>
                    <Route path={OLD_GAME_ROUTE} element={<OldGame />} />
                </Route>
            </Routes>
        </>
    )
};

import { NavBarComponent } from '../components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, YogaSet, Drinkware, Bolster, YogaBlock, Shirts, Books } from '../pages';


export const MainRoutes = () => {
    return (
        <Router>
            <NavBarComponent />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/YogaSet" element={<YogaSet/>}/>
                <Route exact path="/Drinkware" element={<Drinkware/>}/>
                <Route exact path="/Bolster" element={<Bolster/>}/>
                <Route exact path="/YogaBlock" element={<YogaBlock/>}/>
                <Route exact path="/Shirts" element={<Shirts/>}/>
                <Route exact path="/Books" element={<Books/>}/>
            </Routes>
        </Router>
    )
}
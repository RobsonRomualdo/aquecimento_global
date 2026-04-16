import {Routes, Route} from 'react-router-dom';
import Home from '../pages/home';
import Blog from '../pages/blog';
import FaleConosco from '../pages/faleconosco';
import Conversor from '../pages/conversor';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/conversor" element={<Conversor/>}/>
            <Route path="/faleconosco" element={<FaleConosco/>}/>
        </Routes>
    )

}

export default AppRoutes
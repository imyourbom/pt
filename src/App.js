import React, {Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';
import PortDetail from './pages/PortDetail'

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Webd = lazy(() => import('./pages/Webd'));
const Port = lazy(() => import('./pages/Port'));

const App = () => {
    return (
        <BrowserRouter basename="/pt">
            <Suspense fallback={<Main />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/today" element={<Today />} />
                    <Route path="/webd" element={<Webd />} />
                    <Route path="/port" element={<Port />} />
                    <Route path="/port/:id" element={<PortDetail />} />
                </Routes>
            </Suspense>
        </BrowserRouter>

        
    );
}

export default App;
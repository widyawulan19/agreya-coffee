
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Welcome from './pages/Welcome';
import CategoryPage from './pages/CategoryPage';
import CategoryDetailPage from './pages/CategoryDetailPage';
import RecommendationPage from './pages/RecommendationPage';
import About from './pages/About';

function App() {

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <Routes>

        <Route path='/' element={<Welcome />} />
        <Route path='/category-page' element={<CategoryPage />} />
        <Route path='/category-detail-page/:name' element={<CategoryDetailPage />} />
        <Route path='/recommendation-page' element={<RecommendationPage />} />
        <Route path='/about-page' element={<About />} />
      </Routes>
    </div>
  );
}

export default App

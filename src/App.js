import './App.css';
import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/home/Home';
import { AnimatedBackground } from './components/Background/Background';
import { Project } from './pages/projects/Project';
import { Skills } from './pages/skills/Skills';
import { Resume } from './pages/resume/Resume';
import { ProjectDetails } from './pages/projectDetail/ProjectDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AnimatedBackground/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Project/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/project/:id' element={<ProjectDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

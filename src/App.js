import './App.css';
import Activity from './Components/Activity/Activity';
import Blog from './Components/Bologs/Blog';
import Certificate from './Components/Certificate/Certificate';
import Course from './Components/Course/Course';
import Education from './Components/Education/Education';
import Header from './Components/Header/Header';
import JobExperience from './Components/JobExperience/JobExperience';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className='bg-[#F3F2EF]'>
      <Header />
      <Activity />
      <JobExperience />
      <Skills />
      <Projects />
      <Education />
      <Course />
      <Certificate />
      <Blog />
    </div>
  );
}

export default App;

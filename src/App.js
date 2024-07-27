import { Container, Grid } from '@mui/material';
import './App.css';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skill from './components/Skill/Skill';
import Contact from './components/Contact/Contact';



function App() {
  
  return (
    <Router>
    
      <Header />
    
      <Container>
        <Grid container className='grid-container' id='home'>
      
          <Grid item xs={12} sm md={3.55} lg={3}>
            <Profile />
          </Grid>
  
          <Grid item xs>
            <div className="main-content">
              <Home />
            </div>
          </Grid>

        </Grid>
      </Container>
      
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
      
    </Router>
  );
}

export default App;

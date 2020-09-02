import React from 'react';
import { Switch, Route } from 'react-router-dom'
import About from './about/About'
import Skills2 from './skills/skills2'
import Employment2 from './employment/employment2';
import Projects2 from './projects/projects2';
import Recommendations from './recommendations/recommendations'
import Contact from './contact/contact'

function Content() {
  
  return (
      <Switch>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/skills'>
          <Skills2/>
        </Route>
        <Route path='/employment'>
          <Employment2 />
        </Route>
        <Route path='/projects'>
          <Projects2 />
        </Route>
        <Route exact path='/'>
          <Recommendations/>
        </Route>
      </Switch>
  );
}

export default Content;
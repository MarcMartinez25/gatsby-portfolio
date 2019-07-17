import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import picme from '../assets/images/picme.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Marco Martinez | Developer" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <p>I'm Marco and I have been doing web development and other development for the 
                  better part of three years now. I have worked in programming languages such as 
                  Python, Java, C, JavaScript, and many more! I also have experience in 
                  frameworks such as React. <br />When I am not doing computer related work, 
                  you can find me out and about doing various activities such as climbing, 
                  hiking, playing the blues, and finding new hobbies!</p>
              </div>
              <span className="image"><img src={picme} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="features">
            <li>
                <span className="icon major style1 fa-code"></span>
                <h3><a href='https://github.com/MarcMartinez25/React-Takehome-Project'>Deal Card</a></h3>
                <p>This is a problem that was given to me to test my skills as a react developer</p>
              </li>
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3><a href='https://github.com/MarcMartinez25/rock-wall-landing'>Climbing Gym</a></h3>
                <p>A landing page for an imaginary rock climbing gym</p>
              </li>
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3><a href='https://github.com/MarcMartinez25/dark-theme'>Light/Dark Mode Toggle</a></h3>
                <p>A cool little dark mode toggle</p>
              </li>
              <li>
                <span className="icon major style1 fa-terminal"></span>
                <h3><a href='https://github.com/MarcMartinez25/Journal-App'>Journal App</a></h3>
                <p>A journal app that you can run in the command line. It is built in python</p>
              </li>
              <li>
                <span className="icon major style1 fa-terminal"></span>
                <h3><a href='https://github.com/MarcMartinez25/DungeonGame'>Python Dungeon Game</a></h3>
                <p>This is a game that I learned to code in python</p>
              </li>
              <li>
                <span className="icon major style1 fa-terminal"></span>
                <h3><a href='https://github.com/MarcMartinez25/SpinAndWin'>Spin And Win Game</a></h3>
                <p>A simple game I made in java code that simulates a slot machine</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><a href="https://github.com/MarcMartinez25" className="button">See More</a></li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Let's Talk</h2>
              <p>Below is my email and links to various social platforms that I am on daily!<br /> <br />
              If you would like to talk about building a website, email is the prefered method <br /> <br />
              If you would like to talk about hiring, LinkedIn is the prefered method <br /> <br />
              If you would like to grab a beer and talk shop, send me a message through Twitter!</p>
            </header>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index

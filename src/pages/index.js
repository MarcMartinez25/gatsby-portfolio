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
                <p> Hi I'm Marco and I have been doing software development for three years as a student
                  and one year professionally. I love programming, it's great!! My favorite programming 
                  languages are Python, JavaScript, and C#! I have also worked with Java and a bit of Dart.
                  I am a big fan of Vue, but I also dabble in React and bit of Angular.
                  <br />When I am not doing computer related work, 
                  you can find me out and about doing various activities such as climbing, 
                  hiking, playing the blues, and making coffee!</p>
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
                <h3><a href='https://infallible-blackwell-eb116f.netlify.com/'>Line Charge Application</a></h3>
                <p>This web app allows you to input different types of transactions, like a bank statement.</p>
              </li>
              <li>
                <span className="icon major style1 fa-terminal"></span>
                <h3><a href='https://github.com/MarcMartinez25/Journal-App'>Journal App</a></h3>
                <p>A journal app that you can run in the command line. It is built in python</p>
              </li>
              <li>
                <span className="icon major style1 fa-terminal"></span>
                <h3><a href='https://frosty-noether-31d7f9.netlify.com'>Vue Todo List</a></h3>
                <p>The project is a simple todo list that allows you to: add todos, mark todos as completed, delete todos</p>
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
              <p>
                Below is my email and links to various social platforms that I am on daily!<br /> <br />
                If you would like to talk about building a website, working on project together, 
                or if you just want to talk shop and drink coffee, send me a message and I'll do my best to get back to you!
              </p>
            </header>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index

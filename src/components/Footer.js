import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Aliquam sed mauris</h2>
            <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
            <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul>
        </section>
        <section>
            <h2>Social</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>Oklahoma City, OK </dd>
                <dt>Email</dt>
                <dd>martinezma025@gmail.com</dd>
            </dl>
            <ul className="icons">
                <li><a href="https://twitter.com/MarcMartinez025" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/MarcMartinez25" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/marcmartinez25/" className="icon fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Marco Martinez 2019. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer

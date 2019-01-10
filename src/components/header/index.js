import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const links = [
  {
    title: 'Food Search',
    uri: '/'
  },
  {
    title: 'Ground Beef Calculator',
    uri: '/ground-beef-calculator'
  },
  {
    title: 'Downloads',
    uri: '/downloads'
  },
  {
    title: 'Help',
    uri: '/help'
  },
  {
    title: 'Contact Us',
    uri: '/contact-us'
  }
];

export default class Header extends Component {

  render() {
    return (
      <div className="menu">
        <Link to="/"><div className="menu__logo"></div></Link>
        <div className="menu__right">
          <div className="menu__login">
            <i class="fa fa-user"></i> <span>Login</span> <i style={{color: '#bbb'}} class="fa fa-caret-down"></i>
          </div>
          <div className="menu__right-bluebar"></div>
          <ul>{links.map(item => (
            <li key={item.uri} className="menu__item"><Link to={item.uri}>{item.title}</Link></li>
            ))}
          </ul>
        </div>

      </div>
    );
  }
}
import React, {Component} from 'react';
import SearchBox from '../components/searchbox';
import './home.css';

export default class Home extends Component {
  render() {
      return (
        <div className="home">
          <div className="home__splash">
            <h1>Find your food.</h1>
            <SearchBox large={true} />
          </div>
        </div>
        );
  }
}
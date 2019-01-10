import React, {Component} from 'react';
import SearchBox from '../components/searchbox';
import { Link } from 'react-router-dom';
import './search.css'

const dummyItems = [
  {
    key: "30",
    name: 'Lemon Pepper Spice',
    company: 'Iga, Inc',
    upc: '041270039673',
    image: '/images/peppers.jpg'
  },
  {
    key: "03033",
    name: 'Lemon Pepper Spice',
    company: 'Iga, Inc',
    upc: '041270039673',
    image: '/images/peppers.jpg'
  },
  {
    key: "0x39c",
    name: 'Lemon Pepper Spice',
    company: 'Iga, Inc',
    upc: '041270039673',
    image: '/images/peppers.jpg'
  }
]

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
      return (
        <div className="search">
          <div className="search__bar">
            <div className="search__bar-inner">
              <h1>"{this.props.match.params.query}"</h1>
              <SearchBox />
            </div>
          </div>

          <div className="search__results">
            <div className="search__results-inner">
              <h2>Search Results</h2>
              {dummyItems.map(item => (
                  <div key={item.key} className="search__results-item">
                      <ul>
                        <li><img src={item.image} /></li>
                        <li className="search__results-itemcontent">
                          <h3>{item.name}</h3>
                          <span>{item.company}</span>
                          <span>{item.upc}</span>
                        </li>
                        <li><Link className="search__results-itembtn" to={`/detail/${item.upc}`}>View</Link></li>
                      </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
        );
  }
}
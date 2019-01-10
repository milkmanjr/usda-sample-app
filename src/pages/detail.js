import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../components/searchbox'
import './search.css'
import './detail.css'

const dummyItems = [
  {
    key: "30",
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
              <h1>Lemon Pepper Spice</h1>
              <SearchBox />
            </div>
          </div>

          <div className="search__results">
            <div className="search__results-inner">

              {dummyItems.map(item => (
                  <div key={item.key} className="search__results-item">
                      <ul>
                        <li><img src={item.image} /></li>
                        <li className="search__results-itemcontent">
                          <h3>{item.name}</h3>
                          <span>{item.company}</span>
                          <span>{item.upc}</span>
                          <p>
                          Information provided by food manufacturers is label data.
Manufacturers are responsible for descriptions, nutrient data and ingredient information. USDA calculated values per 100 g from values per serving.</p>

                          <table cellspacing="0" className="details-table">
                            <thead>
                              <th>Nutrient</th>
                              <th>Unit</th>
                              <th>tsp 1g</th>
                              <th>Value per 100g</th>
                            </thead>
                            <tbody>
                            <tr class="sub-heading">
                              <td colspan="4">
                                Proximates
                              </td>
                            </tr>
                            <tr>
                              <td>Item</td>
                              <td className="center">0</td>
                              <td className="center">0</td>
                              <td className="center">0</td>
                            </tr>
                            <tr>
                              <td>Item</td>
                              <td className="center">0</td>
                              <td className="center">0</td>
                              <td className="center">0</td>
                            </tr>
                            <tr>
                              <td>Item</td>
                              <td className="center">0</td>
                              <td className="center">0</td>
                              <td className="center">0</td>
                            </tr>
                            </tbody>
                          </table>
                        </li>
                        <li>
                          <a className="search__results-itembtn" href="#">Download</a>
                          <br/>
                          <a className="search__results-itembtn" href="#">Print</a>
                        </li>
                      </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
        );
  }
}
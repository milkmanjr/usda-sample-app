import React, {Component} from 'react';
import { Redirect } from 'react-router';
import './searchbox.css';

export default class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {query: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.query) {
      this.setState({
        submitted: true
      })
    }
  }

  render() {
    /**
    * yikes!
    */
    if (this.state.submitted) {
      this.setState({
        submitted: false
      })
      return <Redirect to={`/food-search/${encodeURIComponent(this.state.query)}`} />;
    }

    return (
      <div className={`searchbox ${this.props.large ? 'searchbox--large' : ''}`}>

        <form onSubmit={this.handleSubmit}>
          <input
            autoComplete="off"
            value={this.state.query}
            name="query"
            placeholder="Search"
            onChange={this.handleChange}
            type="text" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
    );
  }
}
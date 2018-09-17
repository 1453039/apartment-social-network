import React, {Component} from 'react';
import axios from 'axios';

const {API_KEY} = process.env;
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest';

class Search extends Component {
  constructor () {
    super ();
    this.state = {
      query: '',
      results: [],
    };
  }

  getInfo () {
    axios
      .get (`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then (({data}) => {
        this.setState ({
          results: data.data,
        });
      });
  }

  handleInputChange () {
    this.setState (
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo ();
          }
        } else if (!this.state.query) {
        }
      }
    );
  }

  render () {
    return pug`
      form.navbar-form.navbar-right.hidden-sm
        div.form-group
          i.icon.ion-android-search
          input.form-control(type="text", placeholder="Search for...", onChange=this.handleInputChange)
    `;
  }
}

export default Search;

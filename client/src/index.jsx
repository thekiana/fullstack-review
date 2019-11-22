import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

// 1. user types Github username
//on Submit send Post request to server
//server GET that user's repos from GitHub API
//Server save repos to database

// 2. user visits / refreshes page
// GET top 25 repos in server's database
// take repos and render display on page

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);

    axios({
      method: 'post',
      url: '/repos',
      data: {
        name: term
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
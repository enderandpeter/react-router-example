import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'

const quotes = [
  {
    title: 'Magic: The Gathering',
    slug: 'magic',
    lines: [
      'There is no calm before the storm',
      'There is only Tempest'
    ]
  },
  {
    title: "Monty Python's Flying Circus",
    slug: 'python',
    lines: [
      'This is my only line',
      "But it's my only line!"
    ]
  },
  {
    title: "Pinky and the Brain",
    slug: 'pinky',
    lines: [
      'Why, Brain? What are we doing tomorrow night?',
      "Same thing we do every night, Pinky. Try to take over the world!"
    ]
  }

]

function Lines({ match, lines }){
  return (
    <div id="intro">
      <Link to={`${match.url}/closing`}>{lines[0]}</Link>
      <Route path={`${match.path}/closing`} render={() => (
        <Closing line={lines[1]} />
      )} />
    </div>
  )
}

function Closing({ match, line }){
  return (
    <div id="closing">
      {line}
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/'>Home</Link>
        <ul id="quoteList">
          {
            quotes.map(({ title, slug }) => (
              <li key={slug}>
                <Link to={`/${slug}`}>{title}</Link>
              </li>
            ))
          }
        </ul>
        {
          quotes.map(({ slug, lines }) => (
            <Route key={slug} path={`/${slug}`} render={({ match }) => (
              <Lines lines={lines} match={match} />
            )}/>
          ))
        }
      </div>
    );
  }
}

export default App;

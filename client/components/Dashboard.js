import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="center-align">
        <ul className="collection with-header">
          <li className="collection-header"><h5>Technology Stack</h5></li>
          <li className="collection-item"><div>Express<a href="https://expressjs.com/" target="_blank" className="secondary-content"><i className="material-icons blue-text text-darken-1">send</i></a></div></li>
          <li className="collection-item"><div>MongoDB<a href="https://www.mongodb.com/" target="_blank" className="secondary-content"><i className="material-icons blue-text text-darken-1">send</i></a></div></li>
          <li className="collection-item"><div>React<a href="https://reactjs.org/" target="_blank" className="secondary-content"><i className="material-icons blue-text text-darken-1">send</i></a></div></li>
          <li className="collection-item"><div>Apollo<a href="https://www.apollographql.com/" target="_blank" className="secondary-content"><i className="material-icons blue-text text-darken-1">send</i></a></div></li>
        </ul>
      </div>
    );
  }
}

export default Dashboard;

import React from 'react';
import './App.css';
import Fishpond from './component/Fishpond';

import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyApcmip4hkfL9qc8KzJpJqARWYUQ2NBh90",
  authDomain: "quack-services.firebaseapp.com",
  databaseURL: "https://quack-services-quackapipolda-staging.firebaseio.com/",
  projectId: "quack-services",
  storageBucket: "quack-services.appspot.com",
  messagingSenderId: "119094971730",
};
firebase.initializeApp(config);

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    const fdb = firebase.database().ref('clean_water')
    fdb.on('value', (snapshot) => {
      let data = snapshot.val()
      this.setState({data: data})
    })
  }

  render () {
    const {data} = this.state
    return (
      <div>
        <div style={{display: 'block', position: 'fixed', width: '100%', top: 0, padding: '10px', backgroundColor: 'rgb(27, 156, 218)', textAlign: 'center'}}>
          <h2 style={{color: '#fff', padding: 0, margin: 0}}>Clean Water Platform Solution (WaterQ)</h2>
        </div>
        
        <Fishpond data={data} />
      </div>
    );
  }
}

export default App;

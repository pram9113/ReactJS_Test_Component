import React, { Component } from 'react';
import logo from './logo.svg';
import MyButton from './MyButton.js';
import MyList from './MyList.js';

class App extends Component {
  render() {


    let listData = [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
    ]
    return (
      <div>
        {/*buttonText dipass disini karena buttonText di MyButton.JS dihilangkan sehingga perlu PropTypes untuk validasi*/}
      <MyButton buttonText="Kirim" buttonColor="green"/> 
      <MyList daftarBelanja={listData}/>
      </div>
     )

  }
}

export default App;

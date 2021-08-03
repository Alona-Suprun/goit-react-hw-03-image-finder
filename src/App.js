import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  state = {
    searchValue: '',
  };

  onSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    searchValue: '',
    showModal: false,
    modalUrl: '',
    modalAlt: '',
  };

  onSubmit = searchValue => {
    this.setState({ searchValue });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  modalContent = (url, alt) => {
    this.setState({ modalUrl: url, modalAlt: alt });
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery
          searchValue={this.state.searchValue}
          openModal={this.toggleModal}
          modalContent={this.modalContent}
        />

        {showModal && (
          <Modal onClose={this.toggleModal} modalContent={this.modalContent}>
            <img src={this.state.modalUrl} alt={this.state.modalAlt} />
          </Modal>
        )}

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

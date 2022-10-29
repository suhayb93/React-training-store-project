import React from 'react';
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "./Styles/mixins.scss"

import Products from "./Pages/Products/Products"
import NavBar from "./Components/NavBar/NavBar";
import CustomModal from "./Components/Modal/Modal";
import { GlobalContext } from './Utils/Contexts';
import { Modal } from 'bootstrap'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modalData: {
        title: '',
        body: '',
        footer: ''
      }
    }
  }

  componentDidMount() {
    this.modal = new Modal('#customModal');
  }

  showModal(modalData) {
    this.setState({
      modalData: {
        title: modalData.title,
        body: modalData.body,
        footer: modalData.footer
      }
    })

    this.modal.show();
  }

  render() {
    return (
      <GlobalContext.Provider value={{ showModal: this.showModal.bind(this) }}>
        <div className="App">
          <CustomModal
            title={this.state.modalData.title}
            body={this.state.modalData.body}
            footer={this.state.modalData.footer}
          />
          <NavBar />
          <Products />
        </div>
      </GlobalContext.Provider>

    );
  }

}

export default App;

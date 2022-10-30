import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "./Styles/mixins.scss"
import React from 'react';

import Products from "./Pages/Products/Products"

import NavBar from "./Components/NavBar/NavBar";
import CustomModal from "./Components/CustomModal/CustomModal";
import { GlobalContext } from './Utils/Contexts';
import { Modal } from 'bootstrap';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      modalData: {
        body: "",
        title: "",
        footer: ""
      }
    }
  }

  componentDidMount() {
    this.modal = new Modal('#customModal');

  }

  showModal = (options) => {
    this.setState({
      modalData: {
        body: options.body,
        title: options.title,
        footer: options.footer
      }
    }, () => {
      this.modal.show();
    })

  }

  render() {
    return (

      <GlobalContext.Provider value={{ showModal: this.showModal }}>
        <div className="App">
          <CustomModal
            title={this.state?.modalData?.title}
            body={this.state?.modalData?.body}
            footer={this.state?.modalData?.footer}
          />
          <NavBar />
          <Products />
        </div>
      </GlobalContext.Provider>

    );
  }



}

export default App;

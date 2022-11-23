import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Modal } from 'bootstrap';
import CustomModal from '../CustomModal/CustomModal'
import NavBar from '../NavBar/NavBar';
import { GlobalContext } from '../../Utils/Contexts';

function Layout() {

    const [modalData, setModalData] = useState({
        body: "",
        title: "",
        footer: ""
    });

    const modal = useRef();

    useEffect(() => {
        modal.current = new Modal('#customModal');
    }, [])

    const showModal = (options) => {
        setModalData({
            body: options.body,
            title: options.title,
            footer: options.footer
        })
        modal.current.show();

    }

    return (
        <GlobalContext.Provider value={{ showModal }}>
            <div className="App">
                <CustomModal
                    title={modalData?.title}
                    body={modalData?.body}
                    footer={modalData?.footer}
                />
                <NavBar />
                <Outlet />
            </div>
        </GlobalContext.Provider >)
}

export default Layout;
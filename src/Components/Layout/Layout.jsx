import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children ,footer}) => {
    return (
        <>
            <Header />
            {children}
            <Footer footer={footer} />
        </>
    )
}

export default Layout

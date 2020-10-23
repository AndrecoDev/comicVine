import React from 'react';
import Title from './Title/Title'

const Layout = ({ children }) => {
    return (
        <>
            <Title />
            {children}
        </>
    )
}

export default Layout;
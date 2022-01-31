import React, { FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from '../../styles/layout.module.scss'

const Layout: FC = (props): JSX.Element => {
    return (
        <div className={styles.container}>
            <Header />
            <div style={{ flex: 1 }}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
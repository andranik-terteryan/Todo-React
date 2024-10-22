import React from "react";
import styles from './header.module.scss'
const Header = () => {
    return (
        <header className={styles['app-header']}>
            <div className="container">
                <h1>Todos</h1>
            </div>
        </header>
    )
}


export default Header;
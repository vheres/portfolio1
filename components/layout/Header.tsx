import { FC } from 'react'
import styles from '../../styles/layout.module.scss'

const Header: FC = (): JSX.Element => {
    return (
        <div className={styles.headerContainer}>
            Yohanes <strong>William</strong>
        </div>
    )
}

export default Header
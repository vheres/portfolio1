import React from 'react'
import styles from '../../styles/common.module.scss'

interface IProps {
    status: string
}

const Label: React.FC<IProps> = ({ status, children }) => {
    return (
        <div className={`${styles.label} ${styles[status]}`}>
            {children}
        </div>
    )
}

export default Label
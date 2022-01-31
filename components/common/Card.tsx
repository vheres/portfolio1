import React, { FC } from 'react'
import styles from '../../styles/common.module.scss'

const Card: FC = ({ children }) => {
  return (
    <div className={styles.cardContainer}>
      {children}
    </div>
  )
}

export default Card
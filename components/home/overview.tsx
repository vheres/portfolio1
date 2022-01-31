import React, { FC } from 'react'
import Image from 'next/image'
import Card from '../common/Card'

import developer2 from '../../public/developer2.svg'

import styles from '../../styles/home.module.scss'

const Overview: FC = () => {
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.overviewAvatar}>
        <Image src={developer2} />
      </div>
      <div className={styles.overviewContent} style={{ marginTop: '3rem' }}>
        <div style={{ flex: 1, marginRight: '1rem' }}>
          <p className='text-secondary'>
            LATEST PROJECTS
          </p>
          <div>
            <Card>
              <h3>
                Mampir.in
              </h3>
              <p>
                Ordering platform for FnB and Lifestyle business
              </p>
              <p className='text-secondary'>
                ReactJS, React Native, ExpressJS, NodeJS, MongoDB
              </p>
            </Card>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Card>
              <h3>
                Qomodo
              </h3>
              <p>
                Survey platform with data analytics, visualization and report generation
              </p>
              <p className='text-secondary'>
                ReactJS, NextJS, React Native, ExpressJS, NodeJS, MongoDB
              </p>
            </Card>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Card>
              <h3>
                Purwadhika
              </h3>
              <p>
                Digital Technology School
              </p>
              <p className='text-secondary'>
                ReactJS, ExpressJs, NodeJS, MySQL
              </p>
            </Card>
          </div>
        </div>
        <div style={{ flex: 1, marginLeft: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
              <p className='text-secondary'>
                INTRODUCE
              </p>
              <h1>
                Yohanes William
              </h1>
              <i>
                <h3>
                  "websites should look good from the inside and out" - Paul Cookson
                </h3>
              </i>
              <p className='text-secondary'>
                I'm a software engineer, working primarily in the front-end side of things. Since the beginning of my journey as a developer 4 years ago, I've created a website for a professional company, collaborate with other talented people to realize their ideas and a couple of other interesting projects.
              </p>
              <p className='text-secondary'>
                I enjoy creating products that people use and appreciate, thus I always perpetually working on to improve my skills and adapt to rising technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
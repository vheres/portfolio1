import React, { FC } from 'react'
import Label from '../common/Label'
import Image from 'next/image'
import developer from '../../public/developer.svg'

import styles from '../../styles/home.module.scss'

const Banner: FC = () => {
  return (
    <div className={styles.bannerContainer}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div />
        <div style={{ paddingLeft: '10rem' }}>
          <Label status='primary'>
            Front-End Engineer
          </Label>
          <h1 style={{ fontSize: '3rem' }}>
            <div>Hi,</div>
            <div>I'm Yohanes William</div>
          </h1>
          <p style={{ fontSize: '1.5rem' }}>
            <div>I appreciate simple yet beautiful site,</div>
            <div>and I love creating them.</div>
          </p>
          <div style={{ marginTop: '4rem' }}>
            <a href='https://wa.me/6281915542713' target='_blank' rel='noreferrer noopener' className={`text-primary`} style={{ fontSize: '2rem' }}>
              Let's Chat!
            </a>
          </div>
        </div>
        <div className={styles.bannerFooter}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ fontSize: '3rem' }}>
              4+
            </div>
            <div className='text-secondary' style={{ marginLeft: '1rem' }}>
              <div>
                YEARS
              </div>
              <div>
                EXPERIENCE
              </div>
            </div>
          </div>
          {/* <div style={{ marginLeft: '5rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ fontSize: '3rem' }}>
              4+
            </div>
            <div className='text-secondary' style={{ marginLeft: '1rem' }}>
              <div>
                YEARS
              </div>
              <div>
                EXPERIENCE
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div>
        <Image src={developer} />
      </div>
    </div>
  )
}

export default Banner
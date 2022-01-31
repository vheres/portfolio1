import React, { FC } from 'react'
import Label from '../common/Label'
import styles from '../../styles/home.module.scss'

const Banner: FC = () => {
    return (
        <div>
            <div>
                <Label status='primary'>
                    Front-End Engineer
                </Label>
                <h1>
                    <div>Hi,</div>
                    <div>I'm Yohanes William</div>
                </h1>
                <p>
                    <div>I appreciate simple and beautiful site</div>
                    <div>and I love creating them.</div>
                </p>
                <div style={{ marginTop: '4rem' }}>
                    <a href='https://wa.me/6281915542713' target='_blank' rel='noreferrer noopener' className={`text-primary`} style={{ fontSize: '1.5rem' }}>
                        Let's Chat!
                    </a>
                </div>
            </div>
            <div style={{marginTop: '5rem', display: 'flex', flexDirection: 'row'}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div style={{fontSize: '3rem'}}>
                        4+
                    </div>
                    <div className='text-secondary' style={{marginLeft: '1rem'}}>
                        <div>
                            YEARS
                        </div>
                        <div>
                            EXPERIENCE
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: '5rem', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div style={{fontSize: '3rem'}}>
                        4+
                    </div>
                    <div className='text-secondary' style={{marginLeft: '1rem'}}>
                        <div>
                            YEARS
                        </div>
                        <div>
                            EXPERIENCE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
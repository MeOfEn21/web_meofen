
import React, { useState } from 'react';
import styles from './videoPreview.module.css';
import hotel_del_luna from '../../../assets/videos/Hotel_Del_Luna.mp4'
import VideoDetail from './videoDetail';


function VideoPreview() {
    return (<div className={styles.container}> 
        <div className={styles.overlay}>
            <div className={styles.videoContainer}>
                <video controls muted className={styles.videoPlayer}>
                    <source src={hotel_del_luna} type='video/mp4'></source>
                </video>
            </div>
            <div style={{position:'relative',left:'10%'}}>
                <VideoDetail/>
            </div>
        </div>
    </div>
    );
}

export default VideoPreview;

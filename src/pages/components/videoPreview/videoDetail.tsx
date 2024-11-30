import React, { useState } from 'react';
import styles from './videoPreview.module.css';
import hotel_del_luna from '../../../assets/videos/Hotel_Del_Luna.mp4'
import hotel_del_luna_img from '../../../assets/images/hotel_Del_Luna.png'
export default function VideoDetail(){
    return  <div className={styles.videoDetails}>
    <div className={styles.infoCon}>
        <img src={hotel_del_luna_img} alt={'Hotel del luna'} className={styles.videoThumbnail} />
        <h4 className={styles.videoTitle}>{'Hotel del luna'}</h4>
        <p className={styles.videoDescription}>{'2024 - 94m'}</p>
    </div>
    <div className={styles.watchDetails}>
        <button className={styles.watchNowButton}>Watch Now</button>
        <div className={styles.ratingSection}>
            <h4>RATING: <span>7.7/10</span></h4>
            <h4>YOUR RATING: <span>★ Rate</span></h4>
        </div>
        <div className={styles.videoDes}>
        <p >This movie is very good to watch. We are strongly recommand it for you.We hope you enjoy it like us. It said about drama and comdy and love to together at a time.</p>

        </div>
        <div className={styles.videoInformation}>
            <div className={styles.videoInfo}>   
            <p className={styles.release}><span>Released:</span> {'2014-09-12'}</p>
            <p className={styles.genre}><span>Genre:</span> {'Drama,Comdy'}</p>
            <p className={styles.cast}><span>Casts:</span> <a href='https://www.netflix.com/kh/title/81205849' target='_blank'>https://myflixerz.to/cast/natasha-lyonne</a></p>
        </div>
        <div className={styles.videoInfo2}>
            <p className={styles.Duration}><span>Duration:</span> {'104 min'}</p>
            <p className={styles.Country}><span>Country: </span><a href='https://myflixerz.to/country/us' target='_blank'>United state of america</a></p>
            <p className={styles.Production}><span>Production: </span><a href='https://www.netflix.com/kh' target='_blank'>Netflix Entertainment</a></p>
        </div>
        </div>
    </div>
</div>
}
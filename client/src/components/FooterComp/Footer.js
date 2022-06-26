import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'rgb(248,248,248)' }}>
            <p>Morgan Danton 2022</p>
            <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
                <InstagramIcon style={{ cursor: 'pointer', fontSize: '35px' }} onClick={() => window.location.href = 'https://WWW.instagram.com/watchmorganpaint'} />

                <img style={{ width: '35px', cursor: 'pointer' }} src="https://pnggrid.com/wp-content/uploads/2021/05/Outline-TikTok-Logo-1024x1024.png" alt="tik tok" onClick={() => window.location.href = 'https://www.tiktok.com/@watchmorgspaint'} />

                <img style={{ width: '35px', cursor: 'pointer' }} src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112016/untitled-1_867.jpg?itok=R35HwwHP" alt="" onClick={() => window.location.href = 'https://www.SOCIETY6.com/morgandanton'} />
            </div>
        </div>
    )
}

export default Footer

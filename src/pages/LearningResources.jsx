import React from 'react';
import Navbar from '../components/Navbar';
import './LearningResources.css';
import { Typography, Box, Link, CardMedia, CardContent } from '@mui/material';

const youtubeChannels = [
  { name: 'Live Over Flow', url: 'https://www.youtube.com/c/Liveoverflow', image:' https://yt3.googleusercontent.com/ytc/AIdro_kBtDJJEl5_NzLvYTlkuAS8q0uPsCj8pUP4IVFJN5wIBTQ=s160-c-k-c0x00ffffff-no-rj', description: 'Learn full-stack web development, programming, and more.' },
  { name: 'STOK', url: 'https://www.youtube.com/c/Stok', image: 'https://yt3.googleusercontent.com/ytc/AIdro_l47wT6zQtlx2NmJ0g38z4BGirGMIxOShB2sbhm5p2olKI=s160-c-k-c0x00ffffff-no-rj', description: 'Web development tutorials for beginners and pros.' },
  { name: 'John Hammond', url: 'https://www.youtube.com/c/cs50', image: 'https://yt3.googleusercontent.com/6FqcWoHZvrZixaGi1S3Re3Z90SCS3iq2_36hQSnSHQPtQVVkywH8WKka53MiBYBSP6DmqM-g9w=s160-c-k-c0x00ffffff-no-rj', description: 'Harvard’s famous computer science course online.' },
  { name: 'NahamSec', url: 'https://yt3.googleusercontent.com/PjQ5Sf-B_fBGgMJS4pBPa0gV0LqW1Y8Pvuk7X-x7NBiM3bnnZ-1lqtzz5y7WL4-8iyr-30iuVw=s160-c-k-c0x00ffffff-no-rj', image: 'https://yt3.googleusercontent.com/PjQ5Sf-B_fBGgMJS4pBPa0gV0LqW1Y8Pvuk7X-x7NBiM3bnnZ-1lqtzz5y7WL4-8iyr-30iuVw=s160-c-k-c0x00ffffff-no-rj', description: 'Great programming tutorials for all levels.' },
  { name: 'David Bombal', url: 'https://www.youtube.com/c/TheNetNinja', image: 'https://yt3.googleusercontent.com/ZeokXdjeXW_6CpcChqvVBEBcHoJ9TAaLTnQj8yT942LLV8afhmUv6zLtqzbNS1uPnernj3SPshA=s160-c-k-c0x00ffffff-no-rj', description: 'High-quality tutorials on modern web development.' },
  { name: 'Rana Khalil', url: 'https://www.youtube.com/c/Codevolution', image: 'https://yt3.googleusercontent.com/FhpSyEANyq0luHRv8Ukk5-AKUI26Q9mkTzzjUG9LYxOYrniFSllEBM7jfQKMZBnMwUsSsyt23A8=s160-c-k-c0x00ffffff-no-rj', description: 'React, JavaScript, and web development tutorials.' },
  { name: 'Hak5', url: 'https://www.youtube.com/c/Academind', image: 'https://yt3.googleusercontent.com/ytc/AIdro_m2AwyJGGqSgxlCUhtiNyhmntG_ph_Y5-TZ9Jxf7z4G-5g=s160-c-k-c0x00ffffff-no-rj', description: 'Web development tutorials and more.' },
  { name: 'Hacker Sploit', url: 'https://www.youtube.com/c/Fireship', image: 'https://yt3.googleusercontent.com/ytc/AIdro_k_J7wNcT5Rol4WmhPhxxZVp838zcB1tDhWH2ywfnIZp-o=s160-c-k-c0x00ffffff-no-rj', description: 'High-intensity coding tutorials.' },
  { name: 'PwnFunction', url: 'https://www.youtube.com/c/TechWithTim', image: 'https://yt3.googleusercontent.com/vIICwaNg76kXa-SZVfw2d-wuXWX6-yKLVEh0EZZ_apGZ634M8sUoURAhyZjTHIyhBqXi0N3Cyg=s160-c-k-c0x00ffffff-no-rj', description: 'Python and machine learning tutorials.' },
  { name: 'Insider PHD', url: 'https://www.youtube.com/c/DerekBanas', image: 'https://yt3.googleusercontent.com/Jm2TlTuY3k_DXizILpVSV6hIggz6S86ED6Qq-pGMnW-g1I76jesX5_0xyzu_UmHtpSZvIQVE=s160-c-k-c0x00ffffff-no-rj', description: 'Comprehensive tutorials on coding and design.' },
  { name: 'Farah Hawa', url: 'https://www.youtube.com/c/TheCodingTrain', image: 'https://yt3.googleusercontent.com/f_zPM2vzeW9AvfD7yTM0aqNLb4KBdtp1tOBd3HRM97CTO4j9NpDr_XXBAyRHQ0dDsaiJ2Lkp=s160-c-k-c0x00ffffff-no-rj', description: 'Fun coding challenges and tutorials.' },
  { name: 'GynvaelEN', url: 'https://www.youtube.com/c/GeeksforGeeks', image: 'https://yt3.googleusercontent.com/ytc/AIdro_mauRuaGqMkPF1EisLSRxpmP_04BBTHCL6oxF0uhL72GQ=s160-c-k-c0x00ffffff-no-rj', description: 'Tutorials on algorithms, data structures, and programming.' },
  { name: 'IPPSEC', url: 'https://www.youtube.com/c/TheNetNinja', image: 'https://yt3.googleusercontent.com/ytc/AIdro_mizQndR7_CDVi7SWjZ82AVAUlUm8bO2ySAzIwWbBA_4g=s160-c-k-c0x00ffffff-no-rj', description: 'High-quality tutorials on modern web development.' },
  { name: 'CryptoCat', url: 'https://www.youtube.com/c/CodeWithHarry', image: 'https://yt3.googleusercontent.com/xauL0zqwtk8zATXIyNOBeUNr3HxsT3e1qYq9KW0T2OIlKbpP7vstlSuI7ZbEuZ72F7hzVuuJsQ=s160-c-k-c0x00ffffff-no-rj', description: 'Coding tutorials in Hindi.' },
  { name: 'Joe Grand', url: 'https://www.youtube.com/c/BroCodez', image: 'https://yt3.googleusercontent.com/Q6WSi2rUhFWc7Ak2y9BZgD0_tAQOjcR1vzeOU1mHeMPBCvwEB1xFkzW-0htjNLMtbtbrebwYsGA=s160-c-k-c0x00ffffff-no-rj', description: 'C++ and Java programming tutorials.' },
  { name:'Stack Smashing', url: 'https://www.youtube.com/c/WebDevSimplified', image: 'https://yt3.googleusercontent.com/ytc/AIdro_k0zgeBetnKOR9pAF0lfn87XESBiJBIQUMSDJ11sLcScnw=s160-c-k-c0x00ffffff-no-rj', description: 'Simplified web development tutorials.' },
  { name: 'Security FWD', url: 'https://www.youtube.com/c/DesignCourse', image: 'https://yt3.googleusercontent.com/ytc/AIdro_l_BwDQK-RgmA23nlEjyti4IPnH4oXYyGP3u03Lq1JaDg=s160-c-k-c0x00ffffff-no-rj', description: 'UI/UX and frontend design tutorials.' },
  { name: 'Lostsec', url: 'https://www.youtube.com/c/WebDevCody', image: 'https://yt3.googleusercontent.com/F2mQqcsSkxQ4uC623M_J1bpio2lLxf9pe0-roGM-gQm5D6vqojKRs_TGrBUpMMtboHPtWhTdpQ=s160-c-k-c0x00ffffff-no-rj', description: 'Web development for beginners.' },
 
];


function LearningResources() {
  return (
    <div className="learning-resources">
      <Navbar />
      <div className="resources">
        <Box sx={{ padding: '20px' }}>
          {/* <Typography variant="h4" sx={{ color: '#fff', marginBottom: '20px', textAlign: 'center' }}>
            Learning Resources
          </Typography> */}
          <div className="hex-grid">
            {youtubeChannels.map((channel, index) => (
              <div className="hex" key={index}>
                <Link href={channel.url} target="_blank" rel="noopener" underline="none">
                  <CardMedia component="img" height="100" image={channel.image} alt={channel.name} />
                  <CardContent className="hex-content">
                    <Typography variant="h6" sx={{ color: '#fff', textAlign: 'center' }}>{channel.name}</Typography>
                  </CardContent>
                </Link>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
}

export default LearningResources;

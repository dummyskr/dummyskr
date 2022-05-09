import { useState } from 'react'
import styles from '../styles/Home.module.css'
import OtpInput from 'react-otp-input';
import Router from 'next/router';
export default function Home() {
  const [otp, setOtp] = useState("")
  const handleChange = (otp) => setOtp(otp);
  const [error, showError] = useState(false)
  const handleEnter = () => {
    if (otp === "ASHA") {
      Router.push("/1")
    } else {
      showError(true)
    }
  }
  return (
    <div className={styles.main}>
      <img style={{ width: "100%" }} src="/gift.gif"></img>
      <h1 style={{ letterSpacing: "2px" }}>Happy Birthday Keerthana🧚‍♀️....</h1>
      <p>Hey you.., you are not blessed to access this web site, If you think you are Please crack the password</p>
      <OtpInput
        inputStyle={{ width: "80px", height: "40px" }}
        value={otp}
        onChange={handleChange}
        numInputs={4}
        separator={<span>-</span>}
      />
      <button className={styles.enter} onClick={()=>handleEnter()}>Enter</button>
      {error&&<h2 style={{color:"red"}}>I said you are not special....Try again</h2>}
    </div>
  )
}

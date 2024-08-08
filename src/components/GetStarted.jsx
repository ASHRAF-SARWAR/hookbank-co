import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
const GetStarted = () =>(
    <div className={`${styles.flexCenter} bg-blue-gradient w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} bg-primary flex-col rounded-full w-[100%] h-[100%]`}>
            <div className={`${styles.flexStart} flex-row`}>

         
<p className={` font-poppins text-[18px] leading-[23px]`}>
    <span className='text-gradient'> Get</span>

</p>
<img src={arrowUp} alt='arrow' className='w-[23px] h-[23px] '></img>

</div>
<p className={` font-poppins text-[18px] leading-[23px]`}>
    <span className='text-gradient'> Started</span>

</p>
        </div>

    </div>
  )


export default GetStarted
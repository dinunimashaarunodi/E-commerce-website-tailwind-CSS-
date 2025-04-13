import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={' US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online.Our journy began with a simple idea todicover,explore and purchase a wide range of products from the comfort of their homes.</p>
          <p>Scince our inception ,we have worked tirekessly to curate a diverse selction og high-quality products that orderto every taste and preference.From fashion and beuty to electronics and home essentials.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mision at Forever is to empower customers with choice,convenience andconfidense.</p>
        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Qulity Assuarance:</b>
          <p className='text-gray-600'> we meticuluosly select and veteach product to ensure it meets our stringent qulity standersds</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Conveniance:</b>
          <p className='text-gray-600'> With our user-frenldy interfaceand hasselt-free orderingprocess,shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'> Our team of dedicated proffessionals is here to assist you the way,ensuring your priority.</p>
        </div>

      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About
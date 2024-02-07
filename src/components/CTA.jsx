import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  const formUrl = "https://form.jotform.com/240348182837057";
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Let's bring your game idea to life! Complete our form for a personalized quote and start your creative journey with us.
        </p>
      </div>
      <a href={formUrl} target="_blank" rel="noopener noreferrer" 
      className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </a>
    </section>
  )
}

export default CTA

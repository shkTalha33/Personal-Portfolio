import React from 'react'
import CountUp from 'react-countup'
export default function useCounterUpPage ({end}) {
  return (
    <>
        <CountUp start={0} end={end} delay={0} duration={4}/>
    </>
  )
}

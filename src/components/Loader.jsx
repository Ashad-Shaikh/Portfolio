import { Html, useProgress } from '@react-three/drei'
import { html } from 'motion/react-client'
import React from 'react'

const Loader = () => {
    const {progress} = useProgress()
  return (
    <Html center className='font-normal text-xl text-center'>{progress}% Loaded</Html>
  )
}

export default Loader

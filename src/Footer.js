import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {
    const veri = useSelector(state=>state.counter.value)

  return (
    <div>
        benim globalden gelen degerim: {veri}
    </div>
  )
}

export default Footer
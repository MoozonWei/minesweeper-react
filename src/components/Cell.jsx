import React from 'react'
import { Icon } from '@iconify/react';

export default function Cell({
  details,
  updateFlag,
  revealCell
}) {
  function displayWhat(details) {
    if (details.revealed) {
      const v = details.value
      if (v === 'X') {
        return <Icon icon="mdi:mine" className='w-full h-full p-2 bg-red-500' />
      } else if (v === 0) {
        return <span className='w-full h-full bg-gray-100'></span>
      } else if (v === 1) {
        return <span className='w-full h-full font-bold flex justify-center items-center text-blue-500 bg-blue-100'>
          {v}
        </span>
      } else if (v === 2) {
        return <span className='w-full h-full font-bold flex justify-center items-center text-green-500 bg-green-100'>
          {v}
        </span>
      } else if (v === 3) {
        return <span className='w-full h-full font-bold flex justify-center items-center text-pink-500 bg-pink-100'>
          {v}
        </span>
      } else if (v === 4) {
        return <span className='w-full h-full font-bold flex justify-center items-center text-red-500 bg-red-100'>
          {v}
        </span>
      } else if (v === 5) {
        return <span className='w-full h-full font-bold flex justify-center items-center text-red-500 bg-red-100'>
          {v}
        </span>
      } else if (v === 6) {
        return <span className='w-full h-full font-bold flex justify-center items-center text-orange-500 bg-orange-100'>
          {v}
        </span>
      } else if (v === 7) {
        return <span className='w-full h-full font-bold flex justify-center items-center text-orange-500 bg-orange-100'>
          {v}
        </span>
      } else if (v === 1) {
        return <span className='w-full h-full font-bold flex justify-center items-center text-orange-500 bg-orange-100'>
          {v}
        </span>
      }
    } else if (details.flagged) {
      return <Icon className='text-red-500' icon="material-symbols:flag" />
    } else {
      return ''
    }
  }
  return (
    <button
      className="w-10 h-10 flex justify-center items-center border-1 hover:bg-gray-100 active:bg-gray-200 transition"
      onContextMenu={(e) => {
        e.preventDefault()
        updateFlag(e, details.x, details.y)
      }}
      onClick={(e) => revealCell(e, details.x, details.y)}
    >
      {displayWhat(details)}
    </button>
  )
}

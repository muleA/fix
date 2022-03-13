import React from 'react'
import dynamic from 'next/dynamic'
const Category= dynamic(()=>import('../../../features/settings/pages/category-list' ))
export default function Home(){
  return (
    <Category/>
  )
}

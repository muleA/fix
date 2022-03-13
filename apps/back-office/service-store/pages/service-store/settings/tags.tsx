import React from 'react'
import dynamic from 'next/dynamic'
const Tags = dynamic(() => import('../../../features/settings/pages/tags-list'))

export default function TermsandUse(){
  return (
<>
<Tags/>
</>
    )
}

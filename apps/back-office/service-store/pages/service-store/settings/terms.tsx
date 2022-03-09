import React from 'react'
import dynamic from 'next/dynamic'
const TermsandUsePolicy = dynamic(() => import('../../../features/settings/pages/terms'))

export default function TermsandUse(){
  return (
<>
<TermsandUsePolicy/>
</>
    )
}

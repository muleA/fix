import React from 'react'
import dynamic from 'next/dynamic';
const  ApplicationForms =dynamic(()=>import('../../../features/application-forms/pages/forms'));
export const AppForms = () => {
  return (
<>
<ApplicationForms/>
</>
    )
}

export default AppForms;
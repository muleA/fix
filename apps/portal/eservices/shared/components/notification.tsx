import React, { useState } from 'react'
import { ToastContainer, Toast, ProgressBar } from 'react-bootstrap'


export type Props = {
  show: boolean,
  message: any,
  header?: any,
}
export default function Notification(props: Props) {
  const [showInfo, setShowInfo] = useState(props.show);
  return (


     <div className='fixed-bottom d-flex justify-content-end'>
        <ToastContainer  className="  p-3">
        <Toast onClose={() => setShowInfo(false)} show={showInfo} delay={3000} autohide>
          <Toast.Header className='d-flex justify-content-between'>
            <strong className="me-auto">{props.header}</strong>
          </Toast.Header>
          <Toast.Body>{props.message}</Toast.Body>
        </Toast>
      </ToastContainer>
     </div>
  )
}

import React, { Children, ReactChild } from 'react'

interface props{
    children:any
}
function Container(props:props) {

    return (
        <div className='tw-container-fluid tw-ml-5 tw-mr-5 tw-mb-4'>
            {props.children}
        </div>
    )
}

export default Container

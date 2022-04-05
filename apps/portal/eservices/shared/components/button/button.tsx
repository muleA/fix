
// import { Spinner, Button as BButton  } from 'react-bootstrap';
import styled from 'styled-components';
import {Button as MButton,Loader} from '@mantine/core'

export type ButtonProps = {
  isLoading?:boolean;
  children?:any;
  size?:'sm'| 'lg';
  variant?:string;
  type?:'button'| 'submit' | 'reset';
  className?:string;
};

 const StyledButton = styled(MButton)`
 `;



export const Button = (props) => {
  return (
    <StyledButton size={props.size}
    variant={props.variant}
    type={props.type}
    className={props.className}
    onClick={props.onClick}
    disabled={props.disabled}
    >
{props.isLoading && <><Loader size={'sm'} /> 
    </>
}
 {props.children}
    </StyledButton>
  )
}


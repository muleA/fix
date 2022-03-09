import { Spinner, Button as BButton  } from 'react-bootstrap';
import styled from 'styled-components';

export type ButtonProps = {
  isLoading?:boolean;
  children?:any;
  size?:'sm'| 'lg';
  variant?:string;
  type?:'button'| 'submit' | 'reset';
  className?:string;
};

 const StyledButton = styled(BButton)`

 `
export const Button = (props) => {
  return (
    <StyledButton size={props.size}
    variant={props.variant}
    type={props.type}
    className={props.className}
    onClick={props.onClick}
    disabled={props.disabled}
    >
{props.isLoading && <><Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
      className='mr-2'
    />
    <span className="visually-hidden">Loading...</span>
    </>
}
{props.children}
    </StyledButton>
  )
}

export default Button;
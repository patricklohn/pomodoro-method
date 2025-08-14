import styled, {css} from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVarians = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    background-color: ${props => props.theme['green-500']};
    
    /* ${props => {
        return css`
        background-color: ${buttonVarians[props.variant]}
        `
    }} */
`

export default ButtonContainer
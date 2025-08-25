import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;

        button{
            width: 100%;
            border: 0;
            padding: 1rem;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            font-weight: bold;
            cursor: pointer;
            background-color: ${props => props.theme["green-500"]};
            color: ${(props) => props.theme["gray-100"]}
        }

        button[type="button"]{
            width: 100%;
            border: 0;
            padding: 1rem;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            font-weight: bold;
            cursor: pointer;
            background-color: ${props => props.theme["red-500"]};
            color: ${(props) => props.theme["gray-100"]}
        }

        button:not(:disabled):hover{
            background-color: ${props => props.theme["green-700"]};
        }

         button[type="button"]:not(:disabled):hover{
            background-color: ${props => props.theme["red-700"]};
        }

        button:disabled{
            opacity: 0.7;
            cursor: not-allowed;
        }
    }
`;
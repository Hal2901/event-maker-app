import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* border: 1px solid red; */
    }

    body {
        background-color: ${({ theme }) => theme.backgroundColors};
        color: ${({ theme }) => theme.textcolors};
        font-family: 'Poppins', sans-serif;
        width: 100vw;
        height: 100%;
    }
  
    #root {
        height: 100%;
    }

    ol,
    ul {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }

    button {
        cursor: pointer;
        border: none;
        color: ${({ theme }) => theme.textColors};
        background-color: ${({ theme }) => theme.backgroundColors};
        &:hover {
            opacity: 0.5;
        }
    }

    p {
        flex-shrink: 0;
    }

    .modal-open {
        opacity: 0.5;
        pointer-events: none;
    }
    
    .current-day {
        background-color: ${({ theme }) => theme.textColors};
        color: ${({ theme }) => theme.backgroundColors};
        border-radius: 0.75rem;
    }

    .selected-day {
        border: 1px solid ${({ theme }) => theme.textColors};
        border-radius: 0.75rem;
    }
`;
export default GlobalStyles;

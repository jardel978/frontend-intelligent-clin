import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #E0E5E5;
    --texto-titulos: #39CCBB;
    --texto: #254040;
    --texto-btn: #E0E5E5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(---background);
    --webkit-font-smoothig: antialiased;
  }
  
  body, input, textarea, select, button {
    font: 400 1rem 'Rajdhani', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }  

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .swal2-popup {
    width: 450px;
    height: 400px;
    
    .swal2-html-container {
      font-size: 1.3rem !important;
      font-weight: 500;
    }

    .swal2-confirm {
      width: 80px;
    }
  }

  .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        height: 350px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: .24rem;
    }
`;

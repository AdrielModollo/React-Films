import styled from 'styled-components'

export const Container = styled.div`
    
    padding: 4rem 0;

    h1 {
        margin: 3rem 0;
    }

    .movie {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 300px;
        border-radius: 1rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
    }

    button {
        background: #6654da;
        border: node;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.3s;
    }

    button:hover {
        background: #5848c2;
    }

    span {
        line-heigth: 130%;
        margin-bottom: 1rem;
        font-size: 120%;
    }

    button[disabled] {
        background-color: #ddd;
        color: #888;
        cursor: not-allowed;
      }
      

    .release-date {
        opacity: 0.5;
    }

    .logout-button {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 999;
        opacity: 0.8;
        font-size: 0.8rem;
        padding: 0.5rem 1rem;
        transform: translateY(50%);
        transition: all 0.3s ease-in-out;
        height: 2rem;
        width: 4rem;
        border: none;
        border-radius: 1rem;
      }
      
      .logout-button:hover {
        background-color: #ffffff;
        color: #008080;
        height: 2.5rem;
        width: 5rem;
        transform: translateY(0%);
      }
`
import styled from "styled-components";

export const Container = styled.div`
    h1 {
       text-align: center;
       margin: 4rem 0;
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
      
      
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`


export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 180px;
        border-radius: 1rem; 
        margin-bottom: 2rem;
    }

    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }

`
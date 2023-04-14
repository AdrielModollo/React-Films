import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    color: white;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

export const Div = styled.div`
    margin-bottom: 20px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    padding: 5px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    color: black;
    background-color: white;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #0062cc;
    }
`;

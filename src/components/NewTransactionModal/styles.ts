import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--text-title);
  }
  input {
    padding: 0 1.5rem;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 400;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    background: var(--green);
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s ease-in-out;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'red' | 'green';
}

const color = {
  red: '#e52e4d',
  green: '#33cc95'
}

export const RadioBox = styled.button<RadioBoxProps>`
   display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  transition: border-color 0.2s ease-in-out;

  background-color: ${props => (
    props.isActive 
    ?  transparentize(0.9, color[props.activeColor])
    : "trasparent"
    )};

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
  img {
    width: 20px;
    height: 20px;
  }
  span {
    display: block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
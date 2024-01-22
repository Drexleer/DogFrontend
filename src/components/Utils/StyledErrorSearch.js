import styled from "styled-components";

export const DivContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const CustomButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-family: inherit;
  font-size: 15px;
  width: 140px;
`;

export const LearnMoreButton = styled(CustomButton)`
    margin-right: 2em;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: #382b22;
  text-transform: uppercase;
  padding: 1.25em 2em;
  background: #FFF6ED;
  border: 2px solid #F0D2B6;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #F0D2B6;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  &:hover {
    background: #F9EEE3;
    transform: translate(0, 0.25em);
  }

  &:hover::before {
    box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
    transform: translate3d(0, 0.5em, -1em);
  }

  &:active {
    background: #ffe9e9;
    transform: translate(0em, 0.75em);
  }

  &:active::before {
    box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
    transform: translate3d(0, 0, -1em);
  }
`;
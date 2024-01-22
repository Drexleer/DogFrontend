import styled from 'styled-components';

const fontColor = "#3F4045";
const formBorderColor = '#F0D2B6';
const secondaryBgColor = "#FCFCFC";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "left right";
  max-width: 900px;
  margin: auto; /* Esto centrará horizontalmente el contenedor */
`;

export const LeftContainer = styled.div`
  border: 15px solid ${formBorderColor};
  border-radius: 15px;
  background: ${secondaryBgColor};
  overflow: hidden;
  padding: 40px 0 0 0;
  position: relative;
  text-align: center;
  width: 300px;

  img{
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  border: 15px solid ${formBorderColor};  
  border-radius: 15px;
  background: radial-gradient(circle at top left,transparent 9%, #E7D8C9 10% ,#E7D8C9 15% , transparent 16%) , radial-gradient(circle at bottom left,transparent 9%, #E7D8C9 10% ,#E7D8C9 15% , transparent 16%), radial-gradient(circle at top right ,transparent 9%, #E7D8C9 10% ,#E7D8C9 15% , transparent 16%) , radial-gradient(circle at bottom right,transparent 9%, #E7D8C9 10% ,#E7D8C9 15% , transparent 16%),radial-gradient(circle, transparent 25%, #FAF9F9  26%),linear-gradient(45deg, transparent 46%, #E7D8C9 47%, #E7D8C9 52%, transparent 53%), linear-gradient(135deg, transparent 46%, #E7D8C9 47%, #E7D8C9 52%, transparent 53%);
        background-size: 3em 3em;
        background-color: #FAF9F9;
        opacity: 1;
  display: grid;
  grid-template-areas: "." ".";
  width: 600px;
  height: 600px;
  font-family: monospace;

  h1{
    color: ${fontColor};
    font-size: 28px;
    font-weight: 600;
    margin: 1em;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  input {
    border: 1px solid ${formBorderColor};
    border-radius: 4px;
    height: 38px;
    line-height: 38px;
    padding-left: 5px;
  }
  select {
    margin-left: 1em;
    width: 140px;
    color: black;
    padding-left: 1em;
    font-family: monospace;
    text-decoration: none;
    font-weight: 500;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    &:hover {
    outline: 2px solid #e8e8e8;
    background: white;
    color: black;
    transform: scale(1.05);
    }
    &:active {
    box-shadow: none;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap; /* Permite que los elementos se envuelvan a la siguiente fila si no caben en el ancho del contenedor */
    justify-content: flex-start;
  }
  label {
    color: ${fontColor};
    margin: 5px;
    margin-left: 1em;
    font-weight: bold;
    font-size: 20px;
  }

  header {
    padding: 40px;
  }

  input {
    width: 176px;
  }

  footer {
    align-items: center;
    background: #fff;
    display: grid;
    padding: 5px 40px;

  }
`;

// Estilos para los enlaces que se comportan como botones
export const Temperaments = styled.button`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: #E7D8C9;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin: 0.5em;
  position: relative;
  
  &:hover {
    background: #D64933;
    color: black;
    transform: scale(1.1);
  }

  &::after {
    content: "Delete";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0; /* Inicialmente ocultamos la "X" */
  }

  &:hover::after {
    opacity: 1; /* Muestra la "X" al hacer hover */
  }

  &:hover span {
    visibility: hidden; /* Oculta el contenido de <span> al hacer hover */
  }
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
`;

export const BackButton = styled(CustomButton)`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: #382b22;
  text-transform: uppercase;
  padding: 0.8em 1.5em;
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

export const CreateButton = styled.button`
  position: relative;
  width: 155px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #34974d;
  background-color: #3aa856;
  transition: all 0.3s;
  margin: auto;
  margin-bottom: 2em;
  
  &:hover {
    background: #34974d;
  }

  &:active {
    border: 1px solid #2e8644;
  }
`;

export const Text = styled.span`
  transform: translateX(18px);
  font-family: monospace;
  font-size: 15px;
  color: white;
  font-weight: 600;
  transition: all 0.3s;

  ${CreateButton}:hover & {
    color: transparent;
  }
`;

export const IconContainer = styled.span`
  position: absolute;
  transform: translateX(109px);
  height: 100%;
  width: 39px;
  background-color: #34974d;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  ${CreateButton}:hover & {
    width: 148px;
    transform: translateX(0);
  }
`;

export const Icon = styled.svg`
  width: 30px;
  stroke: #fff;
`;

export const WarningSpan = styled.span`
  color: red;
  font-weight: bold; 
  padding: 0.8em;
`;
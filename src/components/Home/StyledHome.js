import styled, {keyframes} from "styled-components";
import { beige, beigeOscuro, Ecru} from "../Utils/Colors";

export const DivContainer = styled.div`
position: relative;
  gap: 20px;
`;

export const Logo = styled.img`
    height: 80px;
    margin-top: 10px;
`;

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: fit-content;
  padding-left: 1em;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 20px;
  img {
    width: 90%;
    height: 90%;
  }
  `;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px;
`;

export const FilterSelect = styled.select`
  padding: 5px;
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px; /* Cambiamos la altura a 45px */
  padding-top: 1em;
`;

export const Input = styled.input`
font-family: monospace;
  max-width: 250px; /* Aumentamos el ancho máximo */
  height: 25px;
  outline: none;
  font-size: 20px; /* Aumentamos el tamaño de fuente */
  background-color: #DFDFDF;
  caret-color: ${beige};
  color: black;
  padding: 20px 15px; /* Aumentamos el padding para hacerlo más grande */
  border: 2px solid transparent;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  margin-right: 1px;
  transition: all 0.2s ease;
  margin-left: 1em;

  &:hover {
    border: 2px solid ${Ecru};
  }

  &:focus {
    border: 2px solid ${beigeOscuro};
    background-color: ${beige};
  }
`;

export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${beige};
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 100%;
  width: 48px;
  height: 50px;


  &:hover {
    background-color: ${Ecru};
  }
`;

export const SelectBox = styled.div`
  width: fit-content;
`;

export const SelectElement = styled.select`
color: black;
font-family: monospace;
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: ${beige};
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin: 0.5em;
  &:hover {
    outline: 2px solid #e8e8e8;
    background: white;
    color: black;
    transform: scale(1.1);
  }
  &:active {
    box-shadow: none;
  }
`;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ResetButton = styled.button`
  color: white;
  font-family: monospace;
  background-color: #3F403F;
  font-weight: 500;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  text-align: center;
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
  border: none;

  &:hover {
    background-color: #333;
  }

  svg {
    display: inline;
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.75rem;
    color: white;
  }

  &:focus svg {
    animation: ${spinAnimation} 0.5s linear;
  }
`;

export const ImgNewDog = styled.img`
  width: 50px;
  height: 50px;
`;

export const NewDogButton = styled.button`
  display: flex;
  align-items: center;
  font-family: monospace;
  font-weight: bold;
  border: none;
  cursor: pointer;
  background-color: ${beige};
  border-radius: 7px;
  width: fit-content;
  height: fit-content;

  &:hover {
    background-color: ${Ecru};
  }
`;
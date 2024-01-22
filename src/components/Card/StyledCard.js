import styled, { keyframes} from 'styled-components';
import { Text, Silver } from '../Utils/Colors';

export const CardContainer = styled.div`
  width: 100%;
  height: 350px;
  background: linear-gradient(45deg, #ffffff 20%, transparent 20%, transparent 80%, #ffffff 80%),linear-gradient(135deg, #ffffff 40%, #E7D8C9 40%, #E7D8C9 60%, #E7D8C9 60%, #ffffff 60%) , linear-gradient(45deg, #ffffff 20%, #E7D8C9 20%, #E7D8C9 80%, #ffffff 80%);
        background-size: 2em 2em;
        background-color: #ffffff;
        opacity: 1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04) rotate(-1deg);
  }
`;

// Estilizar la imagen
export const Img = styled.img`
  height: 30%;
  width: 17%;
  position: absolute;
  transition: 0.2s ease-in-out;
  z-index: 1;
  object-fit: cover;
  border-radius: 10px;

  ${CardContainer}:hover & {
    height: 80%;
    width: 80%;
    filter: blur(7px);
    animation: ${keyframes`
      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(-20px);
      }

      100% {
        transform: translateY(0);
      }
    `} 3s infinite;
  }
`;

// Estilizar el cuadro de texto
export const TextBox = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: 0.2s ease-in-out;
  z-index: 2;

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

export const Head = styled.div`
  font-size: 50px;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  text-shadow: 4px 2.5px 2px rgba(0, 0, 0, 1);
  color: ${Silver};
  text-decoration: none;
`;

export const Span = styled.div`
  font-size: 25px;
  text-align: center;
  font-family: monospace;
  color: ${Text};
  text-shadow: 2px 1px 1px rgba(0, 0, 0, 1);
`;

import styled from 'styled-components';

export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Fondo oscuro semitransparente */
    z-index: 999;
  `;

// Estilos para el componente Card
export const CardContainer = styled.div`
    width: 350px;
  height: fit-content;
  background: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 35px;
  gap: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.123);
  border-radius: 20px;
`;

export const NotificationPara = styled.p`
  color: rgb(133, 133, 133);
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;
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
// Styled Components
export const NotificationCard = styled.div`
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

export const NotificationHeading = styled.p`
  color: black;
  font-weight: 600;
  font-size: 1.2em;
  font-family: Arial, Helvetica, sans-serif;
`;

export const NotificationPara = styled.p`
  color: rgb(133, 133, 133);
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const AllowBtn = styled.button`
  width: 180px;
  height: 40px;
  background-color: #D7B377;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #E6AF2E;
  }
`;

export const NotNowBtn = styled.button`
  width: 120px;
  height: 40px;
  color: black;
  border: none;
  background-color: transparent;
  font-weight: 600;
  font-size: 0.8em;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    background-color: #E6AF2E;
    color: white;
  }
`;
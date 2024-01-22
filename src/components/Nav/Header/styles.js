import styled from 'styled-components';

export const Container = styled.div`
  z-index: 9999;

  > svg {
    position: fixed;
    color: #D7B377;
    width: 40px;
    height: 40px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
    display: inline-block; /* Agregar esta propiedad para que el svg ocupe solo el espacio necesario */
    vertical-align: middle; /* Alinear verticalmente el svg y el span */
  }
`;
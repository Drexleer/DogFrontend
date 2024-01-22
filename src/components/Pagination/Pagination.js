import React from "react";
import {Container, Label} from "./styledPagination";

function Pagination({ currentPage, onPageChange, totalDogs, dogsPerPage, currentDogs }) {
// Calcula el número total de páginas necesarias para mostrar todos los perros
  const totalPages = Math.ceil(totalDogs / dogsPerPage);

 // Crea un arreglo de números de página para mostrar en la paginación
 const pageNumbers = [];
 for (let i = 1; i <= totalPages; i++) {
   pageNumbers.push(i);
 }

 return (
  <Container>
  {/* Mapea los números de página y crea un botón para cada uno */}
  {pageNumbers.map((pageNumber) => (
    <Label
      key={pageNumber}
      onClick={() => onPageChange(pageNumber)}
      className={currentPage === pageNumber ? "active" : ""}
    >
      {pageNumber}
    </Label>
  ))}
</Container>
);
}


export default Pagination;






//* PAGINADO EN DOS BOTONES NEXT Y PREVIOUS

//   return (
//     <ButtonContainer>
//         {/* Botón para retroceder */}
//           <ArrowButton
//             onClick={() => onPageChange(currentPage - 1)}
//             disabled={currentPage === 1} // Deshabilitar el botón si estamos en la primera página
//             className="btn-arrow btn-arrow-left"
//           >
//             Anterior
//           </ArrowButton>
        
//         {/* Botón para avanzar */}
//           <ArrowButton
//             onClick={() => onPageChange(currentPage + 1)}
//             // se agrega la opción disabled para evitar que se muestre el botón de siguiente cuando no hay mas paginas
//             disabled={currentPage === totalPages || currentDogs.length === 0}
//             className="btn-arrow btn-arrow-right"
//           >
//             Siguiente
//           </ArrowButton>
//     </ButtonContainer>
//   );
// }
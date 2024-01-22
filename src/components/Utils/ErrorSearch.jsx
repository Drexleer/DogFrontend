import React from 'react'
import { DivContainer, LearnMoreButton } from './StyledErrorSearch'

export default function ErrorSearch({setError}) {

  const handleSet = () => {
    setError(false)
  };

  return (
    <DivContainer>
          <img
            src="https://media.tenor.com/GaolRy7COy4AAAAM/dog-huh.gif' alt='Error-Search"
            alt="Error"
            style={{ width: "30%" }} // Ajusta el estilo según tus necesidades
          />
          <LearnMoreButton onClick={handleSet}>Go Back</LearnMoreButton>
      </DivContainer>
  )
}

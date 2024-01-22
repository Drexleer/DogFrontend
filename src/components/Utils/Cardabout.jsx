import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  TextTitle,
  TextBody,
  TextTemp,
} from './StyledCard';

const CardAbout = ({id, name, image, temperaments, weight}) => {
    return (
    <Card>
        <Link to={`/home/${id}`}>
          <CardImg src={image} alt="dog" />
        </Link>
      <div style={{marginLeft: "1em"}}>
        <TextTitle>{name}</TextTitle>
        <TextBody>{weight.join(' - ')} Kg</TextBody>
        <TextTemp>{temperaments.join(', ')}</TextTemp>
      </div>
    </Card>
  );
}

export default CardAbout;
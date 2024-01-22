import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { getDogById } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import {
    Card,
    DivCard,
    Img,
    Ul,
    TextH2,
    TextH1,
    TextH3,
    LearnMoreButton,
    ButtonDelete,
    DivError,
    ButtonTemperament } from './StyledDetail';
import { GiWeight, GiBodyHeight, GiHeartBeats} from 'react-icons/gi';
import {FaTemperatureHigh} from 'react-icons/fa';
import { MdNumbers } from 'react-icons/md';
import Loading from '../loading/loading';
import DeleteDog from '../Utils/DeleteDog';
import Error404 from '../Utils/error404';

export default function Detail() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Traemos el estado de redux
    const breedDetail = useSelector(state => state.breedDetail);
    // Estado local para el loading
    const [showLoading, setShowLoading] = useState(true);
    const [deleteDog, setDeleteDog] = useState(false);
    const [dogId, setDogId] = useState(null);

    const handleClick = () => {
        const id = breedDetail[0].id;
        setDogId(id);
    };

    const handleDelete = async (dogId) => {
        const confirmed = window.confirm('Are you sure you want to delete this dog?');
        
        if(confirmed) {
            try {
                await axios.delete(`http://localhost:3001/delete/${dogId}`)
                setDeleteDog(true);
                setTimeout(() => {
                    setDeleteDog(false);
                    navigate('/home')
                }, 3000);
            } catch (error) {
                console.error('Error al eliminar el perro:', error);
            }
        }
    };

    useEffect(()=>{
        dispatch(getDogById(id))
        .then(() => {
            setShowLoading(false);
        });
    }, [dispatch, id])


  return (
    <DivCard>
        {deleteDog ? (<DeleteDog/>): null}
        {showLoading ? <Loading/> : null}
        {!showLoading && breedDetail.length ? ( 
            <Card>
            <div>
                <Img src={breedDetail[0].image} alt="breed-detail" width={"400px"}/>
                <h2>Temperaments <FaTemperatureHigh/>:</h2>
                <Ul>
                {breedDetail[0].temperaments
                    ? breedDetail[0].temperaments.map((temperament, index) => (
                        <ButtonTemperament key={index}>{temperament}</ButtonTemperament>
                        ))
                        : null}
                </Ul>
            </div>
            <div style={{margin: "1em"}}>
                <TextH1>{breedDetail[0].name}</TextH1>
                <TextH2>ID<MdNumbers color='#B26400'/>:</TextH2>
                <div style={{display:"flex", flexDirection:"column"}}>
                {breedDetail[0].id.length > 5 ? (
                        <TextH3 style={{color:"#B26400"}}>Created by DataBase</TextH3>
                    ) : (
                        <TextH3 style={{color:"#B26400"}}>Created by Api</TextH3>
                )}
                {dogId !== null ? (
                    <TextH3>ID: {dogId}</TextH3>
                        ) : (
                    <ButtonTemperament style={{width:"90px", marginLeft:"1.2em"}} onClick={handleClick}>Show ID</ButtonTemperament>
                    )}
                </div>
                <TextH2>Weight <GiWeight color='4C4C4C'/>:</TextH2>
                <TextH3>{breedDetail[0].weight.join(' - ')} Kg.</TextH3>
                <TextH2>Height <GiBodyHeight/>:</TextH2>
                <TextH3>{breedDetail[0].height.join(' - ')} Cm.</TextH3>
                <TextH2>Life Span <GiHeartBeats color='red'/>:</TextH2>
                <TextH3>{breedDetail[0].life_span.join(' - ')} Years.</TextH3>
            </div>
            <Link to={'/home'}><LearnMoreButton>Go Back</LearnMoreButton></Link>
            {id.length > 5 ? (
                <ButtonDelete onClick={()=> {handleDelete(id)}}>
                <span>DELETE</span>
            </ButtonDelete>
            ): null}
        </Card>) 
        : ( 
            <DivError>
                <Error404/>
            </DivError>
            )}
    </DivCard>
  )
}

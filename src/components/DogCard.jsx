import 'bootstrap/dist/css/bootstrap.min.css'; 
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const DogCard = ({nameDog,textDog, imgUrl, tagRaza, tagColor}) => {
  return (
    <>
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
            <Card.Title>{nameDog}</Card.Title>
            <Card.Text>{textDog}</Card.Text>
              <Tags raza={tagRaza} color={tagColor}  />
            </Card.Body>
        </Card> 
    </>
  )
}

export default DogCard
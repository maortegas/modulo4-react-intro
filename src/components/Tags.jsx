import 'bootstrap/dist/css/bootstrap.min.css'; 
import Badge from 'react-bootstrap/Badge';

const Tags = ({raza, color}) => {
  return (
    <Badge className='w-100' bg={color}>{raza}</Badge>
  )
}

export default Tags
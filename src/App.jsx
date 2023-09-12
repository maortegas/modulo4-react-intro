import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'
import DogCard from './components/DogCard'
import Footer from './components/Footer';
import Header from './components/Header'

function App() {

const arrayDog=[
  {id:'1',
   nombre:'Lulú',
   raza:'Buldog',
   imgUrl:'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg',
   descripcion:'Llena de energia y listo para jugar. Dale a Lulú el hogar amoroso que se merece',
   color:'primary'
  },
  {id:'2',
  nombre:'Memo',
  raza:'Maltes',
  imgUrl:'https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg',
  descripcion:'Es jueguetón, amigable y se lleva bien con niños. !Haz de Memo parte de tu familia!',
  color:'secondary'
  },
  {id:'3',
  nombre:'Koda',
  raza:'Boxer',
  imgUrl:'https://cdn.pixabay.com/photo/2016/03/27/21/16/pet-1284307_1280.jpg',
  descripcion:'Un perrito que se adapta a cualquier ambiente. !Dale a Koda el hogar amoroso que se merece!',
  color:'success'
  },
  {id:'4',
  nombre:'Tebi',
  raza:'Terrier',
  imgUrl:'https://cdn.pixabay.com/photo/2014/04/05/11/40/dog-316598_1280.jpg',
  descripcion:'Es una compañero muy leal. !Dale a Tebi el hogar amoroso que se merece!',
  color:'warning'
  },
];

  return (
    <>
      <Header titulo="Adopta un perrito"/>
      <div className='d-flex col-12 justify-content-center align-items-center bd-highlight mb-3 gap-3 mt-5'>
        {arrayDog.map(({id,nombre,descripcion,imgUrl,raza,color})=>
        (
          <DogCard key={id} nameDog={nombre} textDog={descripcion} imgUrl={imgUrl} tagRaza={raza} tagColor={color} />
        ))
        }
      </div>
      <Footer/>     
     </>
  )
} 

export default App

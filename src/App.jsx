
import './App.css'
import DogCard from './components/DogCard'
import Header from './components/Header'

function App() {

const arrayDog=[
  {nombre:'lulu',
   raza:'perrito',
   imgUrl:'https://placekitten.com/g/200/300',
   descripcion:'uguidgugueyguy hjfehjhf',
   color:'primary'
  },
  {nombre:'memo',
  raza:'otro perrito',
  imgUrl:'https://placekitten.com/g/200/300',
  descripcion:'uguidgugueyguy hjfehjhf',
  color:'primary'
 },
];

  
  
  return (
    <>
      <Header titulo="Adopta un perrito"/>
      {arrayDog.map((ele)=>
      (
        <DogCard nameDog={ele.nombre} textDog={ele.descripcion} imgUrl={ele.imgUrl} tagRaza={ele.raza} tagColor={ele.color} />
      ))
      }
      
     
  </>
  )
}

export default App

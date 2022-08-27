import api from './services/api'
import {useState, useEffect} from 'react'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  const [personagens, setPersonagens] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const pageCount = 1

  useEffect( () => {

  async function apiRickyAndMorty(pageOn = pageCount * page){
      const response = await api.get(`/character/?page=${pageOn}`)
      setPersonagens(response.data.results)
      setTotalPages(Math.ceil(response.data.info.pages / pageCount))
    }
   
    apiRickyAndMorty()

  }, [page])

  return (
   
    <div className="app">
      <Header
       page={page}
       totalPages={totalPages}
       setPage={setPage}
      />

        <div className='container'>
          {personagens.map((person) => {
            return(
                
              <div className='card-person' key={person.id}>
                   <div className='img'>
                      <img src={person.image}/>
                   </div>
                   <div className='person-info'>
                        <div className='content-name'>
                           <h1>{person.name}</h1>
                           <span className='status'>° {person.status} - {person.species}</span>
                        </div>

                        <div className='origem'>
                          <h3>Home Planet</h3>
                          <p>{person.origin.name}</p>
                        </div>

                        <div className='location'>
                          <h3>Last known location:</h3>
                          <p>{person.location.name}</p>
                        </div>
                   </div>

              </div>

            )
          })}
          
        </div>

        <Footer/>
   
    </div>
  );
}

export default App;

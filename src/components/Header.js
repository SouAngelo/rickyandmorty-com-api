import React from 'react'

function Header(props){

    
    const {page, totalPages, setPage} = props


  const backButton = () => {
      if(page > 0){
          setPage(page - 1)
      }
  }

  const nextButton = () =>{
    if(page !== totalPages){
        setPage(page + 1)
    }
  }


    return(
      <header>
          <h1>Ricky And Morty</h1>

          <div className='btns'>
              <button type='button' onClick={backButton}>Anterior</button>
                <p>{page} de {totalPages}</p>
              <button type='button' onClick={nextButton}>Seguinte</button>
          </div>
      </header>
    ) 
}

export default Header
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavoritos } from '../services/favoritos';
import livroImg from '../imgs/livro.png'
import { deleteFavorito } from '../services/favoritos';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`
const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos
    setFavoritos(favoritosDaAPI)
  }

 async function deletarFavorito(id) {
  await deleteFavorito(id)
  await fetchFavoritos()
  alert(`Livro de id:${id} deletado!`)
}

  useEffect(() => {
    fetchFavoritos()
  }, [])
  
  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          { favoritos.map(favorito => (
              <Resultado onClick={() => deletarFavorito(favorito.id)}>
                <p>{favorito.nome}</p>
                <img src={livroImg}/>
              </Resultado>
            ))
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  ); }

export default Favoritos;
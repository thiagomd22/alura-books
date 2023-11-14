import styled from "styled-components";
import { Link } from "react-router-dom";

const OpcoesContainer = styled.ul`
    display: flex;
`
const OpcaoContainer = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];

function OpcoesHeader() {
    return(
        <OpcoesContainer>
            { textoOpcoes.map( (texto) => (
                <Link to={`/${texto.toLowerCase()}`}><OpcaoContainer><p>{texto}</p></OpcaoContainer></Link>  
            ) ) }
        </OpcoesContainer>
    )
}

export default OpcoesHeader;
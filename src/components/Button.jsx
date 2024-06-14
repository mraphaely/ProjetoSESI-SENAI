import { Link } from "react-router-dom";
import { Main } from "../styles/PagRa";
const Filter = () => {

    return (

        <Main>
            <h1>Olá, quem é você?</h1>
        <Link to='pagra'><h1>Discente</h1></Link>
        <Link to='pagco'><h1>Fical de Disciplina</h1></Link>
       </Main>
    )

}

export default Filter;
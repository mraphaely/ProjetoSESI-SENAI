import { BrowserRouter } from "react-router-dom";
import Header from '../components/HeaderFilter';
import Footer from '../components/Footer';
import Button from '../components/Button';

const Filter = () => {

    return (
        <BrowserRouter>
            <Header></Header>
                <Button></Button>
            <Footer></Footer>
        </BrowserRouter>
    )

}

export default Filter;
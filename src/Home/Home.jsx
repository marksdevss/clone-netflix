import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
         <h1>aqui é a pagina Home</h1>   
         <Link to={"/login"}>Ir para pagina de login</Link>
        </div>
    );
}

export default Home;
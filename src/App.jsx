import './App.css';
import Home from "./HomePage/Home"
import { useEffect , useState } from 'react'
import axios from 'axios';


function App () {

  const [data, setData] = useState([]);
  const [currentPage, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1);
  const [totalItens, setTotalItens] = useState(1);

  const fetchData = () => {
    const url = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${currentPage}`;
    axios.get(url)
      .then(response => {
        setTotalPage(response.headers["x-wp-totalpages"])
        setTotalItens(response.headers["x-wp-total"])
        setData (response.data)
        
      })
  }

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const nextPage = () => currentPage < totalPage ? setPage(currentPage + 1) : currentPage

  const previousPage = () => currentPage > 1 ? setPage(currentPage - 1) : currentPage

  return (
    <>
    <Home data = {data}/>
    <div>
      {currentPage > 1 ? <button onClick = {previousPage}>Retornar</button> : <p></p>}
      <button onClick = {nextPage}>Carregar Mais</button>
    </div>
    </>
    )
};

export default App;



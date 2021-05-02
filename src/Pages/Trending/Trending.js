import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from '../../components/Pagination/Pagination';
import SingleContent from "../../components/SingleContent/SingleContent";
import './Trending.css'

const Trending = () => {
    const [page, setPage] = useState(1)
  const [content, setContent] = useState([]);
    const fetchTrending = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=7530ed1f2cdb5da9d81039f6b9fcb16d&page=${page}`
      )
     

      setContent(data.results)
    }

    useEffect(() => {
        fetchTrending();
    }, [])
  return (
    <div>
      <span className="pageTitle">This Trending Page</span>
      <div className="trending">
          {content && content.map((c) => 
              < SingleContent 
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date} 
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
          )}
      </div>
      <Pagination />
    </div>
  )
}

export default Trending;

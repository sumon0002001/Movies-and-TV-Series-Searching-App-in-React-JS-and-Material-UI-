import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";

const Trending = () => {
  const [content, setContent] = useState([]);
    const fetchTrending = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=7530ed1f2cdb5da9d81039f6b9fcb16d`
      )
     

      setContent(data.results)
    }

    useEffect(() => {
        fetchTrending();
    }, [])
  return (
    <div>
      <span className="title">This Trending Page</span>
      <div>
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
    </div>
  )
}

export default Trending;

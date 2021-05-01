import axios from "axios";
import { useEffect } from "react";

const Trending = () => {


    const fetchTrending = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=7530ed1f2cdb5da9d81039f6b9fcb16d`
      )
      console.log(data);
    }

    useEffect(() => {
        fetchTrending();
    }, [])
  return (
    <div>
      <span className="title">This Trending Page</span>
    </div>
  )
}

export default Trending;

import axios from "axios";
import { getNowPlayingMovies, getTopRatedMovie } from "../redux/movieSlice";
import { Now_Playing_Movie,Top_Rated_Movie, options } from "../utils/constant";
import { useDispatch } from "react-redux";



const useTopRatedMovies = async () => {
     const dispatch = useDispatch();
     try{
          const res = await axios.get(Top_Rated_Movie, options);
          dispatch(getTopRatedMovie(res.data.results));
     } catch(error){
         console.log(error);
     }
}

export default useTopRatedMovies;
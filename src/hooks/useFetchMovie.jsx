import axios from "axios"
import { useEffect } from "react"
import { NOW_PLAYING_MOVIES, options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addMovie } from "../utils/movieSlice"

const useFetchMovie = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchMovie = async() =>{
            try {
                const response = await axios.get(NOW_PLAYING_MOVIES, options);
                dispatch(addMovie(response.data.results))
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovie()
    },[])
}

export default useFetchMovie;
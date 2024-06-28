// import React from 'react';
// import useMovieById from '../hooks/useMovieById';
// import { useSelector } from 'react-redux';

// const VideoBackground = ({ movieId }) => {
//     const trailerMovie = useSelector(store => store.movie.trailerMovie);
//     useMovieById(movieId);


//     return (
//         <div className="w-screen ">
//             <iframe
//                 className="w-screen aspect-video"
//                 src={`https://www.youtube.com/embed/${trailerMovie.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
//                 title='Youtube video player '
//                 frameBorder="0"
//                 allowFullScreen >

//             </iframe>







//         </div>




//     )
// }

// export default VideoBackground;



import React from 'react';
import useMovieById from '../hooks/useMovieById';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId,bool }) => {
    const trailerMovie = useSelector(store => store.movie.trailerMovie);
    useMovieById(movieId);

    // Check if trailerMovie is not null before attempting to access its properties
    if (!trailerMovie) {
        return null; // or you can return a loading spinner or placeholder here
    }

    return (
        <div className="w-[vw] ">
            <iframe
                className={`${bool ? "w-[100%]" : "w-screen aspect-video"}`}
                src={`https://www.youtube.com/embed/${trailerMovie.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
                title='Youtube video player '
                frameBorder="0"
                allowFullScreen
            >
            </iframe>
        </div>
    );
}

export default VideoBackground;


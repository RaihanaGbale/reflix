import React, { Component } from 'react'
class MovieDetails extends Component {
    render() {
        let movies = this.props.movies
            , id = this.props.match.params.id
        return (
            <div>
                <div className='text'>{movies[id].title}
                    <span>---- Produced in :{movies[id].year}</span>
                </div>
                <img className='picture' src={movies[id].img}></img>
                <p className='descTest'>{movies[id].descrShort}</p>
            </div>
        )
    }
}
export default MovieDetails
import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Movie extends Component {

    rentAMovie = () => this.props.rentAMovie(this.props.movie.id)
    render() {
        let currentMovie = this.props.movie
        return (
            <div className="movie-box" key={currentMovie.id}>
                <Link to={`/movies/${currentMovie.id}`} movie={currentMovie}>
                    <img className="moviePicture" src={currentMovie.img}></img>
                </Link>
                <i className={
                    currentMovie.isRented ?
                        "fas fa-minus-circle button" :
                        "fas fa-plus-circle button"}
                    onClick={this.rentAMovie} id={currentMovie.id}>
                </i>
            </div>)
    }
}

export default Movie
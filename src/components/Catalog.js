import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Movie from './Movie';


class Catalog extends Component {
    render() {
        let movies = this.props.movies
        return (<div id="catalog">
            <input value={this.props.text} onChange={this.props.updateText}></input>
            <button>Search</button>
            <div>Budget:{this.props.budget}</div>
            {this.props.budget < 100 ?
                <div>
                    <div>Rented Movies:</div>
                    <div className="catalog-results">
                        {movies.filter(m => m.isRented).map(m => {
                            return (<Movie movie={m} rentAMovie={this.props.rentAMovie} />)
                        })}
                    </div>
                </div> : null}
            <div>Movies Catalog:</div>
            <div className="catalog-results">
                {movies.map(m => {
                    return (<Movie key={m.id} movie={m} rentAMovie={this.props.rentAMovie} />)
                })}
            </div>
        </div>

        )
    }
}

export default Catalog
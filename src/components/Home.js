import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        const users = this.props.users
        return <div>
            <h1 className='text'>WHO'S WATCHING?</h1>
            <div className="user-container">
                {users.map(u => {
                    return (<Link to="/catalog" key={u.name}>
                        <div
                         className={`user-box ${u.img}`}>
                             {u.name}
                        </div>
                </Link>)
            }
                )}
            </div>
        </div>
    }
}

export default Home
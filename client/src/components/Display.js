import React from 'react';
import Axios from 'axios';

class Display extends React.Component {

    componentDidMount() {
        Axios.get("http://localhost:5000/api/players")
            .then(res => {
                console.log(res);
                this.props.setLastData(res.data);
            })
            .catch(err => {

            })
    };

    render() {
        return (
            <div className="display" data-testId="PLAYERS-LIST">
                {this.props.lastData.map((data) => {
                    return (
                        <div key={data.id} className="card">
                            <h1>Name: {data.name}</h1>
                            <h2>Country: {data.country}</h2>
                            <h2>Searches: {data.searches}</h2>
                        </div>
                    )

                })};
            </div>
        )
    }
}

export default Display;
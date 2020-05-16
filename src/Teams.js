import React from "react";

class Teams extends React.Component{
    constructor(props) {
        super(props);
        this.state = { teams: [] }
    }

    componentDidMount() {
        console.log('component loaded')
        fetch(`http://localhost:8081/competitions?countryId=${this.props.country}`).then(result => result.json())
            .then(data => {
                console.log(data)
                this.setState({ teams: data })
            }).catch(e => console.log(e))
    }

    render() {
        return(<div>
            { this.state.teams.map(( { league_id, league_name, country_name} ) => (
                <div key={league_id}>
                    <h2>{country_name}</h2>
                    <h1>{league_name}</h1>
                </div>
            ))}

            <button onClick={this.props.homeClick}>home</button>
        </div>)
    }
}

export default Teams;
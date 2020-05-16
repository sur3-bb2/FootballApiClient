import React, { Component } from "react";
import Countries from "./Countries";
import Teams from "./Teams";

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = { countries: [], showTeams: false }
        this.showTeams = this.showTeams.bind(this)
        this.backToCountries = this.backToCountries.bind(this)
    }

    componentDidMount() {
        console.log('component loaded')
        fetch('http://localhost:8081/countries').then(result => result.json())
            .then(data => {
                console.log(data)
                this.setState({ countries: data })
            }).catch(e => console.log(e))
    }

    showTeams(countryId) {
        this.setState({ showTeams: true, countryId: countryId })
    }

    backToCountries() {
        this.setState({ showTeams: false })
    }

    render() {
        return(
            <div>
                {this.state.showTeams &&
                    <Teams country={this.state.countryId} homeClick={this.backToCountries} /> }
                {!this.state.showTeams &&
                    <Countries countries={this.state.countries} onClick={this.showTeams} />
                }
        </div>)
    }
};

export default Country;
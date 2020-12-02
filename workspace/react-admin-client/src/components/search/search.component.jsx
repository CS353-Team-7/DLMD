import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { API_TOKEN } from '../env';
import memoryUtils from "../../utils/memoryUtils";

import SearchInput from '../search-input/search-input.component';
import SearchResult from '../search-results/search-results.component';

import './search.styles.css';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            q: '',
            data: [],
            results: [],
            clicked: false,
            searching: false,
            searched: false
        };
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);

        fetch("https://don-t-let-me-die.firebaseio.com/data.json")
        .then(res => res.json())
        .then(data => this.setState({ data }))
        .catch(err => console.log(err));
    }

    handleChange = async event => {
        const { value } = event.target;

        await this.setState({ q: value, searched: false });

        let results = [];

        await this.state.data.forEach(result => {
            let commonName = result.common_name.toLowerCase();
            let scientificName = result.scientific_name.toLowerCase();
            let q = this.state.q.toLowerCase();

            if (commonName.includes(q) || scientificName.includes(q)) {
                results.push(result);
            }
        });

        if (!value.length) {
            results = [];
        }

        this.setState({ results, searching: false, searched: !value.length ? false : true });
        console.log(results);
    }

    handleSubmit = async event => {
        event.preventDefault();

        await this.setState({ searching: true });
    }

    handleClick = event => {
        console.log(event);
        if (this.state.clicked === true && event.target.localName == 'input') {
            return;
        }

        this.setState({ clicked: !this.state.clicked});
    }

    handleClickOutside = () => {
        if (this.state.clicked === true) {
            this.setState({ clicked: !this.state.clicked });
        }
    }

    clearText = () => {
        this.setState({ q: '', results: [], searched: false });
    }

    addToList(input) {
        const plant = input;

        //Assuming userID is already added?
        const userURL = `https://don-t-let-me-die.firebaseio.com/users.json/${memoryUtils.user.username}`;
        const params = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                //Could also just set an ID as an array in the DB, add the plants to each one (more efficient)
                ID: memoryUtils.user.username, // REPLACE "test" WITH userID
                UserPlant: plant
            })
        };

        fetch("https://don-t-let-me-die.firebaseio.com/users.json", params);
        alert(`${plant} has been added to your Collection!`);
    }

    render() {
        return (
            <div className='search'>
                <h1 className='search-heading'>Like to add more <span className='gradient-text'>plants</span> to your list?</h1>
                <h2 className='search-second-heading'>We have thousands of plants available for selection, so go search now!</h2>
                <SearchInput 
                    value={this.state.q} 
                    handleChange={this.handleChange} 
                    handleClick={this.handleClick} 
                    handleSubmit={this.handleSubmit} 
                    clicked={this.state.clicked} 
                    clearText={this.clearText} 
                />
                <div className='search-results'>
                    {   this.state.searching === true ? 
                        <FontAwesomeIcon icon={faSpinner} className='loading-icon' spin />
                        :
                        this.state.searched === true && !this.state.results.length ? <h1 className='no-results'>Sorry, we couldn't find any results for '{this.state.q}'</h1>
                        :
                        this.state.results.map((plant, index) => {
                            return <SearchResult plant={plant} key={index} addToList={this.addToList} />
                        })
                    }
                </div>
            </div>
        )
    }
};


export default Search;
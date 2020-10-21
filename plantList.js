import React from 'react';

class PlantListComponent extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() 
    {
        fetch("https://don-t-let-me-die.firebaseio.com/data.json")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded:true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                });
            }
        )
    }

    render(){
        const { error, isLoaded, items } = this.state;
        if(error) {
            return <div> Error: {error.message} </div>;
        }
        else if(!isLoaded) {
            return <div> Loading...</div>;
        }
        else{
            return (
                <ul>
                    {items.map(item => (
                        <li key = {item.common_name}>
                            <img
                            src = {item.image_url}
                            alt = "Loading Plant..."
                            width = "50px"
                            />
                            {item.common_name}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default PlantListComponent;
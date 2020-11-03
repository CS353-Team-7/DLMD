import React from 'react';
import Modal from 'react-awesome-modal';
import './Modal.css';
import './plantList.css'



var used = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var currentIndex = used.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) 
    {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = used[currentIndex];
      used[currentIndex] = used[randomIndex];
      used[randomIndex] = temporaryValue;
    

    }


class PlantListComponent extends React.Component 
{
    
    constructor(props)
    {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            visible:false,
            num:0
        };
    }
    
  openModal(input) {
    this.setState({
        visible : true,
        num : input
    });
}

closeModal() {
    this.setState({
        visible : false
    });
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
//More plant info available via different API call, but requires proxy server if the call is made through code due to CORS
        /*
        fetch('https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/quercus-rotundifolia?token=HvOR4eZJvpcIu72KtQXoqB1_ypHEVnJ2_TkR78zWouY')
        .then(res => res.json())

        https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

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
    
    */
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
               
              <div>
                  <div className="row">
                    <div className="column">
                    <img src={items[used[0]].image_url} style = {{width:242, height:242}} alt = "Loading.." onClick={() => this.openModal(used[0])}/>
                    <img src={items[used[1]].image_url} style = {{width:242, height:242}} alt = "Loading.."onClick={() => this.openModal(used[1])}/>
                    <img src={items[used[2]].image_url} style = {{width:242, height:242}} alt = "Loading.."onClick={() => this.openModal(used[2])}/>
                    <img src={items[used[3]].image_url} style = {{width:242, height:242}} alt = "Loading.."onClick={() => this.openModal(used[3])}/>
                    <img src={items[used[4]].image_url} style = {{width:242, height:242}} alt = "Loading.."onClick={() => this.openModal(used[4])}/>


                    </div>
                    <div className="column">
                    <img src={items[used[5]].image_url} style = {{width:242, height:242}} alt = "Loading.."onClick={() => this.openModal(used[5])}/>
                    <img src={items[used[6]].image_url} style = {{width:242, height:242}} alt = "Loading.."onClick={() => this.openModal(used[6])}/>
                    <img src={items[used[7]].image_url} style = {{width:242, height:242}} alt = "Loading.."onClick={() => this.openModal(used[7])}/>
                    <img src={items[used[8]].image_url} style = {{width:242, height:242}} alt = "Loading.."onClick={() => this.openModal(used[8])}/>
                    <img src={items[used[9]].image_url} style = {{width:242, height:242}} alt = "Loading.."onClick={() => this.openModal(used[9])}/>


                    </div>
                    <div className="column">
                    <img src={items[used[10]].image_url} style = {{width:242, height:242}} alt = "Loading.."onClick={() => this.openModal(used[10])}/>
                    <img src={items[used[11]].image_url} style = {{width:242, height:242}} alt = "Loading.."onClick={() => this.openModal(used[11])}/>
                    <img src={items[used[12]].image_url} style = {{width:242, height:242}} alt = "Loading.."onClick={() => this.openModal(used[12])}/>
                    <img src={items[used[13]].image_url} style = {{width:242, height:242}} alt = "Loading.."onClick={() => this.openModal(used[13])}/>
                    <img src={items[used[14]].image_url} style = {{width:242, height:242}} alt = "Loading.."onClick={() => this.openModal(used[14])}/>


                    </div>
                  </div>
                    
                    <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" background-color = "grey" onClickAway={() => this.closeModal()}>
                    <div className = "Modal">
                        <h4 style ={{color:"#38a6a8"}}>{items[this.state.num].common_name}</h4>
                        <text style = {{color:"black"}}>Scientific Name: {items[this.state.num].scientific_name}<br></br></text>
                        <text style = {{color:"black"}}>Family: {items[this.state.num].family_common_name}<br></br></text>
                    </div>
                    <button id = "addPlant">Add to Collection</button>
                        
                    </Modal>

              </div>

              
                
               
               
            );
        }
    }
}

export default PlantListComponent;

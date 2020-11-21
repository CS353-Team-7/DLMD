import React from 'react';
import Modal from 'react-awesome-modal';
import './Modal.css';
import './plantList.css'
import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
        apiKey: "AIzaSyDtqNoM2bF8_Dyj1O9Zlp94hXzljszK6zw",
        authDomain: "don-t-let-me-die.firebaseapp.com",
        databaseURL: "https://don-t-let-me-die.firebaseio.com",
        projectId: "don-t-let-me-die",
        appId: "1:430686717248:web:1a5ff798a609ef67e3e6a5",
        measurementId: "G-DG9PJVNRRK"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  var user = firebase.auth().currentUser;
  var userID;

  //Checks a user is signed in
  if (user) {
    console.log("User signed in");
    //Gets the signed in user's ID
    userID = user.uid;
  } else {
    console.log("No user signed in");
  }




var used = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var currentIndex = used.length, temporaryValue, randomIndex;

  
//This method shuffles the array of plant indexes
//So we get random plant images every time
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
            num:0,
            value: '',
            changed:false,
            users : []
        };
        this.plantFilterOnChange = this.plantFilterOnChange.bind(this);
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

plantFilterOnChange(event) {
    this.setState({
        value : event.target.value,
        changed : true
    });
}

getPlantData()
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

postUserData(input)
{
    var plant = input;

    //Assuming userID is already added?
    var userURL = "https://don-t-let-me-die.firebaseio.com/users.json/" + userID;


        fetch("https://don-t-let-me-die.firebaseio.com/users.json", {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      //Could also just set an ID as an array in the DB, add the plants to each one (more efficient)
    ID: "test", // REPLACE "test" WITH userID
    UserPlant: plant
  })
})
        alert(plant + " has been added to your Collection!");
}


   
    componentDidMount() 
    {
        this.getPlantData();
        
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
        const { error, isLoaded, items, num, value, changed,users } = this.state;
        if(error) {
            return <div> Error: {error.message} </div>;
        }
        else if(!isLoaded) {
            return <div> Loading...</div>;
        }
        else{
                console.log(users);

                if(changed)
                {
                    var index = 0;
                    var marker = 0;
                    var present = [];
                    items.map((plant => {
                        var nameHolder = plant.common_name.toLowerCase();
                        var valHolder = value.toLowerCase();
                        if(nameHolder.includes(valHolder))
                        {
                            used[marker] = index;
                            marker++;
                            present.push(index);
                            index++;
                            
                            
                        }
                        else
                        {
                            index++;
                            
                        }  
                    }));
                    
                    var shuffles = [];
                    for(var i = 0;i<used.length;i++)
                    {
                        if(!present.includes(i))
                        {
                            shuffles.push(i);
                        }
                    }

                    while(marker<used.length)
                    {
                        var number = shuffles.pop();
                        used[marker] = number;
                        marker++;
                    }


                }
                else if(value === "")
                {
                    while (0 !== currentIndex) 
                        {
                            currentIndex = used.length;
                        // Pick a remaining element...
                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex -= 1;
                    
                        // And swap it with the current element.
                        temporaryValue = used[currentIndex];
                        used[currentIndex] = used[randomIndex];
                        used[randomIndex] = temporaryValue;
                        

                        }
                }
            
            return (
               
              <div>
                  <label htmlFor="search">Search by common plant name</label>
                  <input type = "text" value = {value} onChange={this.plantFilterOnChange}></input>
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
                    
                    <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" background-color="red" onClickAway={() => this.closeModal()}>
                    <div className = "Modal">
                        <h4 style ={{color:"red"}}>{items[num].common_name}</h4>
                        <text style = {{color:"black"}}>Scientific Name: {items[num].scientific_name}<br></br></text>
                        <text style = {{color:"black"}}>Family: {items[num].family_common_name}<br></br></text>
                    </div>
                    <button id = "addPlant" onClick={()=>this.postUserData(items[num].common_name)}>Add to Collection</button>
                        
                    </Modal>

              </div>

              
                
               
               
            );
        }
    }
}

export default PlantListComponent;

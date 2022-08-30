import React from "react";

class RCard extends React.Component{

    
        styles = {
        h1S:{
            margin:'20px 10px',
        },
        pStl:{
            margin:'10px'
        }
        }
    render(){
        return(
            <div className="cards" style={{backgroundColor:'pink'}}>
            <h1 style={this.styles.h1S}>This is created using Class Component</h1>
            <p style={this.styles.pStl}>This is done using external CSS</p>
            <p style={{color:"blue"}}>This is done using inline CSS</p>
        </div>
        )
    }
}

export default RCard;
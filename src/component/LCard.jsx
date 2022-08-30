import React from "react";


const LCard = () => {
    const styles = {
        cont:{
            display:'flex',
            alignItems:'top',
            backgroundColor:'skyblue',
            flexDirection:'column'
        },
        h1S:{
            margin:'20px 10px'
        },
        pS:{
            margin:'10px'
        }
    }
    return(
        <div className="cards" style={styles.cont}>
            <h1 style={styles.h1S}>This is created using functional Component</h1>
            <p style={styles.pS}>This is done using external CSS</p>
            <p style={{color:"blue"}}>This is done using inline CSS</p>
        </div>
    )
}

export default LCard;
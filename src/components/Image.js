import React from "react";


function Image() {


  return (

    <img
      src={require(`../images/profileimg.jpg`)}
      alt="aaron clark"
      style={{
        display: 'flex',
        borderRadius: '100%',
        maxWidth: '20rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    />

  )
}

export default Image;
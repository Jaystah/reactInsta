import React from 'react';

const Profile = () =>{
  return( 
  <div style={{maxWidth:"550px", margin: "0px auto"}}>
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      margin: "18px 0px",
      borderBottom: "1px solid grey"
    }}>
      <div>
        <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
        src="https://jjdeveloping.nl/wp-content/uploads/elementor/thumbs/DSC06050-scaled-ovonrf8dp3ajtvvcjmojg62arrgv800hy56tenrpfs.jpg"
        />
      </div>
      <div>
        <h4>Jay Doerga</h4>
        <div style={{display: "flex",justifyContent:"space-between",width: "109%"}}>
          <h6>40 posts</h6>
          <h6>40 followers</h6>
          <h6>40 following</h6>
        </div>
      </div>
    </div>

    <div className="gallery">
      <img className = "item" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Square_-_black_simple.svg"/>
      <img className = "item" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Square_-_black_simple.svg"/>
      <img className = "item" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Square_-_black_simple.svg"/>
      <img className = "item" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Square_-_black_simple.svg"/>
      <img className = "item" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Square_-_black_simple.svg"/>
      <img className = "item" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Square_-_black_simple.svg"/>
    </div>
  </div>
  );
}
export default Profile;
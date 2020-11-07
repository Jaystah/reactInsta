import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css';
const SignIn = () =>{
    const history = useHistory();
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = () => {
      fetch("/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      }).then(res=>res.json()).then(data=>{
        if(data.error){
          M.toast({html: data.error, classes:"#e57373 red lighten-2"})
        }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
          M.toast({html: "Please give a valid email", classes:"#e57373 red lighten-2"});
          return;
        }else{
          document.getElementById("loaderOn").style.display = "inline-block";
          M.toast({html: data.message, classes:"#7cb342 light-green darken-1"});
          history.push('/signin')
        }
      })
    }
  return( 
    <div>
    <div className="card auth input-field">
    <h1 className="authTitle">Jaystagram</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e)=>{
        setName(e.target.value);
      }}/>
      <input type="text" placeholder="Email" value={email} onChange={(e)=>{
        setEmail(e.target.value);
      }}/>
      <input type="password" placeholder="Password" value={password} onChange={(e)=>{
        setPassword(e.target.value);
      }}/>
      <button onClick={()=>PostData()} className="btn waves-effect waves-light #ff1744 red accent-3">Sign up
  </button>
  <h6>
  <Link to="/signin">Already have an account?</Link>
  </h6>
  <div id ="loaderOn" className="preloader-wrapper small active">
    <div className="spinner-layer spinner-red-only">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>
  </div>
  </div>
  </div>
  );
}
export default SignIn;
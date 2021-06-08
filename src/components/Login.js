import React, {useState, useEffect} from 'react';
import './Login.css';
import logo from '../assets/logo.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import  { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';


function Login() {
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        }, 8000)

    }, [])
    const[state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            console.log(result);
        }).catch(error => alert(error.message));
    };
    return (       
        <div className="login">
            {
         loading ?
            <ClimbingBoxLoader
            color={"#822aa3"} loading={loading} size={30} />
            :    
            <div className="container">
            <div className="image">
           <img src={logo} alt="" />
           </div>
            <div className="buttons__getapp">
             <button type="submit" onClick={signIn}> <h2>Sign up</h2> </button>
             <button>  <h2>Get App</h2></button>
            </div>
            <div className="greetings">
                <h1>Hello Stranger</h1>
                <h4>Join LeVibe Community</h4>
            </div>
            </div>
            }
            <hr />
            <div className="links">
            <GitHubIcon fontSize="large" />
            <TwitterIcon fontSize="large"/>
            <LinkedInIcon fontSize="large"/>
            <AlternateEmailIcon fontSize="large"/>
            </div>
       </div>
    )
}



export default Login;

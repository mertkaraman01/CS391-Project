
import { useState } from "react";

export default function RegisterForm(props) {
  const [formOpen, setFormOpen] = useState(false);
    const {onRegister,userListCount} = props;
    const [userInfo, setUserInfo] = useState({  
      name: "",
      email: "",
      oneword: "",
      why:"",
      favorite:"",
      });
    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    };  

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(userInfo);
      console.log(userListCount);
      if(userListCount >=6){
        alert("Reached Maximum number of users (6)");
        return;
      }
      onRegister(userInfo);
      setUserInfo( {name: "",email: "", oneword: "", why: "", favorite: "",});
    };
    const button = <button onClick={() => { setFormOpen(!formOpen) }}>
            <i>Register Now!</i>
        </button>;
    const form = (
        <div className="form-container">
          <form onSubmit={handleSubmit}> 
            <div>
              <h3>Register Here:</h3>
            </div>

            <div>
            <input
                type="text"
                name="name"
                placeholder="Name Surname"
                maxLength={16}
                minLength={4}
                value={userInfo.name}
                required
                onChange={handleChange}
              />
               <input
                type="email"
                name="email"
                placeholder="Email"
                minLength={4}
                maxLength={30}
                size={30}
                value={userInfo.email}
                required
                onChange={handleChange}
              />
               <input
                type="text"
                name="oneword"
                placeholder="Tell us with one word that how do you feel about joining this club"
                minLength={2}
                size={60}
                maxLength={10}
                value={userInfo.oneword}
                required
                onChange={handleChange}
              />
               <input
                type="text"
                name="why"
                placeholder="Why you wanted to join this club?"
                minLength={8}
                maxLength={36}
                size={50}
                value={userInfo.why}
                required
                onChange={handleChange}
              />
               <input
                type="text"
                name="favorite"
                placeholder="What is your favorite place to ride bicycles?"
                minLength={3}
                maxLength={20}
                size={45}
                value={userInfo.favorite}
                required
                onChange={handleChange}
              />
            </div>
           
            <div>
              <button style={{backgroundColor: "blue",color: "white"}}>Register</button>
            </div>
          </form>
        </div>
      );
      return formOpen===false ? button : form;
    }

    

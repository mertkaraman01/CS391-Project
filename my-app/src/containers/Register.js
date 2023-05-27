
import {useState, useEffect} from 'react';
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';
const api = axios.create({ baseURL: `http://localhost:3001/users` });

function Register() {
    const [, setUserList] = useState([]);
    const [loadData, setLoadData] = useState(true);
    const [userListCount, setUserListCount] = useState();
    const [nameList, setNameList] = useState([]);

    useEffect(() => {
        if(loadData===true){
          getUsers();
          setLoadData(false);
        }
      },[loadData]); 

    const getUsers = () => {
        api.get("/").then(res => {
          setUserList(res.data);
          const firstNamesList = res.data.map(res => res.name)
          setNameList(firstNamesList);
        }).catch((err) => console.log(err));
      }

    const onRegister=(user) => {
        if(nameList.includes(user.name.trim())) {
            alert(`${user.name} is already taken, Please select any other name.`)
            return 
        }
        api.post('/', user)
          .then(res => {
            setLoadData(true);
            setUserListCount(nameList.length+1);
            console.log(res.data);
            console.log(userListCount);
          })
      }

    return (
        <main style={{ padding: "1rem 0" }}>
        <h2>Why should i register?</h2>
        <h5>By becoming a member, you will be able to help us with our tour organizations and you will also have an opportunity to decide on places that we will plan our tour. You will also gain access to our club bicycles so you wont have to pay money to rent a bicycle when we are on tours.
        </h5>
        <RegisterForm onRegister={onRegister} userListCount={userListCount}></RegisterForm>
      </main>
    );
  }
  export default Register;
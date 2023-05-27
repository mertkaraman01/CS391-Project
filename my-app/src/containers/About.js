import { MyContext } from '../components/context';
import MemberList from '../components/MemberList'
import axios from 'axios';
import React, { useState, useEffect } from "react";
const api = axios.create({
  baseURL: `http://localhost:3001/members`,
  timeout: 1000
});
export default function About() {

  const [members, setMembers] = useState([]);

  useEffect(() => {
    api.get('/').then(res => {
        setMembers(res.data);
    })
  }, []);

  const contextObject={members:members}

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>About US</h2>
      <h5>Welcome to the Ozyegin Bicycle Club! We are a vibrant and inclusive community of cycling enthusiasts within Ozyegin University who are passionate about promoting cycling as a healthy and sustainable mode of transportation, as well as a source of adventure and camaraderie. Our club is dedicated to providing a platform for students, faculty, and staff to come together and share their love for cycling. Whether you're a seasoned cyclist or new to the world of biking, we welcome riders of all levels and backgrounds. Our aim is to create a supportive and inclusive environment where everyone feels encouraged to explore the joys of cycling.
      </h5>
      <MyContext.Provider value={contextObject}>  
          <MemberList></MemberList>
      </MyContext.Provider>
    </main>
  );
}
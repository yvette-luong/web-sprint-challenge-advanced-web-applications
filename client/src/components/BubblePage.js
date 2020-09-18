import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { fetchColorApi } from "./fetchColorApi";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  // const params = useParams();


  // const fetchColor = (id) => {
  //   axios.get(`http://localhost:5000//api/colors/${id}`)
  //   .then((res)=> setColorList(res.data))
  //   .catch((err)=>console.log(err.response))
  // };

  const getColors =()=>{
    fetchColorApi()
    .then(res => {
      setColorList(res.data)
    })
    .catch(err =>{
      console.log(err, "there's an error")
    })
  }

  useEffect(() =>{
    getColors();
  },[setColorList])
 
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

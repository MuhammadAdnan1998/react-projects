import React from 'react'
import axios from 'axios'
import './App.css';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react'
import Footer from './components/Footer';

function App() {
  const [postData, setPostData] = useState([]);
  const getApiData = () => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        console.log(res.data);
        setPostData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        {postData.map((x, i) => (
          <div className=" w-[300px] rounded shadow-lg border cursor-pointer m-3 p-3" key={i}>
            <img src={x.thumbnail} />
            <p className="text-xl my-3 font-bold">{x.title}</p>
            <p className="text-lg my-3">{x.description}</p>
            <p className='text-lg my-3'>Price: {x.price} $</p>
          </div>

        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;

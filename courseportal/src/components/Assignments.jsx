import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

const Assignments = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        const getData=async()=>{
            try {
                const res=await axios.get('https://courses-1987e-default-rtdb.firebaseio.com/courses.json')
                console.log(res.data);
                setData(Object.entries(res.data))
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    },[])

  return (
    <div>
        <div>
            {data.map((ele)=>(
                console.log(ele[1].assignments)
                
            ))}
        </div>
    </div>
  )
}

export default Assignments
import axios from 'axios';
import React from 'react';
import {useState , useEffect} from 'react';

const Service = () => {
    axios
    .get("https://swapi.dev/api/species/")
    .then((response) => {
        return(
            response.data.result
        )
        // setData(response.data.result)
    })
}

function Api(){
    const [data, setData] = useState([{}]);
    
    useEffect(() => {
        setData(Service());
    }, [])

   // console.log(data);
    return(
        <div>

        {data.map((x, i) => { 
            <ul>
              <li key={i}>{x.language}</li>
           </ul>    
        })}
             
        </div>
    )
}
export default Api;
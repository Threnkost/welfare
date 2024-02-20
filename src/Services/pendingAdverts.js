import React from 'react'
import axios from 'axios'

const pendingAdverts = () => {

    const token = localStorage.getItem("token");
    const [adverts,setAdverts] = useState([]);

     axios.get('/api/v1/advert/advertStatus/participatedAdverts',{
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
          .then(response => {
             response.data.adverts.forEach((dt,key) => {
                if(dt.status=="active") setAdverts(prev => [...prev,dt]);
             })
          }).catch(error => {
            console.log(error.response.data.message);
          });

    
  return adverts;
}

export default pendingAdverts
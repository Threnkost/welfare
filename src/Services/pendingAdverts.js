import React from 'react'
import axios from 'axios'

const pendingAdverts = () => {

    const token = localStorage.getItem("token");
    

     axios.get('/api/v1/advert/advertStatus/participatedAdverts',{
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
          .then(response => {
            return response.data.adverts.filter((dt) => (
                dt.status=="active"
            ))
          }).catch(error => {
            return [];
          });

    
  
}

export default pendingAdverts
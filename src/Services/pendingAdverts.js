import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';


export const usePendingAdverts = () => {

  const token = localStorage.getItem("token");
  var adverts = [];

  useEffect(() => {
    axios.get('/api/v1/advert/advertStatus/participatedAdverts', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        response.data.adverts.forEach((dt, key) => {
          if (dt.status == "active") adverts.push(dt);
        })
      }).catch(error => {
        console.log(error.response.data.message);
      });
  }, []);

  return adverts;
}
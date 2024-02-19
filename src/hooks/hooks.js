import axios from 'axios';
import { useState } from 'react';


// Add useMemory.
export const useCategories = () => {
    const [state, setState] = useState([]);
    
    axios.get("/api/v1/categories/")
        .then(response => {
            var a = [];
            response.data.data.map((value) => {
                if (!a.includes(value.category)) {
                    a.push(value.category);
                }
            });
            console.log(a);
        })
        .catch(error => {
            console.error(error.message);
        })

    return [state, setState];
}

export const useTags = () => {
    const [state, setState] = useState([]);
    
    axios.get("/api/v1/categories/")
        .then(response => {
            var a = {}
            response.data.data.map((value) => {
                if (!(value.category in a)) {
                    a[value.category] = []
                }
                
                a[value.category].push(value.tag)

            })
            console.log(a);
        })
        .catch(error => {
            console.error(error.message);
        })

    return [state, setState];
}
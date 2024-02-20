import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';




const Edit_Product = () => {

   const [names,setNames] = useState([]);

    const categories = [
        "Hobby",
    "Clothing",
    "Electronics",
    "Home Furnishings",
    "Baby Products",
    "Musical Instruments",
    "Other"
    ]

    const tags = {
        Hobby:[
            "Antiques and collectibles",
            "Music albums",
            "Magazines and newspapers",
            "DVD and Blu-ray movies",
            "Photography equipment",
            "Comic books",
            "Figurines",
            "Board games",
            "Toys",
            "Arts and crafts"
        ],

        Clothing:[
            "Coat",
            "T-shirt",
            "Pants",
            "Sweater",
            "Shoes",
            "Hat",
            "Shorts",
            "Shirt",
            "Dress",
            "Jacket",
            "Skirt",
            "Gloves",
            "Jewelry and accessories"
        ],

        Electronics:[
            "Phone",
            "Tablet",
            "Computer",
            "Headphones",
            "Radio",
            "Smartwatch",
            "Speaker",
            "Monitor",
            "Powerbank",
            "Keyboard",
            "Mouse",
            "Game consoles"
        ],

        Home_Furnishings:[
            "Bookcase",
            "Desk",
            "Wardrobe",
            "Sofa",
            "TV stand",
            "Rug",
            "Floor lamp",
            "Work desk",
            "Dining table",
            "Nightstand",
            "Display cabinet",
            "Coat rack",
            "Curtain",
            "Mirror",
            "Kitchen table",
            "Chair",
            "Coffee table",
            "Bed"
        ],

        Baby_Products:[
            "Baby care products (diapers etc.)",
            "Baby clothing",
            "Crib",
            "Stroller",
            "Baby toys",
        ],

        Musical_instruments:[
            "Acoustic guitar",
            "Bass guitar",
            "Violin",
            "Drum set",
            "Flute",
            "Electric guitar"
        ]

    }

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [cat,setCat] = useState("");
    const [tag,setTag] = useState([]);
    const [point,setPoint] = useState();
    const [images,setImages] = useState([]);

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    const descChangeHandler = (event) => {
        setDesc(event.target.value)
    }
    const tagChangeHandler = (event) => {
        console.log(event.target.value);
    }
    const pointChangeHandler = (event) => {
        setPoint(event.target.value)
    }

    const catChangeHandler = (event) => {
        event.preventDefault();

         setCat(event.target.value.dt.replace(" ","_"));
        if(tags[cat]!=undefined)
         setNames(tags[cat]);
        console.log(names);
      
    }

    const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTag(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(tag);
  };



  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  

  const MAX_LENGTH = 3;

const uploadMultipleFiles = (e) => {
  if (Array.from(e.target.files).length + images.length > MAX_LENGTH) {
    e.preventDefault();
    alert(`Cannot upload files more than ${MAX_LENGTH}`);
    return;
  }else{
    setImages(prev => prev.concat(e.target.files[0]))
    
  }
}
  



  return (
    <>
    <Navbar/>
    <div className='flex'>
    <div className=' w-2/12 bg-black min-h-screen'> </div>
    <div className='w-full '>
              <p className='mt-24 text-5xl'> Create a New Ad!</p> 
        <div className=' h-px mt-5 bg-slate-600'></div>
                <div className=" pt-16 grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className='p-12 flex align-middle justify-start col-span-1  gap-5 flex-col'>
            
            <TextField required size="medium" label="Title" variant='outlined' onChange={titleChangeHandler}/>
            <TextField multiline rows={4} required size="medium" label="Description" variant='outlined' style={{ marginBottom:"3rem"}} onChange={descChangeHandler}/>
            <FormControl fullWidth>
  <InputLabel id="category-select-label">Category</InputLabel>
  <Select
    labelId="category-select-label"
    id="category-select"
    value={cat}
    label="Category"
    onChange={catChangeHandler}
  >
    {categories.map((dt,key) => (
        <MenuItem value={{dt}} key={key}>{dt}</MenuItem>
    )) }
  </Select>
</FormControl>

<FormControl sx={{ m: 0, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={tag}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={tag.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField required type="number"size="medium" label="Price" variant='outlined' onChange={pointChangeHandler}/>
      <Button variant="contained">Lets post it!</Button>
        </div>
        <div className='p-12 flex align-middle justify-start col-span-1  gap-5 flex-col'>
        <Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
>
  Upload The Product's Images!
  <VisuallyHiddenInput type="file"  accept="image/jpeg" onChange={uploadMultipleFiles} multiple />
</Button>

        </div>
    </div>
    </div>
 </div>
    </>
  )
}

export default Edit_Product
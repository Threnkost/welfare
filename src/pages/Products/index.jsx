import { InputLabel, MenuItem, Select, TextField, Chip, Autocomplete, Button } from "@mui/material";
import Navbar from "../../components/Navbar";
import { Divider, Checkbox } from "antd";
import Product from "../../components/Product";
import { useTags } from "../../hooks/hooks";
import { useEffect, useState } from 'react';


const _Sidebar = () => {
    return (
        <aside className="flex flex-col p-4 gap-4">
            <p>Category</p>
            <Select 
                id="select-input"
                label="Category"
            >
                <MenuItem>Hobby</MenuItem>
                <MenuItem>Clothing</MenuItem>
                <MenuItem>Electronics</MenuItem>
                <MenuItem>Home Furnishings</MenuItem>
                <MenuItem>Baby Products</MenuItem>
                <MenuItem>Musical Instruments</MenuItem>
                <MenuItem>Other</MenuItem>
            </Select>
            <Divider />
            <Autocomplete 
                options={[
                    {id: 1, label: "Tag1"},
                    {id: 2, label: "Tag2"},
                    {id: 3, label: "Tag3"},
                ]}
                renderInput={(params) => <TextField {...params} label="Tags" />}
            />
            
            <Button
                variant="outlined"
            >
                Search
            </Button>
            
            <div className="w-full flex flex-wrap gap-2">
                <Chip label="Tag1" onDelete={() => {}} />
                <Chip label="Tag2" onDelete={() => {}} />
                <Chip label="Tag3" onDelete={() => {}} />
            </div>
        </aside>
    );
}


const Products = () => {

    const tags = useTags();
    
    const currentCategory = "Clothing";
    const currentTag      = "Coat";

    useEffect(() => {
        
    }, [])

    return (
        <div className="w-screen h-screen grid grid-cols-5">
            <div className="col-span-5">
                <Navbar />
            </div>
            <_Sidebar className="col-span-1" />
            <div className="col-span-4 flex flex-wrap overflow-auto gap-4">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default Products;
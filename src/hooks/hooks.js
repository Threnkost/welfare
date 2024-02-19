import axios from 'axios';
import { useState, useEffect } from 'react';


//! Add useMemory.
export const useTags = () => {
    const [tags, setTags] = useState({});

    useEffect(() => {
        setTags(
            {
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
        )
    }, [])

    return tags;
}
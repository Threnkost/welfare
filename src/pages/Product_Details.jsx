import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { CiLocationOn } from "react-icons/ci"
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import { useParams } from 'react-router-dom';
import axios from 'axios'


const Product_Details = () => {

  const [name, setName] = useState("");
  const [cat, setCat] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [images, setImages] = useState([]);
  const [city, setCity] = useState("");
  const [participantCount,setParticipantCount] = useState();
  const [participants,setParticipants] = useState([]);
  const [winner,setWinner] = useState("");
  const { id } = useParams();

  console.log(id);

  const url = `/api/v1/advert/viewPublicAdvert/${id}`
  const token = localStorage.getItem('token');
  console.log(token);
  const [detail,setDetail] = useState();
  



  useEffect(() => {

    axios.get(`/api/v1/advert/advertDetails/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    })
    .then(response => {
        if(response.data.success){
            setDetail(true);
            setParticipantCount(response.data.advertDetails.participantCount)
            if(response.data.advertDetails.status=='completed') setWinner(response.data.advertDetails.winner); 
        }
    })





    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
        if (response.data.success) {

          setCat(response.data.advert.category + "/" + response.data.advert.tag);
          setHeading(response.data.advert.title);
          setCity(response.data.advert.city);

          setDescription(response.data.advert.description);
          setImages(prev => response.data.advert.images);

          console.log(response.data);
        }
        else toast.error(response.data.message);
      })
      .catch(error => {
        console.error('urun detayi cekme hatasi', error);
      });

  }, [])


  const Product = styled.div`
  
`;





  const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 15px;
`;

  const Images = styled.img`
   width: 400px;
   justify-self: center;
   align-self: center;
   
   object-fit: cover;
`;


  const Category = styled.span`
  font-size: 1vw;
  
  padding: 5px;
  border-bottom: 1px solid #000;
`
  const DealerDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`


  const DetailBox = styled.div`
  border-radius: 5px;
  border: 1px solid #eee;
  width: 100%;
  padding: 8px 5px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  font-size: 0.9vw;
  
  
`

  const LocationBox = styled.div`
  border-radius: 5px;
  border: 1px solid #eee;
  width: 100%;
  padding: 8px 0px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  font-size: 0.9vw;
 
  
`
  const ProductInformation = styled.div`
  width: 100%;
  padding: 10px 0px 5px 5px;
  border-radius: 5px;
  border: 1px solid #eee;
  background-color: #fff;
  font-size: 1.3vw;
  min-height: 150px;
  overflow: visible;
  word-wrap: break-word;
`

  const PriceBox = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 15px 0px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #eee;
  background-color: #fff;
`
  const LocationDetails = styled.div`
 width: 100%;
 height: 400px;
 background-color: #fff;
 border-radius: 5px;

`

  const Button = styled.button`
  width: 100%;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  padding: 15px 0px;
  text-align: center;
  border-radius: 5px;
  border: 2px solid #999;
  background-color: #fff;
  outline: none;
  cursor: pointer;
  
`


  return (
    <>
      <Navbar />
      <Product className="container mx-auto xl:max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1   p-4">
          <Carousel>
            {
              images.map((s) => (
                <img src={s} />
              ))
            }
          </Carousel>
        </div>
        <Details className="col-span-1  p-4">
          <Category>
            {cat}
          </Category>
          <DealerDetails>
            <DetailBox>
              <span style={{ fontWeight: 'bold', fontSize: '1.5vw', marginBottom: '5px' }}>{heading}</span>
              <span style={{ fontSize: '1.15vw' }}>Satıcı:{name}</span>
            </DetailBox>
            <LocationBox>
              <CiLocationOn size='3vw' /><span style={{ margin: '0px 10px', fontSize: '1.25vw' }}> Konum<br></br>
                <span style={{ fontWeight: 'bold', fontSize: '1.25vw', marginTop: '5px' }}>{city}</span>
              </span>
            </LocationBox>
          </DealerDetails>
          <ProductInformation>{description}
          </ProductInformation>
          <PriceBox>{price} ₺</PriceBox>
          <LocationDetails></LocationDetails>
          <Button>Satıcıyı Görüntüle</Button>
          <Button>Sepete Ekle</Button>
        </Details>
      </Product>
    </>
  )
}

export default Product_Details
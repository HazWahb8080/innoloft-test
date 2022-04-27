import React, { useEffect, useState } from 'react'
import NavBar from './../home/NavBar';
import Header from './../home/Header';
import MainProduct from './MainProduct';
import Loading from './../utils/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductData } from '../../slices/productSlice';
import { selectData } from './../../slices/productSlice';
import { updateTrlsData } from '../../slices/trls';
import {shuffle} from "lodash";
import { ConfigsData } from '../../slices/configs';
import { selectConfigsData } from './../../slices/configs';


function Product() {
  //implementing loading component till we get the data
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  const productData = useSelector(selectData);
  const  configs = useSelector(selectConfigsData)

  const App_Ids = [1,2];
  // about using .env file we can use process.env.REACT_APP_APP_ID

  
  // fetching the data
  useEffect(()=>{

    if(productData.length === 0){ // checking if already fetched the data or not then use stored data in our store

      setLoading(true)
      // fetching the configs
      fetch(`https://api-test.innoloft.com/configuration/${shuffle(App_Ids).pop()}/`,{
        method:"GET",
      }).then(res=>res.json()).then(Configs=>dispatch(ConfigsData({Configs})))
      // fetching the Product Data
      fetch("https://api-test.innoloft.com/product/6781/",{
      method: "GET",
      })
      .then(res => res.json())
      .then(Data => {
      dispatch(updateProductData({Data}))
      setTimeout(()=>{
        setLoading(false)
      },1000)
    })
     // fetching the trl options 
    fetch("https://api-test.innoloft.com/trl/",{
      method:"GET",})
      .then(res=>res.json())
      .then(TrlData => dispatch(updateTrlsData({TrlData})))
  }
  },[productData]);

  return (
    <div className="h-full w-full flex flex-col items-start justify-start">
      <Header configs={configs[0]?.Configs} />
      <div className="flex h-full w-full items-start justify-start">
      <NavBar isProduct={true} />
      <div className="product-window">
      {loading ? <Loading/> : <MainProduct productData={productData} />}
      </div>
      </div>
    </div>
  )
}

export default Product;
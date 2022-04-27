import React,{useState,useEffect} from 'react';
import {Editable,EditableTextarea,EditablePreview, Select}from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { updateProductCats, updateProductTrl } from '../../../slices/productSlice';
import { updateProductBms } from '../../../slices/productSlice';
import { selectTrlData } from '../../../slices/trls';


function AttrTab({cats,bm,trl}) {


  // handle updating the default values 
  const [updatedCatValue,setUpdatedCatValue] = useState();
  const [updatedBmValue,setUpdatedBmValue] = useState();
  const [updatedTrlValue,setUpdatedTrlValue] = useState();
  const [current,setCurrent] = useState();
  const dispatch = useDispatch();
  function handleediting () { 
    if(updatedCatValue) { 
      dispatch(updateProductCats({value:updatedCatValue,id:current}))
      fetch("https://api-test.innoloft.com/product/6781/",{
        method:"PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCatValue),
      }).then((res)=>console.log(res.json()))
    }
    else if (updatedBmValue) {
      dispatch(updateProductBms({value:updatedBmValue,id:current}))
      fetch("https://api-test.innoloft.com/product/6781/",{
        method:"PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBmValue),
      }).then((res)=>console.log(res.json()))
    }
  }
  

  // handling the trls
    const trls = useSelector(selectTrlData);
    console.log(process.env.REACT_APP_GOOGLE_MAPS_API)


  return (
    <div className="flex flex-col space-y-6">
      {/* categories */}
      <div className="px-4 border-b border-black/5 pb-4">
        <h1 className="text-xl font-medium font-sans pb-2"> categories </h1>
        {cats.map((category,i) => {
          return (
            <div key={i} className="flex items-start w-full justify-start  space-x-3 ">
            <p className="self-center">{i+1 + "."}</p>
            <Editable 
            key={i}
            defaultValue={category.name}
            onEdit={()=>setCurrent(i)} //entering editing mode
            onSubmit={handleediting} // blurring out or clicking ways or Enter
             >
            <EditablePreview />
            <EditableTextarea onChange={(e)=>setUpdatedCatValue(e.target.value)}
             css={{paddingTop:"15px",paddingBottom:"20px",overflow:"hidden", height:"50px",paddingLeft:"10px"}}/>
            </Editable>
             </div>
          )
        })}
        </div>

      {/* Business Models */}
      <div className="px-4 border-b border-black/5 pb-4">
        <h1 className="text-xl font-medium font-sans pb-2"> Business Models </h1>
        {bm.map((bm,i) => {
          return ( 
            <div key={i} className="flex items-start w-full justify-start  space-x-3 ">
            <p className="self-center">{i+1 + "."}</p>
            <Editable 
            defaultValue={bm.name}
            onEdit={()=>setCurrent(i)}
            onSubmit={handleediting}
             >
            <EditablePreview />
            <EditableTextarea onChange={(e)=>setUpdatedBmValue(e.target.value)}
             css={{paddingTop:"15px",paddingBottom:"20px",overflow:"hidden", height:"50px",paddingLeft:"10px"}}/>
            </Editable>
             </div>

          )
        })}
        </div>

        {/* trl */}
        <div className="px-4 border-b border-black/5 pb-4">
           <Select 
            value={trl.name}
            onChange={(e)=>dispatch(updateProductTrl(e.target.value))}>
              {trls[0].TrlData.map((trlitem,i)=>{
                return (<option key={i} value={trlitem.name}>{trlitem.name}</option>
                )
              })}
           
          </Select>
        </div>


    </div>
  )
}

export default AttrTab
import React,{useState} from 'react';
import {Editable,EditableTextarea,EditablePreview}from "@chakra-ui/react";
import { useDispatch} from 'react-redux';
import {updateProductDesc } from './../../../slices/productSlice';

// in one of my projects [Cohort-based courses platform i created my own editable components]
// but for the sake of this assessment i prefered to use chackra ui , still the heavy lifitng is still on me *)
// and for some diversity as well :) 

function DescTab({desc}) {
    const dispatch = useDispatch();
    const [updatedValue,setUpdatedValue] = useState();

  return (
    <div>
      <Editable defaultValue={desc} 
      // this line below responsible for storing the updated desc value in our store
      onSubmit={(() => updatedValue && dispatch(updateProductDesc(updatedValue)))} 
      >
      <EditablePreview />
      <EditableTextarea onChange = {(e)=>setUpdatedValue(e.target.value)}
       css={{paddingTop:"15px",paddingBottom:"20px",overflow:"hidden", height:"300px",paddingLeft:"10px"}} />
    </Editable>
      </div>
  )
}

export default DescTab;
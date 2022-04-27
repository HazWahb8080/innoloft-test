import React from 'react';
import {SkeletonCircle, SkeletonText } from '@chakra-ui/react';

function Loading() {
  return (
      <div className="loading-container" >
          <SkeletonCircle size='10' />
          <SkeletonText mt='10' noOfLines={15} spacing='4' />
      </div>
  )
}

export default Loading;
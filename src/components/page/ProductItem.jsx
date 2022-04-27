import React,{useState,useCallback} from 'react';
import AttrTab from './tabs/AttrTab';
import DescTab from './tabs/DescTab';
import parse from 'html-react-parser';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { selectConfigsData } from './../../slices/configs';




function ProductItem({product}) {

    const  configs = useSelector(selectConfigsData);

    // desctructring the product item
    const {name,picture,type,description,categories,businessModels,trl,user,company} = product;

    // handling tab clicking 
    const [activeTab,setActiveTab] = useState(0)


     //  found on the docs > https://www.npmjs.com/package/@react-google-maps/api 👇 
    const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API
        })

        const [map, setMap] = useState(null)

            const onLoad = useCallback(function callback(map) {
                const bounds = new window.google.maps.LatLngBounds();
                map.fitBounds(bounds);
                setMap(map)
            }, [])
    
            const onUnmount = useCallback(function callback(map) {
                setMap(null)
            }, [])

        // for map details
            const containerStyle = {
            width: '520px',
            height: '400px'
            };

            const center = {
            lat: Number(company.address.latitude),
            lng: Number(company.address.longitude),
            };
            //  found on the docs > https://www.npmjs.com/package/@react-google-maps/api 👆

  return (
    <div className="grid grid-cols-3 w-full h-full ">
        {/* left section */}
        <div className="lg:col-span-2 col-span-3 flex-col flex items-center 
        py-3 px-3 justify-start  w-full space-y-6 ">
            
            
            {/* image */}
            <div className='product-section'> 
            {/* i prefer using object-cover but that what i understood from your mockup img.  */}
                <img src={picture} alt="productimg" className="object-contain w-full h-[200px]" />
            </div>

            {/* main info */}
            <div className="border-b border-black/10 w-full justify-between flex-col px-4 py-3 space-y-1 ">
                <h1 className="font-sans text-4xl">{name}</h1>
                <div className="flex text-sm space-x-1 text-gray-700">
                <p> Type : </p>
                <p> {type.name} </p>
                </div>
            </div>


            {/* tabs */}
            <div className="w-full space-y-6  flex flex-col items-center justify-center">
                {/* toggle tabs */}
            <div className="w-full flex justify-between px-5 items-center">
            {Array.from(Array(2), (_, i) =>
             <div key={i}
              className="tab-container" onClick={()=>setActiveTab(i)} >
                 <div className={`${activeTab === i ? "active-tab-title" : "tab-title"}`}> 
                 {i === 0 ? "Description" : "Attributes"}
                 </div>
             </div>
             )}
             </div>
             {/* tab content */}
             <div className="w-full border border-black py-3 px-4 rounded-md">
             { activeTab === 0 ?
              <DescTab desc={parse(description)} /> :
              <AttrTab cats={categories} bm={businessModels} trl={trl} />
              }
             </div>
             </div>
        </div>

        {/* right section */}
        <div className="col-span-1 lg:flex flex-col bg-[#F7F8F9]/10 space-y-4 hidden border border-black/5 rounded-xl">
            {/* user info */}
            { configs[0]?.Configs.hasUserSection && <div className="w-full pb-3 pt-12 px-3">
                <div className="flex  py-3 border border-black/5 rounded-xl justify-between items-center px-3">
                <div className="flex flex-col  px-3 self-center">
                    <h1 className="font-bold">Name</h1>
                    <p>{user.firstName + " " + user.lastName} </p>
                </div>
                    <img alt="userimg" src={user.profilePicture}
                     className="w-24 h-24  self-center object-cover object-center rounded-full"  />
                </div>

                <div className="flex justify-between w-full mt-6 border-b pb-3 items-center">
                <div className="flex flex-col  py-3 px-6">
                    <h1 className="font-bold">Company</h1>
                    <p>{company.name} </p>
                </div>
                <div className="flex flex-col  py-3 px-6">
                    <h1 className="font-bold">Email</h1>
                    <p>{user.email} </p>
                </div>
                </div>
            </div>}


            {/* map */}

            {isLoaded && 
            <div className="items-center justify-center flex px-3 pt-12">
            {/* the map is working fine > you will find Aachen Germany but google maps require billing info for this project */}
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}>
            </GoogleMap>
      </div>
      }
           
        </div>
    </div>
  )
}

export default ProductItem;
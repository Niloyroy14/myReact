import React, { useEffect, useState } from "react"
import useWindowWidth from "./useWindowWidth";


export default function LayoutComponent(scrnSize){

    // const [onSmallScren, setOnSmallScren] = useState(false);
    // const checkScreenSize = () => {
    //     setOnSmallScren(window.innerWidth<768)
    // }

    // useEffect(() => {
    //     checkScreenSize();
    //     window.addEventListener("resize", checkScreenSize);
    //     return () => window.removeEventListener('resize',checkScreenSize);
    // },[])

    const onSmallScren = useWindowWidth(768);

    return (
        <div>
            <h1>You are browsing on {onSmallScren? 'small' : 'large'} device</h1> 
        </div>
        
    );






}
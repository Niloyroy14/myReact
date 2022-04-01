import React, { useEffect, useState } from "react"
import useWindowWidth from "./useWindowWidth";


export default function LayoutComponent2() {

    // const [onSmallScren, setOnSmallScren] = useState(false);
    // const checkScreenSize = () => {
    //     setOnSmallScren(window.innerWidth < 768)
    // }

    // useEffect(() => {
    //     checkScreenSize();
    //     window.addEventListener("resize", checkScreenSize);
    //     return () => window.removeEventListener('resize', checkScreenSize);
    // }, [])


    const onSmallScren = useWindowWidth(768);


    return (
        <div className={onSmallScren ? 'small' : 'large'}> 
            <h1>This is another component</h1>
        </div>

    );






}
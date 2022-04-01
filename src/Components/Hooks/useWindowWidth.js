
import { useEffect, useState } from "react";

const useWindowWidth = (scrnSize) => {
    
    const [onSmallScren, setOnSmallScren] = useState(false);
 

    useEffect(() => {
        const checkScreenSize = () => {
            setOnSmallScren(window.innerWidth < scrnSize)
        }
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [scrnSize])

    return onSmallScren;
}


export default useWindowWidth;
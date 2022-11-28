import {useState} from "react"
import Slider from "react-slick";
import records from "./recordsAçõesDiárias.json"

const record = records;

function Carousel(){

    const NextArrow = ({onClick}) => {
        return (
           <div className="arrow next" onClick={onClick}> 

           </div> 
        );
    };

    const PrevArrow = ({onClick}) => {
        return (
           <div className="arrow prev" onClick={onClick}>
            
           </div> 
        );
    };

    const [imageIndex, setImageIndex] = useState()

    const settings ={
        infinite: true,
        lazyLoad: true,
        speed: 300,
        centerMode: true,
        centerPadding: 0,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),

    };

    return (
        <>
        <Slider {...settings}>
            {record.map((item,idx)=>{
                return(
                    <>
                    <div className={ item.id === imageIndex ? "slide activeSlide" : "slide"}>
                        
                    </div>
                    </>
                )
            })}
        </Slider>
        </>
    );
}

export default Carousel;
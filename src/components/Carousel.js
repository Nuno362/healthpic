import {useState} from "react"
import Slider from "react-slick";
import records from "./recordsAçõesDiárias.json"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {FaArrowRight, FaArrowLeft } from "react-icons/fa"


function Carousel(Index){

    const NextArrow =({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }

    const PrevArrow =({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const record = records;
    let itemEscolhidoArray = Object.values(Index);
    let itemEscolhido = itemEscolhidoArray[0];
   
    const[imageIndex, setImageIndex] = useState(itemEscolhido)

    const settings = {
        
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: itemEscolhido,

        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
      };

 
    return (
        <>
        <Slider {...settings}>
        {record.map((item)=>(
            <>
            <div className={item.id === imageIndex ? "text-Description active-text-Description" :"text-Description"}>
                <p>Está<br/><b>{item.title}</b></p>
            </div>
           <div key={item.id} className = {item.id === imageIndex ? "card-Carousel active-card-Carousel" :"card-Carousel"}>
                <img className = "card-top" src={item.image} alt ="fazer" />
           </div> 
           <button className= {item.id === imageIndex ? "card-bottom active-card-bottom" :"card-bottom"}>Ativar som </button>
           </>
        ))}
        </Slider>
        </>
    );

}

export default Carousel;
import {useState} from "react"
import Slider from "react-slick";
import records from "./recordsAçõesDiárias.json"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function Carousel(Index){

    const record = records;
    let itemEscolhidoArray = Object.values(Index);
    let itemEscolhido = itemEscolhidoArray[0];
    console.log(itemEscolhido);

    const settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: itemEscolhido -1
      };

 
    return (
        <>
        <h1>Funciona</h1>
        <Slider {...settings}>
        {record.map((item)=>(
           <div className = "card">
            <div className = "card-top">
                <h3>{item.title}</h3>
                <img src={item.image} alt ="fazer" />
                <hi>{item.title}</hi>
            </div>
            <div className="card-bottom">
                <button>Ativar som </button>
            </div>
           </div> 
        ))}
        </Slider>
        </>
    );

}

export default Carousel;
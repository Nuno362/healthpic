import records from "./recordsAçõesDiárias.json"
import { Link} from "react-router-dom"
import {useState,useEffect} from 'react'

function MenuSelector() {
    const partOne = records.slice(0,4);
    const partTwo = records.slice(4,8);
    const [view,setView] = useState(true);


    const handleClick = () => {
        return (
            setView(!view)
        )
    }
   
    
       
 
    
    if(view){
        return (
            <>
                <div className = "card-grid-MenuDiario ">
                    {partOne.map((item)=>{
                        return(
                            <div className = "card-MenuDiario" key={item.id}>
                            <div className = "card-body-MenuDiario">
                                <img src={item.image}/>
                            </div>
                            <div className = "card-footer-MenuDiario">
                                <Link className ="btn2-menuDiario" to = {`/MenuDiario/${item.id}`} >{item.title}</Link>
                            </div>
                            </div>
                        )
                    })}

                    <div className = "card-MenuDiario">
                    <div className = "card-body-MenuDiarioLink">
                        <Link className ="btn2-menuDiario" to ="#" onClick={handleClick}>Mais Ações</Link>
                    </div>
                    </div>
                </div>
            </>
          )
    }else{
        return (
            <>
                <div className = "card-grid-MenuDiario ">
                    <div className = "card-MenuDiario">
                        <div className = "card-body-MenuDiarioLink">
                        <Link className ="btn2-menuDiario" to ="#" onClick={handleClick}>Ações Anteriores</Link>
                        </div>
                    </div>
                    {partTwo.map((item)=>{
                        return(     
                            <div className = "card-MenuDiario" key={item.id}>
                                <div className = "card-body-MenuDiario">
                                    <img src={item.image}/>
                                </div>
                                <div className = "card-footer-MenuDiario">
                                    <Link className ="btn2-menuDiario" to = {`/MenuDiario/${item.id}`} >{item.title}</Link>
                                </div>
                            </div>
                        )
                    })}



                </div>
            </>
        )
    }


  }
  
  export default MenuSelector
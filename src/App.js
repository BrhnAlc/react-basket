
import { useState } from "react";
import "./App.css"
import Card from "./components/card/Card"

const App = () => {
  const [product,setProduct]=useState([
    { id:1,  title:"MSI Anakart",image:"https://picsum.photos/id/0/5000/3333", info:"3.0" , adet:1 },
  { id:2, title:"RAM",  image:"https://picsum.photos/id/1/5000/3333" , info: "16GB Kingston" ,adet:1 },
  { id:3, title:"Ekran Kartı", image:"https://picsum.photos/id/2/5000/3333", info:"Nvdia Geforce 1050" , adet:1 },
  { id:4, title:"Monitör",image:"https://picsum.photos/id/3/5000/3333", info: "17' Monitör", adet: 1 }
  ])
  const [basket, setBasket] = useState([]);
  return (
    <div className="App">
      <h1>REACT SEPET UYGULAMASI</h1>
      <h2>Listelenen Ürünler</h2>
      <div className="urunler">
        {
          product.map((item,index)=>{
            return(
              <Card onClick={()=>{
                const arr =[... basket];
                arr.push(item);
                setBasket(arr);
                console.log(basket);
              }} key={index} title={item.title} image={item.image} info={item.info}/>
            )
           
          })
        }
      </div>
      
    </div>
  )
}

export default App
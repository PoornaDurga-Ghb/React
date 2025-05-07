import React ,{useState,useEffect} from 'react';
function Products (){
   const [products,setProducts]=useState([])
const[count,setCount]=useState(0)     //display the product index
useEffect(()=>{
   fetch("https://fakestoreapi.com/products")
   .then((res)=>res.json())
   .then((data)=>{
         setProducts(data)
   })
},[])
const handlePrevious=()=>{
   setCount(prev=>prev-1)//count will decrease
}
const handleNext=()=>{
   setCount(prev=>prev+1)
}
const newProduct=products[count]


return (<>
{
newProduct?
<div style={{border:"2px solid rgb(184, 227, 206)",background:"rgb(230, 238, 241)",borderRadius:"9px",padding:"15px"}}>
<img src={newProduct.image} alt={newProduct.title} style={{height:"350px",width:"300px"}} />
<h3>{newProduct.title}</h3>
<h2>{newProduct.category}</h2>
<p>{newProduct.description}</p>
</div>:
<p>please try again after some time!!</p>
}

<button style={{border: "2px solid grey",margin :"20px",color:"white",background:count<=0?"grey":"red"}} 
    disabled={count<=0 } onClick={handlePrevious} > Prev </button>
<button style={{border:"2px solid",margin :"20px",background:"green",color:"white"}}  
       disabled={count>=20 }onClick={handleNext}> Next </button>
</>)
}


export default Products;
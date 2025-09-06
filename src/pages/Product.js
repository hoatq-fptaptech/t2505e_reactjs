import { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import GlobalContext from "../context/context";

function Product(){
    const {data,setData} = useContext(GlobalContext);
    const [product,setProduct] = useState({});

    const {id} = useParams();
    const get_product_from_api = async ()=>{
        const url = "https://dummyjson.com/product/"+id;
        const rs = await fetch(url);
        const data = await rs.json();
        setProduct(data);
    }
    useEffect(()=>{
        get_product_from_api();
    },[id]);
    const addToCart = ()=>{
       const cart = data.cart;
       // kiểm tra sp đã có trong giỏ hàng chưa, 
       // có rồi chỉ tăng số lượng
       product.buy_qty = 1;
       let check = false;
       for(var i=0;i<cart.length;i++){
         if(cart[i].id == product.id){
            check = true;
            cart[i].buy_qty = cart[i].buy_qty + 1;
            break;
         }
       }
       if(check == false){
            cart.push(product);
       }
    //    data.cart = cart;
    //    setData(data);
       setData({...data,cart:cart});
    }

    return (
        <Container>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} width={500}/>
            <p>{product.price}</p>
            <Button onClick={addToCart} variant="primary">Add to cart</Button>
        </Container>
    );
}
export default Product;
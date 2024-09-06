import { createContext, useState } from "react"
import data from '../../data.json'

export const ProductContext = createContext()
export const ProductContextProvider=({children})=>{

    const [cart,setCart] = useState([])
    const [showConfirm,setShowConfirm] = useState(false)
    
    const [totalAmt, setTotalAmt] = useState(0)
    const [totalCount,setTotalCount] = useState(0)

    const addToCart =(id)=>{
        const isInCart = cart.some(item => item.id === id);
        console.log(isInCart)
        
        // let count = 1
        if(!isInCart){
            const dessert = data.find(des=> des.id===id)
            console.log(dessert)
            console.log("adding", cart ," and " ,dessert)
            setCart((cart)=> [...cart , { ...dessert, count:1 }])
        }
        console.log(cart)
    }

    const deleteFromCart =(id)=>{

        const isInCart = cart.some(item => item.id === id);
        console.log(isInCart)
        
        if(isInCart){
            const dessert = data.find(des=> des.id===id)

            setCart((cart)=> [...cart , { ...dessert, count: 0 }]);

            setCart(cart => cart.filter(item => item.id !== id));
        }
    }

    const incrementItemCount = (id) => {
        setCart(cart => 
            cart.map(item => 
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };
    
    const decrementItemCount = (id) => {
        setCart(cart => 
            cart
            .map(item => 
                    item.id === id && item.count >= 1 ? { ...item, count: item.count - 1 } : item
                )
            .filter(item => !(item.id === id && item.count === 0))
        );
    };

    const totalCountAndAmtHandler = ()=>{
        if(cart.length>0){
            setTotalAmt(
                cart.reduce((total, desert)=>{
                    return total + desert.count*desert.price ;
                } , 0)
            )
            setTotalCount(
                cart.reduce((total, desert)=>{
                    return total + desert.count;
                } , 0)
            )
        }else{
            setTotalAmt(0)
            setTotalCount(0)
        }
        console.log(totalAmt)
    }

    const confirmOrderHandler =()=>{
        console.log("Start confirm order")
        setShowConfirm(true)
    }

    const startNewOrderHandler=()=>{
        console.log("start new order")
        setShowConfirm(false)
        setCart([])
    }

    const value = {
        cart, setCart,
        totalAmt, setTotalAmt,
        totalCount, setTotalCount,
        addToCart, deleteFromCart, totalCountAndAmtHandler,
        incrementItemCount, decrementItemCount,
        showConfirm, 
        confirmOrderHandler , startNewOrderHandler
    }

    return(
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

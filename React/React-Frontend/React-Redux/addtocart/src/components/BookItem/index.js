import { Button } from "react-bootstrap"
import styles from "./BookItem.module.css"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slice/cartSlice"


export default function BookItem({data}){
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart({
            ...data,
            quantity: 1
        }))
        alert("Now, the product will add to the Cart!")
    }
    return (
        
        <div className={styles.bookItem}>
            <div className={styles.bookInfo}>
                <img src={data.images[0]} alt="" />   
            </div>
            <div className={styles.bookInfo}>
                <div className={styles.name}> {data.title} </div>
                <div className={styles.des}><i>{data.description}</i></div>
                <div className={styles.price}>Price: ${data.price}</div>
                <Button onClick={handleAddToCart} className={styles.button} variant="success">Add to Cart</Button>

            </div>

        </div>
       
    )

}
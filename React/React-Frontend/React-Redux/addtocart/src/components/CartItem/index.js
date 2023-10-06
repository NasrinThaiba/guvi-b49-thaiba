import { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import { Button } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../redux/slice/cartSlice";

export default function CartItem({ data }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(data?.quantity);
    const [totalPrice, setTotalPrice] = useState(+data?.price * +data?.quantity);

    const handleChange = (e) => {
        const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1;
        setQuantity(value);
    };

    const handleRemove = () => {
        dispatch(removeItem({ id: data?.id }));
    };

    useEffect(() => {
        setTotalPrice(data?.price * quantity);
        dispatch(updateQuantity({ id: data?.id, quantity }));
    }, [quantity, data?.price, data?.id, dispatch]);

    return (
        <tr className={styles.cartItem}>
            <td className={styles.cart}>
                <img src={data.images[0]} alt="" style={{ width: '20%' }} />
                <div className={styles.itemInfo}>
                    <div>{data.title}</div>
                    <div>{data.description}</div>
                </div>
            </td>
            <td className={styles.price}>
                ${data.price}
            </td>
            <td className={styles.quantity}>
                <button className={styles.changeBtn} onClick={() => {
                    if (quantity > 1) {
                        setQuantity(prev => prev - 1);
                    }
                }}>-</button>
                <input type="number" value={quantity} className={styles.input} onChange={handleChange} />
                <button className={styles.changeBtn} onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </td>
            <td className={styles.price} style={{ fontWeight: 'bold' }}>
                ${totalPrice}
            </td>
            <td className={styles.removeButton}>
                <Button variant="danger" onClick={handleRemove}><FaTrashAlt /></Button>
            </td>
        </tr>
    );
}

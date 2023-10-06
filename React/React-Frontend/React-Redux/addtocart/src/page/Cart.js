import { useSelector } from "react-redux"
import { Container, Row, Table } from "react-bootstrap"
import CartItem from "../components/CartItem"


export default function Cart() {
    const cart = useSelector(state => state.cart)
    return (
        <Container>
            <Row>
                {cart?.list && cart?.list?.length > 0 ? (
                    <Table style={{ width: '98%', padding: '10px', margin: '10px', border: '1px solid black' }}>
                        <thead style={{border: '1px solid black'}}>
                            <tr style={{fontSize: '18px'}}>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead >
                        <tbody >
                            {
                                cart?.list.map(item => {
                                    return (
                                        <CartItem 
                                            key={item?.id}
                                            data={item}
                                        
                                        />
                                    )
                            }
                       
                        )
                    }
                    <tr style={{ fontSize: 20, textAlign: 'right', padding: '10px' }}>
                        <td colSpan={3} style ={{ fontWeight: 'bold' }}>Total:</td>
                        <td colSpan={1} style ={{ color: 'blue' }}>${cart?.total}</td>
                    </tr>
                     </tbody>
                    </Table>
                    

                ) : null}
            </Row>

        </Container>
    )
}
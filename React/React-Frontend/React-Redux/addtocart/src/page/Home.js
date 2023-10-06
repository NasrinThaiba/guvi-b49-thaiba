import { Container, Row, Col } from "react-bootstrap";
import productList from "../data/products.json";
import BookItem from "../components/BookItem";

export default function Home() {
    return (
        <Container>
            <Row>
                {productList.map(item => {
                return (
                    <Col xl="3" key={item.id}>
                       <BookItem data={item} />
                    </Col>
                )
                })}
            </Row>
        </Container>
    )
}
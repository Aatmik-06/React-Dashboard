import Container from 'react-bootstrap/Container';
import user from "../images/Users.png"
import products from "../images/Products.png"
import orders from "../images/Orders.png"
import review from "../images/Reviews.png"
import sales from "../images/Sales.png"
const HomeProducts=()=>{
    return(
        <>
        <Container id='homecontainer'>
            <div className='homecontent'>
                <div id='homecontent-h1'><img src={user} alt="" /> <br />  <br /><img src={orders} alt="" /></div>
                <div id='homecontent-h3'> <img src={sales} alt="" /> </div>
            </div>
            <div id='homecontent-h2'><img src={products} alt="" /> <br /> <br /> <img src={review} alt="" id='review' /></div>
                
        </Container>
        
        </>
    )
}

export default HomeProducts;
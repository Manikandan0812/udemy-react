import sale from "../images/sale-image.png";


function Saleimage(){
    return (
        <div className="sale__image">
        <img src={sale} alt="sale"></img>
        <div className="offer">
          <h2>Udemy Flash Sale! 24 hours to save</h2>
          <p>Get The Top Courses for just 449.Just One day Save Lifetime To Learn</p>
        </div>
        </div>
    )
}
export default Saleimage;
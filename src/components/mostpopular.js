import one from "../images/p1.jpg";
import two from "../images/p2.jpg";
import three from "../images/p3.jpg";
import four from "../images/p4.jpg";
import five from "../images/p5.jpg";
import six from "../images/p6.jpg";
import seven from "../images/p7.jpg";
import eight from "../images/p8.jpg";
function Most (){
return (
    <div className="recommended">
        <h2>Most Popular</h2>
        <p>Pick the best for it</p>
        <div className="recommenden__section"> 
            <div className="recommended__items">
            <img src={one} alt="c1"></img>
            <h3>2023 Python Data Visualization</h3>
            <p>Colls steve</p>
            <p>4.5 ⭐⭐⭐⭐</p>
            <p>449 <del>2999</del></p>
            </div>
            <div className="recommended__items">
            <img src={two} alt="c2"></img>
            <h3>AI Master Class-2023</h3>
            <p>Dr Angel Gu</p>
            <p>3.5 ⭐⭐⭐⭐</p>
            <p>399 <del>4999</del></p>
            </div>
            <div className="recommended__items">
            <img src={three} alt="c3"></img>
            <h3>Web Developer Bootcamp 2024</h3>
            <p>Colls steve</p>
            <p>2.5 ⭐⭐⭐⭐</p>
            <p>4999 <del>7999</del></p>
            </div>
            <div className="recommended__items">
            <img src={four} alt="c4"></img>
            <h3>UI/UX Desiging 2023</h3>
            <p>Smith</p>
            <p>4.5 ⭐⭐⭐⭐</p>
            <p>599 <del>3999</del></p>
            </div>
            <div className="recommended__items">
            <img src={five} alt="c5"></img>
            <h3>UI/UX Desiging 2023</h3>
            <p>Smith</p>
            <p>4.5 ⭐⭐⭐⭐</p>
            <p>599 <del>3999</del></p>
            </div>
            <div className="recommended__items">
            <img src={six} alt="c6"></img>
            <h3>UI/UX Desiging 2023</h3>
            <p>Smith</p>
            <p>4.5 ⭐⭐⭐⭐</p>
            <p>599 <del>3999</del></p>
            </div>
            <div className="recommended__items">
            <img src={seven} alt="c7"></img>
            <h3>UI/UX Desiging 2023</h3>
            <p>Smith</p>
            <p>4.5 ⭐⭐⭐⭐</p>
            <p>599 <del>3999</del></p>
            </div>
            
            <div className="recommended__items">
            <img src={eight} alt="c8"></img>
            <h3>UI/UX Desiging 2023</h3>
            <p>Smith</p>
            <p>4.5 ⭐⭐⭐⭐</p>
            <p>599 <del>3999</del></p>
            </div>
        </div>
        </div>
)
}
export default Most;
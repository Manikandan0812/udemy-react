import one from "../images/c1.jpg";
import two from "../images/c2.jpg";
import three from "../images/c3.jpg";
import four from "../images/c4.jpg";


function Courses(){
    return(
        <div className="recommended">
        <h2>Recommended For You</h2>
        <p>Pick the best for you</p>
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
        </div>
        </div>
    )
}
export default Courses;
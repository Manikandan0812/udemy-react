



function Navbar(){


    return(
        <div className="navbar">
        <h1>Udemy</h1>
        <div className="navbar__search">
         <input type="text" placeholder="Search For Anything here.Business,Tech"></input>
        </div>
        <div className="navbar__icons">
         <p>My Courses</p>
         
         <div className="purchase">
            <div>
            <p>My learning</p>
            </div>
           <div className="purchase__s1">
           <p>You are not Purchasing Yet</p>
           </div>
            
         </div>
        </div>
        </div>
    )
}

export default Navbar;
import {useState, useEffect} from "react";
import Listing from "../components/Listing";


function AllListings({Listings}) {



    return(
       <div>
           {Listings.map((listing) => (
                <Listing ID={listing.ID}
                         Name={listing.Name}
                         ImageLink={listing.ImageLink}
                         Description={listing.Description}
                         Price={listing.Price}
                         Email={listing.Email}/>
               ))}
       </div>
    )
}

export default AllListings;
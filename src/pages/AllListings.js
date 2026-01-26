import {useState, useEffect} from "react";
import Listing from "../components/Listing";
function AllListings() {

    const [listings, addListing] = useState([
        {
            ID:1,
            Name:"Stará pračka",
            Description:"Nefunguje",
            Price:2499,
            Email:"adam.novak@yandex.ru"
        },
        {
            ID:2,
            Name:"Nová pračka",
            Description:"Nefunguje (jen trochu)",
            Price:2899,
            Email:"adam.novak@yandex.ru"
        }
    ])

    const putListing = () => {

    }



    return(
       <div>
           {listings.map((listing) => (
                <Listing ID={listing.ID}
                         Name={listing.Name}
                         Description={listing.Description}
                         Price={listing.Price}
                         Email={listing.Email}/>
               ))}
       </div>

    )
}

export default AllListings;
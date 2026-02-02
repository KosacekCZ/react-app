import {useState} from "react";

function NewListing({OnCreate}) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [email, setEmail] = useState("")


    const submit = (e) => {
        e.preventDefault()
        const listing = {}
        listing.Name = name
        listing.Description = description
        listing.Price = price
        listing.ImageLink = image
        listing.Email = email
        OnCreate(listing)
        setName("")
        setDescription("")
        setPrice(0)
        setImage("")
        setEmail("")
    }

    return (
        <div className="pt-3">
            <form onSubmit={submit}>
                <input type="text" placeholder="Název inzerátu" className="form-control mb-3" required onChange={(e) => setName(e.target.value)}/>
                <textarea placeholder="Popis inzerátu" rows="3" className="form-control mb-3" onChange={(e) => setDescription(e.target.value)}></textarea>
                <input type="text" placeholder="URL foto" className="form-control mb-3" onChange={(e) => setImage(e.target.value)}/>
                <input type="number" placeholder="Cena (Kč)" step="100" className="form-control mb-3" onChange={(e) => setPrice(e.target.value)}/>
                <input type="email" placeholder="E-mail" className="form-control mb-3" onChange={(e) => setEmail(e.target.value)}/>
                <input type="submit" value="Přidat inzerát" className="btn btn-primary mb-3"/>
            </form>
        </div>
    )
}

export default NewListing;
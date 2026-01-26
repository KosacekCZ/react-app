
function Listing ({ID, Name, Description, Price, ImageLink, Email}) {
    return (
        <div>
            <img src={ImageLink} alt=""/>
            <h4>{Name}</h4>
            <p><b>{Price}</b></p>
        </div>
    )
}

export default Listing;
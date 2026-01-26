
function Listing ({ID, Name, Description, Price, ImageLink, Email}) {
    return (
        <div>
            <img src={ImageLink} alt="" width="200px" height="200px"/>
            <h4>{Name}</h4>
            <p><b>{Price}</b></p>
        </div>
    )
}

export default Listing;

function NewListing({OnCreate}) {
    return (
        <div className="pt-3">
            <form onSubmit={() => {}}>
                <input type="text" placeholder="Název inzerátu" className="form-control mb-3" required/>
                <textarea placeholder="Popis inzerátu" rows="3" className="form-control mb-3"></textarea>
                <input type="text" placeholder="URL foto" className="form-control mb-3"/>
                <input type="number" placeholder="Cena (Kč)" step="100" className="form-control mb-3"/>
                <input type="email" placeholder="E-mail" className="form-control mb-3"/>
                <input type="submit" value="Přidat inzerát" className="btn btn-primary mb-3"/>
            </form>
        </div>
    )
}

export default NewListing;
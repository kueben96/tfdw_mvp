const DonorList = (props) => {

    return (
        <div className="m-2">
            {/* Display the article details if article is not None */}
            {props.donors && props.donors.map(donor => {
                return (

                    <div key={donor.id}>
                        <h2 className="text-primary"> {donor.name} </h2>
                        <p> {donor.description} </p>
                        <hr />
                    </div>
                )

            })}
        </div>
    )
}

export default DonorList;
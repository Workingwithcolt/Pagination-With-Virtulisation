export const UserCard = ({ user }) => {
    return (
        <>
            <div className="card" >
                {user.searchString}
                <img src={"https://media.licdn.com/dms/image/v2/D5603AQGPJ2NcPjKPrA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1683512709145?e=1739404800&v=beta&t=dX-WJ6vYpEoY9BaVBm17qJdVSqr3fmD4tpq5oLU1upU"} className="card-img-top h-50 w-50" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}
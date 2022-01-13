

export const Reading = ({list_user, user_email, listing_Handler, set_Username}) => {
    return(
        <div>
            <h1>{list_user}</h1>
            <h2>{user_email}</h2>
            <form onSubmit={listing_Handler}>
                <input
                onChange={(e) => set_Username(e.target.value)}
                placeholder="Enter Username"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
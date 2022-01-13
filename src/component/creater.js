

export const Creater = ({new_user, signingHandler, set_username, set_email, set_password}) => {
    return(
        <div>
            <h1>{new_user}</h1>
            {!new_user ? (
            <form onSubmit={signingHandler}>
                <input
                onChange={(e) => set_username(e.target.value)}
                placeholder="Username"
                />
                <input
                onChange={(e) => set_email(e.target.value)}
                placeholder="Email"
                />
                <input
                onChange={(e) => set_password(e.target.value)}
                placeholder="Password"
                />
                <button type="submit">Submit</button>
            </form>
            ) : (
            <h2>You are logged in</h2>
            )}
        </div>
    );
};
export const signUpFetch = async (username, email, password) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.console.log(error);
  }
};


export const readUserFetch = async (username) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user/${username}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({
      //   username: username,
      // }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const updateUserFetch = async (username, email) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
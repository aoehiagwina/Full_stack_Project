
export const FetchReq = async (setArray) => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setArray(data);

};
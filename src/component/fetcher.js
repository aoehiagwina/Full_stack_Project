import './fetcher.css';

export const FetchReq = ({arr}) => {

return(
    <div>
        {arr.map((item, index) => {
            return (
                <div>
                    <p key={index}>{item.author}</p>
                    <img
                        className="imageFunTime"
                        src={item.download_url}
                        alt="random"
                    />
                </div>
            )})}
    </div>
    )

} 

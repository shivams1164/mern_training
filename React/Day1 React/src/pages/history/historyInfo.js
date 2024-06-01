import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const HistoryInfo = () => {
    const customStyle = {
        color: 'white',
        backgroundColor: 'black',

    }
    const [data, setData] = useState({});
    const params = useParams();
    const historyId = params.historyId;

    const getData = async () => {
        const res = await fetch(`https://dummyjson.com/products/${historyId}`);
        const obj = await res.json();
        setData(obj);
    }
    useEffect(() => {
        getData();
    }, [])


    return (
        <div style={customStyle}>
            <h2>History Info {historyId}</h2>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <img src={data?.thumbnail} />
            <h5>{data?.category}</h5>

        </div>

    )
}
export default HistoryInfo
import {useState} from "react";
import {css} from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
    let [color, setColor] = useState("#ffffff");
    let [loading, setLoading] = useState(true);
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: orange;
    `;
    return (
        <div className='container loading'>
            <ClipLoader color={color} loading={loading} css={override} size={100}/>
        </div>
    )
}
export default Loading
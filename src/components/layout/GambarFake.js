import React from 'react'

const GambarFake = (props) => {
    const { url, width = "100px", height = "100px" } = props;
    const myStyle = {
        width,
        height,
        margin: "auto"
}

return (
    <div style={myStyle}>
        <img src={url} alt="user-img" className="card-img-top rounded-circle" />
    </div>
)
}
export default GambarFake
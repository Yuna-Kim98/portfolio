import React from 'react';

export default function Title({title, description, description2, text, text2, text3, text4, des2}) {
    return (
        <>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <p>{text}</p>
            <p>{text2}</p>
            <br></br>
            <p className="description">{description2}</p>
            <p>{text3}</p>
            <p>{text4}</p>
            <p>{des2}</p>
        </>
    );
}


import React from 'react';
import Title from './Title';

export default function SectionWrap({key, id, title, description, description2, text, text2, text3, text4, des2, children}) {
    return (
        <section key={key} id={id} className="section max-container">
            <Title title={title} description={description} description2={description2} text={text} text2={text2} text3={text3} text4={text4} des2={des2} />
            {children}
        </section>
    );
}
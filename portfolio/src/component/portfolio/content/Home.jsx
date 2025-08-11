import React from 'react';
import Img from '../commons/Img.jsx'

export default function Home() {
    return (
        <section id="home">
            <Img className="home__avatar" img="images/portrait.png" alt="portfolio" />
            <h2 className="home__title">Hello <br /> I'm
                <strong className="home__title--strong"> Dream Coder</strong>, YuNa</h2>
            <p className="home__description">꾸준히 발전하는 개발자 김유나입니다💫</p>
            <a className = "home__contact" href="#contact">Contact Me</a>
        </section>
    );
}


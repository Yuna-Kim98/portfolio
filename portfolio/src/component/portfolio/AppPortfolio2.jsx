import React from 'react';
import "./css/style.css";
import Header from './header/Header.jsx';
import HeaderIcon from './header/HeaderIcon.jsx';
import HeaderMenuList from './header/HeaderMenuList.jsx';
import Content from './content/Content.jsx';
import Home from './content/Home.jsx';
import SectionWrap from './content/SectionWrap.jsx';
import MajorList from './content/aboutme/MajorList.jsx';
import JobList from './content/aboutme/JobList.jsx';
import MySkills from './content/myskills/MySkills.jsx';
import MyWork from './content/mywork/MyWork.jsx';
import Testimonial from './content/testimonial/Testimonial.jsx';
import Footer from './footer/Footer.jsx';
import Arrow from './content/Arrow.jsx';

export default function AppPortfolio2() {
    const sectionList = [
        {
            "id": "about",
            "title": "About me",
            "description": "📈계속해서 성장하는 개발자",
            "text": "새로운 언어와 프레임워크를 두려워하지 않고 적극적으로 학습합니다.",
            "text2": "꾸준한 자기계발을 통해 최신 기술을 빠르게 습득하고, 효율적이고 안정적인 코드 작성에 집중합니다.",
            "description2": "🤝협업과 소통을 중시하는 팀 플레이어",
            "text3": "새로운 언어와 프레임워크를 두려워하지 않고 적극적으로 학습합니다.",
            "text4": "꾸준한 자기계발을 통해 최신 기술을 빠르게 습득하고, 효율적이고 안정적인 코드 작성에 집중합니다.",
            "children": [
                { "component": "MajorList" }
            ]
        },
        {
            "id": "work",
            "title": "My work",
            "description": "Projects",
            "children": [
                { "component": "MyWork" }
            ]
        }
    ];

    const componentMap = {
        MajorList, // "MarjorList":MajorList -> value 값만 적어줘도 됨
        JobList,
        MySkills,
        MyWork,
        Testimonial
    };

  //자식 컴포넌트 렌더링 :: 재귀함수
    const renderComponent = (childObj) => {
        const Component = componentMap[childObj.component];
        if (!Component) return null;    
        return (
            <Component key={childObj.component + JSON.stringify(childObj.props || {})} {...(childObj.props || {})}>
                {childObj.children && childObj.children.map((childObj) => renderComponent(childObj))}
            </Component>
        );
    };

    return (
        <div>
            <Header>
                <HeaderIcon />
                <HeaderMenuList />
            </Header>
            <Content>
                <Home />
                {sectionList && sectionList.map((section) => (
                    <SectionWrap
                        key={section.id}
                        id={section.id}
                        title={section.title}
                        description={section.description}
                        description2={section.description2}
                        text={section.text}
                        text2={section.text2}
                        text3={section.text3}
                        text4={section.text4}
                        des2={section.des2}
                    >
                    {section.children.map((child) => renderComponent(child))}
                    </SectionWrap>
                ))}  
                <Arrow />
            </Content>
            <Footer />
        </div>
    );
}
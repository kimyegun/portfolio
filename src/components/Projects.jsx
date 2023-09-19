import React, { useState } from "react";
import Card from './Card';
import styled from 'styled-components';
import Board from '../img/board.png';
import Mbti from '../img/mbti.png';
import diary from '../img/banner.png';
import hotel from '../img/hotel.png';
import About from '../img/About.png'


function Projects() {
    const projects = [
        {
            title: "MBTI_WORD",
            image: Mbti,
            detail: "Open API를 활용 구현한 실시간 MBTI 채팅기능으로 MBTI 관련 정보를 제공하는 웹페이지입니다.",
            start: "23.07.31 ",
            end: "23.08.17",
            tech: ["Scss", "React", "react hook", "router", "axois"],
            work: ["Design", "Frontend"],
            demo: "",
            source: "https://github.com/kimyegun/MBTI_WORLD",
        },
        {
            title: "EmotionDiary",
            image: diary,
            detail: "react 개인 포트폴리오 입니다.",
            start: "23.07.10 ",
            end: " 23.07.28",
            tech: ["React", "react hook", "router", "axois"],
            work: ["Design", "Frontend"],
            demo: "",
            source: "https://github.com/kimyegun/React_Project/",
        },
        {
            title: "StudyCafe",
            image: Board,
            detail: "JSP 팀 포트폴리오 입니다.",
            start: "23.06.11 ",
            end: "23.06.25",
            tech: ["MairaDB", "Java 11", "JSP", "Servlet", "CSS", "Jquery"],
            work: ["데이터베이스 설계 및 구축", "MVC 구조의 Backend 구현", "CSS을 활용한 Frontend 구현"],
            demo: "#projects",
            source: "https://github.com/kimyegun/StudtCafe/",
        },
        {
            title: "HotelLife  ",
            image: hotel,
            detail: "JAVA 팀 포트폴리오 입니다.",
            start: "23.05.22",
            end: "23.05.29",
            tech: ["azul java ver.17", "oracle database", "git hub"],
            work: ["Design", "Frontend"],
            demo: "",
            source: "https://github.com/kimyegun/HotelLife/",
        },
        {
            title: "portfolio",
            image: About,
            detail: "개인 포트폴리오 입니다.",
            start: "23.05.22",
            end: "23.09.20",
            tech: ["azul java ver.17", "oracle database", "git hub"],
            work: ["Design", "Frontend"],
            demo: "",
            source: "https://github.com/kimyegun/portfolio/",
        },
    ]
    const [flipAll, setFlipAll] = useState(false);
    const [flip, setFlip] = useState(-1);
    const cardFlip = (n) => {
        if (flip !== -1) {
            setFlip(-1)
        } else {
            setFlip(n)
        }
    }

    return(
        <>
            <h2 style={{fontSize: "48px", textAlign: "center", fontFamily: "Arial" }}>PROJECTS</h2>
            <div  style={{textAlign: "right"}}>
            <button  onClick={() => {setFlipAll(!flipAll)}}>
                { !flipAll ? (<span>Flip All &gt;</span>) : (<span>Reset &gt;</span>)}
            </button>
    
            </div>
            <ProjectsSection id="project">
            <ProjectsGrid>
                {
                    projects.map((ele, idx) => {
                        return(
                            <div key={`proj-${idx}`} className={(flip === idx) || flipAll ? "flip active" : "flip" } onClick={() => {cardFlip(idx)}}>
                                <Card proj={ele} />
                            </div>
                        )
                    })
                }
            </ProjectsGrid>
        </ProjectsSection>
        </>
    );
}

export default Projects;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;
const ProjectsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

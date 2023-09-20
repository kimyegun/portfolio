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
            tech: ["React", "StyledComponents", "node.js", "reactrouter", "mongodb"],
            work: ["게시판 CRUD기능 구현", "Open Api 연동", "회원가입 기능 구현"],
            demo: "",
            source: "https://github.com/kimyegun/MBTI_WORLD",
        },
        {
            title: "EmotionDiary",
            image: diary,
            detail: "react와 css을 활용하여 구현한 감정일기장 웹페이지 입니다.",
            start: "23.07.10 ",
            end: " 23.07.28",
            tech: ["React", "react hook", "router", "scripts"],
            work: ["일기장 CRUD기능 구현", "월별로 작성한 일기 조회기능 구현", "일기 정렬기능 구현"],
            demo: "",
            source: "https://github.com/kimyegun/React_Project/",
        },
        {
            title: "StudyCafe",
            image: Board,
            detail: "StudyCafe 자리선정 & 게시판 기능 서비스를 제공하는 웹페이지입니다.",
            start: "23.06.11 ",
            end: "23.06.25",
            tech: ["MairaDB", "Java 11", "JSP", "Servlet", "Jquery"],
            work: ["데이터베이스 설계 및 구축", "MVC 구조의 Backend 구현", "CSS을 활용한 Frontend 구현"],
            demo: "#projects",
            source: "https://github.com/kimyegun/StudtCafe/",
        },
        {
            title: "HotelLife  ",
            image: hotel,
            detail: "호텔 고객 & 객실관리 기능을 제공하는 서비스입니다.",
            start: "23.05.22",
            end: "23.05.29",
            tech: ["azul java ver.17", "oracle database", "git hub"],
            work: ["데이터 베이스 설계 및 구축", "종료 페이지 구현", "아이디어 기획"],
            demo: "",
            source: "https://github.com/kimyegun/HotelLife/",
        },
        {
            title: "portfolio",
            image: About,
            detail: "React 개인 포트폴리오입니다.",
            start: "23.09.11",
            end: "23.09.20",
            tech: ["azul java ver.17", "oracle database", "git hub"],
            work: ["React을 활용하여 상태관리 및 컴포넌트 관리", "Styled-Component을 활용한 웹디자인", "GoogleApi을 통해 구글폰트 설정"],
            demo: "",
            source: "https://github.com/kimyegun/portfolio/",
        },
    ]
    const [flipAll ] = useState(false);
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

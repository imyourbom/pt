import React from 'react'

import { webdText } from '../../data/webd'
import { Link } from 'react-router-dom'

const Webd = () => {
    return (
        <section id='webd'>
            <h2>😮 회사 이력</h2>
            {/* <h3 className="resume-title">
                Resume
                <span>
                    경력: 총 5년차 / 비고: 회사 법인명 변경 및 인수합병 등으로 인하여 3개의 회사(인더핸즈,시즐,플레이포인트랩)가 같은 회사임을 명시합니다.
                </span>
            </h3>
            <div className="resume-item">
                <h4>아이웍스인터렉티브</h4>
                <h5>2024.08.01 - 재직중</h5>
                <p><em>- SI 및 에이전시 회사</em></p>
                <p>퍼블리싱</p>
                <p>UI개발팀 대리</p>
                <Link to="Today.jsx" className="resume-link">상세보기</Link>
            </div>
            <div className="resume-item">
                <h4>플레이포인트랩 (구 인더핸즈)</h4>
                <h5>2023.01.02 - 2023.09.28</h5>
                <p><em>- 소프트웨어 개발 및 방탈출 카페 회사</em></p>
                <p>웹 기획/디자인 및 퍼블리싱</p>
                <p>디자인&개발팀 주임</p>
                <Link to="Today.jsx" className="resume-link">상세보기</Link>
            </div>
            <div className="resume-item">
                <h4>시즐 (구 인더핸즈)</h4>
                <h5>2022.03.01 - 2022.08.12</h5>
                <p><em>- 소프트웨어 개발회사</em></p>
                <p>웹 기획/디자인 및 퍼블리싱</p>
                <p>디자인&개발팀 주임</p>
                <Link to="Today.jsx" className="resume-link">상세보기</Link>
            </div>
            <div className="resume-item">
                <h4>인더핸즈</h4>
                <h5>2019.09.09 - 2022.03.01</h5>
                <p><em>- 소프트웨어 개발회사</em></p>
                <p>웹 기획/디자인 및 퍼블리싱</p>
                <p>개발팀 주임</p>
                <Link to="Today.jsx" className="resume-link">상세보기</Link>
            </div> */}
            <div className="video__inner">
                {webdText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                    
                ))}
            </div>
        </section>
    )
}

export default Webd
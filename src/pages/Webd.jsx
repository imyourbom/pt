import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'


import { webdText } from '../data/webd'

const Webd = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const webdPageclassName = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "회사 이력"
            description="회사 이력입니다.">
                
            <section id='webdPage' className={webdPageclassName}>
                <h2>😄 회사 이력</h2>
                <div className="video__inner">
                   <div className="resume">
                        <div>
                            <div>
                                <h3 className="resume-title">Resume</h3>
                                <h4 className="resume-subTitle">※ 경력: 총 6년차 / 비고: 회사 법인명 변경 및 인수합병 등으로 인하여 3개의 회사 (인더핸즈, 시즐, 플레이포인트랩) 가 같은 회사임을 명시합니다</h4>
                                <div className="resume-item">
                                    <h4>아이웍스인터렉티브</h4>
                                    <h5>2024.08.01 - 재직중</h5>
                                    <p><em>- SI 및 에이전시 회사</em></p>
                                    <p>- 퍼블리싱</p>
                                    <p>- UI개발팀 주임</p>
                                </div>
                                <div className="resume-item">
                                    <h4>플레이포인트랩 (구 인더핸즈)</h4>
                                    <h5>2023.01.02 - 2023.09.28</h5>
                                    <p><em>- 소프트웨어 개발 및 방탈출 카페 회사</em></p>
                                    <p>- 웹 기획/디자인 및 퍼블리싱</p>
                                    <p>- 디자인&amp;개발팀 주임</p>
                                    <p>※ '인더핸즈'가 '플레이포인트랩'이라는 회사를 새로 창립함</p>
                                </div>
                                <div className="resume-item">
                                    <h4>시즐 (구 인더핸즈)</h4>
                                    <h5>2022.03.01 - 2022.08.12</h5>
                                    <p><em>- 소프트웨어 개발회사</em></p>
                                    <p>- 웹 기획/디자인 및 퍼블리싱</p>
                                    <p>- 디자인&amp;개발팀 주임</p>
                                    <p>※ '시즐' & '인더핸즈' 인수합병</p>
                                </div>
                                <div className="resume-item">
                                    <h4>인더핸즈</h4>
                                    <h5>2019.09.09 - 2022.03.01</h5>
                                    <p><em>- 소프트웨어 개발회사</em></p>
                                    <p>- 웹 기획/디자인 및 퍼블리싱</p>
                                    <p>- 개발팀 주임</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    )
}

export default Webd
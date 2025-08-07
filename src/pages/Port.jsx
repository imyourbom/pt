import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { portfolioText } from '../data/portfolio'
import { Link } from 'react-router-dom'

const Port = () => {
    const [loading, setLoading] = useState(true);
    const [hoverIdx, setHoverIdx] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const portPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title="포트폴리오 사이트"
            description="포트폴리오 사이트 공부"
        >
            <section id='portPage' className={portPageClass}>
                <h2>🤗 작업 리스트</h2>
                <div className='port__inner'>
                    {portfolioText.map((item, key) => (
                        <div className="port" key={key}>
                            <div
                                className="port__thumb play__icon portfolio-wrap"
                                onMouseEnter={() => setHoverIdx(key)}
                                onMouseLeave={() => setHoverIdx(null)}
                            >
                           <img src={item.img || (item.imgs && item.imgs[0])} alt={item.title} />
                            {hoverIdx === key && item.hover && (
                                <div className="portfolio-info">
                                    <h4>{item.hover.title}</h4>
                                    <p>{item.hover.role}</p>
                                    <p>{item.hover.date}</p>
                                    {/* 외부 사이트 주소 */}
                                    <p className="portfolio-site">
                                        <a href={item.hover.site} target="_blank" rel="noopener noreferrer">
                                            {item.hover.site}
                                        </a>
                                    </p>
                                    {/* 내부 상세페이지 연결 */}
                                    <div className="portfolio-links">
                                        <Link to={`/port/${key}`}>+ 더보기</Link>
                                    </div>
                                </div>
                            )} 
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Port
import React from 'react'
import { useParams } from 'react-router-dom'
import { portfolioText } from '../data/portfolio'

import PortSwiper from '../components/contents/PortSwiper'

const PortfolioDetail = () => {
    const { id } = useParams();
    const item = portfolioText[parseInt(id, 10)];

    if (!item) return <div>포트폴리오 정보를 찾을 수 없습니다.</div>;

    const images = item.imgs || [item.img];

    return (
        <section className="portfolio-detail">
            <div>
                <h2>{item.hover?.title || item.title}</h2>
                <PortSwiper images={images} alt={item.title} />
            </div>
            <div className="detail-info">
                <p>{item.hover?.role}</p>
                <p>{item.hover?.date}</p>
                <p>{item.hover?.worker}</p>
                <p className="detail-links">
                    URL:
                    {item.hover?.site && (
                        <a href={item.hover.site} target="_blank" rel="noopener noreferrer">
                            {item.hover.site}
                        </a>
                    )}
                </p>
            </div>
        </section>
    )
}

export default PortfolioDetail
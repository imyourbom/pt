import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

const Today = ({ videos, id}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300);
    }, []);

    const todayClass = loading ? 'isLoading' : 'isLoaded'

    return (
        <section id={id} className={todayClass}>
            <div className='today__inner'>
                <div className='today__thumb play__icon'>
                    <Link>
                        <img src={videos[0].img} alt={videos[0].title} />
                    </Link>
                </div>
                <div className='today__text'>
                    <span className='today'>자기소개</span>
                    <h3 className='title'>
                        <Link to={videos[0].page}>
                            {videos[0].title}
                        </Link>
                    </h3>
                    <p className='desc'>{videos[0].desc}</p>
                    <div className='info'>
                        <span className='skll'>{videos[0].skill}</span>
                        <span className='author'>
                            <Link to={`/channel/${videos[0].channelId}`}>
                                {videos[0].author}
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Today
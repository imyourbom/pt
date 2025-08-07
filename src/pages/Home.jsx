import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import PortSlider from '../components/video/PortSlider'

import { todayText } from '../data/today'
import { portfolioText } from '../data/portfolio'

const Home = () => {
    return (
        <Main 
            title="김봄 포트폴리오" 
            description="김봄 포트폴리오입니다."
        >
            <Today videos={todayText} title='😊 소개' id='today' />
            <PortSlider videos={portfolioText} title='🤗 작업 리스트' id='portfolio' />
        </Main>
    )
}

export default Home
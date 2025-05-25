import { useState } from 'react'

// import IntroSection from './IntroSection'
import IntroSection2 from './IntroSection2'

// import Taipei101T from './Taipei101T'
// import Taipei101TT from './Taipei101TT'
import Taipei101test from './Taipei101test'

// import ChipSection from './ChipSection'
import ChipSection2 from './ChipSection2'

// import MedicSection from './MedicSection'
import MedicSection2 from './MedicSection2'

// import NightMarketSection from './NightMarketSection'
import NightMarketSection2 from './NightMarketSection2'

import ScrollToTopButton from './ScrollToTop'

import CloudPane from './CloudPane'

import { Icon } from '@iconify-icon/react';
import Lottie from 'lottie-react';
import bird from '../src/assets/bird.json';

// import i18n from './i18n'
import { useTranslation } from 'react-i18next'

function App2() {
  const [language, setLanguage] = useState("tw")
  const [showIntro, setShowIntro] = useState(true);
  const handleStart = () => {
    setShowIntro(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const carColors = [
    'var(--color-cyan-700)', // #0e7490, 深青色
    'var(--color-teal-600)', // #0f766e, 深 teal
    'var(--color-rose-600)', // #be123c, 深玫瑰紅
  ];
  const { i18n } = useTranslation();
  return (
    <div className="">
      <div className='fixed top-6 left-6 z-50 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-full'>
        {language==="tw"?(
          <button onClick={() => {console.log("Change");i18n.changeLanguage('en'); setLanguage("en")}} type="button">
            EN
          </button>): (
          <button onClick={() => {console.log("Change");i18n.changeLanguage('zh'); setLanguage("tw")}} type="button">
            中文
          </button>
          )
        }
      </div>
      
      
      
      {showIntro ? (<IntroSection2 onStart={handleStart} />):(
        <>
          {/* 台北101主體 */}
          {/* <div className="flex flex-col items-center w-full">
            <Taipei101TT />
          </div> */}
          <div className="relative overflow-hidden h-screen bg-gradient-to-b from-gray-900 via--900 to-sky-900 text-white">
            {/* Cloud animation */}
            <div className='absolute inset-0 z-0 overflow-hidden'>
              <CloudPane />
            </div>
            
            {/* Bird animation */}
            <div className="absolute inset-0 z-0 pointer-events-none top-45">
              <Lottie
                animationData={bird}
                loop
                style={{ 
                  width: '30%', 
                  height: '30%', 
                  background: 'transparent',
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 5 + 10}s`,
                }}
                className='absolute right-[-30%] translate-x-1/2 bird-animation top-[20%]'
              />
            </div>

            {/* Car animation */}
            {[...Array(2)].map((_, index) => {
              const randomColor = carColors[Math.floor(Math.random() * carColors.length)];
              return (
                <div
                  key={index}
                  className="absolute bottom-10 w-full h-20 pointer-events-none z-10"
                >
                  <Icon
                    icon="carbon:car"
                    width="32"
                    height="32"
                    className="absolute car-animation right-0 scale-x-[-1]"
                    style={{
                      color: randomColor,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${Math.random() * 10 + 5}s`,
                    }}
                  />
                </div>
              );
            })}

            {/* Taipei 101 */}
            <div className="flex flex-col items-center w-full z-20 relative">
              <Taipei101test />
            </div>
          </div>


          {/* 分隔線或過渡區域 */}
          {/* <div className="h-32 bg-gradient-to-b from-black to-sky-900 flex items-center justify-center text-sm text-gray-300"> </div> */}
          <div className="h-32 bg-gradient-to-b from-sky-900 to-gray-900 flex items-center justify-center text-sm text-gray-300"> </div>

          {/* Sections */}
          <div className='overflow-hidden relative bg-gradient-to-b from-gray-900 via-gray-900 to-sky-950'>
            <ChipSection2 />
          </div>
          <div className='overflow-hidden relative bg-sky-950'>
            <MedicSection2 />
          </div>
          <div className='overflow-hidden relative from-sky-950 via-gray-900 to-sky-950'>
            <NightMarketSection2 />
          </div>
          <ScrollToTopButton />
        </>
      )}
    </div>
  )
}

export default App2
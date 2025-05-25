import { motion } from 'framer-motion';
import { Icon } from '@iconify-icon/react';
import { useTranslation } from 'react-i18next';


export default function NightMarketSection() {
  const { t } = useTranslation()
  const timelineData = [
    {
      year: '1960',
      title: t("NightMarketTimelineNode1"),
      description: t("NightMarketDescription1"),
      icon: '🏮',
    },
    {
      year: '1987',
      title: t("NightMarketTimelineNode2"),
      description: t("NightMarketDescription2"),
      icon: '🧋',
    },
    {
      year: '2011',
      title: t("NightMarketTimelineNode3"),
      description: t("NightMarketDescription3"),
      icon: '🔧',
    },
    {
      year: '2020',
      title: t("NightMarketTimelineNode4"),
      description: t("NightMarketDescription4"),
      icon: '🌍',
    },
    {
      year: '2021',
      title: t("NightMarketTimelineNode5"),
      description: t("NightMarketDescription5"),
      icon: '📋',
    },
  ];
  const sections = [
    { topWidth: 1000, bottomWidth: 750, height: 400 },
    { topWidth: 1000, bottomWidth: 750, height: 400 },
  ];

  const timelineItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Element with id ${id} not found`);
    }
  };
  const carColors = [
    'var(--color-cyan-700)', // #0e7490, 深青色
    'var(--color-teal-600)', // #0f766e, 深 teal
    'var(--color-rose-600)', // #be123c, 深玫瑰紅
  ];

  

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-sky-950 via-gray-900 to-sky-950 pt-10">
      {sections.map((section, index) => {
        const { topWidth, bottomWidth, height } = section;
        const maxWidth = Math.max(topWidth, bottomWidth);
        const minWidth = Math.min(topWidth, bottomWidth);
        const topOffset = (maxWidth - topWidth) / 2;
        const bottomOffset = (maxWidth - bottomWidth) / 2;

        const timelineSlice = index === 0
          ? timelineData.slice(0, 2)
          : timelineData.slice(2, 5);

        
        return (
          <div
            key={index}
            id="nightmarket"
            className="relative mb-2 trapezoid z-10"
            style={{
              width: `${maxWidth}px`,
              height: `${height}px`,
              clipPath: `polygon(
                ${topOffset}px 0%,
                ${topOffset + topWidth}px 0%,
                ${bottomOffset + bottomWidth}px 100%,
                ${bottomOffset}px 100%
              )`,
              background: 'linear-gradient(to bottom, #9b5b5b, #6e3a3a)',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s ease',
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center">
              {index === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute top-5 text-white z-20 text-center timeline-title"
                >
                  <h2 className="text-3xl md:text-4xl font-bold">{t("NightMarketTitle")}</h2>
                  <p className="text-lg px-4 text-gray-100">
                  {t("NightMarketIntro")}
                  </p>
                </motion.div>
              )}
              <div
                className={`relative w-full max-w-[${minWidth}px] ${index === 0 ? 'pt-24 pb-6' : 'pt-0 pb-12'}`}
                style={{ 
                  height: index === 0 ? `${height - 60}px` : `${height}px`, 
                  maxWidth: `${minWidth}px`,
                }}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-rose-100"></div>
                {timelineSlice.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={timelineItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: (timelineSlice.length - 1 - idx) * 0.5 }}
                    className={`flex items-center ${index === 0 ? 'mb-4' : 'mb-0'} ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div
                      className={`w-1/2 mt-2 px-4 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}
                    >
                      <h4 className="text-lg font-semibold text-white">{item.year}</h4>
                      <h5 className="text-base font-medium text-rose-200">{item.title}</h5>
                      <p className="text-sm text-gray-100">{item.description}</p>
                    </div>
                    <div className="w-15 h-15 rounded-full bg-rose-600 flex items-center justify-center text-white text-3xl z-10">
                      {item.icon}
                    </div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
            {index === sections.length - 1 && (
              <button
                onClick={() => scrollToSection('nightmarket')}
                className="absolute right-32 bottom-2 z-10 mb-12 px-6 py-3 bg-gradient-to-r from-[#9b5b5b] to-[#b37777] hover:bg-gradient-to-r hover:from-[#b37777] hover:to-[#c99494] text-white text-sm italic rounded-full shadow-lg cursor-pointer flex items-center justify-center gap-2 text-wrap"
                style={{
                  maxWidth:"360px"
                }}
              >
                {t("EndButton")}
              </button>
            )}
          </div>
        );
      })}
      {[...Array(2)].map((_, index) => {
              const randomColor = carColors[Math.floor(Math.random() * carColors.length)];
              return (
                <div
                  key={index}
                  className="absolute bottom-10 w-full h-20 pointer-events-none z-0"
                >
                  <Icon
                    icon="carbon:car"
                    width="64"
                    height="64"
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
    </div>
  );
};
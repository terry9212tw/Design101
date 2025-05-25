import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import bird from '../src/assets/bird.json';
import { useTranslation } from 'react-i18next';


const MedicSection = () => {
  const { t } = useTranslation();
  const timelineData = [
    {
      year: '1984',
      title: t("MedicTimelineNode1"),
      description: t("MedicDescription1"),
      icon: '💉',
    },
    {
      year: '1995',
      title: t("MedicTimelineNode2"),
      description: t("MedicDescription2"),
      icon: '🩺',
    },
    {
      year: '2003',
      title: t("MedicTimelineNode3"),
      description: t("MedicDescription3"),
      icon: '🛡️',
    },
    {
      year: '2016',
      title: t("MedicTimelineNode4"),
      description: t("MedicDescription4"),
      icon: '🧬',
    },
    {
      year: '2020',
      title: t("MedicTimelineNode5"),
      description: t("MedicDescription5"),
      icon: '😷',
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

  return (
    <div className="w-full min-h-screen flex flex-col items-center  pt-10">
      <div className="absolute inset-0 z-0 pointer-events-none top-45">
        <Lottie
          animationData={bird}
          loop
          style={{ 
            width: '60%', 
            height: '60%', 
            background: 'transparent',
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 5 + 10}s`,
          }}
          className='absolute right-[-30%] translate-x-1/2 bird-animation'
        />
      </div>
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
            id="medic"
            className="relative mb-2 trapezoid"
            style={{
              width: `${maxWidth}px`,
              height: `${height}px`,
              clipPath: `polygon(
                ${topOffset}px 0%,
                ${topOffset + topWidth}px 0%,
                ${bottomOffset + bottomWidth}px 100%,
                ${bottomOffset}px 100%
              )`,
              background: 'linear-gradient(to bottom, #5e8e8a, #3a6562)',
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
                  <h2 className="text-3xl md:text-4xl font-bold">{t("MedicTitle")}</h2>
                  <p className="text-lg px-4 text-gray-100">
                    {t("MedicIntro")}
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
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-100/40"></div>
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
                      className={`w-1/2 px-4 mt-2 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}
                    >
                      <h4 className="text-lg font-semibold text-white">{item.year}</h4>
                      <h5 className="text-base font-medium text-teal-200">{item.title}</h5>
                      <p className="text-sm text-gray-100">{item.description}</p>
                    </div>
                    <div className="w-15 h-15 rounded-full bg-teal-600 flex items-center justify-center text-white text-3xl z-10">
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
                className="absolute right-32 bottom-2 mb-12 z-10 px-6 py-3 bg-gradient-to-r from-[#5e8e8a] to-[#7aa8a3] hover:bg-gradient-to-r hover:from-[#7aa8a3] hover:to-[#96c0bc] text-white text-sm italic rounded-full shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                {t("MedicNextButton")}
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MedicSection;
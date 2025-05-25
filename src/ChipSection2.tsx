import { motion } from 'framer-motion';
import CloudPane from './CloudPane';
import { useTranslation } from 'react-i18next';




const ChipSection = () => {
  const { t } = useTranslation();
  const timelineData = [
    {
      year: '1987',
      title: t("ChipTimelineNode1"),
      description: t("ChipDescription1"),
      icon: '🏭',
    },
    {
      year: '2001',
      title: t("ChipTimelineNode2"),
      description: t("ChipDescription2"),
      icon: '⚙️',
    },
    {
      year: '2015',
      title: t("ChipTimelineNode3"),
      description: t("ChipDescription3"),
      icon: '📱',
    },
    {
      year: '2018',
      title: t("ChipTimelineNode4"),
      description: t("ChipDescription5"),
      icon: '🌐',
    },
    {
      year: '2022',
      title: t("ChipTimelineNode5"),
      description: t("ChipDescription5"),
      icon: '🚀',
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
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center  pt-10">
      <div className='absolute inset-0 z-0 overflow-hidden'>
        <CloudPane />
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
            className="relative mb-2 trapezoid"
            id="chip"
            style={{
              width: `${maxWidth}px`,
              height: `${height}px`,
              clipPath: `polygon(
                ${topOffset}px 0%,
                ${topOffset + topWidth}px 0%,
                ${bottomOffset + bottomWidth}px 100%,
                ${bottomOffset}px 100%
              )`,
              background: 'linear-gradient(to bottom, #4b7289, #2a4a66)',
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
                  <h2 className="text-3xl md:text-4xl font-bold">{t("ChipTitle")}</h2>
                  <p className="text-lg px-4 text-gray-100">
                    {t("ChipIntro")}
                  </p>
                </motion.div>
              )}
              <div
                className={`relative w-full max-w-[${minWidth}px] ${index === 0 ? 'pt-24 pb-6' : 'pt-4 pb-12'}`}
                style={{ 
                  height: index === 0 ? `${height - 60}px` : `${height}px`, 
                  maxWidth: `${minWidth}px`,
                }}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cyan-100/40"></div>
                {timelineSlice.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={timelineItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: (timelineSlice.length - 1 - idx) * 0.5 }}
                    className={`flex items-center ${index === 0 ? 'mb-8' : 'mb-0'} ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div
                      className={`w-1/2 px-4 mt-2 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}
                    >
                      <h4 className="text-lg font-semibold text-white">{item.year}</h4>
                      <h5 className="text-base font-medium text-cyan-200">{item.title}</h5>
                      <p className="text-sm text-gray-100">{item.description}</p>
                    </div>
                    <div className="w-15 h-15 rounded-full bg-cyan-700 flex items-center justify-center text-white text-3xl z-10">
                      {item.icon}
                    </div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
            {index === sections.length - 1 && (
              <button
                onClick={() => scrollToSection('medic')}
                className="absolute right-32 bottom-2 z-10 px-6 py-3 bg-gradient-to-r from-[#4b7289] to-[#6b9ab3] hover:bg-gradient-to-r hover:from-[#6b9ab3] hover:to-[#8ab8cc] text-white text-sm italic rounded-full shadow-lg mb-12 cursor-pointer flex items-center justify-center gap-2"
              >
                {t("ChipNextButton")}
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

export default ChipSection;
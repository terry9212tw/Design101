import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';

const sections = Array.from({ length: 7 }, (_, i) => i + 1);

function Section({ section, index }: { section: number; index: number }) {
  const { t } = useTranslation();
  let bottomWidth;
  let topWidth;
  let height = 60;
  if (index === 0) {
    bottomWidth = 30;
    topWidth = 50;
  } else if (index === 1) {
    bottomWidth = 60;
    topWidth = 30;
    height = 20;
  } else {
    bottomWidth = 50;
    topWidth = bottomWidth + 30;
  }
  const isLeft = index !== 4;
  const maxWidth = Math.max(topWidth, bottomWidth);
  const topOffset = (maxWidth - topWidth) / 2;
  const bottomOffset = (maxWidth - bottomWidth) / 2;
  const tooltipVariants = {
    initial: { opacity: 0, 
      y: -10 
      },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.8,
        duration: 0.4,
      },
    },
  };
  return (
    <>
      <div
        key={section}
        className="relative mb-1 group-hover:scale-105 transition-transform duration-300 trapezoid"
        style={{
          width: `${maxWidth}px`,
          height: `${height}px`,
          clipPath: `polygon(
            ${topOffset}px 0%,
            ${topOffset + topWidth}px 0%,
            ${bottomOffset + bottomWidth}px 100%,
            ${bottomOffset}px 100%
          )`,
          background: 'linear-gradient(to top, #2a4a66, #4b7289)',
          boxShadow: '0px 2px 5px rgba(0,0,0,0.3)',
        }}
      />
      {index > 1 ? (
        <motion.div
          variants={tooltipVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`absolute top-1/2 transform -translate-y-1/2 ${
            isLeft ? 'right-[110%]' : 'left-[110%]'
          } rounded-md px-4 py-2 text-sm shadow-lg pointer-events-none bg-gray-900/90 ${
            section === 3
              ? 'border-l-4 border-cyan-700'
              : section === 5
              ? 'border-l-4 border-teal-600'
              : 'border-l-4 border-rose-600'
          }`}
          style={{
            minHeight: '40px',
            width: 'auto',
            maxWidth: 'none',
            whiteSpace: 'normal',
            textAlign: 'center',
            overflow: 'visible',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              maxWidth: '100%',
              color: '#ffffff',
            }}
          >
            {section === 3
              ? t("ChipLabel")
              : section === 5
              ? t("MedicLabel")
              : t("NightMarketLabel")}
          </span>
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
}

export default function Taipei101test() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center w-full mt-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          {/* 天線 */}
          <div className="w-1 h-14 bg-cyan-700 mb-1"></div>
          {/* 樓層 */}
          {sections.map((section, index) => {
            const scrollToSection = (id: string) => {
              const el = document.getElementById(id);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            };
            const topicIndex = Math.floor(section / 2) - 1;
            const topics = ['chip', 'medic', 'nightmarket'];
            if (section % 2 === 1 && section > 2) {
              return (
                <div
                  className="group relative"
                  key={section}
                  onClick={() => scrollToSection(topics[topicIndex])}
                >
                  <Section section={section} index={index} />
                  <Section section={section} index={index} />
                </div>
              );
            } else {
              return <Section section={section} index={index} key={section} />;
            }
          })}
          <div
            className="relative mt-2"
            style={{
              width: '140px',
              height: '120px',
              background: 'linear-gradient(to top, #2a4a66, #4b7289)',
              clipPath: `polygon(
                20px 0%, 
                120px 0%, 
                140px 100%, 
                0px 100%
              )`,
              boxShadow: '0px -2px 8px rgba(0,0,0,0.5)',
            }}
          >
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-cyan-200 text-md text-center w-[120px]">
              {t("Hint")}
            </div>
          </div>
        </motion.div>
    </div>
  );
}
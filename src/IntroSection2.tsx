import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
function IntroSection({ onStart }: { onStart: () => void }) {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 to-sky-950 text-white relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="absolute inset-0 bg-[url('/taipei101-silhouette.png')] bg-center bg-no-repeat bg-contain opacity-15"
      />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-center"
      >
        {t('Title')}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-lg md:text-xl mb-4 text-center max-w-2xl text-gray-200"
      >
        {t("Slogan")}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="text-base md:text-lg mb-8 text-center max-w-3xl px-4 text-gray-200"
      >
        {t("Intro")}
      </motion.p>
      <button
        onClick={onStart}
        className="px-6 py-3 bg-gradient-to-r from-cyan-900 to-cyan-600 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-cyan-600 text-white hover:text-gray-950 rounded-full shadow-lg mb-4 z-10"
        style={{ boxShadow: '0 2px 8px rgba(6, 182, 212, 0.4)' }}
      >
        {t("Start")}
      </button>
    </motion.section>

  );
}

export default IntroSection;
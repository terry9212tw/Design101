import { Icon } from '@iconify-icon/react';
export default function ScrollToTopButton() {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 items-center justify-center pt-2 px-2 bg-cyan-600 hover:bg-cyan-700 rounded-full shadow-lg transition"
      >
        <Icon icon="ep:top" width="30" height="30" />
      </button>
    );
  }
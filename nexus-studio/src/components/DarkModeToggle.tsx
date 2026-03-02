import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      type="button"
      aria-label="Alternar modo escuro"
      onClick={() => setDark((d) => !d)}
      style={{
        padding: '0.5rem',
        background: 'none',
        border: 'none',
        color: 'var(--color-text)',
        cursor: 'pointer',
      }}
    >
      {dark ? '🌞' : '🌙'}
    </button>
  );
}

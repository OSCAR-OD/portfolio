import Link from "next/link"

  const DarkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
  
    // State
    const [theme, setTheme] = React.useState(
      localStorage.getItem('theme') || 'light-mode'
    );
  
    // Handlers
    const handleThemeToggle = () => {
      setTheme((theme === 'light-mode') ? 'dark-mode' : 'light-mode');
    };
  
    // Events
    themeToggleBtns.forEach(btn =>
      btn.addEventListener('click', handleThemeToggle)
    );
  
    return (
      <div>
        <h1>Dark Mode</h1>
        <button id="theme-toggle" onClick={handleThemeToggle}>
          {theme === 'light-mode' ? 'Enable Dark Mode' : 'Enable Light Mode'}
        </button>
      </div>
    );
  };
  
  export default DarkMode;
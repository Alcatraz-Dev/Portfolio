import React from "react";
import styles from "./index.module.css";
export type ThemeToggleProps = {
  useTheme: () => { theme?: string; setTheme: (theme: string) => void };
  hideOnSmallScreens?: boolean;
};

const ThemeToggle = ({ useTheme, hideOnSmallScreens }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  
  return (
    <div 
      className={[
        styles.toggle,
        hideOnSmallScreens && styles.hideOnSmallScreens,
      ]
        .filter((x) => x)
        .join(" ")}
      title="Dark mode"
    >
      <input
        className={styles.input}
        type="checkbox"
        id="theme-toggle-input"
        defaultChecked={theme === "dark"}
        onClick={(event) =>
          setTheme(
            (event.target as HTMLInputElement).checked ? "dark" : "light"
          )
        }
      />
      <label   htmlFor="theme-toggle-input">
        <div className={styles.switchDiv}>
          <div className={styles.dot}></div>
        </div>
        <span />
      </label>
    </div>


  );
};

export default ThemeToggle;

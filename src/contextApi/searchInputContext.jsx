import { createContext, useState } from 'react';
import { useDebounce } from 'use-debounce';


const searchContext = createContext("");

export const InputSearch = ({ children }) => {
    const [searchInputs, setSearchInputs] = useState("");
    const [text] = useDebounce(searchInputs, 2000);

    const onChange = (e) => {
        if (e.target.value.length >= 3) {
            setSearchInputs(e.target.value);
            navigate("/blogs")
        }
    }

    return (
        <searchContext.Provider value={{ text, onChange }}>
            {children}
        </searchContext.Provider>
    );
};

// export default function MyApp() {
//   const [theme, setTheme] = useState('light');
//   return (
//     <>
//       <ThemeContext.Provider value={theme}>
//         <Form />
//       </ThemeContext.Provider>
//       <Button onClick={() => {
//         setTheme(theme === 'dark' ? 'light' : 'dark');
//       }}>
//         Toggle theme
//       </Button>
//     </>
//   )
// }

// function Form({ children }) {
//   return (
//     <Panel title="Welcome">
//       <Button>Sign up</Button>
//       <Button>Log in</Button>
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'panel-' + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   )
// }

// function Button({ children, onClick }) {
//   const theme = useContext(ThemeContext);
//   const className = 'button-' + theme;
//   return (
//     <button className={className} onClick={onClick}>
//       {children}
//     </button>
//   );
// }
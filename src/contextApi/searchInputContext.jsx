import React, { createContext, useState, useContext } from 'react';
import { useDebounce } from 'use-debounce';


const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [search] = useDebounce(searchQuery, 1000);
    const setSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <SearchContext.Provider value={{ searchQuery, setSearch, search }}>
            {children}
        </SearchContext.Provider>
    );
};


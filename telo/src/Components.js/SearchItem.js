import React from "react";
import { FaSistrix } from 'react-icons/fa';

const SearchItem = () => {
    return(
        <main>
            <div className="content">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="input-icon">
                        <input
                            id="search"
                            type="text"
                            role="searchbox"
                            placeholder="Searching..."
                            
                        /> 
                        <button
                            type="submit"
                            aria-label="Search Item">
                        <FaSistrix /> 
                        </button>
                      </div>  
                        
                    </form>
                </div>
            
        </main>
    )
}

export default SearchItem;
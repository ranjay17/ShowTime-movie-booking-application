import React from 'react'
import Header from './Header';
import GeminiSearchBar from './GeminiSearchBar';
import GeminiMovieSuggestion from './GeminiMovieSuggestion';

const GeminiPage = () => {
    return (
      <div>
        <Header />
        <div>
          <GeminiSearchBar />
          <GeminiMovieSuggestion />
        </div>
      </div>
    );
}

export default GeminiPage;

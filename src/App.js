import { React, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './containers/Home';
import Section from './containers/Section';
import { 
  audio_articles, 
  university_news_articles, 
  opinion_articles, 
  sports_articles, 
  ac_articles, 
  crosswords_articles,
  spectrum_articles 
} from './data/articles';
import ScrollToTop from './functions/ScrollToTop'


const App = () => {
  const [currentSection, setSection] = useState("/");
  
  useEffect(() => {
    setSection(window.location.pathname);
  },[window.location.pathname])

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/uni-news" element={<Section id="uni-news" header="UNIVERSITY NEWS" articles={university_news_articles}/>} />
        <Route path="/crosswords" element={<Section id="crosswords" header="CROSSWORDS" articles={crosswords_articles} />} />
        <Route path="/opinion" element={<Section id="opinion" header="OPINION" articles={opinion_articles} />} />
        <Route path="/a&c" element={<Section id="a&c" header="ARTS & CULTURE" articles={ac_articles} />} />
        <Route path="/sports" element={<Section id="sports" header="SPORTS" articles={sports_articles} />} />
        <Route path="/audio" element={<Section id="audio" header="AUDIO" articles={audio_articles} />} />
        <Route path="/spectrum" element={<Section id="spectrum" header="SPECTRUM" articles={spectrum_articles} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
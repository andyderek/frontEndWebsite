import React, { useState } from 'react';
import JuneNine2020 from './posts/june9_2020'
import FebTenth2020 from './posts/Feb10_2020'

function Blog() {

  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [selectedCSSId, setSelectedCSSId] = useState(null)

  const reviewSelected = (item) => {
    setSelectedReviewId(item);
  }
  
  const changeCSS = (item) => {
    setSelectedCSSId(item)
  }
  
  return (
    <div className="expandedText">
        <h1>Blog</h1>
          <JuneNine2020 selectedReviewId={selectedReviewId} onSelect={reviewSelected} selectCSS={selectedCSSId} changeCSS={changeCSS}/>
          <FebTenth2020 selectedReviewId={selectedReviewId} onSelect={reviewSelected} selectCSS={selectedCSSId} changeCSS={changeCSS}/>
    </div>
  );
}

export default Blog;
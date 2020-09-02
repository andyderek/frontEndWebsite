import React from 'react';

function Feb10_2020(props) {
    const id = 2;

    const testing2 = () => {
        if(id === props.selectedReviewId){
            props.changeCSS(null)
            setTimeout(() => props.onSelect(null), 2000)
        } else if (Number.isInteger(props.selectedReviewId) && id !== props.selectedReviewId){
            props.changeCSS(id)
            setTimeout(() => props.onSelect(id), 2000)
        } else if (id !== props.selectedReviewId) {
            props.changeCSS(id)
            props.onSelect(id)
        }
    }

  return (
    <div className="Feb10_2020">
        <p onClick={testing2}>Feb 10, 2020 - <span className={`${id !== props.selectCSS ? "expandedText" : "expanded"}`}>No</span></p>
        {id === props.selectedReviewId && (
            <div className={`${id === props.selectCSS ? "expandedText" : "expanded"}`}>
                <h1 onClick={testing2}>NO </h1><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
        )}
    </div>
  );
}

export default Feb10_2020;
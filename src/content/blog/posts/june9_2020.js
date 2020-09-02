import React from 'react';
import ReactTodo from './reactToDoList';

function June9_2020(props) {
    const id = 1;

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
    <div className="June9_2020">
        <p onClick={testing2}>June 9, 2020 - <span className={`${id !== props.selectCSS ? "expandedText" : "expanded"}`}>To Do List 5 Ways.</span></p>
        {id === props.selectedReviewId && (
            <div className={`${id === props.selectCSS ? "expandedText" : "expanded"}`}>
                June 9, 2020 -- 
                <h1 onClick={testing2}>To Do List 5 Ways</h1><ReactTodo/>
            </div>
        )}
    </div>
  );
}

export default June9_2020;
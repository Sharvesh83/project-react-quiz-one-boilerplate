import React, { Component } from 'react';

class QuizComponent extends Component {
  render() {
    return (
      <div className='QuizComp'>
        <div className='QuizBox'>
          <div className='QuestionContainer'>
            <h2>Question</h2>
            <span>1 of 15</span>
            <h3>Which is the only mammal that can jump?</h3>
          </div>
          <div className='OptionsContainer'>
            <div className='OptionsRow'>
              <div className='Option'>Dog</div>
              <div className='Option'>Elephant</div>
            </div>
            <div className='OptionsRow'>
              <div className='Option'>Lion</div>
              <div className='Option'>Goat</div>
            </div>
          </div>
          <div className='ButtonContainer'>
            <button className='PreviousButton'>Previous</button>
            <button className='NextButton'>Next</button>
            <button className='QuitButton'>Quit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;

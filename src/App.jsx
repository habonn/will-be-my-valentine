import React, { useState } from 'react';
import { Button } from 'antd';

export function App() {
  const [showAskPage, setShowAskPage] = useState(true);
  const [buttonPosition, setButtonStyle] = useState({ left: 0, top: 0 });

  const nextPage = () => {
    setShowAskPage(false);
  };

  const moveButton = () => {
    const x =
      Math.random() *
      (window.innerWidth - document.getElementById('noButton').offsetWidth);
    const y =
      Math.random() *
      (window.innerHeight - document.getElementById('noButton').offsetHeight);
    setButtonStyle({ position: 'absolute', left: `${x}px`, top: `${y}px` });
  };

  return (
    <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <div style={{ textAlign: 'center'}}>
        {showAskPage && (
          <div>
            <h1>
              Will you go out with me on{' '}
              <span style={{ color: 'red' }}>Valentine’s Day?</span>
            </h1>
          </div>
        )}
        {!showAskPage && (
          <div>
            <h1>Look forward to seeing you again.</h1>
          </div>
        )}
        <div>
          {showAskPage ? (
            <img
              src='https://raw.githubusercontent.com/aliArafat9/will-you-go-out-with-me/main/image/ask.gif'
              alt='Cute animated illustration'
            />
          ) : (
            <img
              src='https://raw.githubusercontent.com/aliArafat9/will-you-go-out-with-me/main/image/ans.gif'
              alt='Cute animated illustration X'
            />
          )}
        </div>
        <div>
          {showAskPage ? (
            <Button
              onClick={nextPage}
              style={{
                marginRight: 10,
                width: 100,
                backgroundColor: '#ff3d67',
                color: 'white',
              }}
            >
              Yes
            </Button>
          ) : null}
          {showAskPage && (
            <Button
              id='noButton'
              style={{
                ...buttonPosition,
                marginLeft: 10,
                width: 100,
                backgroundColor: '#ffffff',
                color: '#ff3d67',
                cursor: 'pointer',
                borderColor: '#ff3d67',
              }}
              onMouseOver={moveButton}
              onClick={moveButton}
            >
              No
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

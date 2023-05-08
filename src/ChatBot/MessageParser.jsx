//Determines which actions Robocop is to pass when prompted

import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    let unknown = true
    console.log(message)
    if (message.includes('hello')){ 
      unknown = false  
      actions.handleHello();
    }

    if (message.includes('thank')){ 
        unknown = false  
        actions.handleThanks();
      }

    if (message.length === 0){
        unknown = false  
        actions.handleEmpty();
    }

    // if (message.includes('dog')) {
    //   actions.handleDog();
    // }
    
    if (message.includes('anime')){
        unknown = false  
        actions.handleAnime();
    }

    if(unknown === true){
        actions.handleUnknown()
        }
    console.log(message);


  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
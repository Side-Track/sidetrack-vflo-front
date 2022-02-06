import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const OnWorking = styled.div`
  ${tw`w-full h-screen flex flex-col items-center justify-center bg-blue-400 text-white`}

  .title {
    ${tw`text-5xl font-bold mb-4`}
    text-decoration: underline;
  }

  .message {
    ${tw`text-sm font-light`}
  }
`;

function App() {
  return (
    <div className="App">
      <OnWorking>
        <h1 className="title">VFLO</h1>
        <p className="message">어떤 모습일지 기대하세요.</p>
      </OnWorking>
    </div>
  );
}

export default App;

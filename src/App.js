import React, { Component } from 'react';
import styled from 'styled-components';

const StyledApp = styled.main`
  padding: 10px;
`;

const StyledRect = styled.rect`
  fill: rgb(200,200,200);
`;

class App extends Component {
  state = {
    requiredPieces: []
  }

  render() {
    const { requiredPieces } = this.state;

    return (
      <StyledApp>
        {
          requiredPieces.map(requiresPiece => (
            <svg width="202" height="202">
              <StyledRect width="200" height="200" />
            </svg>
          ))
        }

        {
          requiredPieces.map(requiresPiece => (
            <svg width="202" height="202">
              <StyledRect width="200" height="200" />
            </svg>
          ))
        }
      </StyledApp>
    );
  }
}

export default App;

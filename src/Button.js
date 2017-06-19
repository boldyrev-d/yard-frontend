import React, {Component} from 'react';
import styled from 'styled-components';

class Button extends Component {
  render() {
    const Button = styled.button`
      padding: .75rem 2rem;
      color: #fff;
      font-family: var(--fira);
      background-color: var(--black-two);
      border: none;
      border-radius: 2px;
      outline: none;
      cursor: pointer;
    `;

    return (
      <Button>{this.props.children}</Button>
    );
  }
}

export default Button;

import React, { createContext, Component } from 'react';

const Themecontext = createContext();

class ThemeContextProvider extends Component {
  state = {
    LightTheme: true,
    Light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    Dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
  };
  render() {
    return (
      <Themecontext.Provider value={{ ...this.state }}>
        {this.props.children}
      </Themecontext.Provider>
    );
  }
}

export default ThemeContextProvider;

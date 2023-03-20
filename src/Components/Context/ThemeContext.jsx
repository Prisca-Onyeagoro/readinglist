import React, { createContext, Component } from 'react';

export const Themecontext = createContext();

class ThemeContextProvider extends Component {
  state = {
    LightTheme: true,
    Light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    Dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
  };
  toggleTheme = () => {
    this.setState({ LightTheme: !this.state.LightTheme });
  };
  render() {
    return (
      <Themecontext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </Themecontext.Provider>
    );
  }
}

export default ThemeContextProvider;

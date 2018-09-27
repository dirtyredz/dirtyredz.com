/* eslint-disable react/no-multi-comp */
import React from 'react'

const AppContext = React.createContext({
  isOpen: false,
  toggleMenu: () => {},
});

export default class Provider extends React.Component {
  constructor(props) {
    super(props)
    this.toggleMenu = (incomingState) => {
      this.setState(state => ({
        isOpen: typeof incomingState === 'undefined'
          ? !state.isOpen
          : incomingState,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      isOpen: false, // eslint-disable-line react/no-unused-state
      toggleMenu: this.toggleMenu, // eslint-disable-line react/no-unused-state
    };
  }

  render() {
    const { children, ...rest } = this.props
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { ...rest }));
    return (
      <AppContext.Provider value={this.state}>
        {childrenWithProps}
      </AppContext.Provider>
    )
  }
}


// This function takes a component...
export const consumer = (WrappedComponent) => { // eslint-disable-line
  // ...and returns another component...
  class Consumer extends React.Component {
    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return (
        <AppContext.Consumer>
          {data => <WrappedComponent context={data} {...this.props} />}
        </AppContext.Consumer>
      )
    }
  }
  return Consumer
}

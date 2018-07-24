import React from 'react'
import { connect } from "react-redux";
import store from '../redux/store'

const connectWithStore = (mapStateToProps = null, mapDispatchToProps = null, mergeProps = null) => WrappedComponent =>{
  const ConnectedWrappedComponent = connect(mapStateToProps,mapDispatchToProps,mergeProps)(WrappedComponent)
  return props => <ConnectedWrappedComponent {...props} store={store} />
}

export default connectWithStore
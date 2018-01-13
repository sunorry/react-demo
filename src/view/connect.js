import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function wrapComponent(component) {
  console.log('reduxPlugin:', component.reduxPlugin);
  const reduxPlugin = component.reduxPlugin;
  const { mapStateToProps = [], mapDispatchToProps = {} } = reduxPlugin;

  let wrapMapStateToProps = null;
  let wrapMapDispatchToProps = null;

  if (mapStateToProps.length > 0) {
    wrapMapStateToProps = (state, ownProps) => {
      console.log('search state:', state);
      console.log('ownProps:', ownProps);
      const storeArr = mapStateToProps;
      const newState = {};
      for (let i = 0, len = storeArr.length; i < len; i++) {
        const item = storeArr[i];
        const arr = item.split('.');
        newState[arr[1]]  = state[arr[0]][arr[1]];
      }
      return newState;
    }
  }


  if (Object.keys(mapDispatchToProps).length > 0) {
    wrapMapDispatchToProps = (dispatch) => {
      return  bindActionCreators(mapDispatchToProps, dispatch)
    }
  }

  return connect(
    wrapMapStateToProps,
    wrapMapDispatchToProps
  )(component)
}

function connectComponent(component) {
  // Connected Component
  if (component.reduxPlugin === undefined) {
    return component;
  } else {
    return wrapComponent(component);
  }
}

export default connectComponent;

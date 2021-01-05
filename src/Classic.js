import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {resetScore, updateScore} from './redux/actions';
class Classic extends React.Component {
  render() {
    return (
      <View>
        <Text> Score from classic {this.props.root.score}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // ... computed data from state
  const root = state.root;
  const quote = state.quote;
  return {root, quote};
};

const mapDispatchToProps = {
  // ... normally is an object full of action creators
  updateScore,
  resetScore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Classic);

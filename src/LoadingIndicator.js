import React from 'react';
import {Modal, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import PropTypes from 'prop-types';
import ios from './animations/ios.json';

function LoadingIndicator({
  loading = false,
  size = 40,
  text = 'Please wait...',
  textProps = {},
}) {
  return (
    <Modal transparent visible={loading}>
      <View style={[styles.container, {backgroundColor: 'rgba(20,20,20,.5)'}]}>
        <AnimatedLottieView
          source={ios}
          autoPlay
          loop
          style={{
            width: size,
            height: size,
            marginBottom: 10,
          }}
          resizeMode={'cover'}
        />
        <Text style={[styles.textStyle, textProps]}>{text}</Text>
      </View>
    </Modal>
  );
}

LoadingIndicator.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  text: PropTypes.string,
};
export default LoadingIndicator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});

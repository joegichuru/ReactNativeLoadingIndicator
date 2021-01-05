/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Provider as StoreProvider, useDispatch, useSelector} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/redux/reducer';
import {resetScore, updateScore} from './src/redux/actions';
import Classic from './src/Classic';

const {width, height} = Dimensions.get('window');
const store = createStore(reducer);
const App = () => {
  //we use dispatch to trigger an action
  const dispatch = useDispatch();
  //we use selector to query something/kind of a two way binding that notifies a ui if value changes
  const score = useSelector((state) => {
    return state.root.score;
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            backgroundColor: 'white',
            width: width,
            height: height,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
          }}>
          <Text
            style={{
              fontSize: 30,
            }}>
            Current Score {score}
          </Text>
          <Classic />
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              bottom: 0,
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                dispatch(updateScore(score + 1));
              }}>
              <Text style={styles.btnTxt}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                dispatch(resetScore());
              }}>
              <Text style={styles.btnTxt}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*<LoadingIndicator*/}
        {/*  loading={true}*/}
        {/*  text={'Updating...'}*/}
        {/*  size={60}*/}
        {/*  textProps={{color: 'white'}}*/}
        {/*/>*/}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(20,20,20,.2)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 8,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart: 10,
    paddingEnd: 10,
    margin: 10,
    width: null,
  },
  btnTxt: {
    color: 'white',
    margin: 10,
  },
});
const MainApp = (props) => {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
};
export default MainApp;

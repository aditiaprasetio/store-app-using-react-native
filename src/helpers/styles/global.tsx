import {StyleSheet, Dimensions} from 'react-native';

const LAYOUT = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    height: Dimensions.get('window').width,
    position: 'relative',
  },
});

const GLOBAL = {
  LAYOUT,
};

export {GLOBAL};

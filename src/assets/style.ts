import {StyleSheet} from 'react-native';

const FONT = StyleSheet.create({
  title: {fontWeight: 'bold', fontSize: 18},
});

const LAYOUT = StyleSheet.create({
  header: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 15,
  },
  background_rounded: {
    position: 'absolute',
    backgroundColor: '#f2f2f2',
    borderTopRightRadius: 250,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  bottom_menu: {
    position: 'absolute',
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    height: 50,
    width: '100%',
    padding: 15,
    bottom: 0,
    justifyContent: 'space-between',
  },
});

export {FONT, LAYOUT};

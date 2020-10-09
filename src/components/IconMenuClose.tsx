import React, {useRef, useEffect, useState} from 'react';
import {TouchableWithoutFeedback, Animated} from 'react-native';

export function IconMenuClose(props: any) {
  const containerAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const topBar = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const bottomBar = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const bottomBarMargin = useRef(new Animated.Value(6)).current; // Initial value for opacity: 0
  const middleBarOpacity = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      Animated.spring(containerAnim, {
        toValue: 1,
      }).start();
      Animated.spring(topBar, {
        toValue: 0.9,
      }).start();
      Animated.spring(bottomBar, {
        toValue: 0.9,
      }).start();
      Animated.spring(bottomBarMargin, {
        toValue: -8,
      }).start();
      Animated.spring(middleBarOpacity, {
        toValue: 0,
        duration: 30,
      }).start();
    } else {
      Animated.spring(containerAnim, {
        toValue: 0,
      }).start();
      Animated.spring(topBar, {
        toValue: 0,
      }).start();
      Animated.spring(bottomBar, {
        toValue: 0,
      }).start();
      Animated.spring(bottomBarMargin, {
        toValue: 6,
      }).start();
      Animated.timing(middleBarOpacity, {
        toValue: 1,
        duration: 600,
      }).start();
    }
  }, [active]);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setActive(!active);
      }}>
      <Animated.View
        style={{
          width: 25,
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: 25,
          transform: [
            {
              rotate: containerAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}>
        <Animated.View
          style={{
            height: 1,
            marginLeft: 0,
            width: 20,
            backgroundColor: '#444444',
            transform: [
              {
                rotate: topBar.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '-50deg'],
                }),
              },
            ],
          }}
        />
        <Animated.View
          style={{
            height: 1,
            width: 25,
            opacity: middleBarOpacity,
            backgroundColor: '#444444',
            marginTop: 6,
          }}
        />
        <Animated.View
          style={{
            height: 1,
            marginLeft: 0,
            width: 20,
            marginTop: bottomBarMargin,
            backgroundColor: '#444444',
            transform: [
              {
                rotate: bottomBar.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '50deg'],
                }),
              },
            ],
          }}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

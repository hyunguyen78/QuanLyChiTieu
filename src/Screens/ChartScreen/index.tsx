import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Header from '@/Components/Header';

type Props = {};

const ChartScreen = (props: Props) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const translateHeader = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -80],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            transform: [
              {
                translateY: translateHeader,
              },
            ],
          },
        ]}>
        <Text style={styles.headerTitle}>hello Huy hehehe</Text>
      </Animated.View>
      {/* <Animated.ScrollView
        style={styles.content}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}></Animated.ScrollView> */}
      <Animated.FlatList
        data={new Array(10)}
        style={styles.content}
        renderItem={(item, index) => <Text>ehehhe</Text>}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}
      />
    </SafeAreaView>
  );
};

export default ChartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05141C',
  },
  header: {
    height: 200,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    padding: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    backgroundColor: '#05141C',
  },
  headerTitle: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    padding: 24,
    paddingTop: 212,
    backgroundColor: '#FFFFFF',
  },
});

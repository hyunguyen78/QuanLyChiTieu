import {
  Animated,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {COLORS} from '@/Themes/Color';
import {scale} from 'react-native-utils-scale';
import Header from '@/Components/Header';
import BoxCalendar from './Components/BoxCalendar';
import ItemTransaction from './Components/ItemTransaction';
type Props = {};

const ListScreen = (props: Props) => {
  const dataTransactions = new Array(10);
  let animatedHeaderValue = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <Header valueHeader={animatedHeaderValue} />
      <View style={styles.body}>
        <Animated.FlatList
          data={dataTransactions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => <ItemTransaction item={item} />}
          ListHeaderComponent={() => <BoxCalendar />}
          ListFooterComponent={() => <View style={{height: scale(25)}} />}
          ItemSeparatorComponent={() => <View style={{height: scale(25)}} />}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: animatedHeaderValue}}}],
            {useNativeDriver: false},
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  body: {
    flex: 1,
    marginTop: scale(-180),
    margin: scale(20),
  },
});

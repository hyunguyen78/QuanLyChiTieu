import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '@/Themes/Color';
import {scale} from 'react-native-utils-scale';
import Header from '@/Components/Header';
import BoxCalendar from './Components/BoxCalendar';
import ItemTransaction from './Components/ItemTransaction';
type Props = {};

const ListScreen = (props: Props) => {
  const dataTransactions = new Array(2);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <BoxCalendar />
        <FlatList
          data={dataTransactions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => <ItemTransaction item={item} />}
          ListHeaderComponent={() => <View style={{height: scale(25)}} />}
          ListFooterComponent={() => <View style={{height: scale(25)}} />}
          ItemSeparatorComponent={() => <View style={{height: scale(25)}} />}
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

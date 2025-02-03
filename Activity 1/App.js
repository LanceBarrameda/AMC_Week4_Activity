import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'To Do List',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Morning',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Eat Breakfast',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Drink Coffee',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Brush The Teeth',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Do The Assignment',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Check the Message',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Read Some Comics',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Take a Bath',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Getting Ready for School',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Afternoon',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Cook Some Afternoon Food/Buying Some food in Store',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Wash The Dishes',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Wash some Dirty Clothes',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Take Some Rest',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'PlaySome Games',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Do the Other Assignment',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Evening',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Cook The Evening Food',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Wash the Dishes',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Drink Some Coffee',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Take some Snacks',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Play Another games',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Go to Sleep',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
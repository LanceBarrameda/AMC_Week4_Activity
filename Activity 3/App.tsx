import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: '3ac68afc-c605-48d3-a4f8-fb645d91aa97f63',
    title: 'Morning',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557123e29d72',
    title: 'Eat Breakfast',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571753e29d72',
    title: 'Drink Coffee',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e86529d72',
    title: 'Brush The Teeth',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e35829d72',
    title: 'Do The Assignment',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29723d72',
    title: 'Check the Message',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e2932538d72',
    title: 'Read Some Comics',
  },
   {
    id: '58694a0f-3da1-471f-bd96-14557162324e29d72',
    title: 'Take a Bath',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e642729d72',
    title: 'Getting Ready for School',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e23479d72',
    title: 'Afternoon',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e297365d72',
    title: 'Cook Some Afternoon Food/Buying Some food in Store',
  },
   {
    id: '58694a0f-3da1-471f-bd96-1455745771e29d72',
    title: 'Wash The Dishes',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e236529d72',
    title: 'Wash some Dirty Clothes',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e457229d72',
    title: 'Take Some Rest',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29345772',
    title: 'PlaySome Games',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e294325472',
    title: 'Do the Other Assignment',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e223459d72',
    title: 'Evening',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e278649d72',
    title: 'Cook The Evening Food',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e272439d72',
    title: 'Wash the Dishes',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e23459329d72',
    title: 'Drink Some Coffee',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29652345d72',
    title: 'Take some Snacks',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e2923457d72',
    title: 'Play Another games',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e2946221d72',
    title: 'Go to Sleep',
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const COLORS =  ['#FFDA61', '#C0FF8C', '#FFBB29', '#4F81FF', '#FF615E'];

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item, index}) => {
    const backgroundColor = item.id === selectedId ? '#8C21FF' : COLORS[index % COLORS.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
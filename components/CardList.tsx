import Card from './Card';
import {ScrollView, View, VirtualizedList} from 'react-native';
import {useHookstate} from '@hookstate/core';
import {cardState} from './CardModel';

export const CardList = () => {
  const data = useHookstate(cardState);

  const getItemCount = (_data: unknown) => 10;

  const getItem = (_data: unknown, index: number): any => ({
    id: Math.random().toString(12).substring(0),
    data: data.card.get(),
  });

  const Item = ({data}: any) => <Card data={data} />;

  return (
    <ScrollView>
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
      <Card data={data.card.get()} />
    </ScrollView>
    // <VirtualizedList
    //   initialNumToRender={4}
    //   renderItem={({item}) => <Item data={item.data} />}
    //   keyExtractor={item => item.id}
    //   getItemCount={getItemCount}
    //   getItem={getItem}
    // />
  );
};

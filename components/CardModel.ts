import {hookstate} from '@hookstate/core';

export class CardModel {
  title: string = 'CardModel';
  description: string = 'CardText';
  time: string = '2020-12-12';
}
export const cardState = hookstate({
  card: new CardModel(),
});

export const updateCardModel = () => {
  // console.log('updateCardModel');

  const cardModel = new CardModel();
  cardModel.title = 'Title ' + generateRandomText();
  cardModel.description = 'Description ' + generateRandomText();
  cardModel.time = 'Time ' + generateRandomText();
  cardState.card.set(cardModel);
};

function generateRandomText() {
  return Math.random().toString(36).substring(7);
}

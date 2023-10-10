import React from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {updateCardModel} from './components/CardModel';
import {CardList} from './components/CardList';
import NewPage from './components/Newpage';

let updatable = true;

setInterval(() => {
  if (updatable) {
    updateCardModel();
  }
}, 100);

function App(): JSX.Element {
  const [buttonState, setButtonState] = React.useState(false);

  return (
    <SafeAreaView>
      <StatusBar />
      <Button
        title="Toggle Data Update"
        onPress={() => {
          console.log('-----Button is clicked!!----');
          // updatable = !updatable;
          setButtonState(prev => !prev);
        }}
      />

      {buttonState ? <NewPage /> : <CardList />}
    </SafeAreaView>
  );
}

export default App;

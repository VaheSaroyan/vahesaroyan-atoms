import * as React from 'react';

import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { keys, SearchTemplate } from '@vahesaroyan/atoms';

export default function App() {
  React.useEffect(() => {
    const example = { a: 1, b: 2 };
    keys(example).forEach((item) => item);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchTemplate
        header={<View style={[styles.box, { backgroundColor: 'blue' }]} />}
        body={
          <>
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
          </>
        }
        footer={
          <TextInput style={[styles.box, { backgroundColor: 'orange' }]} />
        }
        scrollable
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    marginTop: 10,
  },
});

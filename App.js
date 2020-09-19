import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {

  const [lista, setLista] = React.useState([]);
  const [task, setTask] = React.useState("");


  const buttonPressedAdd = () => {
    setLista([...lista, task])
    setTask("")
  }

  const buttonPressedClear = () => {
    setLista([])
  }

  const textChanged = text => {
    setTask(text)
  }


    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} onChangeText={text => textChanged(text)} value={task}></TextInput>
        <View style={styles.buttons}>
          <Button onPress={buttonPressedAdd} title="Add"></Button>
          <Button title="Clear" onPress={buttonPressedClear}></Button>
        </View>
        <View style={styles.flexBox}>
          <FlatList
            data={lista}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({ item }) => (
              <Text>{item}</Text>
            )} />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column",
      alignItems: 'stretch',
      justifyContent: "center",
    },
    buttons: {
      flexDirection: "row",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: "space-around",
    },
    textInput: {
      borderWidth: 1,
      marginHorizontal:100,
      marginBottom:30,
      justifyContent:"center"
    }, 
    flexBox: {
      alignItems:"center",
      justifyContent:"center"
    }
  });

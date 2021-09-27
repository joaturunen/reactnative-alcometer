import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {Picker} from '@react-native-picker/picker';


export default function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);


  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];



  function calculate (e) {
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * time;
    let result = 0;

    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    } else if (gender === 'female') {
      result = gramsLeft / (weight * 0.6);
    }
    
    if (result < 0) {
      result = 0;
    }

    const newResult= result.toFixed(2);

    setResult(newResult);
  }


  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.text}>Weight</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={weight => setWeight(weight)}
          placeholder="in kilograms"
        ></TextInput>
        <Text style={styles.text}>Bottles</Text>
        <Picker
          selectedValue={bottles}
          onValueChange={itemValue => setBottles(itemValue)}>
          <Picker.Item label= '0 bottles' value= '0'/>
          <Picker.Item label= '1 bottles' value= '1'/>
          <Picker.Item label= '2 bottles' value= '2'/>
          <Picker.Item label= '3 bottles' value= '3'/>
          <Picker.Item label= '4 bottles' value= '4'/>
          <Picker.Item label= '5 bottles' value= '5'/>
          <Picker.Item label= '6 bottles' value= '6'/>
          <Picker.Item label= '7 bottles' value= '7'/>
          <Picker.Item label= '8 bottles' value= '8'/>
          <Picker.Item label= '9 bottles' value= '9'/>
          <Picker.Item label= '10 bottles' value= '10'/>
        </Picker>
        <Text style={styles.text}>Time</Text>
        <Picker
          selectedValue={time}
          onValueChange={itemValue => setTime(itemValue)}>
          <Picker.Item label= '0 hours' value= '0'/>
          <Picker.Item label= '1 hours' value= '1'/>
          <Picker.Item label= '2 hours' value= '2'/>
          <Picker.Item label= '3 hours' value= '3'/>
          <Picker.Item label= '4 hours' value= '4'/>
          <Picker.Item label= '5 hours' value= '5'/>
          <Picker.Item label= '6 hours' value= '6'/>
          <Picker.Item label= '7 hours' value= '7'/>
          <Picker.Item label= '8 hours' value= '8'/>
          <Picker.Item label= '9 hours' value= '9'/>
          <Picker.Item label= '10 hours' value= '10'/>
          <Picker.Item label= '11 hours' value= '11'/>
          <Picker.Item label= '12 hours' value= '12'/>
          <Picker.Item label= '13 hours' value= '13'/>
          <Picker.Item label= '14 hours' value= '14'/>
          <Picker.Item label= '15 hours' value= '15'/>
          <Picker.Item label= '16 hours' value= '16'/>
          <Picker.Item label= '17 hours' value= '17'/>
          <Picker.Item label= '18 hours' value= '18'/>
          <Picker.Item label= '19 hours' value= '19'/>
          <Picker.Item label= '20 hours' value= '20'/>
          <Picker.Item label= '21 hours' value= '21'/>
          <Picker.Item label= '22 hours' value= '22'/>
          <Picker.Item label= '23 hours' value= '23'/>
          <Picker.Item label= '24 hours' value= '24'/>
        </Picker>
        <Text style={styles.text}>Gender</Text>
        <RadioForm
          radio_props={genders}
          initial={0}
          onPress={value => setGender(value)}
        />
        <Text style={styles.text}>Promilles</Text>
        <Text style={styles.text}>{result}</Text>
        <Button title="Calculate" onPress={(e) => calculate(e)}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  text: {
    padding: 5
  },
  textInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    padding: 5,
    margin: 2
  }
});

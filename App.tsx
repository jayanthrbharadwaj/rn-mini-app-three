/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import {Federated} from '@callstack/repack/client';


const App4 = React.lazy(() => Federated.importModule('rnminiappfour', './App'));


import { StackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

type Props = StackScreenProps<RootStackParamList, 'App3'>;

const App: React.FC<Props> = ({ navigation, route }) => {

    return(
      <SafeAreaView>
      <StatusBar />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.heading}>MicroFrontend - {route.params.file}</Text>
          <TouchableOpacity
           onPress={() =>  navigation.navigate('App4', {file:"App4"})}
           >
            <View style={styles.card}>
              <Text style={styles.title}>Cards Details</Text>
              <Text>Start using your card immediately for all online purchases. Also update your digital wallet</Text>
            </View>
          </TouchableOpacity>

            <View style={styles.card}>
              <Text style={styles.title}>Card Tracker</Text>
              <Text>View your physical card's shipment status</Text>
            </View>
      </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ACDDDE',
    
  },
  scrollContainer: {
    height: '100%',
  },
  card: {
    margin:15,
    backgroundColor: '#f7dfec',
    borderRadius: 15,
    padding: 26,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,  // for Android
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 380,
    alignItems: 'center',
    borderBottomWidth:1
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
  },
  heading:{
    fontWeight:'bold',
    fontSize:25,
    justifyContent:'center',
    marginBottom:20,
    color:'black',
    marginTop:15,
    marginStart:15
  },
});

export default App;

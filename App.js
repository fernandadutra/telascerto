import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import firstscreen from './screens/firstscreen';
import secondscreen from './screens/secondscreen';

const Tab=createBottomTabNavigator();
export default class App extends Component{
render(){
  return(
<NavigationContainer>
<Tab.Navigator>
<Tab.Screen name='Primeira tela' component={firstscreen}></Tab.Screen>
<Tab.Screen name='Segunda tela' component={secondscreen}></Tab.Screen>
</Tab.Navigator>
</NavigationContainer>

  )
}

}
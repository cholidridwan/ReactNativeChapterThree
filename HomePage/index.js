import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomePage extends Component {
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home PageII</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.push('Details')}
            />
            <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
            />
        </View>
      );
    }
  }
const AppNavigator = createStackNavigator({
    Home: {
        screen: HomePage
    },
    Details: {
        screen: DetailsScreen
    }
});
  
export default createAppContainer(AppNavigator);
  
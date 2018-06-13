import React, { Component } from 'react';
import styles from './styles';
import CamerasScreen from './cameraScreen';
import { Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component{
	static navigationOptions = {
		title: "React App"
	};
		render(){
			const { navigate } = this.props.navigation;
			return (
				<View style={styles.container}>
					<TouchableOpacity
						style={styles.button}	
						onPress={ () => navigate('Cameras') }
					>
						<Text style={{color: 'white'}}>Cams</Text>
					</TouchableOpacity>
						
				</View>
		);
		}
}

const NavigationApp = StackNavigator({
	Home: { screen: HomeScreen },
	Cameras: { screen: CamerasScreen },
	}, {
		navigationOptions: {
			headerStyle: {
				backgroundColor:'#ef7015'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
			  fontWeight: 'bold',
			},
		}
	});
	

export default class App extends Component {
  render() {
    return <NavigationApp />;
  }
}

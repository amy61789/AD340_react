import React, { Component } from 'react';
import styles from './styles';
import { Image, FlatList, ActivityIndicator, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class CamerasScreen extends React.Component{
	constructor(props){
		super(props);
		this.state ={ isLoading: true}
	}
	static navigationOptions = {
		title: "Cameras"
	};
	componentDidMount(){
		return fetch('https://web6.seattle.gov/Travelers/api/Map/Data?zoomId=17&type=2')
		  .then((response) => response.json())
		  .then((responseJson) => {

			this.setState({
			  isLoading: false,
			  dataSource: responseJson.Features,
			}, function(){

			});

		  })
		  .catch((error) =>{
			console.error(error);
		  });
	}
	cameraType(camArray){
		if(camArray.Type == "sdot"){
			return  "http://www.seattle.gov/trafficcams/images/"+camArray.ImageUrl;
		}else{
			return "http://images.wsdot.wa.gov/nw/"+camArray.ImageUrl;
		}
	}
	
	render(){
		const { navigate } = this.props.navigation;
		if(this.state.isLoading){
		  return(
			<View style={{flex: 1}}>
			  <ActivityIndicator/>
			</View>
		  )
		}
		return(
		  <View style={{flex: 1}}>
			<FlatList
			  data={this.state.dataSource}
			  renderItem={({item}) => 
				<View style={styles.camContainer}>
					<Text>{item.Cameras[0].Id}</Text>
					<Text>{item.Cameras[0].Description}</Text>
					<Image
					source = {{ uri: this.cameraType(item.Cameras[0]) }}
					style = {{height: 200, width: 350}}
					/>
				</View>
			  }
			  keyExtractor={(item, index) => index.toString()}
			/>
		  </View>
		);
	}
}
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	item:{
		height:200,
		backgroundColor:"red",
		padding:10,
	},
	camContainer:{
		flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
		backgroundColor:'#fff',
	},
	container: {
		flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
		backgroundColor:'#fff',
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#bce6ff',
		padding: 10,
		width:100,
		height:50
	}
});
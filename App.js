import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function App() {
	return (
		<View style={{ paddingTop: 60, paddingHorizontal: 30 }}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<TextInput
					placeholder='Course Goal'
					style={{
						width: '80%',
						height: 40,
						borderColor: 'black',
						borderWidth: 1,
						padding: 10,
					}}
				/>
				<Button title='ADD' />
			</View>
			<View></View>
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({})

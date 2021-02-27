import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, View, Modal } from 'react-native'

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('')

	const goalInputHandler = enteredText => {
		setEnteredGoal(enteredText)
	}

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal)
		setEnteredGoal('')
	}

	const cancelGoalInput = () => {
		props.onCancel()
		setEnteredGoal('')
	}

	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Course Goal'
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.btnContainer}>
					<View style={styles.btn}>
						<Button title='CANCEL' color='red' onPress={cancelGoalInput} />
					</View>
					<View style={styles.btn}>
						<Button title='ADD' onPress={addGoalHandler} />
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default GoalInput

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		width: '80%',
		height: 40,
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
	},
	btnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '66.6%',
	},
	btn: {
		width: '40%',
	},
})

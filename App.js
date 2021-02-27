import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
	const [courseGoals, setCourseGoals] = useState([])
	const [isAddMode, setIsAddMode] = useState(false)

	const addGoalHandler = goalTitle => {
		setCourseGoals(currentGoals => [
			...courseGoals,
			{ uid: Math.random().toString(), value: goalTitle },
		]) //using arr function ensures current courseGoals is retrieved. To use FlatList must be object, key must be passed in here also.
		setIsAddMode(false)
	}

	const removeGoalHandler = goalId => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter(goal => goal.uid !== goalId)
		})
	}

	const cancelGoalAddHandler = () => {
		setIsAddMode(false)
	}

	return (
		<View style={styles.screen}>
			<Button title={'Add New Goal'} onPress={() => setIsAddMode(true)} />
			<GoalInput
				visible={isAddMode}
				onAddGoal={addGoalHandler}
				onCancel={cancelGoalAddHandler}
			/>
			<FlatList
				keyExtractor={(item, index) => item.uid}
				data={courseGoals}
				renderItem={itemData => (
					<GoalItem
						uid={itemData.item.uid}
						onDelete={removeGoalHandler}
						title={itemData.item.value}
					/>
				)}
			/>
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: 60,
		paddingHorizontal: 30,
	},
})

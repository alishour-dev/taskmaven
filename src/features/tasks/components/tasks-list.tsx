//#region Import
import supabaseClient from "@/lib/supabase/supabase-client"
import { useAuth } from "@/providers/auth-provider"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

import type { Task } from "../types"

import TaskItem from "./task-item"
//#endregion

const TasksList = () => {
	const { user } = useAuth()

	const [tasks, setTasks] = useState<Task[]>([])

	const [newTaskText, setNewTaskText] = useState("")

	const [errorText, setErrorText] = useState("")

	useEffect(() => {
		const fetchTodos = async () => {
			const { data: tasks, error } = await supabaseClient.from("tasks").select("*").order("id", { ascending: true })

			if (error) console.log("error", error)
			else setTasks(tasks)
		}

		fetchTodos()
	}, [])

	const addTask = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const task = newTaskText.trim()

		if (task.length) {
			const { data: newTask, error } = await supabaseClient
				.from("tasks")
				.insert({ task, user_id: user!.id })
				.select()
				.single()

			if (error) {
				setErrorText(error.message)
			} else {
				setTasks((prev) => [...prev, newTask])
				setNewTaskText("")
			}
		}
	}

	const deleteTask = async (id: number) => {
		try {
			await supabaseClient.from("tasks").delete().eq("id", id).throwOnError()
			setTasks((prev) => prev.filter((i) => i.id != id))
		} catch (error) {
			console.log("error", error)
		}
	}

	useEffect(() => {
		if (errorText) {
			toast.error(errorText)
		}
	}, [errorText])

	return (
		<div className='w-full'>
			<h1 className='mb-12'>Todo List.</h1>
			<form className='my-2 flex gap-2' onSubmit={addTask}>
				<input
					className='w-full rounded p-2'
					onChange={(e) => {
						setErrorText("")
						setNewTaskText(e.target.value)
					}}
					placeholder='make coffee'
					type='text'
					value={newTaskText}
				/>
				<button className='btn-black' type='submit'>
					Add
				</button>
			</form>
			<div className='overflow-hidden rounded-md bg-white shadow'>
				<ul>
					{tasks.map((task) => (
						<TaskItem key={task.id} onDelete={() => deleteTask(task.id)} task={task} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default TasksList

//#region Import
import type { Database } from "@/lib/supabase/schema"

import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useState } from "react"

import type { Task } from "../types"
//#endregion

interface TaskItemProps {
	onDelete: () => void
	task: Task
}

const TaskItem = ({ onDelete, task }: TaskItemProps) => {
	const supabase = useSupabaseClient<Database>()

	const [isCompleted, setIsCompleted] = useState(task.is_complete)

	const toggle = async () => {
		try {
			const { data } = await supabase
				.from("tasks")
				.update({ is_complete: !isCompleted })
				.eq("id", task.id)
				.throwOnError()
				.select()
				.single()

			if (data) setIsCompleted(data.is_complete)
		} catch (error) {
			console.log("error", error)
		}
	}

	return (
		<li className='block w-full cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 focus:bg-gray-200 focus:outline-none'>
			<div className='flex items-center px-4 py-4 sm:px-6'>
				<div className='flex min-w-0 flex-1 items-center'>
					<div className='truncate text-sm font-medium leading-5'>{task.task}</div>
				</div>
				<div>
					<input
						checked={isCompleted ? true : false}
						className='cursor-pointer'
						onChange={() => toggle()}
						type='checkbox'
					/>
				</div>
				<button
					className='ml-2 h-4 w-4 rounded border-2 hover:border-black'
					onClick={(e) => {
						e.preventDefault()
						e.stopPropagation()
						onDelete()
					}}>
					<svg fill='gray' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
						<path
							clipRule='evenodd'
							d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
							fillRule='evenodd'
						/>
					</svg>
				</button>
			</div>
		</li>
	)
}

export default TaskItem

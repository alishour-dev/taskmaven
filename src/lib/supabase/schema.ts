export type Json = { [key: string]: Json } | boolean | Json[] | null | number | string

export interface Database {
	public: {
		CompositeTypes: {
			[_ in never]: never
		}
		Enums: {
			[_ in never]: never
		}
		Functions: {
			[_ in never]: never
		}
		Tables: {
			tasks: {
				Insert: {
					id?: number
					inserted_at?: string
					is_complete?: boolean | null
					task?: null | string
					user_id: string
				}
				Row: {
					id: number
					inserted_at: string
					is_complete: boolean | null
					task: null | string
					user_id: string
				}
				Update: {
					id?: number
					inserted_at?: string
					is_complete?: boolean | null
					task?: null | string
					user_id?: string
				}
			}
		}
		Views: {
			[_ in never]: never
		}
	}
}

type ErrorStatus = number | string

export interface ErrorObject {
	data?: {
		message?: string
		statusCode: number
	}
	error?: string
	status?: ErrorStatus
}

/**
 * Handles different error types and returns the appropriate error message to display.
 * @param error The error object to handle.
 * @returns The error message to display.
 */
const getErrorMessage = (error: ErrorObject): string => {
	if (!!error?.status && errorStatuses[error?.status]) return errorStatuses[error?.status]

	if (typeof error?.error === "string") return error.error

	if (error?.data?.message && typeof error.data.message === "string" && error.status !== 500) return error.data.message

	return "Something went wrong..."
}

export default getErrorMessage

const errorStatuses: Record<ErrorStatus, string> = {
	403: "Forbidden request",
	404: "Resource not found",
	500: "Server Exception error",
	FETCH_ERROR: "Network Error",
}

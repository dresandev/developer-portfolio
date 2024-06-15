"use server"

import { FORMSPREE_URL } from "~/constants"

export const sendMessageToEmail = async (formData: FormData) => {
	const formDataObject = Object.fromEntries(formData)

	const response = await fetch(`${FORMSPREE_URL}/${process.env.FORMSPREE_ID}`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(formData),
	})

	console.log(response)
}

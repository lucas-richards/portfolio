"use client"

import { useRef, useState } from "react"
import { postEntry } from "../action"

export default function Form(){
    // clear the form after submit
    const formRef = useRef<HTMLFormElement>(null)

    return(
        <form
            action={async formData => {
                await postEntry(formData)
                formRef.current?.reset()
            }}
            ref={formRef}
            className="relative flex items-center text-sm mb-5"
        >
            <input 
                type="text" 
                placeholder="Your message.."
                name="entry" 
                required 
                className="pl-4 pr-32 py-2 mt-1 focus:ring-mainColor focus:border-mainColor block w-full border-neutral-300 rounded bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" 
            />
            <button 
                type="submit" 
                className="flex items-center justify-center absolute right-2 mt-1 font-medium h-7 bg-mainColor/30 hover:bg-mainColor text-neutral-900 dark:text-neutral-100 rounded w-16"
            >
            Send
            </button>
        </form>
    )
}
"use client"

import ITodo from "@/types/todo"
import { useState } from "react"

interface IAdd {
    add: (newTodo: ITodo) => void
    id: number
}

export default function Add(props: IAdd) {

    const [newTodo, setNewTodo] = useState(
        {id: props.id, title: "", done: false}
    )

    return (
        <div className="bg-white w-3/5 md:w-[40%] flex justify-center items-center rounded-lg py-2">
            <input type="text" placeholder="Add a new todo..." value={newTodo.title} className="outline-none placeholder:text-sm placeholder:font-extralight w-[80%]" onChange={(e) => setNewTodo({...newTodo, id: props.id, title: e.target.value})}/>
            <button onClick={() => {props.add(newTodo); setNewTodo({id: props.id, title: "", done: false})}}>add</button>
        </div>
    )
}
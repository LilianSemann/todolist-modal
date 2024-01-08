"use client"

import ITodo from "@/types/todo"
import { useState } from "react"

interface IModal {
    upd: (todo: ITodo) => void
    dlt: (todo: ITodo) => void
    close: () => void

    modal: {
        display: boolean
        todo: ITodo
    }
}

export default function Edit(props: IModal) {

    const [todo, setTodo] = useState({
        id: -1,
        title: "",
        done: false
    })

    if (!props.modal.display) return
    return (
        <>
            <section className="h-screen w-full absolute top-0 left-0 bg-black/40" onClick={props.close}/>

            <section className="bg-white w-2/3 md:w-4/12 h-[45%] rounded-lg p-6 absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] flex flex-col justify-between items-center">
                <header className="flex flex-col w-full">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="font-[530] text-lg">Edit task</h1>
                        <button className="font-extralight text-sm" onClick={props.close}>X</button>
                    </div>
                    <p className="font-extralight text-sm px-2">Make changes to your task here. Click save when you're done.</p>
                </header>
                
                <main className="flex flex-col gap-3 justify-center w-[90%] ">
                    <div className="flex gap-1 items-center">
                        <p className="w-[15%] text-end text">id</p>
                        <input value={props.modal.todo.id} className="rounded-lg w-[80%] border border-zinc-300 py-1 px-2 outline-none"/>
                    </div>

                    <div className="flex gap-1 items-center">
                        <p className="w-[15%] text-end">title</p>
                        <input type="text" defaultValue={props.modal.todo.title} className="rounded-lg w-[80%] py-1 px-2 border border-zinc-300 focus:border-zinc-400 outline-none" onChange={(e) => {setTodo({id: props.modal.todo.id, title: e.target.value, done: props.modal.todo.done})}}/>
                    </div>
                </main>

                <footer className="flex w-full justify-end gap-4">
                    <button className="bg-zinc-900 text-white rounded-lg px-3 py-1 hover:bg-zinc-800" onClick={() => {props.upd(todo); props.close()}}>save</button>
                    <button className="bg-zinc-900 text-white rounded-lg px-3 py-1 hover:bg-zinc-800" onClick={() => {props.dlt(props.modal.todo); props.close()}}>delete</button>
                </footer>
            </section>
        </>
    )
}
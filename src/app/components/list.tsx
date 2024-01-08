"use client"

import ITodo from "@/types/todo"
import { useState } from "react"
import Add from "./addtodo"
import Edit from "./edittodo"

export default function List(props: {list: ITodo[]}) {

    const [list, setList] = useState(props.list)

    const [modal, setModal] = useState({
        display: false,
        todo: {
            id: -1,
            title: "",
            done: false
        }
    })

    function add(newTodo: ITodo) {
        if (!newTodo.title) return
        setList([...list, newTodo])
    }

    function dlt(todo: ITodo) {
        const newList = list.filter((t) => t.id != todo.id)
        setList(newList)
    }

    function upd(todo: ITodo) {
        const newList = list.map((t) => t.id == todo.id ? todo : t)
        setList(newList)
    }

    function toggle(todo: ITodo) {
        todo.done = !todo.done
        setList([...list])
    }

    return (
        <main className="min-h-screen w-full bg-zinc-900">
            <section className="flex flex-col items-center gap-2 md:gap-6 pt-16 md:pt-20">
                <Add add={add} id={list.length}/>

                <div className="bg-white w-3/5 md:w-[40%] min-h-[60%] rounded-lg pt-6 p-4 flex flex-col gap-3">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <td className="text-sm border-b border-y-zinc-200 text-center w-[15%]">done</td>
                                <td className="text-sm border-b border-y-zinc-200 w-[70%]">title</td>
                                <td className="text-sm border-b border-y-zinc-200 text-center w-[15%]"></td>
                            </tr>
                        </thead>

                        <tbody>
                            {list.map((t) => (
                                <tr key={t.id} className="even:bg-zinc-100 my-1">
                                    <td className="py-1 md:py-2 text-center w-[15%]"><input type="checkbox" className="cursor-pointer" defaultChecked={t.done} onClick={() => toggle(t)}/></td>
                                    <td className="py-1 md:py-2 w-[70%] cursor-pointer" style={t.done ? {color: "rgb(63 63 70)", textDecoration: "line-through"} : {}} onClick={() => dlt(t)}>{t.title}</td>
                                    <td className="py-1 md:py-2 text-xs font-extralight text-center w-[15%] cursor-pointer" style={t.done ? {color: "red"} : {}} onClick={() => !t.done ? setModal({display: true, todo: t}) : {}}>edit</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="w-full text-end font-extralight text-[0.6em]">Click on the task to delete it</p>
                </div>
            </section>

            <Edit upd={upd} dlt={dlt} modal={modal} close={() => setModal({display: false, todo: {id: -1, title: "", done: false}})}/>
        </main>
    )
}
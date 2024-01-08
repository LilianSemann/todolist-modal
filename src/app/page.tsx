"use client"

import ITodo from "@/types/todo"
import List from "./components/list"

export default function Home() {

  const baseList:ITodo[] = [
    {
      id: 0,
      title: "build a house",
      done: false
    },
    {
      id: 1,
      title: "mine",
      done: true
    },
    {
      id: 2,
      title: "go to the nether",
      done: false
    },
  ]

  return (
    <>
      <List list={baseList}/>
    </>
  )
}

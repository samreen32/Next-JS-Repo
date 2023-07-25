"use client";
import Link from "next/link";

export default function StudentList() {
  const students = ["Name_1", "Name_2", "Name_3", "Name_4", "Name_5"];
  return (
    <>
      <h1>Student List</h1>
      <ul>
        {students.map((user) => {
          return <li>{<Link href={"/studentlist/" + user}>{user}</Link>}</li>;
        })}
      </ul>
    </>
  );
}
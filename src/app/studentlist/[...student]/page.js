"use client"
export default function Student({params}) {
    console.log(params)
  return (
    <>
      <h1>Studen Details</h1>
      {params.student}
    </>
  );
}
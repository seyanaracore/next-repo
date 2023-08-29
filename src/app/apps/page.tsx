"use client"
import {useState} from "react";

export default function Apps() {
  const [apps, setApps] = useState('')

  // const getApps = async () => {
  //   const data = await fetch('/api/apps').then(response => response.json());
  //
  //   setApps(JSON.stringify(data, null, 2))
  // }
  //
  // getApps()
  return (
    <main>
      <pre>
        {apps}
      </pre>
    </main>
  )
}

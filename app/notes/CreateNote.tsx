'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async () => {
    // const db = new PocketBase("http://127.0.0.1:8090");

    // await db.records.create("notes", {
    //   title,
    //   content,
    // });

    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setContent("");
    setTitle("");

    router.refresh();
  };

  return (
    <div className="w-1/2 mx-auto bg-green-50 p-6">
      <form
        onSubmit={create}
        className="flex flex-col justify-around items-stretch"
      >
        <h3>Create a new Note</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border-2"
        />
        <textarea
          placeholder="Content"
          cols={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-2 border-2 mt-3"
        />
        <button className="bg-green-600 rounded-lg p-2 mt-2" type="submit">
          Create note
        </button>
      </form>
    </div>
  );
}

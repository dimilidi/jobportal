import React, { useState, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

type Props ={
    description: String
    setDescription: (value:string) => void
}

const TextEditor = (text:any) => {
  return {
    __html: `${text}`
  }
}
export default () => {
  const [description, setDescription] = useState('')

  const placeholder = "Your description..."
  const modules = {
    toolbar: {
      container: [
        [{ align: "" }, { align: "center" }, { align: "right" }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" }
        ],
      ],
    }
  }
  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "header",
    "align",
    "blockquote"
  ];

  const { quill, quillRef, Quill } = useQuill({
    modules,
    formats,
    placeholder
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setDescription(quill.root.innerHTML);
      });
      quill.getModule("toolbar")
      quill.getModule("toolbar")
    }
  }, [quill]);

  return (
    <div>
      <div ref={quillRef} />
      <div className="ql-editor" dangerouslySetInnerHTML={TextEditor(description)} />
      <span>{description}</span>
    </div>
  )
}
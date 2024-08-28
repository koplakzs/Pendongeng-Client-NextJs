import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
const EditorDongeng = () => {
  const { quill, quillRef } = useQuill({
    theme: "snow",
    placeholder: "Ceritakan Dongeng Mu",
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        // console.log("Text change!");
        console.log(quill.getText()); // Get text only
        // console.log(quill.getContents()); // Get delta contents
        console.log(quill.root.innerHTML); // Get innerHTML using quill
        // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);
  return (
    <main className="w-full font-poppins text-sm ">
      <section ref={quillRef} className="max-h-60 min-h-20 overflow-scroll " />
    </main>
  );
};

export default EditorDongeng;

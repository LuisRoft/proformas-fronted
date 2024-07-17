"use client";
import { FileUpload } from "primereact/fileupload";
import { useState } from "react";
import AnalysisTable from "./Table";

export default function FileUploadPost() {
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [loading, setLoading] = useState(false); // Estado de carga

  const invoiceUploadHandler = async ({ files }: any) => {
    setLoading(true);
    console.log("Uploading files:", files);
    const formData = new FormData();
    for (let file of files) {
      formData.append("images", file);
    }

    try {
      const response = await fetch("http://localhost:3001/openai/analyze", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setAnalysisResult(result.aiResponse);
      console.log("Imágenes analizadas con éxito:", result.aiResponse);
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 ">
      <FileUpload
        name="images"
        customUpload
        uploadHandler={invoiceUploadHandler}
        multiple
        accept="image/*"
        maxFileSize={1000000}
        emptyTemplate={
          <p className="m-0">
            Arrastra y suelta tus imágenes aquí o da click para subirlas
          </p>
        }
      />
      {loading && <p>Cargando...</p>}
      {analysisResult && !loading && <AnalysisTable result={analysisResult} />}
    </div>
  );
}

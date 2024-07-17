import FileUploadPost from "./components/FileUploadPost";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center flex-col gap-4 px-10">
      <h1 className="font-bold text-4xl mt-11">Genesis APP</h1>
      <p className="text-xl">
        Sube tus imagenes de proformas para poder realizar el analisis
        comparativo
      </p>
      <FileUploadPost />
    </main>
  );
}

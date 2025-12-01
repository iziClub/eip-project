import FileUpload from "../ui/FileUpload";

export default function GalleryTab() {
  return (
      <div>
        <FileUpload multiple={true}/>
      </div>
  );
}
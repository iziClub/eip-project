"use client";
import { useState, DragEvent, ChangeEvent } from "react";

interface FileUploadProps {
  multiple?: boolean;
  onFilesChange?: (files: File[]) => void;
}

export default function FileUpload({ multiple = false, onFilesChange }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDrag = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      updateFiles(newFiles);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      updateFiles(newFiles);
    }
  };

  const updateFiles = (newFiles: File[]) => {
    if (multiple) {
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      onFilesChange?.(updatedFiles);
    } else {
      setFiles([newFiles[0]]);
      onFilesChange?.([newFiles[0]]);
    }
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
  };

  return (
    <div className="w-full mx-auto">
      <label
        htmlFor="file-upload"
        className={`
          flex flex-col items-center justify-center border-3 border-dashed rounded-xl p-6 transition
          bg-grey-1 border-grey-2 cursor-pointer hover:bg-gray-100
          ${dragActive ? "border-blue-500 bg-blue-50" : ""}
        `}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        {/* Single file mode - show file inside the box */}
        {!multiple && files.length > 0 ? (
          <div className="w-full flex items-center justify-between bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 flex-shrink-0">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <span className="font-semibold text-black text-sm truncate">{files[0].name}</span>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                removeFile(0);
              }}
              className="ml-2 p-1 hover:bg-gray-200 rounded-full transition-colors flex-shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        ) : (
          // Empty state
          <div className="flex flex-col items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="39" viewBox="0 0 35 39" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.5283 0C23.4413 0.000223088 24.3252 0.321678 25.025 0.908056L25.2778 1.13944L33.8606 9.72222C34.5061 10.3678 34.904 11.22 34.9844 12.1294L35 12.4717V35C35.0003 35.9811 34.6298 36.9261 33.9626 37.6455C33.2955 38.3649 32.3811 38.8056 31.4028 38.8792L31.1111 38.8889H19.4444V35H31.1111V15.5556H22.3611C21.6361 15.5555 20.937 15.2854 20.4003 14.798C19.8636 14.3105 19.5277 13.6406 19.4581 12.9189L19.4444 12.6389V3.88889H7.77778V19.4444H3.88889V3.88889C3.88858 2.90777 4.25912 1.96279 4.92624 1.24338C5.59336 0.523971 6.50775 0.0833065 7.48611 0.00972244L7.77778 0H22.5283ZM11.0969 24.2375L16.5978 29.7364C16.9623 30.101 17.1671 30.5955 17.1671 31.1111C17.1671 31.6267 16.9623 32.1212 16.5978 32.4858L11.0969 37.9847C10.9176 38.1704 10.703 38.3186 10.4658 38.4205C10.2286 38.5224 9.97341 38.576 9.71522 38.5783C9.45704 38.5805 9.201 38.5313 8.96203 38.4335C8.72307 38.3358 8.50597 38.1914 8.3234 38.0088C8.14083 37.8263 7.99645 37.6092 7.89868 37.3702C7.80091 37.1312 7.75171 36.8752 7.75396 36.617C7.7562 36.3588 7.80984 36.1037 7.91175 35.8664C8.01365 35.6292 8.16179 35.4146 8.3475 35.2353L10.5272 33.0556H1.94444C1.42875 33.0556 0.934169 32.8507 0.569515 32.486C0.20486 32.1214 0 31.6268 0 31.1111C0 30.5954 0.20486 30.1008 0.569515 29.7362C0.934169 29.3715 1.42875 29.1667 1.94444 29.1667H10.5272L8.3475 26.9869C8.16684 26.8064 8.02351 26.5921 7.92569 26.3561C7.82787 26.1202 7.77747 25.8673 7.77738 25.6119C7.7772 25.0961 7.98193 24.6014 8.34653 24.2365C8.71113 23.8717 9.20573 23.6666 9.72153 23.6664C9.97693 23.6663 10.2299 23.7165 10.4658 23.8142C10.7018 23.9118 10.9163 24.055 11.0969 24.2356V24.2375ZM23.3333 4.69389V11.6667H30.3061L23.3333 4.69389Z" fill="#B8B4B1"/>
            </svg>
            <div className="text-center">
              <p className="font-semibold text-black text-sm">
                Sélectionnez {multiple ? "des fichiers" : "un fichier"} ou faites-{multiple ? "les" : "le"} glisser ici
              </p>
              <p className="font-light text-black text-xs">jpg, png, jpeg, webp - jusqu'à 5Mo par fichier</p>
            </div>
            <input 
              id="file-upload" 
              type="file" 
              className="hidden" 
              onChange={handleChange}
              multiple={multiple}
            />
            <label
              htmlFor="file-upload"
              className="border border-grey-3 bg-white text-black rounded-[10px] py-3 px-4 text-xs font-semibold cursor-pointer hover:bg-grey-1 transition-colors"
            >
              Choisir {multiple ? "des fichiers" : "un fichier"}
            </label>
          </div>
        )}
      </label>

      {dragActive && (
        <div
          className="absolute inset-0"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        />
      )}

      {/* Multiple files mode - show files in grid below the box */}
      {multiple && files.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mt-4">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-grey-1 rounded-lg px-3 py-2.5 border border-grey-2 "
            >
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <span className="text-xs font-semibold text-black truncate">{file.name}</span>
                <span className="text-[12px] text-grey-3 truncate">{(file.size / (1024 * 1024)).toFixed(2)} Mo</span>
              </div>
              <button
                onClick={() => removeFile(index)}
                className=" transition-colors cursor-pointer"
              >
                <svg className="fill-black hover:fill-red-primary transition-colors cursor-pointer" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.28 5.80189e-08C11.6998 0.00010886 12.1088 0.132286 12.4493 0.377808C12.7898 0.62333 13.0444 0.96975 13.177 1.368L13.72 3H17C17.2652 3 17.5196 3.10536 17.7071 3.29289C17.8946 3.48043 18 3.73478 18 4C18 4.26522 17.8946 4.51957 17.7071 4.70711C17.5196 4.89464 17.2652 5 17 5L16.997 5.071L16.13 17.214C16.0759 17.9706 15.7372 18.6786 15.182 19.1956C14.6269 19.7125 13.8965 19.9999 13.138 20H4.862C4.10346 19.9999 3.37311 19.7125 2.81797 19.1956C2.26283 18.6786 1.92411 17.9706 1.87 17.214L1.003 5.07L1 5C0.734784 5 0.48043 4.89464 0.292893 4.70711C0.105357 4.51957 0 4.26522 0 4C0 3.73478 0.105357 3.48043 0.292893 3.29289C0.48043 3.10536 0.734784 3 1 3H4.28L4.823 1.368C4.9557 0.969588 5.21043 0.623052 5.5511 0.377515C5.89176 0.131978 6.30107 -0.000101061 6.721 5.80189e-08H11.28ZM14.997 5H3.003L3.865 17.071C3.88295 17.3232 3.99577 17.5592 4.18076 17.7316C4.36574 17.904 4.60916 17.9999 4.862 18H13.138C13.3908 17.9999 13.6343 17.904 13.8192 17.7316C14.0042 17.5592 14.117 17.3232 14.135 17.071L14.997 5ZM7 8C7.24493 8.00003 7.48134 8.08996 7.66437 8.25272C7.84741 8.41547 7.96434 8.63975 7.993 8.883L8 9V14C7.99972 14.2549 7.90212 14.5 7.72715 14.6854C7.55218 14.8707 7.31305 14.9822 7.05861 14.9972C6.80416 15.0121 6.55362 14.9293 6.35817 14.7657C6.16271 14.6021 6.0371 14.3701 6.007 14.117L6 14V9C6 8.73478 6.10536 8.48043 6.29289 8.29289C6.48043 8.10536 6.73478 8 7 8ZM11 8C11.2652 8 11.5196 8.10536 11.7071 8.29289C11.8946 8.48043 12 8.73478 12 9V14C12 14.2652 11.8946 14.5196 11.7071 14.7071C11.5196 14.8946 11.2652 15 11 15C10.7348 15 10.4804 14.8946 10.2929 14.7071C10.1054 14.5196 10 14.2652 10 14V9C10 8.73478 10.1054 8.48043 10.2929 8.29289C10.4804 8.10536 10.7348 8 11 8ZM11.28 2H6.72L6.387 3H11.613L11.28 2Z" fill="current"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
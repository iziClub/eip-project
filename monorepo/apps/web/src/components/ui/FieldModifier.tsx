import { JSX } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import { useModalStore } from "@/stores/ModalStore";
import FileUpload from "./FileUpload";
import TextArea from "./TextArea";

export type EditableFieldType =
  | "text"
  | "textarea"
  | "file"
  | "tags";

type FieldValueType = {
  text: string;
  textarea: string;
  file: File;
  tags: string[];
};

export interface FieldModifierProps<T extends EditableFieldType> {
  label: string;
  value: FieldValueType[T];
  type: T;
  onSave: (newValue: FieldValueType[T]) => void;
}

export function FieldModifier<T extends EditableFieldType>({
  label,
  value,
  type,
  onSave,
}: FieldModifierProps<T>) {
    const openModal = useModalStore((state) => state.openModal);
    const file = value as File | null;

    const handleOpen = () => {
        let tempValue: FieldValueType[T] = value;

        const editor: Record<EditableFieldType, JSX.Element> = {
            text: (
                <TextInput
                    defaultValue={value as string}
                    onChange={(e) => (tempValue = e.target.value as FieldValueType[T])}
                />
            ),
            textarea: (
                <TextArea
                    defaultValue={value as string}
                    onChange={(e) => (tempValue = e.target.value as FieldValueType[T])}
                    resize={false}
                    />
            ),
            file: (
                <FileUpload
                    multiple={false}        
                    onFilesChange={(files) => {
                        tempValue = (files.length > 0 ? files[0] : null) as FieldValueType[T];
                    }}
                />
            ),
            tags: <div>Tags editor not implemented yet.</div>,
        };
        console.log(tempValue);

        openModal({
            title: `Modifier ${label}`,
            content: editor[type],
            onSave: () => onSave(tempValue),
        });
    };

    const displayValue = () => {
        if (type === "file") {
            return file ? file.name : "Aucun fichier";
        }
        if (type === "tags") {
            return (value as string[]).join(", ");
        }
        return value as string;
    };

    const displayFileSize = () => {
        if (type === "file") {
            return file ? (file.size / (1024 * 1024)).toFixed(2) : "0";
        }
        return "";
    }

    return (
        <div className="">
            <p className="text-base font-semibold text-black mb-2">{label}</p>
            <div className="flex flex-row w-full justify-between">
                { (type === "text") &&
                    <TextInput 
                        className="w-full" 
                        inputClassName=""
                        disabled={true} 
                        value={displayValue()}
                    />
                }
                { (type === "file") &&
                    <div className="w-full bg-grey-1 rounded-[10px] border border-grey-2 px-4 flex justify-between">
                        <div className="flex flex-col gap-1">
                            { file?.name ?
                            <>
                                <span className="text-sm font-semibold text-black pt-3 truncate">{displayValue()}</span>
                                <span className="text-xs text-grey-3 pb-3">{displayFileSize()} Mo</span>
                            </>
                            :
                            <span className="text-sm font-semibold text-grey-3 py-4">Aucun fichier</span>
                            }
                        </div>
                        
                        <button>
                            <svg className={`${file?.name ? '' : 'hidden'} fill-black hover:fill-red-primary transition-colors cursor-pointer`} width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.28 5.80189e-08C11.6998 0.00010886 12.1088 0.132286 12.4493 0.377808C12.7898 0.62333 13.0444 0.96975 13.177 1.368L13.72 3H17C17.2652 3 17.5196 3.10536 17.7071 3.29289C17.8946 3.48043 18 3.73478 18 4C18 4.26522 17.8946 4.51957 17.7071 4.70711C17.5196 4.89464 17.2652 5 17 5L16.997 5.071L16.13 17.214C16.0759 17.9706 15.7372 18.6786 15.182 19.1956C14.6269 19.7125 13.8965 19.9999 13.138 20H4.862C4.10346 19.9999 3.37311 19.7125 2.81797 19.1956C2.26283 18.6786 1.92411 17.9706 1.87 17.214L1.003 5.07L1 5C0.734784 5 0.48043 4.89464 0.292893 4.70711C0.105357 4.51957 0 4.26522 0 4C0 3.73478 0.105357 3.48043 0.292893 3.29289C0.48043 3.10536 0.734784 3 1 3H4.28L4.823 1.368C4.9557 0.969588 5.21043 0.623052 5.5511 0.377515C5.89176 0.131978 6.30107 -0.000101061 6.721 5.80189e-08H11.28ZM14.997 5H3.003L3.865 17.071C3.88295 17.3232 3.99577 17.5592 4.18076 17.7316C4.36574 17.904 4.60916 17.9999 4.862 18H13.138C13.3908 17.9999 13.6343 17.904 13.8192 17.7316C14.0042 17.5592 14.117 17.3232 14.135 17.071L14.997 5ZM7 8C7.24493 8.00003 7.48134 8.08996 7.66437 8.25272C7.84741 8.41547 7.96434 8.63975 7.993 8.883L8 9V14C7.99972 14.2549 7.90212 14.5 7.72715 14.6854C7.55218 14.8707 7.31305 14.9822 7.05861 14.9972C6.80416 15.0121 6.55362 14.9293 6.35817 14.7657C6.16271 14.6021 6.0371 14.3701 6.007 14.117L6 14V9C6 8.73478 6.10536 8.48043 6.29289 8.29289C6.48043 8.10536 6.73478 8 7 8ZM11 8C11.2652 8 11.5196 8.10536 11.7071 8.29289C11.8946 8.48043 12 8.73478 12 9V14C12 14.2652 11.8946 14.5196 11.7071 14.7071C11.5196 14.8946 11.2652 15 11 15C10.7348 15 10.4804 14.8946 10.2929 14.7071C10.1054 14.5196 10 14.2652 10 14V9C10 8.73478 10.1054 8.48043 10.2929 8.29289C10.4804 8.10536 10.7348 8 11 8ZM11.28 2H6.72L6.387 3H11.613L11.28 2Z" fill="current"/>
                            </svg>
                        </button>
                    </div>
                }
                {
                    (type === "textarea") &&
                    <TextArea 
                        value={displayValue()} 
                        disabled={true}
                        resize={false}
                    />
                }
                <Button onClick={handleOpen} variant="modifier" size="full" className="ml-4 aspect-square">
                    <svg className="fill-blue-secondary group-hover/button:fill-white" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6665 0.878941C13.205 0.340338 13.9282 0.0266971 14.6893 0.00162726C15.4505 -0.0234425 16.1928 0.241936 16.7655 0.743941L16.9095 0.878941L17.6165 1.58594C18.1548 2.12436 18.4683 2.84732 18.4934 3.60828C18.5184 4.36924 18.2532 5.11126 17.7515 5.68394L17.6165 5.82794L6.40452 17.0409C6.24599 17.1995 6.05395 17.3204 5.84252 17.3949L5.68052 17.4419L1.22652 18.4699C1.07046 18.5062 0.90796 18.5045 0.75271 18.4649C0.59746 18.4253 0.454004 18.3489 0.334422 18.2423C0.214841 18.1356 0.122636 18.0018 0.0655711 17.8521C0.00850669 17.7024 -0.011746 17.5411 0.00651866 17.3819L0.0265186 17.2689L1.05352 12.8139C1.10425 12.5954 1.20335 12.3911 1.34352 12.2159L1.45452 12.0909L12.6665 0.878941ZM11.9595 4.41394L2.96952 13.4039L2.33352 16.1619L5.09152 15.5249L14.0815 6.53494L11.9595 4.41394ZM15.4955 2.29294C15.3233 2.12076 15.0942 2.01733 14.8512 2.00205C14.6082 1.98677 14.3679 2.06069 14.1755 2.20994L14.0815 2.29294L13.3735 2.99994L15.4955 5.12094L16.2025 4.41394C16.3747 4.24175 16.4781 4.01265 16.4934 3.76962C16.5087 3.5266 16.4348 3.28634 16.2855 3.09394L16.2025 2.99994L15.4955 2.29294Z"/>
                    </svg>
                </Button>
            </div>
        </div>
    );
}
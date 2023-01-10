import React, { useMemo, useEffect, useState } from "react";
import { useDropzone, DropzoneRootProps } from "react-dropzone";
import { CloseIcon } from "../../assets/CloseIcon";
import { FileTextIcon } from "../../assets/FileTextIcon";
import { UploadCloudIcon } from "../../assets/UploadCloudIcon";
import "./css/UploadModalContent.css";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderRadius: 8,
  border: "3.5px dashed rgba(26, 33, 47, 0.1)",
  backgroundColor: "rgba(26, 33, 47, 0.03)",
  color: "rgba(26, 33, 47, 0.35)",
  fontWeight: 500,
  outline: "none",
  transition: "all 0.25s ease",
  cursor: "pointer",
};

const focusedStyle = {};

const acceptStyle = {
  border: "3.5px dashed rgba(244, 105, 77, 0.5)",
  backgroundColor: "rgba(244, 105, 77, 0.1)",
  color: "rgba(26, 33, 47, 0.4)",
};

const rejectStyle = {
  border: "3.5px dashed rgba(244, 105, 77, 0.5)",
  backgroundColor: "rgba(244, 105, 77, 0.1)",
  color: "rgba(26, 33, 47, 0.4)",
};

type StyledDropzoneProps = {
  className: string;
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

const StyledDropzone = (props: StyledDropzoneProps) => {
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({});

  useEffect(() => {
    props.setSelectedFiles([...props.selectedFiles, ...acceptedFiles]);
  }, [acceptedFiles]);

  const style: DropzoneRootProps = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className={props.className}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        Drag and drop your files here or click to select files
      </div>
    </div>
  );
};

type UploadModalContentProps = {
  show: boolean;
};

const UploadModalContent = (props: UploadModalContentProps) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  useEffect(() => {
    console.log(selectedFiles);
  }, [selectedFiles]);

  useEffect(() => {
    if (!props.show) {
      setTimeout(() => {
        setSelectedFiles([]);
      }, 100);
    }
  }, [props.show]);

  const convertBytes = (bytes: number) => {
    const sizes = ["bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Byte";
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round((bytes / Math.pow(1024, i)) * 10) / 10 + " " + sizes[i];
  };

  return (
    <div className="upload-modal-content">
      <UploadCloudIcon className="upload-modal-content__upload-icon" />
      <h1 className="upload-modal-content__title">{"Upload Files"}</h1>
      <p className="upload-modal-content__subtitle">
        {"All file types are supported."}
      </p>
      <StyledDropzone
        className="upload-modal-content__drop-area"
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
      />
      <div className="upload-modal-content__selected-files">
        {selectedFiles.map((file, index) => (
          <div className="upload-modal-content__selected-files__file">
            <div>
              <FileTextIcon className="upload-modal-content__selected-files__file__icon" />
              <p className="upload-modal-content__selected-files__file__name">
                {file.name}
              </p>
            </div>
            <div>
              <p className="upload-modal-content__selected-files__file__size">
                {convertBytes(file.size)}
              </p>
              <CloseIcon
                className="upload-modal-content__selected-files__file__remove"
                onClick={() => {
                  const newFiles = [...selectedFiles];
                  newFiles.splice(index, 1);
                  setSelectedFiles(newFiles);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="upload-modal-content__upload-button"
        disabled={selectedFiles.length === 0}
        style={
          selectedFiles.length === 0
            ? { marginTop: "6px" }
            : { marginTop: "18px" }
        }
      >
        <UploadCloudIcon className="upload-modal-content__upload-button__icon" />
        <p>{"Upload files"}</p>
      </button>
    </div>
  );
};

export default UploadModalContent;

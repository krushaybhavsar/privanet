import React from "react";
import { UploadCloudIcon } from "../../assets/UploadCloudIcon";
import MyFilesSidePanel from "../../components/MyFilesSidePanel";
import "./css/MyFilesFragment.css";

const MyFilesFragment = () => {
  return (
    <div className="my-files-fragment">
      <div className="my-files-fragment__left">
        <div className="my-files-fragment__header">
          <h1>{"Hey there!"}</h1>
          <div className="my-files-fragment__header__upload">
            <button className="my-files-fragment__header__upload__btn">
              <UploadCloudIcon className="my-files-fragment__header__upload__icon" />
              <p>{"Upload"}</p>
            </button>
          </div>
        </div>
        <div className="my-files-fragment__content"></div>
      </div>
      <MyFilesSidePanel />
    </div>
  );
};

export default MyFilesFragment;

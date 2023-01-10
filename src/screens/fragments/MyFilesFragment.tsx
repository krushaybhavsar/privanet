import React, { useState } from "react";
import { UploadCloudIcon } from "../../assets/UploadCloudIcon";
import CustomModal from "../../components/modals/CustomModal";
import UploadModalContent from "../../components/modals/UploadModalContent";
import MyFilesSidePanel from "../../components/MyFilesSidePanel";
import "./css/MyFilesFragment.css";

const MyFilesFragment = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <>
      <div className="my-files-fragment">
        <div className="my-files-fragment__left">
          <div className="my-files-fragment__header">
            <h1>{"Hey there!"}</h1>
            <div className="my-files-fragment__header__upload">
              <button
                className="my-files-fragment__header__upload__btn"
                onClick={() => setShowUploadModal(true)}
              >
                <UploadCloudIcon className="my-files-fragment__header__upload__icon" />
                <p>{"Upload"}</p>
              </button>
            </div>
          </div>
          <div className="my-files-fragment__content"></div>
        </div>
        <MyFilesSidePanel />
      </div>
      <CustomModal
        show={showUploadModal}
        setShow={setShowUploadModal}
        modalContent={<UploadModalContent show={showUploadModal} />}
      />
    </>
  );
};

export default MyFilesFragment;

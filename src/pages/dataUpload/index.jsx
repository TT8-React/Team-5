import React from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
// import axios from "axios";
import { useState } from "react";
import { StyledWrapper, StyledTableCon, StyleSwitchButton } from "./style";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MainButton } from "../../styled/styleComponent";

function ImageInput({ image, setImage }) {
  //   const [setFilePath] = useState(image || null);
  //   const [setIsLoading] = useState(false);
  //   const [name] = useState(fileName);
  const [fileName, setName] = useState("");

  const UploadFile = async (e) => {
    // setIsLoading(true);
    const file = e.target.files[0];

    setName(file.name);

    const formData = new FormData();
    formData.append("image", file);
    // console.log(FormData);

    // console.log(formData());
    try {
      // const headers = {};
      // const res = await axios.post('url', formData, headers);
      // const res = await axios.put('url', res, headers); // change profile image
      //   const res = "";
      //   setFilePath(res);
      //   setImage(res);
    } catch (err) {
      console.log(err);
    }
    // finally {
    //   setIsLoading(false);
    // }
  };
  return (
    <div>
      <StyledTableCon>
        <SideBar />

        <div class="ccon">
          <Header />

          <div class="buttcon">
            <div className="switch">
              <StyleSwitchButton className="left">
                Manual data tab
              </StyleSwitchButton>
              <StyleSwitchButton className="right active">
                Bulk upload tab
              </StyleSwitchButton>
            </div>
            <p>Upload CSV document</p>
            <div className="wrapperCon">
              <StyledWrapper>
                <input id="file" type="file" onChange={UploadFile} />
                <label htmlFor="file">
                  <FaCloudUploadAlt className="upIcon" />
                  <p>Upload here...</p>
                </label>
              </StyledWrapper>
              <MainButton className="sub">submit</MainButton>
            </div>
            <p>{`file name :${fileName}`}</p>
          </div>
        </div>
      </StyledTableCon>
    </div>
  );
}

export default ImageInput;

////////////////////////////////////

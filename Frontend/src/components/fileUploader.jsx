import React, { useState } from "react";
import "./fileUploader.css";

export const FileUploader = () => {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const fileReader = new FileReader();
  const [lenguage, setLenguage] = useState();
  const [option, setOption] = useState();

  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };

  const handleOnChangeLenguage = (event) => {
    setLenguage(event.target.value);
  };
  const handleOnChangeOption = (event) => {
    setOption(event.target.value);
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      setImage(file);
      fileReader.readAsDataURL(file);
    }
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    console.log(lenguage);
    console.log(option);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files.length) {
      setImage(event.dataTransfer.files[0]);
      fileReader.readAsDataURL(event.dataTransfer.files[0]);
    }
  };

  const handleDragEmpty = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <form className="text-recognition">
      <div className="info">
        <div className="container_checkboxs">
          <div>
            <input
              type="radio"
              id="checkbox_rus"
              className="checkbox"
              value="rus"
              onChange={handleOnChangeLenguage}
            />
            <label for="checkbox_rus">РУС</label>
          </div>
          <div>
            <input
              type="radio"
              id="checkbox_eng"
              className="checkbox"
              value="eng"
              onChange={handleOnChangeLenguage}
            />
            <label for="checkbox_eng">ENG</label>
          </div>
        </div>
        <div className="container_radiobuttons">
          <div className="two_radiobuttons">
            <div>
              <input
                type="radio"
                id="radio_2"
                value={2}
                className="radio"
                onChange={handleOnChangeOption}
              />
              <label for="radio_2">авто</label>
            </div>
            <div>
              <input
                type="radio"
                id="radio_11"
                value={11}
                className="radio"
                onChange={handleOnChangeOption}
              />
              <label for="radio_11">усиленный</label>
            </div>
          </div>
          <div className="two_radiobuttons">
            <div>
              <input
                type="radio"
                id="radio_6"
                value={6}
                className="radio"
                onChange={handleOnChangeOption}
              />
              <label for="radio_6">блок текста</label>
            </div>
            <div>
              <input
                type="radio"
                id="radio_5"
                value={5}
                className="radio"
                onChange={handleOnChangeOption}
              />
              <label for="radio_5">перевернутый</label>
            </div>
          </div>
        </div>
      </div>
      <div className="file-uploader">
        <div className="container_buttons">
          <textarea name="text"></textarea>
          <label
            htmlFor="file-loader-button"
            className="file-uploader__custom-button"
          >
            <div className="buttonTitle_upload">Загрузить файл</div>
          </label>
          <input
            id="file-loader-button"
            type="file"
            className="file-uploader__upload-button"
            onChange={handleOnChange}
          />
          <label
            htmlFor="findtext-button"
            className="file-uploader__custom-button"
          >
            <div className="buttonTitle_upload">Текст</div>
          </label>
          <button
            id="findtext-button"
            className="file-uploader__findtext-button"
            onClick={handleOnClick}
          />
        </div>
        <div className="container_images">
          <img
            src={imageURL ? imageURL : "noimage.png"}
            className="file-uploader__preview"
            alt="preview"
            onDrop={handleDrop}
            onDragEnter={handleDragEmpty}
            onDragOver={handleDragEmpty}
          />
        </div>
      </div>
    </form>
  );
};

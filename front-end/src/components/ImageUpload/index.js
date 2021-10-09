import React, { useState } from 'react'

import icon_close from '../../assets/icons/icon_close.jpg'

import "./styles.css"

function ImageUpload() {
  const [files, setFile] = useState([]);

  const handlerFile = (e) => {
    let allfiles = [];

    for (let i = 0; i < e.target.files.length; i++) {
      allfiles.push(e.target.files[i]);
    };

    if (allfiles.length > 0) {
      setFile(allfiles);
    };

    console.log(files);
  };

  const removeImageFromArray = (e) => {
    const index = e.target.id;
    let newFiles = [...files];

    newFiles.splice(index, 1);
    setFile(newFiles);
  }

  return (
    <div>
      <label class="custom-file-upload">
        <input
          className="contained-button-file"
          multiple
          type="file"
          onChange={handlerFile}
        />
        Fazer Upload
      </label>
      {files.map((file, key) => {
        return (
          <div key={key} className="row">
            <img id={key} className="preview-image" src={URL.createObjectURL(file)} alt={file.name} />
            <span id={key} className="filename">{file.name}</span>
            <img
              src={icon_close}
              alt="Botão de fechar"
              className="icon-close"
              id={key}
              key={key}
              onClick={(e) => {
                removeImageFromArray(e);
              }}
            />
          </div>
        )
      })}
    </div>

  );
}

export default ImageUpload

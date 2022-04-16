import React, { useCallback, useState, useEffect } from "react";
import path from "path";
import { useSelector, useDispatch } from "react-redux";
import {
  setQuestions,
  createQuestion,
  removeQuestions,
} from "../actions/index";
import { Button, Stack, DropZone, Card, TextField } from "@shopify/polaris";
import { NoteMinor, CircleCancelMinor } from "@shopify/polaris-icons";

export default function Uploader(props) {
  const list = useSelector((state) => state.setReducers);
  let initialValue = {
    option: props.index,
    value: "",
    type: "text",
  };

  const [data, setData] = useState(props.value ? props.value : initialValue);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    dispatch(createQuestion(data));
  }, []);

  const reducerData = useSelector((state) => state.setReducers);

  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) => {
      setFiles(acceptedFiles);
      //console.log(acceptedFiles);
      const imgExt = [".jpg", ".png", ".jpeg"];
      const vidExt = [".mp4", ".mov", ".mpeg"];
      acceptedFiles.forEach((element) => {
      
        if (imgExt.includes(path.extname(element.name))) {
          data.type = "image";
          data.value = window.URL.createObjectURL(element);
          setData(data);
          dispatch(setQuestions(data));

        } 
        else if (vidExt.includes(path.extname(element.name))) {
          data.type = "video";
          data.value = window.URL.createObjectURL(element);
          setData(data);
          dispatch(setQuestions(data));
        }
      });
    },
    []
  );

  const handalechange = () => {
    data.type = "text";
    data.value = "";
    setData(data);
    dispatch(setQuestions(data));
  };

  const dispatch = useDispatch();

  const textChange = useCallback((newValue) => {
    data.value = newValue;
    setData(data);
    dispatch(setQuestions(data));
  });

  const validImageTypes = ["image/gif", "image/jpeg", "image/png", "video/mp4"];

  const uploadedImage = files.length > 0 ? (
    <Stack vertical>
      {files.map((file, index) => (
        <img
          alt=""
          style={{
            width: "100%",
            maxWidth: "300px",
            maxHeight: "200px",
            objectFit: "contain",
            objectPosition: "center",
          }}
          src={
            validImageTypes.includes(file.type)
              ? window.URL.createObjectURL(file)
              : NoteMinor
          }
        />
      ))}
    </Stack>)
    :
    <Stack vertical>
      <img
          alt=""
          style={{
            width: "100%",
            maxWidth: "300px",
            maxHeight: "200px",
            objectFit: "contain",
            objectPosition: "center",
          }}
          src={
            data.value
          }
        />
    </Stack>;
    
  const uploadedVideo = files.length > 0 ? (
    <Stack vertical>
      {files.map((file, index) => (
        <video
          controls
          alt={index}
          style={{
            width: "100%",
            maxWidth: "300px",
            maxHeight: "200px",
            objectFit: "contain",
            objectPosition: "center",
          }}
        >
          <source
            src={
              validImageTypes.includes(file.type)
                ? (file? window.URL.createObjectURL(file): data.value)
                : NoteMinor
            }
          />
        </video>
      ))}
    </Stack>
  ):<Stack>
     <video
          controls
          alt=""
          style={{
            width: "100%",
            maxWidth: "300px",
            maxHeight: "200px",
            objectFit: "contain",
            objectPosition: "center",
          }}
        >
          <source
            src={
             data.value
            }
          />
        </video>
  </Stack>
  const handaleremove = () => {
    props.remove({ id: props.id });
    dispatch(removeQuestions(data));
  };

  return (
    <>
      <Card
        oneHalf
        sectioned
        title={`Insert / Upload Option ${props.index + 1}`}
        actions={
          props.index > 1
            ? [{ content: "Remove", onAction: handaleremove }]
            : null
        }
      >
        <table>
          <tr>
            <td width="100%">
              {data.type === "text" ? (
                <TextField
                  id="textfield"
                  maxLength={128}
                  value={data.value}
                  onChange={textChange}
                  multiline={3}
                  placeholder="Write something here..."
                  showCharacterCount
                />
              ) : null}
              {data.type === "image" ? uploadedImage : null}
              {data.type === "video" ? uploadedVideo : null}
            </td>

            <td style={{ vertical_align: "middle" }}>
              {data.type !== "text" ? (
                <Button
                  plain
                  onClick={handalechange}
                  icon={CircleCancelMinor}
                ></Button>
              ) : null}
              <div style={{ width: 50, height: 70 }}>
                <DropZone
                  onDrop={handleDropZoneDrop}
                  allowMultiple={false}
                  outline={false}
                  alt="Upload Image/video"
                >
                  <DropZone.FileUpload />
                </DropZone>
              </div>
            </td>
          </tr>
        </table>
      </Card>
    </>
  );
}

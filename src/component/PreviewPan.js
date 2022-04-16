import React, { useState, useCallback } from "react";
import {useSelector } from "react-redux";
import {
  Card,
  Heading,
  DisplayText,
  Checkbox,
  Icon,
  Stack,
  TextField,
} from "@shopify/polaris";
import { StarFilledMinor } from "@shopify/polaris-icons";
export default function OpenFeedbackPreview() {
  const [checked, setChecked] = useState(false);
  const [check, setCheck] = useState(false);
  const handleChange = useCallback((newChecked) => setChecked(newChecked), []);
  const handleChangeSec = useCallback((newChecked) => setCheck(newChecked), []);
  const [value, setValue] = useState();

  const handleTextChange = useCallback((newValue) => setValue(newValue), []);
  const list = useSelector((state) => state.setReducers);
  return (
    <>
      <Card sectioned>
        <center>
          <Heading>Preview of Pane #1</Heading>
        </center>
        <Card.Section>
        <Stack distribution="fill">
          {list.questions.map((question) => {
            if(question.type=="text"){
            return <TextField disabled
            label={
              <Checkbox
                label={`Option ${question.option}`}
                checked={checked}
                onChange={handleChange}
              />}
            value={question.value}
            onChange={handleTextChange}
            multiline={4}
            />;
            }
            else if(question.type=="image"){
              return <img style={{
                width: "100%",
                maxWidth: "260px",
                maxHeight: "200px",
                objectFit: "contain",
                objectPosition: "center",
              }} src={question.value} />;
            }
            else if(question.type=="video"){
              return <video   controls style={{
                width: "100%",
                maxWidth: "260px",
                maxHeight: "200px",
                objectFit: "contain",
                objectPosition: "center",
              }} ><source src={question.value}/></video>
            }
          })}
          </Stack>
          <br />
          <Heading>Why Did You Choose Option 1 ?*</Heading>
          <TextField
            disabled
            label=""
            placeholder="Say something for your option"
            value={value}
            onChange={handleTextChange}
            multiline={2}
          />
        </Card.Section>
      </Card>
    </>
  );
}

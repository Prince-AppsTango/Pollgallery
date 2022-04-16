import React,{useState,useCallback} from "react";
import {useSelector } from "react-redux";
import { Card, Heading, DisplayText, Icon, Stack,TextField } from "@shopify/polaris";
import Open_Feedback_Preview from "./OpenFeedbackPreview";
import PreviewPan from "./PreviewPan";
export default function Respondents() {

  const list = useSelector((state)=>(state.setReducers));
  console.log(list.ptype)
  // if(list.ptype==1)
  // {
  //   return setPage(<Open_Feedback_Preview/> )
  // }
  // else{
  //    return setPage(<PreviewPan/>)
  // }
  return (
    <>
      <Card > 
      <Card.Section>
      <Heading>Instruction</Heading>
          </Card.Section>
        <Card.Section>
          <ol>
            <li>Answer the question with as much detail as you can.</li>
            <li>Answer a few questions about yourself.</li>
          </ol>
          <Heading>Thanks!</Heading>
        </Card.Section>

        <Card.Section  title="Question">
          <DisplayText size="medium">
           {list.pollQuestion}
          </DisplayText>
        </Card.Section>
        </Card>
      {list.ptype==1?<Open_Feedback_Preview/> :<PreviewPan/>}
    </>
  );
}

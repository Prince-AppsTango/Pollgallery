import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  Heading,
  DisplayText,
  Icon,
  Stack,
  TextField,
  Badge,
  ButtonGroup,
  Button,
} from "@shopify/polaris";
import {
  StarFilledMinor,
  CustomersMajor,
  NotificationMajor,
} from "@shopify/polaris-icons";
export default function Respondents() {
  const [value, setValue] = useState("");

  const handleChange = useCallback((newValue) => setValue(newValue));

  const list = useSelector((state) => state.setReducers);
console.log(list.questions.length);
  return (
    <>
      <Card title="Question">
        <Card.Section>
          <DisplayText size="medium">{list.pollQuestion}</DisplayText>
        </Card.Section>
        <Card.Section>
          <Stack>
            <Badge>
              <Icon source={CustomersMajor} color="base" />
              {list.respondents} People Respondents
            </Badge>
            <Badge>
              <Icon source={NotificationMajor} color="base" />
              General Population
            </Badge>
          </Stack>
          <br />
          <Stack distribution="fill">
          {list.questions.map((question) => {
            if(question.type=="text"){
            return <TextField   disabled value={question.value} />;
            }
            else if(question.type=="image"){
              return <img style={{
                width: "100%",
                maxWidth: "300px",
                maxHeight: "200px",
                objectFit: "contain",
                objectPosition: "center",
              }} src={question.value} />;
            }
            else if(question.type=="video"){
              return <video   controls style={{
                width: "100%",
                maxWidth: "300px",
                maxHeight: "200px",
                objectFit: "contain",
                objectPosition: "center",
              }} ><source src={question.value}/></video>
            }
          })}
          </Stack>
        </Card.Section>
        <Card.Section>
          <Stack distribution="fill" horizontal>
            <Heading>Responces</Heading>
            <TextField
              value={value}
              onChange={handleChange}
              placeholder="Type to Filter Responses"
            />
          </Stack>
        </Card.Section>
        <hr />
        <Card sectioned>
          <Stack distribution="fill">
            <Heading>Showing 0/0 responses</Heading>
            <ButtonGroup>
              <Button>Male</Button>
              <Button>Female</Button>
              <Button>All Filter</Button>
            </ButtonGroup>
          </Stack>
          <br />
          <TextField placeholder="No matching responses." />
          <br />
          <DisplayText size="small">Demographics</DisplayText>
          <Heading>No data yet</Heading>
        </Card>
      </Card>
    </>
  );
}

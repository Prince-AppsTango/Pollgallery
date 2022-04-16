import React,{useState,useCallback} from "react";
import { Card, Heading, DisplayText, Icon, Stack,TextField } from "@shopify/polaris";
import { StarFilledMinor } from "@shopify/polaris-icons";
import {useSelector, useDispatch } from "react-redux";
export default function OpenFeedbackPreview() {
    const [value, setValue] = useState('');

    const handleChange = useCallback((newValue) => setValue(newValue), []);
    const list = useSelector((state)=>(state.setReducers));
  return (
    <>
        {(list.isRating==true)?
         <Card title="Give a rating (1 is low, 5 is high):*" sectioned >
         <Card.Section>
        <Stack horizontal>
        <Icon source={StarFilledMinor} color="Warning" />
        <Icon source={StarFilledMinor} color="Warning" />
        <Icon source={StarFilledMinor} color="Warning" />
        <Icon source={StarFilledMinor} color="Warning" />
        <Icon source={StarFilledMinor} color="Warning" />
        </Stack>
        </Card.Section>
        </Card>
        :null}
        <Card>
        <Card.Section  title="Give a thoughtful answer.*">
        <TextField
      value={value}
      onChange={handleChange}
      multiline={3}
      placeholder="Be descriptive - helpful answers can get bonuses, useless answers may get banned."
    />
        </Card.Section>
        <Heading>Please stay on topic</Heading>
        </Card>
    </>
  );
}

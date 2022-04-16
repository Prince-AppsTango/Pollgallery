import React, { useCallback, useState } from "react";
import TextFie from "../TextFie";
import { useSelector, useDispatch } from "react-redux";
import { setTitle, setPType, isRating,isCreatePollFirst } from "../actions/index";
import {
  ViewMajor,
  StarFilledMinor,
  QuestionMarkMinor,
} from "@shopify/polaris-icons";
//  import CreatePollTable from "../component/CreatePollTable";
//  import Circle from "../component/Circle";
import {
  Badge,
  Button,
  Heading,
  Card,
  Stack,
  RadioButton,
  TextField,
  Tooltip,
  TextStyle,
  Icon,
  Select,
} from "@shopify/polaris";
export default function CreatePollFirst(props) {
  const list = useSelector((state) => state.setReducers);

  const [is_checked, set_is_checked] = useState(true);
  //  const[state, setstate]=useState();
  const [PollType, setPollType] = useState(list.ptype);
  const [inputData, setText] = useState(list.pollQuestion);
  const handleTextChange = useCallback((e) => {
    setText(e);
    dispatch(setTitle(e));
  });

  const handleChange = useCallback((_checked, newValue) => {
    setPollType(newValue);
    dispatch(setPType(newValue));
  }, []);

  const dispatch = useDispatch();

  const SubmitClick = (e) => {
    let isproceed = true;

    if (list.pollQuestion) {
    } else {
      alert("Please Write a Poll Questions");
      isproceed = false;
    }
    const b = list.questions[0].type;

    list.questions.map((question) => {
      if (question.type != b) {
        alert(
          "All options must be of the same type (either text, image or video)"
        );
        isproceed = false;
      }

      if (question.value) {
      } else {
        alert("Please fill all the option");
        isproceed = false;
      }
    });

    if (isproceed) {
      props.Redirect({ page: "AudiencePoll" });
   dispatch(isCreatePollFirst("2"))
    }
  };

  const handleRating = (e) => {
    set_is_checked(!is_checked);
    dispatch(isRating(e.target.checked));
  };

  return (
    <Card sectioned>
      <Heading>Create a Poll</Heading>
      <Card.Section title="What Are You Testing?"></Card.Section>
      <Card.Section>
        <Stack distribution="fill" wrap={false}>
          <Card sectioned>
            <RadioButton
              label="Open Feedback"
              helpText={
                <Tooltip
                  content="Have a single idea to test or an open-ended question to ask? The Solo poll enables you to solicit feedback on one concept, without creating multiple variations of it."
                  preferredPosition="below"
                >
                  <TextStyle>
                    Our targeted poll participants will provide written feedback
                    and a rating on one idea, image, design, marketing text, etc
                  </TextStyle>
                </Tooltip>
              }
              checked={PollType === "1"}
              id="1"
              name="PollType1"
              onChange={handleChange}
            />
          </Card>

          <Card sectioned>
            <RadioButton
              label="Compare two or more ideas"
              //helpText="Compare 2 or more variations in a Ranked or Head-to-Head round robin format and receive votes & written feedback"
              helpText={
                <Tooltip
                  content="Compare 2 or more variations in a Ranked or Head-to-Head round robin format and receive votes & written feedback"
                  preferredPosition="below"
                >
                  <TextStyle>
                    Compare 2 or more variations in a Ranked or Head-to-Head
                    round robin format and receive votes & written feedback
                  </TextStyle>
                </Tooltip>
              }
              checked={PollType === "2"}
              id="2"
              name="PollType1"
              onChange={handleChange}
            />
          </Card>
        </Stack>
      </Card.Section>
      <Card.Section title="Poll Questions">
        {/* <Autocomplete /> */}
        <TextField value={inputData} maxLength={128} onChange={handleTextChange}></TextField>
        <br />
        {/* <Answer /> */}
        <TextFie pollType={PollType} />
      </Card.Section>
      {PollType != 2 ? (
        <Stack spacing="loose">
          <label className="switch">
            <input
              type="checkbox"
              checked={is_checked}
              onChange={handleRating}
            />
            <span className="slider round"> </span>
          </label>
          <Badge>
            Also can collect a 1-5 ratting(
            <Icon source={StarFilledMinor} color="warning" />
            <Icon source={StarFilledMinor} color="warning" />
            <Icon source={StarFilledMinor} color="warning" />
            <Icon source={StarFilledMinor} color="warning" />
            <Icon source={StarFilledMinor} color="warning" />)
            <Icon source={QuestionMarkMinor} color="yellow" />
          </Badge>
        </Stack>
      ) : null}
      <Card.Section>
        <Button primary onClick={SubmitClick}>
          Audience
        </Button>
      </Card.Section>
    </Card>
  );
}

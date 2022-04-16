import React, { useCallback, useState } from "react";
import { ArrowRightMinor, QuestionMarkMinor } from "@shopify/polaris-icons";
import { useSelector, useDispatch, } from "react-redux";
import { setExtraReporting, respondents,audianceLocation,IsPublicListStar,Audiencepoll } from "../actions/index";
import {
  Autocomplete,
  TextContainer,
  Tag,
  Badge,
  Button,
  Heading,
  Card,
  Stack,
  RadioButton,
  Layout,
  TextField,
  Tooltip,
  TextStyle,
  Icon,
  Select,
  Link,
} from "@shopify/polaris";
export default function AudiencePoll(props) {
  const list = useSelector((state) => state.setReducers);
  const [PollType, setValue] = useState("1");
  const [selected, setSelected] = useState(list.respondents);
  const [audience, setaudience] = useState(list. audienceLocat);
  const [is_checked,set_is_checked]= useState(true);
  const[select , setSelect]=useState(true)

  const handleSelect = useCallback((e) => {
    set_is_checked(!is_checked);
    dispatch(IsPublicListStar(e.target.checked));
  });
  const handlesecondSelect = useCallback((e) => {
       setSelect(!select);
    // dispatch(IsPublicListStar(e.target.checked));
  });
  const handleSelectChange = useCallback((value) => {
    setSelected(value);
    dispatch(respondents(value));
  });
  const handleAudienceChange = useCallback((value) => {
    
    setaudience(value)
    dispatch(audianceLocation(value));
  });

  const options = [
    { label: "50 People", value: "50" },
    { label: "100 People", value: "100" },
    { label: "150 People", value: "150" },
    { label: "200 People", value: "200" },
  ];
  const option = [
    { label: "UNITED STATES", value: "UNITED STATES" },
    { label: "CANADA", value: "CANADA" },
    { label: "UNITED KINGDOM", value: "UNITED KINGDOM" },
    { label: "ALABAMA", value: "ALABAMA" },
    { label: "ALASKA", value: "ALASKA" },
  ];
  const handleChange = useCallback(
    (_checked, newValue) => setValue(newValue),
    []
  );

  const SubmitClickBack = () => {
    props.Redirect({ page: "CreatePollFirst" });
   dispatch(Audiencepoll("1"))
  };

  const deselectedOptions = () => [
    {
      id: "1",
      value: "Age Range (Personal)",
      label: "Age Range (Personal)",
      price: 0.1,
    },
    {
      id: "2",
      value: "Alcohol: Liquor & Spirits Drinker (Behavior)",
      label: "Alcohol: Liquor & Spirits Drinker (Behavior)",
      price: 0.5,
    },
    {
      id: "3",
      value: "App Store Spending (Mobile)",
      label: "App Store Spending (Mobile)",
      price: 0.3,
    },
    { id: "4", value: "Beer (Behavior)", label: "Beer (Behavior)", price: 0.7 },
    {
      id: "5",
      value: "Books Read Per Month (Books)",
      label: "Books Read Per Month (Books)",
      price: 0.2,
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState(
    list.price.extraReporting.map(function (j) {
      return j.value;
    })
  );
  const [inputValue, setInputValue] = useState();
  const [opt, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);
      if (value === "") {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, "i");
      const resultOptions = deselectedOptions.filter((opt) =>
        opt.label.match(filterRegex)
      );
      let endIndex = resultOptions.length - 1;
      if (resultOptions.length === 0) {
        endIndex = 0;
      }
      setOptions(resultOptions);
    },
    [deselectedOptions]
  );

  //  list.price.extraReporting.map(function(j){return j.id;})===1

  const removeTag = useCallback(
    (tag) => () => {
      const option = [...selectedOptions];
      if (option.indexOf(tag) > 1) {
        option.splice(option.indexOf(tag), 1);
        setSelectedOptions(option);
      }
    },
    [selectedOptions]
  );

  const dispatch = useDispatch();

  const selectedopt = (selected) => {
    dispatch(setExtraReporting(opt.filter((m) => selected.includes(m.value))));
    setSelectedOptions(selected);
  };

  const tagsMarkup = selectedOptions.map((option) => {
    let tagLabel = "";
    tagLabel = option.replace("_", " ");
    tagLabel = titleCase(tagLabel);
    return (
      <Tag key={`option${option}`} onRemove={removeTag(option)}>
        {tagLabel}
      </Tag>
    );
  });
  const textField = (
    <Autocomplete.TextField onChange={updateText} value={inputValue} />
  );

  return (
    <Card sectioned>
      <Heading>Create a Poll</Heading>
      <Card.Section title="WHO Should Respond?">
        <Select
          label={
            <Tooltip
              content="Our targeted poll participants will choose an option and provide written feedback and basic demographic information.."
              preferredPosition="below"
            >
              <TextStyle>How many people?</TextStyle>
            </Tooltip>
          }
          options={options}
          onChange={handleSelectChange}
          value={selected}
        />
      </Card.Section>
      <Card.Section>
        <Tooltip
          content="Target audience allows you to only poll people who match the criteria selected (max 4)."
          preferredPosition="below"
        >
          <TextStyle>Target your audience ?</TextStyle>
        </Tooltip>
        <Stack distribution="fill" wrap={false}>
          <Card sectioned>
            <RadioButton
              label="General Audience "
              //helpText="Our targeted poll participants will provide written feedback and a rating on one idea, image, design, marketing text, etc "
              helpText="Our targeted poll participants will provide written feedback
                    and a rating on one idea, image, design, marketing text, etc"
              checked={PollType === "1"}
              id="1"
              name="PollType1"
              onChange={handleChange}
            />
          </Card>

          <Card sectioned>
            <RadioButton
              disabled
              label="Accounts are optional"
              //helpText="Compare 2 or more variations in a Ranked or Head-to-Head round robin format and receive votes & written feedback"
              helpText={
                <Tooltip
                  content="Have a single idea to test or an open-ended question to ask? The Solo poll enables you to solicit feedback on one concept, without creating multiple variations of it."
                  preferredPosition="below"
                >
                  <TextStyle>
                    Compare 2 or more variations in a Ranked or Head-to-Head
                    round robin format and receive votes & written feedback
                  </TextStyle>
                  {/* <img src="https://www.marketvalidate.com/Theme/Home/imgpsh_fullsize_anim.jpg" alt="" /> */}
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
      <Card.Section title="Audience location ">
        <Select
          label=""
          options={option}
          onChange={handleAudienceChange}
          value={audience}
        />
      </Card.Section>
      <Heading>CUSTOMIZE Your Results</Heading>
      <Stack spacing="loose">
        <label className="switch">
          <input type="checkbox" checked={is_checked} onChange={handleSelect} />
          <span className="slider round"> </span>
        </label>
        <Tooltip
          content="This does not affect how your poll is answered, only who can see the results. Private polls require a paid membership."
          preferredPosition="below"
        >
          <TextStyle> Publicly list results in our poll gallery ?</TextStyle>
        </Tooltip>
      </Stack>
      <Stack spacing="loose">
        <label className="switch">
          <input type="checkbox" checked={select} onChange={handlesecondSelect} />
          <span className="slider round"> </span>
        </label>
        <Tooltip
          content="Export the raw result data for your own custom analysis or reporting needs. CSV files can be loaded into a spreadsheet program like Microsoft Excel or Google Spreadsheets. Included with all paid memberships."
          preferredPosition="below"
        >
          <TextStyle>Enable downloading of results (.csv) ?</TextStyle>
        </Tooltip>
      </Stack>
      <br />
      <Card sectioned>
        <Tooltip
          content="These traits will be shown with your results, allowing you to segment the results by them. The basic demographic traits (Gender, Age Range) are already included."
          preferredPosition="above"
        >
          <TextStyle>
            {" "}
            Collect this information from all respondents ?
          </TextStyle>
        </Tooltip>
        {/* <Heading>Collect this information from all respondents?</Heading> */}
        <div>
          <TextContainer>
            <Stack>{tagsMarkup}</Stack>
          </TextContainer>
          <br />
          <Autocomplete
            allowMultiple
            options={opt}
            selected={selectedOptions}
            textField={textField}
            onSelect={selectedopt}
            listTitle="Suggested Tags"
            preferredPosition="below"
          />
        </div>
      </Card>
      <br />
      <Stack>
        <Button secondary onClick={SubmitClickBack}>
          Back
        </Button>
        <Button primary icon={ArrowRightMinor}>
          CheckOut
        </Button>
      </Stack>
    </Card>
  );
  function titleCase(string) {
    return string
      .toLowerCase()
      .split(" ")
      .map((word) => word.replace(word[0], word[0].toUpperCase()))
      .join("");
  }
}

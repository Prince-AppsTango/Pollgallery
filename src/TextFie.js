import React, { useCallback, useState, useRef } from "react";
import enTranslations from "@shopify/polaris/locales/en.json";
import Popup from "./component/Popup";
import { useSelector, useDispatch } from "react-redux";
import {HeadOrRankedpoll} from "./actions/index"
// import { CameraMajor } from "@shopify/polaris-icons";

import {
  AppProvider,
  Stack,
  Select,
  Card,
  Button,
  List,
} from "@shopify/polaris";
import Uploader from "./component/Uploader";

export default function App(props) {
  const list = useSelector((state) => state.setReducers);
  const [addButton, setAddButton] = useState(true);
  const [selected, setSelected] = useState();
  const [inputValues, setInputValues] = useState({});
  const [counter, setCounter] = useState(1);
  const [uploaders, setUploaders] = useState(
    <Uploader index={0} key={0} id={0} value={list.questions[0]} />
  );
  const [pollType, setpollType] = useState(props.pollType);
  const stateRef = useRef();

  stateRef.current = uploaders;

  React.useEffect(() => {
    if (pollType != props.pollType) {
      if (props.pollType == 1) {
        setUploaders(
          <Uploader index={0} key={0} id={0} value={list.questions[0]} />
        );
        setCounter(1);
      } else {
        //setCounter(prevArray => [...prevArray, <Uploader />])
        setUploaders([
          <Uploader index={0} key={0} id={0} value={list.questions[0]} />,
          <Uploader index={1} key={1} id={1} value={list.questions[1]} />,
        ]);
        setCounter(2);
      }
      setpollType(props.pollType);
    }
  });
  const dispatch = useDispatch();
  const handleSelectChange = useCallback((value) =>{ 
    setSelected(value)
     dispatch(HeadOrRankedpoll(value))
  })

  const options = [
    { label: "Head to Head Poll", value: "Head to Head Poll" },
    { label: "Ranked Poll", value: "Ranked Poll" },
  ];

  const closeClick = (props) => {
    setUploaders(
      stateRef.current.filter((elem, index) => elem.props.id !== props.id)
    );
    setAddButton(true);
  };

  const handleClick = (index) => {
    if (uploaders.length < 8) {
      setUploaders((prevArray) => [
        ...prevArray,
        <Uploader
          index={uploaders.length}
          key={counter.length + 1}
          remove={closeClick}
          id={counter}
          value={list.questions[uploaders.length]}
        />,
      ]);
      setCounter(counter + 1);
      setAddButton(true);
    }
    //console.log(uploaders.length);
    if (uploaders.length >= 7) {
      //console.log(uploaders.length);
      setAddButton(false);
    }
  };

  return (
    <>
      <AppProvider i18n={enTranslations}>
        <div className="App">
          <Stack distribution="fill">
            {/* {Array.from(Array(counter)).map((c, index) => {
              return <Uploader index={index} key={index} remove={closeClick} />;
            })} */}

            {uploaders}
          </Stack>
          <br />
          {props.pollType == 2 ? (
            addButton ? (
              <Button onClick={handleClick} fullWidth>
                + ADD More Options
              </Button>
            ) : null
          ) : null}
          {Object.keys(inputValues).map((c) => {
            return <p>{inputValues[c]}</p>;
          })}
          <br />
          {uploaders.length > 2 ? (
            <Card
              sectioned
              title=" How options are shown"
              actions={[{ content: <Popup /> }]}
            >
              {/* <Autocomplete /> */}
              <Select
                // label="Date range"
                options={options}
                onChange={handleSelectChange}
                value={selected}
              />
            </Card>
          ) : null}
        </div>
      </AppProvider>
    </>
  );
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  ButtonGroup,
  Card,
  Layout,
  Heading,
  Banner,
  Link,
  Stack,
  DisplayText,
  Badge,
  Icon,
  TextField,
  Checkbox,
} from "@shopify/polaris";
import {
  CustomersMinor,
  CustomerPlusMajor,
  ProfileMinor,
  LocationMajor,
  ClockMinor,
  PopularMajor,
} from "@shopify/polaris-icons";

export default function PollSubmitResult() {
  const list = useSelector((state) => state.setReducers);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <>
      <Layout>
        <Layout.Section>
          <Card>
            <Card.Section>
              <ButtonGroup segmented style={{}}>
                <Button>New Poll</Button>
                <Button>All</Button>
                <Button>Recent(0)</Button>
                <Button>Completed(0)</Button>
                <Button>Draft(1)</Button>
              </ButtonGroup>
            </Card.Section>
            <Card.Section>
              <Heading>Displaying Polls</Heading>
              <br />
              <Banner  status="critical">
                Learn more about{" "}
                <Link removeUnderline={true}>
                  {" "}
                  If you have started a new poll, please refresh the page to
                  receive updated poll status
                </Link>
              </Banner>
            </Card.Section>
            <Card.Section>
              <Stack alignment="center">
                <Stack.Item fill>
                  <DisplayText size="medium">{list.pollQuestion}</DisplayText>
                </Stack.Item>
                <Button primary>Edit Poll</Button>
              </Stack>
              <br />
              <Stack>
                <Badge>
                  <Icon source={CustomersMinor} color="base" />
                  {list.respondents} Responds
                </Badge>
                <Badge>
                  <Icon source={ProfileMinor} color="base" />
                  General
                </Badge>
                <Badge>
                  <Icon source={PopularMajor} color="base" />
                 {list.isHeadOrankedpoll}
                </Badge>
                <Badge>
                  <Icon source={LocationMajor} color="base" />
                  {list.audienceLocat}
                </Badge>
                <Badge>
                  <Icon source={ClockMinor} color="base" />
                  Draft
                </Badge>
              </Stack>
              <br />
              <Heading>Submitted Date: {date} Publicly listed</Heading>
              <br />
              {list.questions.map((question) => {
                return (
                      <div className="PollSubmit">
                        <Heading>{`Option ${question.option+1}`} </Heading>
                        {question.type == "text" ? (
                          <TextField disabled value={question.value} />
                        ) : null}
                        {question.type == "image" ? (
                          <img
                            style={{
                              width: "100%",
                              maxWidth: "260px",
                              maxHeight: "200px",
                              objectFit: "contain",
                              objectPosition: "center",
                            }}
                            src={question.value}
                          />
                        ) : null}
                           
                        {question.type == "video" ? (
                          <video
                            controls
                            style={{
                              width: "100%",
                              maxWidth: "260px",
                              maxHeight: "200px",
                              objectFit: "contain",
                              objectPosition: "center",
                            }}
                          >
                            <source src={question.value} />
                          </video>
                        ) : null}
                      </div>
                );
              })}
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </>
  );
}

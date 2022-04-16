import React, { useState, useCallback } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Chart } from "react-google-charts";
import PollGalleryShare from "./PollGalleryShare";
// import { useScreenshot } from "use-react-screenshot";
import ScreenShot from "./ScreenShot";
import PollGalleryMaleFemaleCard from "./PollGalleryMaleFemaleCard";
import {
  AppProvider,
  Card,
  DisplayText,
  Page,
  Button,
  Stack,
  ProgressBar,
  ButtonGroup,
  Heading,
  List,
  Badge,
  Toast,
} from "@shopify/polaris";
import { ShareMinor } from "@shopify/polaris-icons";
export default function PollGallery(prpos) {
  const [modal, setmodal] = useState(<PollGalleryShare />);
  const [btn, setbtn] = useState(<ScreenShot />);
  const[malecard, setMalecard]=useState();
  
  const handleAllfilter=()=>{
    setMalecard(<PollGalleryMaleFemaleCard />)
  }

  return (
    <>
      <AppProvider
        i18n={{}}
        theme={{
          colorScheme: "light",
        }}
      >
        <Card sectioned>
          <Page
            fullWidth
            breadcrumbs={[{ content: "Settings", url: "/settings" }]}
            primaryAction={
              <ButtonGroup>
                <Button primary>
                  {" "}
                  People : <b style={{ fontSize: "18px" }}>200</b>
                </Button>
                <Button primary>
                  {" "}
                  Choice Option : <b style={{ fontSize: "18px" }}>2</b>
                </Button>
                <Button primary>
                  Audience : <b style={{ fontSize: "18px" }}>General</b>
                </Button>
                <Button primary>
                  Status : <b style={{ fontSize: "18px" }}>Completed</b>
                </Button>
                <Button primary>
                  Location : <b style={{ fontSize: "18px" }}>India</b>
                </Button>
              </ButtonGroup>
            }
          ></Page>

          <Card.Section title="Question:">
            <DisplayText size="medium">
              Which logo is best for a crowd funding platform?
            </DisplayText>
          </Card.Section>

          <Stack distribution="trailing">
            {modal}
            {btn}
          </Stack>
        </Card>
      </AppProvider>
      <Page>
        <Stack distribution="fill" wrap={false}>
          <Card sectioned>
            <img
              src="https://www.marketvalidate.com/NewPollImages/204/7312210603125926.jpg"
              width="100%"
              alt=""
            />
            <div className="option">
              <Heading>Optian A</Heading>
            </div>
            <br />
            <ProgressBar progress={30} color="success" size="small" />
          </Card>
          {/* <center>
          <Heading>Winner</Heading>
          </center> */}
          <div style={{border:"3px solid #36B37E"}}>
          
          <Card sectioned>
            <img
              src="https://www.marketvalidate.com/NewPollImages/204/6486210603010005.jpg"
              width="100%"
              alt=""
            />
            <div className="option">
              <Heading>Optian B</Heading>
            </div>
            <br />
            <ProgressBar progress={72} color="success" size="small" />
          </Card>
          </div>
        </Stack>
      </Page>

      <Page
        title="Responses:"
        fullWidth
        primaryAction={
          <ButtonGroup spacing="extraTight" segmented={false} fullWidth={false}>
        
            <Button onClick={handleAllfilter}>All Filters</Button>
          </ButtonGroup>
        }
      >
        <p>Showing 50/50 responses</p>
        <br />
     {malecard}
      </Page>
      <Stack distribution="fill" wrap={false}>
        <Card title="  Responses to Option Combination A and B">
          <hr />
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
        </Card>
        <Card title="  Responses to Option Combination A and B">
          <hr />
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
        </Card>
        <Card title="  Responses to Option Combination A and B">
          <hr />
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
        </Card>
        <Card title="  Responses to Option Combination A and B">
          <hr />
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
          <Card.Section>
            <List type="bullet">
              <List.Item>
                {" "}
                I think the design and colors of the log help differentiate it
                from similar logos. It is very unique.
              </List.Item>
            </List>
          </Card.Section>
        </Card>
      </Stack>
      <Page fullWidth title="Demographics">
        <p>Manage pending orders and track invoices.</p>
      </Page>
      <Card>
        <Card.Section>
          <Heading>Gender (Personal)</Heading>
        </Card.Section>
        <Card.Section>
          <Chart
            width={"100%"}
            height={"300px"}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["", "Option A", "Option B"],
              ["Male", 8175000, 8008000],
              ["Female", 3792000, 3694000],
            ]}
            options={{
              title: "",
              chartArea: { width: "50%" },
              isStacked: true,
              hAxis: {
                title: "",
                minValue: 0,
              },
              vAxis: {
                title: "",
              },
            }}
            // For tests
            rootProps={{ "data-testid": "3" }}
          />
        </Card.Section>
      </Card>
      <Card>
        <Card.Section>
          <Heading>Age Range (Personal)</Heading>
        </Card.Section>
        <Card.Section>
          <Chart
            width={"100%"}
            height={"300px"}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["", "Option A", "Option B"],
              ["18-24", 8175000, 8008000],
              ["25-34", 7175000, 9008000],
              ["35-44", 9175000, 7008000],
              ["45-54", 10175000, 6008000],
              ["55-64", 6175000, 10008000],
              ["65-74", 2175000, 10008000],
            ]}
            options={{
              title: "",
              chartArea: { width: "50%" },
              isStacked: true,
              hAxis: {
                title: "",
                minValue: 0,
              },
              vAxis: {
                title: "",
              },
            }}
            // For tests
            rootProps={{ "data-testid": "3" }}
          />
        </Card.Section>
      </Card>
    </>
  );
}

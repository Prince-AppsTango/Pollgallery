import React, { useCallback, useState } from "react";
import PreviewModal from "../component/PreviewModal";
import AudiencePoll from "../component/AudiencePoll";
import CreatePollFirst from "../component/CreatePollFirst";
import CreatePollTable from "../component/CreatePollTable";
import Circle from "../component/Circle";
import { Card, Stack, Layout } from "@shopify/polaris";
import { useSelector, useDispatch } from "react-redux";
export default function CreatePoll() {
  const Redirect = (val) => {
    if (val.page === "CreatePollFirst") {
      setPage(<CreatePollFirst Redirect={Redirect} />);
    }
    if (val.page === "AudiencePoll") {
      setPage(<AudiencePoll Redirect={Redirect} />);
    }
    if (val.page === "dff") {
      setPage(<CreatePollFirst Redirect={Redirect} />);
    }
  };

  const [page, setPage] = useState(<CreatePollFirst Redirect={Redirect} />);
  const list = useSelector((state) => state.setReducers);

  //  const [dataloop, setDataLoop] = useState(<AudiencePoll Redirect={Redirect} />);
  return (
    <>
      <div title="Create Poll">
        <Layout>
          <Layout.Section twoThird>{page}</Layout.Section>

          <Layout.Section oneThird>
            <Stack distribution="fill">
              <center>
                <Circle initial="1" isActive={true} />
              </center>
              <center>
               {list.createpollfirst? <Circle initial="2" isActive={true} />:<Circle initial="2" isActive={false} />}
              </center>
              <center>
                <Circle initial="3" isActive={false} />
              </center>
            </Stack>
            <br />
            <Card sectioned actions={[{ content: <PreviewModal /> }]}>
              <CreatePollTable />
            </Card>
          </Layout.Section>
        </Layout>
      </div>
    </>
  );
}

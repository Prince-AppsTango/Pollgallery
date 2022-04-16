import React, { useCallback, useState } from "react";
import PollSubmitResult from "./component/PollSubmitResult";
import PollGallery  from "./component/PollGallery";
import Invoices from "./component/Invoices";
import {
  AppProvider,
  ActionList,
  Popover,
  Frame,
  Button,
} from "@shopify/polaris";

import CreatePoll from "./page/CreatePoll";

export default function Landing() {
  const [isLoading, setIsLoading] = useState(false);
//  const[issubmit,setIssubmit]=useState(false)
  const [page, setPage] = useState();

  const loadCreatePoll = useCallback(() => setPage(<CreatePoll />), []);

  const loadSubmitResult = useCallback(
    () => setPage(<PollSubmitResult />),
    []
  );
  const loadPollSubmit = useCallback(
    () => setPage(<PollGallery />),
    []
  );
  const loadInvoices = useCallback(()=> setPage(<Invoices/>),[]);

  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const handleExportedAction = useCallback(
    () => console.log("Exported action"),
    []
  );

  const activator = (
    <Button onClick={toggleActive} disclosure>
      My Account
    </Button>
  );

  const topBarMarkup = (
    <div className="para1">
      <img
        src="https://www.marketvalidate.com/images/MarketValidate_green_logo.png"
        style={{ width: "150px" }}
        alt=""
      />
      <ul>
        <li>
          <Popover active={active} activator={activator} onClose={toggleActive}>
            <ActionList
              items={[
                {
                  content: "Polls",
                  onAction: loadCreatePoll,
                },
                {
                  content: "Gallery",
                  onAction: loadPollSubmit,
                },
                {
                  content: "Plan",
                  onAction: loadSubmitResult,
                },
                {
                  content: "Invoice",
                  onAction: loadInvoices,
                },
              ]}
            />
          </Popover>
        </li>
        <li>
          <Button primary>+New Poll</Button>
        </li>
      </ul>
    </div>
  );

  // const loadingMarkup = isLoading ? <Loading /> : null;

  const actualPageMarkup = page;

  const Submitpage = page;
 const pollSubmitResult =page;
  const pageMarkup = isLoading ? actualPageMarkup : actualPageMarkup;

  return (
    <>
    <div style={{ height: "56px" }}>
      <AppProvider>
        <Frame topBar={topBarMarkup}>
          <div style={{ padding: "20px 10px" }}>
            {pageMarkup}
          </div>
        </Frame>
      </AppProvider>
    </div>
    </>
  );
}

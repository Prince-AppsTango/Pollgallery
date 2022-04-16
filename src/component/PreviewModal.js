import React, { useCallback, useState } from "react";
import { Button, Modal, ButtonGroup,Card,Stack } from "@shopify/polaris";
import Respondents from "./Respondents";
import PollResults from "./PollResults";
import { ViewMajor } from "@shopify/polaris-icons";
export default function ModalWithPrimaryActionExample() {
  const [isFirstButtonActive, setIsFirstButtonActive] = useState(true);
  const [active, setActive] = useState(false);
  const [page, setPage] = useState(<Respondents />);
  const handleFirstButtonClick = useCallback(() => {
    if (isFirstButtonActive)
        return;
      setIsFirstButtonActive(true);
     setPage(<Respondents />);
  },
  [isFirstButtonActive]
  );

  const handleSecondButtonClick = useCallback(() => {
    if (!isFirstButtonActive) return;
    setIsFirstButtonActive(false);
    setPage(<PollResults/>);
  }, [isFirstButtonActive]);
  const toggleModal = useCallback(() => setActive((active) => !active), []);

  const activator = (
    <Button onClick={toggleModal} primary icon={ViewMajor}>
      {" "}
      Preview your Poll
    </Button>
  );

  return (
    <div style={{ height: "0px" }}>
      <Modal
        activator={activator}
        open={active}
        onClose={toggleModal}
        primaryAction={{
          content: "Close",
          onAction: toggleModal,
        }}
      >
        <Modal.Section>
          <ButtonGroup>
            <Button
              pressed={isFirstButtonActive}
              onClick={handleFirstButtonClick}
            >
              Preview the Form for Respondents
            </Button>
            <Button
              pressed={!isFirstButtonActive}
              onClick={handleSecondButtonClick}
            >
              Preview of Your Poll Results
            </Button>
          </ButtonGroup>
          <hr />
          {page}
        </Modal.Section>
      </Modal>
    </div>
  );
}

import React, {useCallback, useRef, useState} from 'react';
import {Button, Stack, DataTable, Modal, Card} from '@shopify/polaris';
import {
    ArrowRightMinor
  } from '@shopify/polaris-icons';
export default function ModalWithPrimaryActionExample(props) {

  const [active, setActive] = useState(false);
  
   const toggleModal = useCallback(() => setActive((active) => !active), []);

   const activator = <Button plain onClick={toggleModal}>See The Difference?</Button>;


  return (
   
      <Modal
    activator={activator}
        open={active}
        onClose={toggleModal}
        title="Ranked vs Head-to-Head Polls"
        primaryAction={{
          content: 'Close',
          onAction: toggleModal,
        }}
      >
        < Card>
        <Card.Section>
         <table className="Rankedpoll">         
          <tr>
            <th></th>
            <th>	RANKED POLL</th>
            <th>HEAD-TO-HEAD POLL</th>
          </tr>
          <tr>
            <td>
            You Receive
            </td>
            <td>50 votes & written explanations from 50 people</td>
            <td>150 votes & written explanations from 50 people</td>
          </tr>
          <tr>
            <td>Testing Method</td>
            <td>All options are shown together and respondents rank their top 3 choices</td>
            <td>Each option is tested against each other across 3 head-to-head matchups</td>
          </tr>
          <tr>
            <td>Results</td>
            <td>	Partial ranking</td>
            <td>Fully scored ranking</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>$1.30 / response</td>
            <td>	$2.50 / response</td>
          </tr>
         </table>

        </Card.Section>
      <Button plain icon={ArrowRightMinor}>Read more in our help center</Button>
    </Card>
      </Modal>
  );
}

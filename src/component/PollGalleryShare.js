import React, {useCallback, useRef, useState, Component } from 'react';
import {Button, Modal, Stack, TextContainer, TextField} from '@shopify/polaris';

export default function ModalWithPrimaryActionExample() {
 const[text,setText]=useState("https://www.marketvalidate.com/Poll?Id=MjA0");
  const [active, setActive] = useState(false);
  const node = useRef(null);
  
  const handleClick = useCallback(() => {
    node.current && node.current.input.focus();
     alert("Copy");
  }, []);
  const handleFocus = useCallback(() => {
    if (node.current == null) {
      return;
    }
    node.current.input.select();
 
  }, []);

  const toggleModal = useCallback(() => setActive((active) => !active), []);

  const activator = <Button onClick={toggleModal}>Share</Button>;

  return (
    <div style={{height: '20px'}}>
      <Modal
        activator={activator}
        open={active}
        onClose={toggleModal}
        title="Share Your Results"
        primaryAction={{
          content: 'Close',
          onAction: toggleModal,
        }}
      >
        <Modal.Section>
          <Stack vertical>
            <Stack.Item fill>
              <TextField
              disabled
                ref={node}
                value={text}
                label=" Anyone with the following URL can see these poll results."
                onFocus={handleFocus}
                onChange={() => {}}
                autoComplete="off"
                connectedRight={
                  <Button primary onClick={handleClick}>
                    Copy link
                  </Button>
                }
              />
            </Stack.Item>
          </Stack>
        </Modal.Section>
      </Modal>
    </div>
  );
}

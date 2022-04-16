import React, { useState, useCallback } from "react";
import PollGallery from "./PollGallery";
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
  Checkbox,
} from "@shopify/polaris";
export default function PollGalleryMaleFemaleCard(props) {
  const [checked, setChecked] = useState(false);
  const handleChange = useCallback((newChecked) => setChecked(newChecked), []);
  
 const handlerremove=()=>{
  window.location.reload();
 }
  return (
    <>
      <Card
        sectioned
        primaryFooterAction={{
          content: "Reset Filter",
          onAction:handlerremove
        }}
      >
        <Stack distribution="fill">
          <Card.Section title="Gender (Personal)">
            <Stack>
              <Badge>
                <Checkbox
                  label="Male(34)"
                  checked={checked}
                  onChange={handleChange}
                />
              </Badge>
              <Badge>
                <Checkbox
                  label="Female(16)"
                  checked={checked}
                  onChange={handleChange}
                />
              </Badge>
            </Stack>
          </Card.Section>

          <Card.Section title="Age Range (Personal)">
            <Stack>
              <Badge>
                <Checkbox
                  label="18-24(2)"
                  checked={checked}
                  onChange={handleChange}
                />
              </Badge>
              <Badge>
                <Checkbox
                  label="25-34(25)"
                  checked={checked}
                  onChange={handleChange}
                />
              </Badge>
              <Badge>
                <Checkbox
                  label="35-44(17)"
                  checked={checked}
                  onChange={handleChange}
                />
              </Badge>
              <Badge>
                <Checkbox
                  label="45-54(3)"
                  checked={checked}
                  onChange={handleChange}
                />
              </Badge>
              <Badge>
                <Checkbox
                  label="55-64(2)"
                  checked={checked}
                  onChange={handleChange}
                />
              </Badge>
              <Badge>
                <Checkbox
                  label=" 65-74(1)"
                  checked={checked}
                  onChange={handleChange}
                />
              </Badge>
            </Stack>
          </Card.Section>
        </Stack>
      </Card>
    </>
  );
}

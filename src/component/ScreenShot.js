import React, { createRef, useState } from "react";
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
export default () => {
   const handleDownload =()=>
   {
       window.print();
   }
  return (
    <Button  primary onClick={handleDownload}>Download</Button>
  );
};
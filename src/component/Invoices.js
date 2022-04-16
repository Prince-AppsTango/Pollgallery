import React, { useState, useCallback } from "react";
import {
  
  Button,
  Card,
  DisplayText,
  Stack,
  Heading,
  TextField,
} from "@shopify/polaris";

export default function Invoices() {
    const[text,setText]=useState("COMPANY ABC LIMITED")
    const[page,setPage]=useState("COMPANY ABC LIMITED")
    const handleChange =useCallback((e)=>setText(e),[]);
    const handletextChange =useCallback((e)=>setPage(e),[]);
  return (
    <>
      <DisplayText size="extraLarge">My Account: Invoices</DisplayText>
      <br />
      <br />
      <Card>
        <Stack wrap="false" distribution="fill">
          <Card.Section sectioned>
            <table  style={{width:"100%"}}>
              <tr>
                <th style={{textAlign:"center"}} >DATE</th>
                <th  style={{textAlign:"center"}}> DESCRIPTION</th>
                <th style={{textAlign:"center"}} > AMOUNT</th>
                <th style={{textAlign:"center"}} > INVOICE</th>
              </tr>
            </table>
          </Card.Section>
          <Card.Section>
            <Heading>Billing Email Addresses</Heading>
            <br />
            <p>Additional email addresses to be CC'ed on payment invoices.</p>
            <TextField maxLength={120} value={text} onChange={handleChange}></TextField>
            <br />
            <Heading>Additional Billing Information</Heading>
            <br />
            <p>This information will be printed on the PDF invoices</p>
            <TextField multiline={4} maxLength={120} value={page} onChange={handletextChange}></TextField>
            <br />
            <Button primary> Update</Button>
          </Card.Section>
        </Stack>
        </Card>
    </>
  );
}

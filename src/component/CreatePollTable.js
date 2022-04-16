import React, { useState } from "react";
import { DataTable, Button, Heading, Card } from "@shopify/polaris";
import PromoCode from "./PromoCode";
import { useSelector, useDispatch } from "react-redux";
export default function DataTableExample(props) {
  const list = useSelector((state) => state.setReducers);
  //var a =parseFloat(list.price.base*list.respondents)

  var a = list.price.extraReporting.map(a=>a.price).reduce((prev,next)=>prev+next)+list.price.base;
  const [Promo, setPromocode] = React.useState(true);
  const handlerPromo = () => {
    setPromocode(false);
  };

  return (
    <>
      <div>
        <hr />
        <Heading>Poll</Heading>
       
        <Card>
          <Card.Section>
            <table style={{ width: "100%" }}>
              <tr>
                <td>Base /Response</td>
                <td style={{ width: "1%" }}>{list.price.base.toFixed(2)}</td>
              </tr>
            </table>
          </Card.Section>
          <Card.Section>
            <table style={{ width: "100%" }}>
              <tr>
                <td>Audience Targeting</td>
                <td style={{ width: "1%" }}>{list.price.audienceTarget.toFixed(2)}</td>
              </tr>
            </table>
          </Card.Section>
          <Card.Section>
            <table style={{ width: "100%" }}>
              <tr>
                <td><b>Extra Reporting</b></td>
                <td></td>
              </tr>
              {list.price.extraReporting.map((s) => {
                return <tr style={{borderBottom:"1px solid black"}}><td>{s.label}</td><td style={{width:"1%"}}>{s.price.toFixed(2)}</td></tr>;
              })}
            </table>
          </Card.Section>
          <Card.Section>
            <table style={{ width: "100%" }}>
              <tr>
                <td>Total /Response</td>
                <td style={{ width: "1%" }}>{a.toFixed(2)}</td>
              </tr>
            </table>
          </Card.Section>
          <Card.Section>
            <table style={{ width: "100%" }}>
              <tr>
                <td>x # Respondents</td>
                <td style={{ width: "1%" }}>{list.respondents}</td>
              </tr>
            </table>
          </Card.Section>
          <Card.Section>
            <table style={{ width: "100%" }}>
              <tr>
                <td>Poll Subtotal</td>
                <td style={{ width: "1%" }}>{(list.respondents*a).toFixed(2)}</td>
              </tr>
            </table>
          </Card.Section>
          <Card.Section>
            <table style={{ width: "100%" }}>
              <tr>
                <td>Discount</td>
                <td style={{ width: "1%" }}>0.99</td>
              </tr>
            </table>
          </Card.Section>
          <Card.Section>
            <table style={{ width: "100%" }}>
              <tr>
                <td><b>Total </b></td>
                <td style={{ width: "1%" }}></td>
              </tr>
            </table>
          </Card.Section>
          <Card.Section>
            <table style={{ width: "100%" }}>
              <tr>
                <td>Total Due</td>
                <td style={{ width: "1%" }}>0.99</td>
              </tr>
            </table>
          </Card.Section>
        </Card>
        <hr />
        {Promo == true ? (
          <Button plain onClick={handlerPromo}>
            +Add a Promo Code
          </Button>
        ) : null}
        {Promo == false ? <PromoCode /> : null}
      </div>
    </>
  );
}

import React from "react";
import {
  Card,
  CardPrimary,
  CardTitle,
  CardSubtitle,
  CardSupportingText,
  CardActions,
  CardAction
} from ".";
import { Button } from "@mdc/button";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <Card>
        <CardPrimary>
          <CardTitle large>Title</CardTitle>
          <CardSubtitle>Subtitle</CardSubtitle>
        </CardPrimary>
        <CardSupportingText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </CardSupportingText>
        <CardActions>
          <CardAction>
            <Button compact>Action 1</Button>
          </CardAction>
          <CardAction>
            <Button compact>Action 2</Button>
          </CardAction>
        </CardActions>
      </Card>
    )
  ).toMatchSnapshot();
});

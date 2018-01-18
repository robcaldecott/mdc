import React from "react";
import { Snackbar, SnackbarAction } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <Snackbar
        active
        multiline
        actionOnBottom
        alignStart
        action={<SnackbarAction>Action</SnackbarAction>}
      >
        Message
      </Snackbar>
    )
  ).toMatchSnapshot();
});

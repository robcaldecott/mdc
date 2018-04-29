import React from "react";
import { Card, CardMedia, CardMediaContent, CardPrimaryAction } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import image from "./16-9.jpg";

storiesOf("card", module)
  .addDecorator(withKnobs)
  .add("props", () => (
    <Card outlined={boolean("outlined", false)}>
      <CardMedia style={{ backgroundImage: `url(${image})` }}>
        <CardMediaContent>
          <div
            className="mdc-typography--headline5"
            style={{
              color: "#fff",
              position: "absolute",
              bottom: "1rem",
              left: "1rem"
            }}
          >
            Title
          </div>
        </CardMediaContent>
      </CardMedia>
      <CardPrimaryAction>
        <div style={{ padding: "1rem" }}>
          <h2 className="mdc-typography--headline6" style={{ margin: 0 }}>
            Heading 2
          </h2>
        </div>
        <div
          className="mdc-typography--body2"
          style={{ padding: "0 1rem 1rem 1rem" }}
        >
          The quick brown fox jumps over the lazy dog.
        </div>
      </CardPrimaryAction>
    </Card>
  ));

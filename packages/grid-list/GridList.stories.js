import React from "react";
import {
  GridList,
  GridListTiles,
  GridTile,
  GridTilePrimary,
  GridTilePrimaryContent,
  GridTileSecondary,
  GridTileTitle,
  GridTileSupportText,
  GridTileIcon
} from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import tile from "./1-1.jpg";

storiesOf("grid-list", module)
  .addDecorator(withKnobs)
  .add("tiles", () => {
    const twoLineCaption = boolean("twoLineCaption", false);
    const icon = select("icon", ["none", "start", "end"], "none");
    const aspectRatio = select(
      "aspectRatio",
      ["default", "1x1", "16x9", "2x3", "3x2", "4x3", "3x4"],
      "default"
    );
    const divImage = boolean("div instead of img", false);
    return (
      <GridList
        tileGutter1={boolean("tileGutter1", false)}
        headerCaption={boolean("headerCaption", false)}
        twoLineCaption={twoLineCaption}
        icon={icon === "none" ? undefined : icon}
        aspectRatio={aspectRatio === "default" ? undefined : aspectRatio}
      >
        <GridListTiles>
          {[...Array(6).keys()].map(index => (
            <GridTile key={index}>
              <GridTilePrimary>
                <GridTilePrimaryContent>
                  {divImage ? (
                    <div
                      style={{
                        backgroundImage: `url(${tile})`
                      }}
                    />
                  ) : (
                    <img src={tile} alt="tile" />
                  )}
                </GridTilePrimaryContent>
              </GridTilePrimary>
              {boolean("image only", true) && (
                <GridTileSecondary>
                  <GridTileIcon>star_border</GridTileIcon>
                  <GridTileTitle>
                    Tile {index + 1} with a very long title
                  </GridTileTitle>
                  {twoLineCaption && (
                    <GridTileSupportText>
                      Support text {index + 1}
                    </GridTileSupportText>
                  )}
                </GridTileSecondary>
              )}
            </GridTile>
          ))}
        </GridListTiles>
      </GridList>
    );
  });

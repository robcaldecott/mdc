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
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <GridList
        tileGutter1
        headerCaption
        twoLineCaption
        icon="start"
        aspectRatio="16x9"
      >
        <GridListTiles>
          {[...Array(6).keys()].map(index => (
            <GridTile key={index}>
              <GridTilePrimary>
                <GridTilePrimaryContent>
                  <img src="image.png" alt="tile" />
                </GridTilePrimaryContent>
              </GridTilePrimary>
              <GridTileSecondary>
                <GridTileIcon>star_border</GridTileIcon>
                <GridTileTitle>
                  Tile {index + 1} with a very long title
                </GridTileTitle>
                <GridTileSupportText>
                  Support text {index + 1}
                </GridTileSupportText>
              </GridTileSecondary>
            </GridTile>
          ))}
        </GridListTiles>
      </GridList>
    )
  ).toMatchSnapshot();
});

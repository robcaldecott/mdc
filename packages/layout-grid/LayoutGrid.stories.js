import React from "react";
import { LayoutGrid, LayoutGridCell } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";

const styles = {
  grid: {
    backgroundColor: "#dddddd"
  },
  cell: {
    backgroundColor: "#666666",
    color: "#fff",
    height: 200,
    fontSize: "1.5em",
    padding: 8
  },
  nested: {
    backgroundColor: "#aaaaaa",
    height: 100,
    padding: 8
  }
};

storiesOf("layout-grid", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <LayoutGrid style={styles.grid}>
      <LayoutGridCell style={styles.cell}>4</LayoutGridCell>
      <LayoutGridCell style={styles.cell}>4</LayoutGridCell>
      <LayoutGridCell style={styles.cell}>4</LayoutGridCell>
    </LayoutGrid>
  ))
  .add("1 column wide", () => (
    <LayoutGrid style={styles.grid}>
      {[...Array(12).keys()].map(index => (
        <LayoutGridCell key={index} style={styles.cell} span={1}>
          1
        </LayoutGridCell>
      ))}
    </LayoutGrid>
  ))
  .add("different sizes", () => (
    <LayoutGrid style={styles.grid}>
      <LayoutGridCell style={styles.cell} span={6}>
        6
      </LayoutGridCell>
      <LayoutGridCell style={styles.cell} span={4}>
        4
      </LayoutGridCell>
      <LayoutGridCell style={styles.cell} span={2}>
        2
      </LayoutGridCell>
    </LayoutGrid>
  ))
  .add("different screen sizes", () => (
    <LayoutGrid style={styles.grid}>
      <LayoutGridCell style={styles.cell} span={6} tablet={8}>
        6 (8 tablet)
      </LayoutGridCell>
      <LayoutGridCell style={styles.cell} span={4} tablet={6}>
        4 (6 tablet)
      </LayoutGridCell>
      <LayoutGridCell style={styles.cell} span={2} phone={4}>
        2 (4 phone)
      </LayoutGridCell>
    </LayoutGrid>
  ))
  .add("different order", () => (
    <LayoutGrid style={styles.grid}>
      <LayoutGridCell style={styles.cell} span={6} order={3}>
        6 (display 1, order 3)
      </LayoutGridCell>
      <LayoutGridCell style={styles.cell} span={4} order={1}>
        4 (display 2, order 1)
      </LayoutGridCell>
      <LayoutGridCell style={styles.cell} span={2} order={2}>
        2 (display 3, order 2)
      </LayoutGridCell>
    </LayoutGrid>
  ))
  .add("nested", () => (
    <LayoutGrid style={styles.grid}>
      <LayoutGridCell style={styles.cell} span={6}>
        <LayoutGrid nested>
          <LayoutGridCell span={2} style={styles.nested}>
            2
          </LayoutGridCell>
          <LayoutGridCell span={2} style={styles.nested}>
            2
          </LayoutGridCell>
        </LayoutGrid>
      </LayoutGridCell>
      <LayoutGridCell style={styles.cell} span={6}>
        6
      </LayoutGridCell>
    </LayoutGrid>
  ))
  .add("align", () => (
    <LayoutGrid style={styles.grid}>
      <LayoutGridCell span={3} style={styles.cell}>
        3
      </LayoutGridCell>
      <LayoutGridCell
        span={3}
        style={{ ...styles.cell, height: 50 }}
        align="top"
      >
        3
      </LayoutGridCell>
      <LayoutGridCell
        span={3}
        style={{ ...styles.cell, height: 50 }}
        align="middle"
      >
        3
      </LayoutGridCell>
      <LayoutGridCell
        span={3}
        style={{ ...styles.cell, height: 50 }}
        align="bottom"
      >
        3
      </LayoutGridCell>
    </LayoutGrid>
  ));

import React from "react";
import { render, fireEvent, queryByTestId } from "@testing-library/react";
import Carousel from "./Carousel";


// Created Babel.config.json to get around parsing error. 
// if there are props simply pass them in at instance.

it("Should render a Carousel upon page load", function () {
  render(<Carousel />);
})

it("Matches snapshot upon inital load", function () {
  let { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
})

it("works when you click on the RIGHT arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel

  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});


it("works when you click on the LEFT arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move FORWARD in the carousel ONE time

  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  // move BACK in the carousel ONE time
  const leftArrow = queryByTestId("left-arrow")
  fireEvent.click(leftArrow);

  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});

// removes left arrow on first img and right arrow on last img.

it("Should remove the LEFT arrow on 1st carousel img.", function(){
  let {queryByTestId, queryByAltText} = render(<Carousel />);

  let leftArrow = queryByTestId("left-arrow");
  let rightArrow = queryByTestId("right-arrow");
  expect(leftArrow).not.toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument();

  let firstImg = queryByAltText("Photo by Richard Pasquarella on Unsplash");
  expect(firstImg).toBeInTheDocument();
  let secondImg = queryByAltText("Photo by Pratik Patel on Unsplash");
  expect(secondImg).not.toBeInTheDocument();
});

it("Should remove RIGHT arrow on last carousel img.", function(){
  let {queryByTestId, queryByAltText} = render(<Carousel />);

  let leftArrow = queryByTestId("left-arrow");
  let rightArrow = queryByTestId("right-arrow");
  expect(leftArrow).not.toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument();

  fireEvent.click(rightArrow);
  let secondImg = queryByAltText("Photo by Pratik Patel on Unsplash");
  expect(secondImg).toBeInTheDocument();
  fireEvent.click(rightArrow);

  expect(rightArrow).not.toBeInTheDocument();
  // expect(leftArrow).toBeInTheDocument();
});

it("should render both arrows on middle img", function() {
  let {queryByTestId, queryByAltText} = render(<Carousel />);
  let leftArrow = queryByTestId("left-arrow");
  let rightArrow = queryByTestId("right-arrow");
  expect(leftArrow).not.toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument();
  
  fireEvent.click(rightArrow);
  let secondImg = queryByAltText("Photo by Pratik Patel on Unsplash")
  expect(secondImg).toBeInTheDocument();

  // expect(leftArrow).toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument();
});

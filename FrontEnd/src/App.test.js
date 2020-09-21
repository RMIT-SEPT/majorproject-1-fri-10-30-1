import React from 'react';
import { render } from '@testing-library/react';
import {shallow, mount} from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from './App';
import Booking from "./components/Booking";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";


/* 
 * Unit Test for "Appointment" text displayed in Dashboard
 * created by Jonathon Mitterbacher
*/
test('renders Welcome.js text "Appointment" ', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Appointment/i);
  expect(linkElement).toBeInTheDocument();
});


/* 
 * Unit Test for Booking.js component
 * created by Jonathon Mitterbacher
*/
Enzyme.configure({ adapter: new Adapter() });
describe("<Booking /> component Unit Test", () => {
    const mockFn = jest.fn();
    const props = {
        onClick: mockFn,
        completed: false
        // text: "WHAT IS BUY MILK"
    };
    it("should render one <Booking /> component", () =>{
        const component = shallow(<Booking {...props} />);
        expect(component).toHaveLength(1);
    });
})


/* 
 * Unit Test for Header.js component
 * created by Jonathon Mitterbacher
*/
describe("<Header /> component Unit Test", () => {
  const mockFn = jest.fn();
  const props = {
      onClick: mockFn,
      completed: false
  };
  it("should render one <Header /> component", () =>{
      const component = shallow(<Header {...props} />);
      expect(component).toHaveLength(1);
  });
})


/* 
 * Unit Test for Footer.js component
 * created by Jonathon Mitterbacher
*/
describe("<Footer /> component Unit Test", () => {
  const mockFn = jest.fn();
  const props = {
      onClick: mockFn,
      completed: false
  };
  it("should render one <Footer /> component", () =>{
      const component = shallow(<Footer {...props} />);
      expect(component).toHaveLength(1);
  });
})
import { BurgerBuilder } from "./BurgerBuilder";

import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import buildControls from "../../components/Burger/BuildControls/BuildControls";

configure({ adapter: Adapter });

describe("<BurgerBuilder />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInItIngredients={() => {}} />);
  });
  it("Should render <Build controls /> when receiving ingredients", () => {
    wrapper.setProps({ ings: { salad: 0 } });
    expect(wrapper.find(buildControls)).toHaveLength(1);
  });
});

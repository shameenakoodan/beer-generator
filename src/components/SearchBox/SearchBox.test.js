import SearchBox from "./SearchBox";
import {render,screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

it("Should render the SearchBox",()=>{
    render(<SearchBox />);
});
it("Should render the basic input field",()=>{
    render(<SearchBox />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
})
it('renders learn react link', () => {
    render(<SearchBox />);
    const linkElement = screen.getByText(/Beer Search/i);
    expect(linkElement).toBeInTheDocument();
  });
  
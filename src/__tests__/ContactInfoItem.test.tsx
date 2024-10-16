import { render, screen } from "@testing-library/react";
import { ContactInfoItem } from "../components/ContactItem/ContactInfoItem";

test('displays the correct label and value', () => {
  const props = {
    label: 'Email:',
    value: 'example@example.com',
  };

  render(<ContactInfoItem {...props} />);

  //Check component displays label and value
  const labelElement = screen.getByText(/Email:/i);
  const valueElement = screen.getByText(/example@example.com/i);

  expect(labelElement).toBeInTheDocument();
  expect(valueElement).toBeInTheDocument();
});

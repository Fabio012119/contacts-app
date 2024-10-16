import { render, screen } from '@testing-library/react';
import { ModalInfoItem } from '../components/Modal/ModalInfoItem';
import type { modalInfoProps } from 'types';

describe('ModalInfoItem component', () => {
  const props: modalInfoProps = {
    label: 'Address:',
    infos: ['123 Main St', 'Springfield', 'Apt 1'],
  };

  test('renders the label correctly', () => {
    render(<ModalInfoItem {...props} />);

    // Check that the label is rendered
    expect(screen.getByText(/Address:/i)).toBeInTheDocument();
  });

  test('renders all infos correctly', () => {
    render(<ModalInfoItem {...props} />);

    // Check that each piece of info is rendered
    props.infos.forEach((info:string) => {
      expect(screen.getByText(info)).toBeInTheDocument();
    });
  });

  test('renders no info when the infos array is empty', () => {
    const emptyProps: modalInfoProps = {
      label: 'Address:',
      infos: [],
    };

    render(<ModalInfoItem {...emptyProps} />);

    expect(screen.getByText(/Address:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Springfield/i)).not.toBeInTheDocument(); // No info should be found
  });
});

import UsersPage from '..';
import { render, waitFor } from '@testing-library/react';
import { BackBox, PageContainer } from '../../../styles/styles';

describe('Users Page', () => {
  const renderComponent = () => {
    return render(<UsersPage />);
  };

  it('render without errors', async () => {
    const { asFragment } = renderComponent();
    await waitFor(asFragment);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render PageContainer without errors', async () => {
    const { asFragment } = render(<PageContainer />)
    await waitFor(asFragment);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render BackBox without errors', async () => {
    const { asFragment } = render(<BackBox />)
    await waitFor(asFragment);
    expect(asFragment()).toMatchSnapshot();
  });
});

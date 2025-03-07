import type { RenderResult } from '@testing-library/react';
import type { Props } from './notification';

import React from 'react';
import { IntlProvider } from 'react-intl';
import { render, fireEvent } from '@testing-library/react';
import {
  NOTIFICATION_DOMAINS,
  NOTIFICATION_KINDS_SIDE,
} from '@commercetools-frontend/constants';
import Notification from './notification';

const TestComponent = () => <div>{'Test'}</div>;

type CustomDataAttributes = {
  'data-track-component': string;
  'data-track-label': string;
  'data-track-event': string;
  'data-test': string;
};

const createTestProps = (
  props: Partial<Props & CustomDataAttributes> = {}
) => ({
  children: <TestComponent />,
  domain: NOTIFICATION_DOMAINS.SIDE,
  type: NOTIFICATION_KINDS_SIDE.warning,
  onCloseClick: jest.fn(),
  ...props,
});

const renderComponent = (props: ReturnType<typeof createTestProps>) =>
  render(
    <IntlProvider locale="en" messages={{}}>
      <Notification {...props} />
    </IntlProvider>
  );

describe('rendering', () => {
  let rendered: RenderResult;
  let props: ReturnType<typeof createTestProps>;
  beforeEach(() => {
    props = createTestProps();
    rendered = renderComponent(props);
  });

  it('should render children', () => {
    expect(rendered.getByText('Test')).toBeInTheDocument();
  });

  it('should trigger onCloseClick', () => {
    fireEvent.click(rendered.getByLabelText('Hide notification'));
    expect(props.onCloseClick).toHaveBeenCalled();
  });
});

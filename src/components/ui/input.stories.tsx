import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { FormField } from './form-field';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    }
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Email address',
  },
};

export const WithError: Story = {
  args: {
    type: 'text',
    placeholder: 'Email address',
    error: true,
    defaultValue: 'invalid-email',
  },
};

export const WithFormField = {
  render: () => (
    <div className="w-[300px]">
      <FormField 
        htmlFor="email" 
        label="Email" 
        description="We'll never share your email."
      >
        <Input type="email" placeholder="m@example.com" />
      </FormField>
    </div>
  ),
};

export const WithFormFieldError = {
  render: () => (
    <div className="w-[300px]">
      <FormField 
        htmlFor="username" 
        label="Username" 
        error="Username must be at least 3 characters."
      >
        <Input type="text" defaultValue="ab" />
      </FormField>
    </div>
  ),
};

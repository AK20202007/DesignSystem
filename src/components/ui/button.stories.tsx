import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Search } from 'lucide-react';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style of the button.',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows a loading spinner and disables the button.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button.',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Search className="mr-2 h-4 w-4" aria-hidden="true" /> Search
      </>
    ),
    variant: 'default',
  },
};

export const Loading: Story = {
  args: {
    children: 'Please wait',
    isLoading: true,
  },
};

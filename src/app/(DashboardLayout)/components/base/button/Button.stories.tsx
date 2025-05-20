import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import { Button } from "./index";
import { Icon } from "@mui/material";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      description: "The function to call when the button is clicked",
      control: { type: "function" } as any,
      defaultValue: fn(),
      table: {
        type: { summary: "function" },
        defaultValue: { summary: "() => alert('clicked')" },
      },
    },
    className: {
      description: "The class name of the button",
      control: { type: "text" },
      defaultValue: "",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    size: {
      description: "The size of the button",
      control: { type: "select" },
      options: ["small", "medium", "large"],
      defaultValue: "medium",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    variant: {
      description: "The variant of the button",
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
      defaultValue: "contained",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "contained" },
      },
    },
    color: {
      description: "The color of the button",
      control: { type: "select" },
      options: ["primary", "secondary", "success", "error", "info", "warning"],
      defaultValue: "primary",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    shape: {
      description: "The shape of the button",
      control: { type: "select" },
      options: ["round", "square", "circle"],
      defaultValue: "round",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "round" },
      },
    },
    children: {
      description: "Button label or content",
      control: { type: "text" },
      defaultValue: "Button",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "Button" },
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
  render: (args) => (
    <div className="flex gap-4 w-full  ">
      <Button className="flex-1 w-[200px]" variant="contained" {...args}>
        Contained Button
      </Button>
      <Button className="flex-1 w-[200px]" variant="outlined" {...args}>
        Outlined Button
      </Button>
      <Button className="flex-1 w-[200px]" variant="text" {...args}>
        Text Button
      </Button>
    </div>
  ),
};

export const IconButton: Story = {
  render: (args) => (
    <div className="flex gap-4 w-full  ">
      <Button
        leftIcon={<Icon component={AccessibleForwardIcon} />}
        className="flex-1 w-[200px]"
        variant="contained"
        {...args}
      >
        Contained Button
      </Button>
      <Button className="flex-1 w-[200px]" variant="outlined" {...args}>
        Outlined Button
      </Button>
      <Button className="flex-1 w-[200px]" variant="text" {...args}>
        Text Button
      </Button>
    </div>
  ),
};

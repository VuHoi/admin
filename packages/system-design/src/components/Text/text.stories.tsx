import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import { Text } from "./index";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        type: "select",
      },
      options: [
        "heading1",
        "heading2",
        "heading3",
        "heading4",
        "heading5",
        "heading6",
        "body1",
        "body2",
        "body3",
        "body4",
        "body5",
        "body6",
        "caption",
      ],
    },
    className: {
      control: {
        type: "text",
      },
    },
    onClick: {
      control: {
        type: "text",
      },
    },
    ellipsis: {
      control: {
        type: "boolean",
      },
    },
    noOfLines: {
      control: {
        type: "number",
      },
    },
  },
  args: {
    children: "Text",
    variant: "heading1",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
  render: (args) => (
    <div className="w-full">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Variant</th>
            <th className="border p-2 text-left">CSS Classes</th>
            <th className="border p-2 text-left">Example</th>
            <th className="border p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">heading1</td>
            <td className="border p-2 font-mono text-sm">
              text-3xl font-bold leading-normal
            </td>
            <td className="border p-2">
              <Text {...args} variant="heading1">
                Hey, Welcome Admin 👋
              </Text>
            </td>
            <td className="border p-2">Heading on login page</td>
          </tr>
          <tr>
            <td className="border p-2">heading2</td>
            <td className="border p-2 font-mono text-sm">
              text-4xl font-bold leading-[42px] tracking-[-0.64px]
            </td>
            <td className="border p-2">
              <Text {...args} className="text-[#161C24]" variant="heading2">
                18.19
              </Text>
            </td>
            <td className="border p-2">Heading on dashboard page</td>
          </tr>
          <tr>
            <td className="border p-2">heading3</td>
            <td className="border p-2 font-mono text-sm">
              text-lg font-semibold
            </td>
            <td className="border p-2">
              <Text {...args} className="text-[#161C24]" variant="heading3">
                Monthly Orders Recieved
              </Text>
            </td>
            <td className="border p-2">Heading on dashboard card</td>
          </tr>
          <tr>
            <td className="border p-2">heading4</td>
            <td className="border p-2 font-mono text-sm">
              text-base font-bold
            </td>
            <td className="border p-2">
              <Text {...args} variant="heading4">
                Hey, Welcome Admin 👋
              </Text>
            </td>
          </tr>
          <tr>
            <td className="border p-2">heading5</td>
            <td className="border p-2 font-mono text-sm">text-sm font-bold</td>
            <td className="border p-2">
              <Text {...args} variant="heading5">
                Hey, Welcome Admin 👋
              </Text>
            </td>
          </tr>
          <tr>
            <td className="border p-2">heading6</td>
            <td className="border p-2 font-mono text-sm">text-xs font-bold</td>
            <td className="border p-2">
              <Text {...args} variant="heading6">
                Hey, Welcome Admin 👋
              </Text>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

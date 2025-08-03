/* eslint-disable react-hooks/rules-of-hooks */
import type { StoryObj } from "@storybook/react";
import { Input } from "./input";
import { EyeIcon } from "../icons/eye";
import { EmailOutlined } from "@mui/icons-material";
import { Password } from "./password";
import { InputFormControl as InputFormControlComponent } from "./inputFormControl";
import { PasswordFormControl as PasswordFormControlComponent } from "./passwordFormControl";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["outlined", "filled", "standard"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium"],
    },
    className: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    placeholder: "Enter your email",
    label: "Email",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex gap-4 w-[300px] ">
      <Input {...args} />
    </div>
  ),
};

export const Error: Story = {
  render: (args) => (
    <div className="flex gap-4 w-[300px] ">
      <Input {...args} error={true} helperText="This is an error message" />
    </div>
  ),
};

export const LeftIcon: Story = {
  render: (args) => (
    <div className="flex gap-4 w-[300px] ">
      <Input {...args} leftIcon={<EmailOutlined sx={{ color: "#A1A1A1" }} />} />
    </div>
  ),
};

export const RightIcon: Story = {
  render: (args) => (
    <div className="flex gap-4 w-[300px] ">
      <Input {...args} rightIcon={<EyeIcon />} />
    </div>
  ),
};

export const PasswordInput: Story = {
  render: (args) => (
    <div className="flex gap-4 w-[300px] ">
      <Password
        {...args}
        name="password"
        label="Password"
        error={false}
        helperText=""
        onChange={() => {}}
      />
    </div>
  ),
};

export const InputFormControl: Story = {
  render: (args) => {
    const form = useForm();
    return (
      <div className="flex gap-4 w-[300px] ">
        <FormProvider {...form}>
          <InputFormControlComponent
            name="email"
            label="Email"
            leftIcon={<EmailOutlined sx={{ color: "#A1A1A1" }} />}
            placeholder="Enter your email"
            {...args}
          />
        </FormProvider>
      </div>
    );
  },
};

export const PasswordFormControl: Story = {
  render: (args) => {
    const form = useForm();
    return (
      <div className="flex gap-4 w-[300px] ">
        <FormProvider {...form}>
          <PasswordFormControlComponent
            name="password"
            label="Password"
            {...args}
          />
        </FormProvider>
      </div>
    );
  },
};

export const ValidationForm: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        password: "",
        email: "",
      },
      mode: "onChange",
      resolver: zodResolver(schema),
    });
    const onSubmit = (data: any) => {
      console.log(data);
    };

    console.log(form.formState.errors);
    return (
      <div className="flex gap-4 w-[300px] ">
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
          >
            <InputFormControlComponent
              name="email"
              label="Email"
              placeholder="Enter your email"
            />

            <PasswordFormControlComponent
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
            <Button type="submit" variant="contained" size="sm" color="primary">
              Submit
            </Button>
          </form>
        </FormProvider>
      </div>
    );
  },
};

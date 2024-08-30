import { Meta, StoryObj } from "@storybook/react";
import { Circle } from "./Circle";

/**
 * コンポーネントのメタ情報を定義します。
 * component: 対象のコンポーネント
 * title: storybookの画面で表示する名前
 * argTypes: コンポーネントに設定できるプロパティの設定
 */
const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Circle",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["red", "blue", "green"],
    },
  },
};

export default meta;



/**
 * metaで設定した値を各ストーリーの型として定義
 */
type Story = StoryObj<typeof meta>;


/**
 * 各ストーリー（バリエーション）のコンポーネント定義
 */
export const BaseCircle: Story = { args: { variant: "red" } };
export const GreenCircle: Story = { args: { variant: "blue" } };
export const BlueCircle: Story = { args: { variant: "green" } };
export const GroupedCircle: Story = {
  render: () => (
    <div className="flex gap-2">
      <Circle variant="red" />
      <Circle variant="blue" />
      <Circle variant="green" />
    </div>
  ),
};

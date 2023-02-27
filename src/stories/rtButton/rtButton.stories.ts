import { Story } from "@storybook/vue3";

import rtButton from "./rtButton.vue";

import { ButtonSizeEnum } from "./rtButtonTypes"

export default {
    title: "Example/rtButton",
    component: rtButton,
    argTypes: {
        backgroundColor: { control: "color" },
        onClick: {},
        size: {
            control: { type: "select" },
            options: Object.keys(ButtonSizeEnum)
        },
    },
    args: {
        label: "按钮",
        size: "small"
    },
    parameters: {
        docs: {
            source: {
                code: "<rt-button />"
            }
        }
    }
};

const Template: Story = (args) => ({
    components: { rtButton },
    setup() {
        return { args };
    },
    template: "<rt-button v-bind='args' />",

});

export const Primary = Template.bind({});
Primary.args = {
    label: "按钮",
    size: "small"
};

// function generateStringTmp (prop: string, val: any) {
//     return `<rt-button :${prop}="${val}" />`
// }
//
// Primary.parameters = {
//     docs: {
//         source: {
//             // code: generateStringTmp('label', Primary.args.label)
//                 // `<rt-button :label="${Primary.args.label}" />`
//             type: 'code'
//         }
//     }
// }


export const Secondary = Template.bind({});
Secondary.args = {
    label: "按钮",
    size: "medium"
};

export const Large = Template.bind({});
Large.args = {
    label: "按钮",
    primary: false,
    size: "large"
};

export const Small = Template.bind({});
Small.args = {
    label: "按钮",
    size: "small"
};

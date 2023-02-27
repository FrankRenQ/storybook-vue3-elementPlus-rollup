/**
 * @Author: 任强
 * @Date: 2023/2/22 17:08
 * @Version: 1.0
 * @Content:
 */
import { Story } from "@storybook/vue3";

import RtBlock from "./rtBlock.vue";
import rtButton from "@/stories/rtButton/rtButton.vue";

export default {
    title: "Example/RtBlock",
    component: RtBlock,
    argTypes: {

    },
    args: {
        title: '信息资源库',
        badgeText: 10,
        hasFooter: true
    },
    parameters: {
        docs: {
            source: {
                code: "<rt-block></rt-block>"
            }
        }
    }
}

const Template: Story = (args) => ({
    components: { RtBlock },
    setup() {
        return { args };
    },
    template: "<rt-block v-bind='args'></rt-block>"
})

export const Primary = Template.bind({});
Primary.args = {
    title: "信息资源库及",
    badgeText: 10,
    hasFooter: true
};

export const NoFooter = Template.bind({});
NoFooter.args = {
    title: "信息资源库及",
    badgeText: 10,
    hasFooter: false
};



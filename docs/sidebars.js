/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // But you can create a sidebar manually
    doc: [
        'about/team',
        {
            type: 'category', label: 'Members', items: ['members/littleor',
                'members/ga', 'members/lk', 'members/yjy', 'members/yjx'],
        },
        {
            type: 'category', label: 'Daily Works', items: [
                'works/website',
                'works/cad',
                'works/arduino-basic-output',
                'works/arduino-iot',
            ],
        },
        {
            type: 'category', label: 'Projects', items: [
                'projects/final'
            ],
        }
    ]
};

module.exports = sidebars;

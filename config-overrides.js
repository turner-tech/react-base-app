const {override, fixBabelImports, addLessLoader} = require('customize-cra');
const darkTheme = require('@ant-design/dark-theme');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            // modifyVars: darkTheme.default
            modifyVars: {
                // '@primary-color': '#f96302',
                // '@info-color': '#1890FF',
                // '@link-color': '#fa6302',
                // '@heading-color': '#222222',
                // '@text-color': '#222222',
                // '@text-color-secondary': '#767676',
                // '@body-background': '#f5f5f5',
                '@font-family': '"Open Sans", sans-serif',
                // '@text-color-secondary': '#767676',
                // '@item-hover-bg': '#fdefe4',
                // '@border-color-base': '#d9d9d9',
                '@outline-width': '1px',
                // '@outline-color': '#A1A1A1',
                '@btn-font-weight': '600',
                '@btn-text-shadow': 'none',
                '@btn-border-style': 'solid',
                // '@btn-disable-color': 'rgba(0, 0, 0, 0.25)',
                // '@btn-disable-bg': '#d9d9d9',
                // '@btn-disable-border': '#d9d9d9',
                // '@border-color-split': '#d9d9d9',
                // '@btn-primary-bg': '#f96302',
                '@animation-duration-slow': '0.3s',
                '@animation-duration-base': '0.08s',
                '@animation-duration-fast': '0.05s',
                // '@label-color': '#333333',
                '@pagination-font-family': '"Open Sans", sans-serif',
                // '@input-hover-border-color': '#A1A1A1',
                // '@input-number-handler-hover-bg': '#A1A1A1',
                // '@select-selection-item-border-color': '#fa6304',
                // '@select-item-selected-bg': '#fdefe4',
                // '@select-selection-item-bg': '#fdefe4',
                // '@layout-body-background': '#f5f5f5',
                // '@layout-header-background': '#253238',
                '@layout-header-padding': '0 24px',
            },
        },
    }),
);

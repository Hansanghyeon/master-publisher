import '@storybook/addon-knobs/register';
import 'themeprovider-storybook/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-viewport/register';
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import '@storybook/addon-docs/register';
import 'storybook-addon-preview/register';
import "prism-themes/themes/prism-dracula.css";
import './style.css';

addons.setConfig({
  theme: themes.dark,
});

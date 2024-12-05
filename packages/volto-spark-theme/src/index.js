import Edit from '../node_modules/@kitconcept/volto-slider-block/src/components/Edit';
import View from './components/volto-slider-block/View';
import sliderSVG from '@plone/volto/icons/slider.svg';
import { SliderBlockDataAdapter } from '../node_modules/@kitconcept/volto-slider-block/src/components/adapter';

import '../node_modules/@kitconcept/volto-slider-block/src/theme/main.less';
const applyConfig = (config) => {
  config.blocks.themes = [
    {
      style: {
        '--theme-color': '#293676',
        '--theme-high-contrast-color': 'darkslategrey',
        '--theme-foreground-color': 'white',
        '--theme-low-contrast-foreground-color': 'lightgrey',
      },
      name: 'default',
      label: 'Default',
    },
    {
      style: {
        '--theme-color': 'darkslategrey',
        '--theme-high-contrast-color': 'black',
        '--theme-foreground-color': 'lemonchiffon',
        '--theme-low-contrast-foreground-color': 'lightgrey',
      },
      name: 'green',
      label: 'Green',
    },
    {
      style: {
        '--theme-color': '#293676',
        '--theme-high-contrast-color': '#5e6a72',
        '--theme-foreground-color': 'white',
        '--theme-low-contrast-foreground-color': 'lightgrey',
      },
      name: 'sparkblue',
      label: 'SparkBlue',
    },
  ];
  config.blocks.blocksConfig.slider = {
    id: 'slider',
    title: 'Slider',
    group: 'common',
    icon: sliderSVG,
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    dataAdapter: SliderBlockDataAdapter,
    enableAutoPlay: false,
  };
  return config;
};

export default applyConfig;

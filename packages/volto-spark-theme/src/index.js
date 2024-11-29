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
  ];
  return config;
};

export default applyConfig;

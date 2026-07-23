const myTheme = Blockly.Theme.defineTheme('myTheme', 
{
  'base': Blockly.Themes.Classic,
  'blockStyles': 
  {
    'costumControlBlock': 
    {
      'colourPrimary': '#66baff',
      'colourSecondary': '#43a9fd',
      'colourTertiary': '#1897ff'
    }
  },
  'componentStyles': {},
  'blockTypeStyleMap':
  {
    'controls_if': 'costumControlBlock',   // aplică noul style DOAR pe controls_if
    'controls_whileUntil': 'costumControlBlock'   // aplică noul style DOAR pe controls_if
  }
});


const toolbox = 
{
  kind: 'categoryToolbox',
  contents: 
  [
    {
      kind: 'category',
      name: 'Control',
      colour: '#0590e0',
      contents: 
      [
        {
          kind: 'block',
          type: 'controls_if',
        },
        {
          kind: 'block',
          type: 'controls_whileUntil',
        },
        {
          kind: 'block',
          type: 'controls_for',
        }
      ],
    },

    {
      kind: 'category',
      name: 'Logic',
      contents:
      [
        {
          kind: 'block',
          type: 'logic_compare'
        }
      ]
    }
  ],
};

// The toolbox gets passed to the configuration options during injection.
const workspace = Blockly.inject('blocklyDiv', { toolbox: toolbox, theme: myTheme });

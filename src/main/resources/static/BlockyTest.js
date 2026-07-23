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
  'componentStyles': {}
});

// blockTypeStyleMap nu mai există pe Theme în Blockly modern (13.x),
// deci stilul se aplică manual pe blocurile dorite la creare.
const CUSTOM_STYLE_BLOCK_TYPES = new Set(['controls_if', 'controls_whileUntil']);


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

// Aplică stilul custom doar pe blocurile din CUSTOM_STYLE_BLOCK_TYPES, la creare.
workspace.addChangeListener((event) => 
{
  if (event.type !== Blockly.Events.BLOCK_CREATE) 
  {
    return;
  }
  const block = workspace.getBlockById(event.blockId);
  if (block && CUSTOM_STYLE_BLOCK_TYPES.has(block.type)) 
  {
    block.setStyle('costumControlBlock');
  }
});

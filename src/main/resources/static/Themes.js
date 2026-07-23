const controlBlocksTheme = Blockly.Theme.defineTheme('controlBlocksTheme', 
{
  'base': Blockly.Themes.Classic,
  'blockStyles': 
  {
    'customControlBlock': 
    {
      colourPrimary: '#66baff',
      colourSecondary: '#43a9fd',
      colourTertiary: '#1897ff'
    },
    'customLogicBlock': 
    {
      colourPrimary: '#38df5c',
      colourSecondary: '#1ebe41',
      colourTertiary: '#19d442'
    }
  },

  'componentStyles': 
  {
    workspaceBackgroundColour: '#ffffff',
    toolboxBackgroundColour: '#b6b4b4',
  }
});
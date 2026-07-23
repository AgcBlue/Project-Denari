

const toolbox = 
{
  kind: 'categoryToolbox',
  contents: 
  [
    {
      kind: 'category',
      name: 'Control',
      colour: '#66baff',
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
      colour: '#38df5c',
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



function applyCustomStyles(targetWorkspace)
{
  targetWorkspace.getAllBlocks(false).forEach((block) =>
  {
    if(controlBlocks.has(block.type))
    {
      block.setStyle('customControlBlock');
    }

    if(logicBlocks.has(block.type))
    {
      block.setStyle('customLogicBlock');
    }
  });
}

const workspace = Blockly.inject('blocklyDiv', { toolbox: toolbox, theme: controlBlocksTheme });

workspace.addChangeListener((event) => 
{
  if(event.type !== Blockly.Events.BLOCK_CREATE) 
  {
    return;
  }
  const block = workspace.getBlockById(event.blockId);

  if(block && controlBlocks.has(block.type)) 
  {
    block.setStyle('customControlBlock');
  }
  if(block && logicBlocks.has(block.type)) 
  {
    block.setStyle('customLogicBlock');
  }
});

workspace.addChangeListener((event) =>
{
  if(event.type !== Blockly.Events.TOOLBOX_ITEM_SELECT && event.type !== Blockly.Events.CLICK)
  {
    return;
  }

  const flyout = workspace.getFlyout();

  if(flyout && flyout.getWorkspace())
  {
    applyCustomStyles(flyout.getWorkspace());
  }
});

const initialFlyout = workspace.getFlyout();

if(initialFlyout && initialFlyout.getWorkspace()) 
{
  applyCustomStyles(initialFlyout.getWorkspace());
}


function applyCustomStyles(targetWorkspace)
{
  targetWorkspace.getAllBlocks(false).forEach((block) =>
  {
    if(loopBlocks.has(block.type)) block.setStyle('customLoopBlock');
    if(logicBlocks.has(block.type)) block.setStyle('customLogicBlock');
    if(mathBlocks.has(block.type)) block.setStyle('customMathBlock');
    if(textBlocks.has(block.type)) block.setStyle('customTextBlock')
    if(listBlocks.has(block.type)) block.setStyle('customListBlock')
    if(functionBlocks.has(block.type)) block.setStyle('customFunctionBlock')
    if(variableBlocks.has(block.type)) block.setStyle('customVariableBlock')

  });
}

workspace.addChangeListener((event) => 
{
  if(event.type !== Blockly.Events.BLOCK_CREATE) 
  {
    return;
  } 
  
  const ids = event.ids || [event.blockId];

  ids.forEach((id) => 
  {
    const block = workspace.getBlockById(id);

    if(!block) return;

    if(loopBlocks.has(block.type)) block.setStyle('customLoopBlock');
    if(logicBlocks.has(block.type)) block.setStyle('customLogicBlock');
    if(mathBlocks.has(block.type)) block.setStyle('customMathBlock');
    if(textBlocks.has(block.type)) block.setStyle('customTextBlock');
    if(listBlocks.has(block.type)) block.setStyle('customListBlock');
    if(functionBlocks.has(block.type)) block.setStyle('customFunctionBlock');
    if(variableBlocks.has(block.type)) block.setStyle('customVariableBlock');
  });
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

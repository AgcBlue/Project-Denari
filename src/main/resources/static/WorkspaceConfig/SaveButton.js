function saveFunction()
{
    const state = Blockly.serialization.workspaces.save(workspace);
    localStorage.setItem('workspace-state', JSON.stringify(state));
}

function loadFunction()
{
    const savedState = localStorage.getItem('workspace-state');
    if (savedState)
    {
        const state = JSON.parse(savedState);
        Blockly.serialization.workspaces.load(state, workspace);
    }
    else
    {
        console.log('Nu există niciun workspace salvat.');
    }
}

document.getElementById('saveButton').addEventListener('click', saveFunction);
document.getElementById('loadButton').addEventListener('click', loadFunction);
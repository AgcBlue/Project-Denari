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

const meniu = document.getElementById('menuContent');

document.getElementById('menuButton').addEventListener('click', () => {
    meniu.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    const clickInMeniu = event.target.closest('#Menu');
    if (!clickInMeniu) 
    {
        meniu.classList.remove('open');
    }
});

document.getElementById('saveButton').addEventListener('click', saveFunction);
document.getElementById('loadButton').addEventListener('click', loadFunction);
const selectedBlocksIds = new Set();
let shiftHeld = false;
let isProgrammaticChange = false;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Shift') shiftHeld = true;
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Shift') shiftHeld = false;
});

function highlightBlock(block, isSelected) {
    const svgRoot = block.getSvgRoot();
    if (isSelected) {
        svgRoot.classList.add('multiSelectedBlock');
    } else {
        svgRoot.classList.remove('multiSelectedBlock');
    }
}

function toggleBlockSelection(block) {

    if (selectedBlocksIds.has(block.id)) {
        selectedBlocksIds.delete(block.id);
        highlightBlock(block, false);

        block.unselect();

    }
    else {
        selectedBlocksIds.add(block.id);
        highlightBlock(block, true);
    }
}

function clearSelection() {
    selectedBlocksIds.forEach((id) => {
        const block = workspace.getBlockById(id);
        if (block) highlightBlock(block, false);
    })
    selectedBlocksIds.clear();
}

workspace.addChangeListener((event) => {

    if (event.type === Blockly.Events.SELECTED) {

        const clickedId = event.newElementId;
        if (!clickedId) {
            clearSelection();
            return;
        }

        const block = workspace.getBlockById(clickedId);
        if (!block) return;

        if (shiftHeld) {
            toggleBlockSelection(block);
        } else {
            clearSelection();
            selectedBlocksIds.add(clickedId);
            highlightBlock(block, true);
        }
    }
});

document.addEventListener('keydown', (e) => {

    const isTypingInField = document.activeElement &&
        (document.activeElement.tagName === 'INPUT' ||
            document.activeElement.tagName === 'TEXTAREA' ||
            document.activeElement.isContentEditable);

    if ((e.key === 'Backspace' || e.key === 'Delete') && !isTypingInField) {
        if (selectedBlocksIds.size === 0) return 0;
        e.preventDefault();
        selectedBlocksIds.forEach((id) => {
            const block = workspace.getBlockById(id);
            if (block) {
                block.dispose(true, true);
            }
        })
        selectedBlocksIds.clear();
    }
})
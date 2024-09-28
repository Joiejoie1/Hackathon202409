export async function resumeLearning(fullName) { 
    const progress = await DeVinci_backend.getProgress(fullName);
    if (progress) {
        // Load their last saved module or lesson
        loadModule(progress.lastCompletedModule);
    }
}

document.getElementById('resumeButton').addEventListener('click', () => {
    const fullName = document.getElementById('fullName').value;
    resumeLearning(fullName);
});

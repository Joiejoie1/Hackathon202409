import { loadLearningMaterials } from './components/LearningMaterial.js';
import { loadProgress, resumeLearning } from './components/ProgressTracker.js';
import { startQuiz } from './components/Assessment.js';

document.getElementById('submitName').addEventListener('click', () => {
    const fullName = document.getElementById('fullName').value;
    if (fullName) {
        loadProgress(fullName);
        loadLearningMaterials();
    }
});

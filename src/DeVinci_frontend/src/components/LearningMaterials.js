const learningMaterials = [ 
    { title: "United Nations Convention Against Corruption", filePath: "path/to/UNCAC.pdf" },
    { title: "Policy Guide for National Anti-Corruption Authorities", filePath: "path/to/policy-guide.pdf" },
    // More materials...
];

// Function to fetch and display learning materials
export function loadLearningMaterials() {
    learningMaterials.forEach(material => {
        // Fetch the material from storage and render it on the page
        fetch(material.filePath).then(response => response.blob()).then(blob => {
            // Display the content to the user, e.g., as a PDF viewer or text extraction
            displayContent(blob);
        });
    });
}

import Trie "mo:base/Trie";

actor DeVinci_backend {

    // Store user progress
    stable var userProgress : Trie.Trie<Text, Progress> = Trie.empty();

    public func storeProgress(fullName: Text, progress: Progress): async () {
        userProgress := Trie.put(userProgress, fullName, progress);
    };

    public func loadProgress(fullName: Text): async ?Progress {
        return Trie.get(userProgress, fullName);
    };

    public type Progress = {
        lastCompletedModule: Text;
        quizResults: [Bool];
    };

    public func storeQuizResult(fullName: Text, quizIndex: Nat, isCorrect: Bool): async () {
        let progress = Trie.get(userProgress, fullName);
        switch (progress) {
            case (?p) {
                p.quizResults[quizIndex] := isCorrect;
                userProgress := Trie.put(userProgress, fullName, p);
            };
            case null {};
        };
    };
};

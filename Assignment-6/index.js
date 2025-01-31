// Function to capitalize names and separate them with a comma...
function formatNames(names) {
    let formattedNames = "";
    names = names.sort();

    for (let i = 0; i < names.length; i++) {
        currentName = names[i];
        formattedNames += 
            currentName.charAt(0).toUpperCase() + 
            currentName.substring(1) + 
            ", ";
    }

    return formattedNames.substring(0, formattedNames.length - 2);
}

console.log(formatNames(["alice", "bob", "charlie"]));
// Output: "Alice, Bob, Charlie"
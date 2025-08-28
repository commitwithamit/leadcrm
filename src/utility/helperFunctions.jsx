export function getNameFromUrl(path) {
    if (!path) return "";

    const filename = path.split("/").pop();
    const nameWithoutExt = filename.split(".")[0];

    return nameWithoutExt
           .replace(/[\W_]/g, " ")
           .toLowerCase();
}

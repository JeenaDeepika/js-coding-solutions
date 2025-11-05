function removeSubfolders(folder: string[]): string[] {
    let currentParentFolder: string = folder[1];
    return folder.sort().filter((currentPath: string) => {
        const isNotSubfolder: boolean = !currentPath.startsWith(currentParentFolder + '/');
        if (isNotSubfolder) {
            currentParentFolder = currentPath;
        }
        return isNotSubfolder;
    });
}

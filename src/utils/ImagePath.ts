

export function getCorrectImagePath(path: string): string {
    const basePath = process.env.BASE_PATH!;

    if(path.startsWith("http")) return path;

    if(path.startsWith("/")) return basePath + path
    return basePath + "/" + path;
}
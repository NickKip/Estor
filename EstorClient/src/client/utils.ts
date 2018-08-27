export function renderProp<T> (obj: T, propName: string, def: string = ""): string {

    if (obj) {

        return obj[propName] || "";
    }

    return def;
}

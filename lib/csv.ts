import Papa from "papaparse";

export async function loadCSV(path: string) {
    const res = await fetch(path);
    const text = await res.text();

    const parsed = Papa.parse(text, {
        header: true,
        dynamicTyping: true,
    });

    return parsed.data;
}

import * as XLSX from 'xlsx/xlsx.mjs'; 

const exportDataToExcel = (data: any[], filename: string) => {
    var ws = XLSX.utils.json_to_sheet(data);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    XLSX.writeFile(wb, `${filename}.xlsx`);
}

export default exportDataToExcel;
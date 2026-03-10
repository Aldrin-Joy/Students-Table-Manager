import * as XLSX from 'xlsx';

/**
 * Export an array of student objects to an Excel (.xlsx) file.
 * @param {Array} data - Array of student objects
 * @param {string} fileName - Name for the downloaded file (without extension)
 */
export function exportToExcel(data, fileName = 'students') {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');

    // Column widths for readability
    worksheet['!cols'] = [
        { wch: 5 },   // ID
        { wch: 25 },  // Name
        { wch: 35 },  // Email
        { wch: 8 },   // Age
    ];

    XLSX.writeFile(workbook, `${fileName}.xlsx`);
}

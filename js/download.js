const exportBtn = document.getElementById('btn-download');

exportBtn.addEventListener('click', () => {
    const linhaTabela = document.querySelectorAll('tr');
    
    const CsvString = Array.from(linhaTabela)
        .map(row => Array.from(row.cells)
           .map(cell => cell.textContent)
           .join(',')
            )
            .join('\n');
    exportBtn.setAttribute('href', 
    `data:text/csvcharset=utf-8,${encodeURIComponent(CsvString)}`
    );
    exportBtn.setAttribute('download', 'table.csv');
    
    
})


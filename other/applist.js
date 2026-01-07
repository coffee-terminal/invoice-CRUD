function loadInvoices() {
    const invoices = JSON.parse(localStorage.getItem('invoices'));
    const tbody = document.querySelector('#invoiceTable tbody');
    tbody.innerHTML = ''; // Išvalome lentelę

    invoices.forEach((invoice) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${invoice.number}</td>
                    <td>${invoice.date}</td>
                    <td>${invoice.total}</td>
                `;
        tbody.appendChild(row);
    });
}

// Įkelti sąskaitas puslapiui užsikrovus
window.addEventListener('load', loadInvoices);

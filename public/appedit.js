window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('edit') === 'true') {
        const index = localStorage.getItem('editingInvoiceIndex');
        if (index !== null) {
            const invoices = JSON.parse(localStorage.getItem('invoices')) || [];
            const invoice = invoices[index];
            if (invoice) {
                currentInvoice = invoice;

                const preview = document.getElementById('invoicePreview');
                preview.innerHTML = `
                    <h2>PVM Sąskaita Faktūra (redagavimas)</h2>
                    <p>Numeris: ${invoice.number}</p>
                    <p>Data: ${invoice.date}</p>
                    <p>Galutinė suma: ${invoice.total} €</p>
                    <pre>${JSON.stringify(invoice.details || invoice, null, 2)}</pre>
                `;

                document.getElementById('saveInvoice').style.display = 'block';
                document.getElementById('saveInvoice').textContent = 'Išsaugoti pakeitimus';

                // Išsaugant pakeičiama esama sąskaita
                document.getElementById('saveInvoice').onclick = () => {
                    invoices[index] = currentInvoice;
                    localStorage.setItem('invoices', JSON.stringify(invoices));
                    localStorage.removeItem('editingInvoiceIndex');
                    alert('Sąskaita atnaujinta!');
                    document.getElementById('saveInvoice').style.display = 'none';
                    preview.innerHTML = '';
                    currentInvoice = null;
                };
            }
        }
    }
});

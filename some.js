// Pridedame prie esamo window.addEventListener('load', ...)
window.addEventListener('load', () => {
    // ... visas jūsų dabartinis kodas ...

    // ────────────────────────────────────────────────
    // Nauja dalis – išsaugojimas
    // ────────────────────────────────────────────────

    const saveBtn = document.getElementById('saveChangesBtn');

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const editingIndex = localStorage.getItem('editingInvoiceIndex');
            if (editingIndex === null) return;

            let invoices = JSON.parse(localStorage.getItem('invoices')) || [];
            let invoice = invoices[editingIndex];

            if (!invoice?.all?.items) return;

            // Skaitome visus pakeistus kiekius
            const quantityInputs = document.querySelectorAll('.itemQuantity');

            quantityInputs.forEach((input, i) => {
                const newQty = parseFloat(input.value) || 0;
                if (newQty >= 0) {
                    // apsauga nuo neigiamų
                    invoice.all.items[i].quantity = newQty;
                }
            });

            // Perskaičiuojame sumas (galima iškelti į atskirą funkciją)
            let sumaBePVM = 0;

            invoice.all.items.forEach((item) => {
                let price = item.price || 0;
                let qty = item.quantity || 0;
                let discountType = item.discount?.type;
                let discountValue = item.discount?.value || 0;

                let linePrice = price;

                if (discountType === 'fixed') {
                    linePrice -= discountValue;
                } else if (discountType === 'percentage') {
                    linePrice -= (price * discountValue) / 100;
                }

                const lineTotalBePVM = linePrice * qty;
                sumaBePVM += lineTotalBePVM;
            });

            // Galima atnaujinti ir kitus laukus, jei norite
            const shipping = parseFloat(invoice.all.shippingPrice) || 0;
            const totalBePVM = sumaBePVM + shipping;
            const pvm = totalBePVM * 0.21;
            const totalSuPVM = totalBePVM + pvm;

            // Čia galite norėti išsaugoti ir naujas perskaičiuotas sumas į objektą
            // pvz.: invoice.calculated = { sumaBePVM, totalSuPVM, ... }

            // Išsaugome atgal
            invoices[editingIndex] = invoice;
            localStorage.setItem('invoices', JSON.stringify(invoices));

            alert('Pakeitimai išsaugoti!');
            // Galima uždaryti modal'ą arba atnaujinti puslapį
            // document.getElementById('viewModal').style.display = 'none';
        });
    }
});

class Saldo {
    constructor() {
        this.saldo = 0;
    }

    mintaInput(pesan) {
        let jumlah;
        do {
            jumlah = parseFloat(prompt(pesan));
            if (jumlah > 0) return jumlah;
            alert("Input tidak valid. Harap masukkan angka yang lebih besar dari 0.");
        } while (true);
    }

    tambahSaldo() {
        const jumlah = this.mintaInput("Masukkan jumlah saldo yang ingin ditambahkan:");
        this.saldo += jumlah;
        this.tampilSaldo();
    }
    
    kurangiSaldo() {
        let jumlah;
        do {
            jumlah = this.mintaInput("Masukkan jumlah saldo yang ingin dikurangi:");
            if (jumlah <= this.saldo) break;
            alert("Saldo tidak cukup.");
        } while (true);
        this.saldo -= jumlah;
        this.tampilSaldo();
    }

    tampilSaldo() {
        alert(`Saldo saat ini: ${this.saldo}`);
    }
}

const rekening = new Saldo();
rekening.tambahSaldo();
rekening.kurangiSaldo();
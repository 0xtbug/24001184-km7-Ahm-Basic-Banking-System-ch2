class BankAccount {
  constructor() {
    this.saldo = 0;
  }

  validateInput(jumlah) {
    if (typeof jumlah !== "number" || isNaN(jumlah)) {
      throw new Error("Input tidak valid. Harap masukkan angka yang benar.");
    }
  }

  deposit(jumlah) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          this.validateInput(jumlah);
          if (jumlah > 0) {
            this.saldo += jumlah;
            resolve(
              `Deposit berhasil: Rp${jumlah}`
            );
          } else {
            reject("Jumlah deposit harus lebih besar dari 0.");
          }
        } catch (error) {
          reject(error.message);
        }
      }, 2000);
    });
  }

  withdraw(jumlah) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          this.validateInput(jumlah);
          if (jumlah > 0 && jumlah <= this.saldo) {
            this.saldo -= jumlah;
            resolve(
              `Penarikan berhasil: Rp${jumlah}`
            );
          } else if (jumlah > this.saldo) {
            reject("Saldo tidak mencukupi untuk withdraw.");
          } else {
            reject("Jumlah penarikan harus lebih besar dari 0.");
          }
        } catch (error) {
          reject(error.message);
        }
      }, 3000);
    });
  }

  getsaldo() {
    return `Saldo saat ini: Rp${this.saldo}`;
  }
}

const transactionProcess = async () => {
  try {
    const myAccount = new BankAccount();
    // Saldo awal
    console.log(myAccount.getsaldo());

    // Proses deposit
    const depositMessage = await myAccount.deposit(10000);
    console.log(depositMessage);

    // Proses withdraw
    const withdrawMessage = await myAccount.withdraw(5000);
    console.log(withdrawMessage);

    // Tampilkan saldo terakhir
    console.log(myAccount.getsaldo());


    /*
    *** Test Validasi ***
    * Proses deposit dengan jumlah yang lebih kecil dari 0
    * Proses withdraw dengan jumlah yang lebih besar dari saldo
    * Proses deposit dengan input yang tidak valid
    * Proses withdraw dengan input yang tidak valid
    */
   
    // const depositMessage2 = await myAccount.deposit(-10000);
    // console.log(depositMessage2);

    // const withdrawMessage2 = await myAccount.withdraw(10000);
    // console.log(withdrawMessage2);
    
    // const depositMessage2 = await myAccount.deposit("10000");
    // console.log(depositMessage2);

    // const withdrawMessage3 = await myAccount.withdraw("5000");
    // console.log(withdrawMessage3);
  } catch (error) {
    console.log(error);
  }
};

transactionProcess();
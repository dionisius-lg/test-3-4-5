// soal 5

let nominal = "Rp.10.113.199,50"

const pembilang = (nilai) => {
    nilai = Math.abs(nilai)

    let nilaiBagi = 0
    let huruf = [
        '',
        'Satu',
        'Dua',
        'Tiga',
        'Empat',
        'Lima',
        'Enam',
        'Tujuh',
        'Delapan',
        'Sembilan',
        'Sepuluh',
        'Sebelas'
    ]

    let temp = ''
 
    if (nilai < 12) {
        temp += `${huruf[nilai]}`
    } else if (nilai < 20) {
        temp = `${pembilang(nilai - 10)} Belas`
    } else if (nilai < 100) {
        nilaiBagi = Math.floor(nilai / 10)
        temp = `${pembilang(nilaiBagi)} Puluh ${pembilang(nilai % 10)}`
    } else if (nilai < 200) {
        temp = `Seratus ${pembilang(nilai - 100)}`
    } else if (nilai < 1000) {
        nilaiBagi = Math.floor(nilai / 100);
        temp = `${pembilang(nilaiBagi)} Ratus ${pembilang(nilai % 100)}`
    } else if (nilai < 2000) {
        temp = `Seribu ${pembilang(nilai - 1000)}`
    } else if (nilai < 1000000) {
        nilaiBagi = Math.floor(nilai / 1000);
        temp = `${pembilang(nilaiBagi)} Ribu ${pembilang(nilai % 1000)}`
    } else if (nilai < 1000000000) {
        nilaiBagi = Math.floor(nilai / 1000000);
        temp = `${pembilang(nilaiBagi)} Juta ${pembilang(nilai % 1000000)}`
    } else if (nilai < 1000000000000) {
        nilaiBagi = Math.floor(nilai / 1000000000);
        temp = `${pembilang(nilaiBagi)} Miliar ${pembilang(nilai % 1000000000)}`
    } else if (nilai < 1000000000000000) {
        nilaiBagi = Math.floor(nilai / 1000000000000);
        temp = `${pembilang(nilai/1000000000000)} Triliun ${pembilang(nilai % 1000000000000)}`
    }
 
    return temp
}

let nilai = nominal.replace('Rp.', '')
    nilai = nilai.replaceAll('.', '').split(',')

let terbilang = pembilang(nilai[0])

if (nilai.length > 0) {
    if (typeof nilai[1] !== 'undefined') {
        terbilang += ` Koma ${pembilang(nilai[1])}`
    }
}

terbilang += ' Rupiah'

console.log('#Soal 5', terbilang)

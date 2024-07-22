import {NextResponse} from "next/server";

export async function GET() {
    return NextResponse.json(mockBankSoal);
}

const mockBankSoal = {
    "soal": [
        {
            "judul_materi": "Perbandingan",
            "pertanyaan": "Penjual buah memproduksi 2 jenis buah, yaitu apel dan jeruk. Harga apel adalah Rp 40.000/keranjang, sedangkan harga jeruk adalah Rp 25.000/keranjang. Biasanya, penjual buah akan mengemas buah-buah tersebut dalam kotak. Satu kotak hanya bisa memuat 40 keranjang buah. Jika dari satu kotak buah, ia memperoleh pendapatan sebesar Rp 1.200.000, maka perbandingan banyaknya buah yang terjual adalah ...",
            "pilihan_jawaban": [
                "Apel : Jeruk = 3 : 2",
                "Apel : Jeruk = 1 : 1",
                "Apel : Jeruk = 2 : 3",
                "Apel : Jeruk = 2 : 1",
                "Apel : Jeruk = 3 : 1"
            ],
            "jawaban": 0,
            "pembahasan": "Misal:\n\nx = banyaknya keranjang apel yang terjual\ny = banyaknya keranjang jeruk yang terjual\n\nModel matematika dari ilustrasi tersebut adalah:\n\nx + y = 40\n40000x + 25000y = 1200000\n\nKemudian gunakan metode eliminasi/substitusi untuk memperoleh penyelesaian.\n\nx + y = 40\n4x + 2.5y = 120\n8x + 5y = 240\nx + y = 40\n8x + 5y = 240\n\n-5(x + y) = -200\n8x + 5y = 240\n\n3x = 40\nx = 24\ny = 16\n\nSehingga diperoleh banyaknya keranjang apel yang terjual adalah 24 keranjang, dan keranjang jeruk 16 keranjang. Perbandingan keranjang apel dan keranjang jeruk adalah 3:2."
        },
        {
            "judul_materi": "Persamaan Linear",
            "pertanyaan": "Penjual es krim memproduksi 2 jenis es krim, yaitu cokelat dan vanila. Harga es krim cokelat adalah Rp 5.000/buah, sedangkan harga es krim vanila adalah Rp 3.000/buah. Jika penjual tersebut menjual total 100 buah es krim dan memperoleh pendapatan sebesar Rp 400.000, maka berapa banyak masing-masing es krim yang terjual?",
            "pilihan_jawaban": [
                "Cokelat: 50, Vanila: 50",
                "Cokelat: 60, Vanila: 40",
                "Cokelat: 70, Vanila: 30",
                "Cokelat: 80, Vanila: 20",
                "Cokelat: 90, Vanila: 10"
            ],
            "jawaban": 1,
            "pembahasan": "Misal:\n\nx = banyaknya es krim cokelat yang terjual\ny = banyaknya es krim vanila yang terjual\n\nModel matematika dari ilustrasi tersebut adalah:\n\nx + y = 100\n5000x + 3000y = 400000\n\nKemudian gunakan metode eliminasi/substitusi untuk memperoleh penyelesaian.\n\nx + y = 100\n5x + 3y = 400\nx + y = 100\n5x + 3y = 400\n\n-3(x + y) = -300\n5x + 3y = 400\n\n2x = 100\nx = 50\ny = 50\n\nSehingga diperoleh banyaknya es krim cokelat yang terjual adalah 60 buah, dan es krim vanila 40 buah."
        },
        {
            "judul_materi": "Sistem Persamaan Linear Dua Variabel (SPLDV)",
            "pertanyaan": "Penjual buku memiliki 2 jenis buku, yaitu buku novel dan buku komik. Harga buku novel adalah Rp 80.000/buku, sedangkan harga buku komik adalah Rp 50.000/buku. Penjual tersebut menjual total 70 buku dan memperoleh pendapatan sebesar Rp 4.800.000. Berapa banyak masing-masing buku yang terjual?",
            "pilihan_jawaban": [
                "Novel: 30, Komik: 40",
                "Novel: 40, Komik: 30",
                "Novel: 50, Komik: 20",
                "Novel: 60, Komik: 10",
                "Novel: 70, Komik: 0"
            ],
            "jawaban": 1,
            "pembahasan": "Misal:\n\nx = banyaknya buku novel yang terjual\ny = banyaknya buku komik yang terjual\n\nModel matematika dari ilustrasi tersebut adalah:\n\nx + y = 70\n80000x + 50000y = 4800000\n\nKemudian gunakan metode eliminasi/substitusi untuk memperoleh penyelesaian.\n\nx + y = 70\n8x + 5y = 480\nx + y = 70\n8x + 5y = 480\n\n-5(x + y) = -350\n8x + 5y = 480\n\n3x = 130\nx = 40\ny = 30\n\nSehingga diperoleh banyaknya buku novel yang terjual adalah 40 buku, dan buku komik 30 buku."
        },
        {
            "judul_materi": "Persentase",
            "pertanyaan": "Seorang pedagang memiliki dua jenis barang dagangan, yaitu baju dan celana. Dia menjual baju dengan harga Rp 150.000 per potong dan celana dengan harga Rp 200.000 per potong. Jika pedagang tersebut berhasil menjual 30 potong baju dan 20 potong celana, berapakah persentase total pendapatannya dari penjualan baju?",
            "pilihan_jawaban": [
                "35%",
                "40%",
                "45%",
                "50%",
                "55%"
            ],
            "jawaban": 2,
            "pembahasan": "Pendapatan dari penjualan baju = 30 x 150.000 = Rp 4.500.000\nPendapatan dari penjualan celana = 20 x 200.000 = Rp 4.000.000\nTotal pendapatan = Rp 4.500.000 + Rp 4.000.000 = Rp 8.500.000\nPersentase pendapatan dari penjualan baju = (4.500.000 / 8.500.000) x 100% = 52.94% ≈ 45%"
        },
        {
            "judul_materi": "Peluang",
            "pertanyaan": "Sebuah dadu dilempar satu kali. Berapakah peluang untuk mendapatkan angka lebih dari 4?",
            "pilihan_jawaban": [
                "1/6",
                "1/3",
                "1/2",
                "2/3",
                "5/6"
            ],
            "jawaban": 1,
            "pembahasan": "Jumlah total angka pada dadu adalah 6, yaitu 1, 2, 3, 4, 5, dan 6.\nAngka yang lebih dari 4 adalah 5 dan 6, sehingga ada 2 angka yang lebih dari 4.\nPeluang mendapatkan angka lebih dari 4 = 2/6 = 1/3."
        },
        {
            "judul_materi": "Volume Bangun Ruang",
            "pertanyaan": "Sebuah balok memiliki panjang 8 cm, lebar 6 cm, dan tinggi 4 cm. Berapakah volume balok tersebut?",
            "pilihan_jawaban": [
                "192 cm³",
                "196 cm³",
                "200 cm³",
                "204 cm³",
                "208 cm³"
            ],
            "jawaban": 0,
            "pembahasan": "Volume balok = panjang x lebar x tinggi\nVolume balok = 8 cm x 6 cm x 4 cm = 192 cm³."
        },
        {
            "judul_materi": "Bangun Datar",
            "pertanyaan": "Sebuah segitiga memiliki alas 10 cm dan tinggi 12 cm. Berapakah luas segitiga tersebut?",
            "pilihan_jawaban": [
                "50 cm²",
                "55 cm²",
                "60 cm²",
                "65 cm²",
                "70 cm²"
            ],
            "jawaban": 2,
            "pembahasan": "Luas segitiga = 1/2 x alas x tinggi\nLuas segitiga = 1/2 x 10 cm x 12 cm = 60 cm²."
        },
        {
            "judul_materi": "Bilangan Pecahan",
            "pertanyaan": "Berapakah hasil dari 3/4 + 2/3?",
            "pilihan_jawaban": [
                "13/12",
                "13/6",
                "7/6",
                "1/2",
                "5/6"
            ],
            "jawaban": 0,
            "pembahasan": "Untuk menjumlahkan pecahan dengan penyebut berbeda, samakan penyebutnya terlebih dahulu.\n3/4 + 2/3 = (3x3)/(4x3) + (2x4)/(3x4) = 9/12 + 8/12 = 17/12 = 1 5/12."
        },
        {
            "judul_materi": "Fungsi",
            "pertanyaan": "Jika f(x) = 2x + 3, berapakah nilai dari f(4)?",
            "pilihan_jawaban": [
                "8",
                "10",
                "11",
                "12",
                "13"
            ],
            "jawaban": 4,
            "pembahasan": "Substitusi x dengan 4 pada fungsi f(x) = 2x + 3\nf(4) = 2(4) + 3 = 8 + 3 = 11."
        },
        {
            "judul_materi": "Eksponen",
            "pertanyaan": "Berapakah nilai dari 2³ x 2²?",
            "pilihan_jawaban": [
                "8",
                "16",
                "32",
                "64",
                "128"
            ],
            "jawaban": 2,
            "pembahasan": "Menurut aturan eksponen, 2³ x 2² = 2^(3+2) = 2⁵ = 32."
        }
    ]
}
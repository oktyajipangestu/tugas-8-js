function panggilObject() {
    let siswa = {
        namaDepan: "Hartoto",
        namaBelakang: "Faisal",
        kelas: 12,
        nilai: 87
    }

    console.log(siswa);
    siswa.nilai = 95;
    console.log(siswa);
}

panggilObject();
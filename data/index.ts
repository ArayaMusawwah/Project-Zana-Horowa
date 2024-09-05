export const DATA: IData = {
  mempelai: {
    keduaMempelai: "Anies & Komari",
    /* story:
      "pagi ketemu, siang dilamar, malem dilamar, pagi dilamar, malam dilamar, paginya lagi ke undangan temen", */
    laki: {
      nama: "anies ban dalem",
      ortu: "Bapak Yanto Jagung Manis & Ibu Siti Bed Cover",
    },
    perempuan: {
      nama: "terra komari",
      ortu: "Bapak Lo Siento & Ibu Loker",
    },
  },
  resepsi: {
    alamat:
      "Jl. Bukit Indah Blok B5 No. 6, RT 002/ RW 005, Kel. Serua, Kec. Ciputat, Kota Tangerang selatan, Banten 15414",
    maps: "https://maps.app.goo.gl/Lp7L8CwkehvC3GUp8",
    tanggal: "02-NOV-2024 09:00 GMT+0700", //FORMAT: DD-MMM-YYYY HH:MM GMT+0700
    waktu: "09:00 - 17:00 WIB",
  },
  akad: {
    alamat:
      "Jl. Siliwangi No.2, Pamulang Bar., Kec. Pamulang, Kota Tangerang Selatan, Banten 15417",
    maps: "https://g.co/kgs/ReT8rxQ",
    tanggal: "02-NOV-2024 10:00 GMT+0700", //FORMAT: DD-MMM-YYYY HH:MM GMT+0700
    waktu: "10:00 - 11:00 WIB",
  },
  kado: {
    penerima: "Muhammad Iqbal Ramadhan",
    nomer: "081286765654",
    alamat:
      "Jl. Bukit Indah Blok B.5 No.6, Serua, Ciputat, Kota Tangerang Selatan, Banten 15417",
    rekening: [
      {
        nomor: "39428347293",
        gambar: "/images/mandiri.svg",
        atasNama: "Muhammad Iqbal Ramadhan",
      },
      {
        nomor: "829137",
        gambar: "/images/bsi.svg",
        atasNama: "Rosalia Tsuraya",
      },
    ],
  },
  shortStory: {
    firstYear: {
      tahun: "2002: Awal Pertemuan di Embrio",
      story:
        "Reprehenderit ullamco cupidatat proident cillum aute reprehenderit ullamco velit officia consequat mollit dolor reprehenderit ex.",
    },
    secondYear: {
      tahun: "2021 - 2022: Berkomitmen",
      story:
        "Esse veniam ullamco laboris exercitation duis laborum ut ullamco sit occaecat do excepteur commodo pariatur.",
    },
    thirdYear: {
      tahun: "2023: Sebuah awal dari akhir",
      story:
        "Culpa pariatur sunt dolor minim incididunt commodo consequat officia ea mollit exercitation Lorem exercitation cupidatat.",
    },
    forthYear: {
      tahun: "2025: Akhirnya berakhir",
      story:
        "Quis quis culpa nisi eiusmod incididunt laboris voluptate excepteur dolor nisi eu incididunt.",
    },
  },
  calendarUrl:
    "https://www.google.com/calendar/render?action=TEMPLATE&sf=true&output=xml&text=Pernikahan%20Anies%20dan%20Komari&location=Jl.%20Bukit%20Indah%20Blok%20B.5%20No.6,%20Serua,%20Ciputat,%20Kota%20Tangerang%20Selatan,%20Banten%2015417&details=Pernikahan%20Anies%20Ban%20Dalem%20dan%20Terra%20Komari&dates=20241102T030000Z/20241101T170000Z",
}

export interface IOrangTua {
  nama: string
  ortu: string
}

export interface IResepsiAkad {
  alamat: string
  maps: string
  tanggal: string // Format: DD-MMM-YYYY GMT+0700
  waktu: string
}

export interface IRekening {
  nomor: string
  gambar: string
  atasNama: string
}

export interface IKado {
  penerima: string
  nomer: string
  alamat: string
  rekening: IRekening[]
}

export interface IShortStory {
  tahun: string
  story: string
}

export interface IData {
  mempelai: {
    keduaMempelai: string
    laki: IOrangTua
    perempuan: IOrangTua
    story?: string // Optional jika kadang di-comment
  }
  resepsi: IResepsiAkad
  akad: IResepsiAkad
  kado: IKado
  shortStory: {
    firstYear: IShortStory
    secondYear: IShortStory
    thirdYear: IShortStory
    forthYear: IShortStory
  }
  calendarUrl: string
}

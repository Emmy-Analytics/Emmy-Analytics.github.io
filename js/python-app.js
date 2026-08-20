/* =========================
   PYTHON PROJECT DATA
========================= */

const members = {

    cipuy29: {
        nama: "Devina",
        noHP: "081234567890",
        judulBuku: "Python Dasar",
        tanggalPinjam: "2026-06-01",
        jatuhTempo: "2026-06-15",
        tanggalKembali: "2026-06-17",
        status: "Terlambat",
        denda: 20000,
        stok: 4,
        perpanjangan: 0
    },

    manis12: {
        nama: "Rully",
        noHP: "081234567891",
        judulBuku: "SQL Fundamental",
        tanggalPinjam: "2026-06-05",
        jatuhTempo: "2026-06-19",
        tanggalKembali: "2026-06-18",
        status: "Dikembalikan",
        denda: 0,
        stok: 3,
        perpanjangan: 3
    },

    bae01: {
        nama: "Sita",
        noHP: "081234567892",
        judulBuku: "Machine Learning",
        tanggalPinjam: "2026-06-10",
        jatuhTempo: "2026-06-24",
        tanggalKembali: "",
        status: "Dipinjam",
        denda: 0,
        stok: 2,
        perpanjangan: 5
    },

    anar14: {
        nama: "Ana",
        noHP: "081234567893",
        judulBuku: "Deep Learning",
        tanggalPinjam: "2026-06-12",
        jatuhTempo: "2026-06-26",
        tanggalKembali: "2026-06-25",
        status: "Dikembalikan",
        denda: 0,
        stok: 2,
        perpanjangan: 0
    },

    yuyun28: {
        nama: "Yuyun",
        noHP: "081234567894",
        judulBuku: "Python Dasar",
        tanggalPinjam: "2026-06-10",
        jatuhTempo: "2026-06-24",
        tanggalKembali: "2026-06-27",
        status: "Terlambat",
        denda: 10000,
        stok: 4,
        perpanjangan: 2
    },

    cinta25: {
        nama: "cinta",
        noHP: "081234567895",
        judulBuku: "SQL Fundamental",
        tanggalPinjam: "2026-06-16",
        jatuhTempo: "2026-06-30",
        tanggalKembali: "",
        status: "Dipinjam",
        denda: 0,
        stok: 3,
        perpanjangan: 0
    },

    zakyz8: {
        nama: "Zaky",
        noHP: "081234567896",
        judulBuku: "Machine Learning",
        tanggalPinjam: "2026-05-01",
        jatuhTempo: "2026-05-15",
        tanggalKembali: "",
        status: "Dibekukan",
        denda: 900000,
        stok: 2,
        perpanjangan: 7
    },

    billabil8: {
        nama: "Billa",
        noHP: "081234567897",
        judulBuku: "Deep Learning",
        tanggalPinjam: "2026-04-10",
        jatuhTempo: "2026-04-24",
        tanggalKembali: "",
        status: "Dibekukan",
        denda: 900000,
        stok: 2,
        perpanjangan: 0
    },

    aci33: {
        nama: "Cia",
        noHP: "081234567898",
        judulBuku: "Python Dasar",
        tanggalPinjam: "2026-06-02",
        jatuhTempo: "2026-06-16",
        tanggalKembali: "2026-06-10",
        status: "Dikembalikan",
        denda: 0,
        stok: 4,
        perpanjangan: 0
    },

    danidani4: {
        nama: "Zidan",
        noHP: "081234567899",
        judulBuku: "SQL Fundamental",
        tanggalPinjam: "2026-06-13",
        jatuhTempo: "2026-06-27",
        tanggalKembali: "",
        status: "Dipinjam",
        denda: 0,
        stok: 3,
        perpanjangan: 1
    }

};


const books = {

    BK001: {
        judul: "Python Dasar",
        stok: 10
    },

    BK002: {
        judul: "SQL Fundamental",
        stok: 8
    },

    BK003: {
        judul: "Machine Learning",
        stok: 6
    },

    BK004: {
        judul: "Deep Learning",
        stok: 5
    },

    BK005: {
        judul: "Data Science",
        stok: 4
    },

    BK006: {
        judul: "Excel Advanced",
        stok: 7
    },

    BK007: {
        judul: "Power BI",
        stok: 3
    },

    BK008: {
        judul: "Statistics",
        stok: 9
    },

    BK009: {
        judul: "Artificial Intelligence",
        stok: 5
    },

    BK010: {
        judul: "Clean Code",
        stok: 6
    }

};


/* =========================
   PANEL NAVIGATION
========================= */

function showPanel(panelName) {

    document
        .querySelectorAll(".app-panel")
        .forEach(function (panel) {

            panel.classList.remove("active");

        });


    document
        .querySelectorAll(".app-menu")
        .forEach(function (button) {

            button.classList.remove("active");

        });


    document
        .getElementById(`${panelName}-panel`)
        .classList.add("active");


    const buttons =
        document.querySelectorAll(".app-menu");

    const panelIndex = {

        member: 0,
        books: 1,
        rules: 2,
        extension: 3

    };


    buttons[
        panelIndex[panelName]
    ].classList.add("active");


    if (panelName === "books") {

        renderBooks();

    }

}


/* =========================
   SEARCH MEMBER
========================= */

function searchMember() {

    const input =
        document
            .getElementById("member-input")
            .value
            .trim()
            .toLowerCase();


    const result =
        document.getElementById(
            "member-result"
        );


    if (!input) {

        result.innerHTML = `
            <div class="empty-state">
                Please enter a member ID.
            </div>
        `;

        return;

    }


    const member = members[input];


    if (!member) {

        result.innerHTML = `
            <div class="validation-result error">
                Member ID <strong>${input}</strong>
                was not found.
            </div>
        `;

        return;

    }


    let statusClass = "";

    if (member.status === "Terlambat") {
        statusClass = "status-late";
    }

    if (member.status === "Dikembalikan") {
        statusClass = "status-active";
    }

    if (member.status === "Dibekukan") {
        statusClass = "status-frozen";
    }


    result.innerHTML = `

        <div class="member-card">

            <div class="member-name">
                ${member.nama}
            </div>

            <div class="member-book">
                ${member.judulBuku}
            </div>


            <div class="member-details">

                <div>
                    <span>MEMBER ID</span>
                    <strong>${input}</strong>
                </div>

                <div>
                    <span>PHONE</span>
                    <strong>${member.noHP}</strong>
                </div>

                <div>
                    <span>LOAN DATE</span>
                    <strong>${member.tanggalPinjam}</strong>
                </div>

                <div>
                    <span>DUE DATE</span>
                    <strong>${member.jatuhTempo}</strong>
                </div>

                <div>
                    <span>RETURN DATE</span>
                    <strong>
                        ${member.tanggalKembali || "-"}
                    </strong>
                </div>

                <div>
                    <span>STATUS</span>
                    <strong class="${statusClass}">
                        ${member.status}
                    </strong>
                </div>

                <div>
                    <span>FINE</span>
                    <strong>
                        Rp${member.denda.toLocaleString("id-ID")}
                    </strong>
                </div>

                <div>
                    <span>EXTENSION</span>
                    <strong>
                        ${member.perpanjangan} days
                    </strong>
                </div>

            </div>

        </div>

    `;

}


/* =========================
   BOOKS
========================= */

function renderBooks() {

    const list =
        document.getElementById(
            "book-list"
        );


    list.innerHTML = "";


    Object.entries(books)
        .forEach(function ([id, book]) {

            list.innerHTML += `

                <div class="book-card">

                    <strong>
                        ${book.judul}
                    </strong>

                    <span>
                        ${id} · ${book.stok} copies
                    </span>

                </div>

            `;

        });

}


/* =========================
   EXTENSION VALIDATION
========================= */

function testExtension() {

    const id =
        document
            .getElementById("extension-member")
            .value
            .trim()
            .toLowerCase();


    const days =
        Number(
            document
                .getElementById("extension-days")
                .value
        );


    const result =
        document.getElementById(
            "extension-result"
        );


    if (!id) {

        result.className =
            "validation-result error";

        result.textContent =
            "Please enter a member ID.";

        return;

    }


    if (!members[id]) {

        result.className =
            "validation-result error";

        result.textContent =
            "Member ID not found.";

        return;

    }


    if (days < 0 || days > 7) {

        result.className =
            "validation-result error";

        result.textContent =
            "Extension must be between 0 and 7 days.";

        return;

    }


    const member = members[id];


    if (member.status === "Dikembalikan") {

        result.className =
            "validation-result error";

        result.textContent =
            "Cannot extend: the book has already been returned.";

        return;

    }


    if (member.status === "Belum Meminjam") {

        result.className =
            "validation-result error";

        result.textContent =
            "Cannot extend: this member is not currently borrowing a book.";

        return;

    }


    if (member.status === "Terlambat") {

        result.className =
            "validation-result error";

        result.textContent =
            "Cannot extend: the member still has an outstanding fine.";

        return;

    }


    if (member.status === "Dibekukan") {

        result.className =
            "validation-result error";

        result.textContent =
            "Cannot extend: membership is currently frozen.";

        return;

    }


    const total =
        member.perpanjangan + days;


    if (total > 7) {

        result.className =
            "validation-result error";

        result.textContent =
            `Cannot extend: maximum extension is 7 days.
            Current extension is ${member.perpanjangan} days.`;

        return;

    }


    result.className =
        "validation-result success";

    result.innerHTML = `
        ✓ Extension is allowed.

        Current extension:
        ${member.perpanjangan} days.

        Requested:
        ${days} days.

        New total:
        ${total} days.
    `;

}


/* INITIALIZE */

renderBooks();
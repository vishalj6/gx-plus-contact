let localstorage_arr = [];

const entriesPerPage = 8;
let currentPage = 1;
let totalPages = 1;

// document.ready starts
$(document).ready(function () {
    try {
        localstorage_arr = JSON.parse(localStorage.getItem("contact-us-data")) || [];
    } catch (error) {
        console.error("Error parsing JSON data from localStorage:", error);
        localstorage_arr = [];
    }

    totalPages = Math.ceil(localstorage_arr.length / entriesPerPage);

    initPagination();
    renderTable();
    toggleTheme();

    $('#prev-page').prop('disabled', currentPage === 1);
    $('#next-page').prop('disabled', currentPage === totalPages);

    $(document).on('click', '#prev-page', function () {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    });

    $(document).on('click', '#next-page', function () {
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    });

    $('#darkmode-btn').on('click', function () {
        let theme = localStorage.getItem('view-details-theme');
        if (theme === 'dark') {
            localStorage.setItem('view-details-theme', 'light');
        } else {
            localStorage.setItem('view-details-theme', 'dark');
        }
        toggleTheme();
    });

    $("#table-search").on("input", function () {
        var value = $(this).val().toLowerCase();
        $(".table-custom tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1) // this.toggle(true) means show the element, false means hide the element
        });
    });
});
// document.ready ends

function updateTotalPageBtns() {
    let totalPagesBtns = '';
    for (let i = 1; i <= totalPages; i++) {
        totalPagesBtns += `<button id='page-${i}' onclick='goToPage(${i})' class='single-page-btn'>${i}</button>`;
    }
    $('#total-pages-btns').html(totalPagesBtns);
    $(`#page-${currentPage}`).css({ backgroundColor: '#078db9', color: '#fff' });
}

function renderTable() {
    const tbody = $('tbody');
    if (!localstorage_arr || localstorage_arr.length === 0) {
        $('.main-table-container').html(`<div class='no-data-available'><div class='no-data-imgdiv'><img src='./Assets/nodata.png' class='no-data-img img-fluid' alt='No data available' /></div><span>No Data Available</span><button type="button" class="go-back-btn"><a href='demowebpage.html#get-in-touch-section' class='anchor-none'><i class="fa-solid fa-backward"></i> Add Data</a></button></div>`);
        $('#prev-page, #next-page').prop('disabled', true);
        return;
    }

    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = Math.min(startIndex + entriesPerPage, localstorage_arr.length);

    tbody.empty();
    let all_rows = '';
    for (let i = startIndex; i < endIndex; i++) {
        const rowData = localstorage_arr[i];
        let row = `<tr><td>${i + 1}</td>`;
        for (let key in rowData) {
            if (!rowData[key]) {
                row += "<td>Not Available</td>";
            } else {
                row += `<td>${rowData[key]}</td>`;
            }
        }
        row += `<td><button class="edit-btn" onclick='handleEditObj(${i})'><i class="fa-solid fa-pen-to-square"></i> Edit</button></td><td><button class="delete-btn" onclick='handleDeleteObj(${i})'><i class="fa-solid fa-trash"></i> Delete</button></td></tr>`;
        all_rows += row;
    }
    tbody.html(all_rows);
    updateTotalPageBtns();
}

function goToPage(page) {
    currentPage = page;
    renderTable();

    $('#prev-page').prop('disabled', currentPage === 1);
    $('#next-page').prop('disabled', currentPage === totalPages);
}

function handleEditObj(i) {
    window.location.href = `demowebpage.html?editId=${i}#get-in-touch-section`;
}

function handleDeleteObj(i) {
    if (isNaN(i) || i < 0 || i >= localstorage_arr.length) {
        console.error("Invalid index:", i);
        return;
    }
    let confirmation = confirm("Are you sure you want to delete this data ?");
    if (confirmation) {
        const startIndex = (currentPage - 1) * entriesPerPage;
        const endIndex = Math.min(startIndex + entriesPerPage, localstorage_arr.length);

        localstorage_arr.splice(i, 1);
        localStorage.setItem("contact-us-data", JSON.stringify(localstorage_arr));

        totalPages = Math.ceil(localstorage_arr.length / entriesPerPage);

        if (i >= startIndex && i < endIndex) {
            if (localstorage_arr.length % entriesPerPage === 0) {
                if (currentPage == totalPages + 1) {
                    currentPage = Math.max(1, currentPage - 1);
                }
            }
        }
        renderTable();
    }
}

function initPagination() {
    totalPages = Math.ceil((localstorage_arr || []).length / entriesPerPage);
    if (totalPages > 0) {
        updateTotalPageBtns();
    }
}

function deleteAlldata() {
    let conformation = confirm("Are you sure You want to Delete all the Data ?");
    if (conformation) {
        localStorage.removeItem("contact-us-data");
        localstorage_arr = [];
        currentPage = 1;
        totalPages = 1;
        renderTable();
    }
}

function toggleTheme() {
    let theme = localStorage.getItem('view-details-theme');
    if (!theme) {
        theme = 'dark';
        localStorage.setItem('view-details-theme', theme);
    }
    if (theme == 'dark') {
        $('.table-custom').addClass('table-dark');
        $('#darkmode-btn').removeClass('light-mode-on').addClass('dark-mode-on');
        $('#theme-btn-text').html("Light Mode");

        $('.pagination-custom').addClass('pagination-custom-dark');
        $(`#page-${currentPage}`).css({ backgroundColor: '#078db9', color: '#fff' });
        $('.main-table-container').css({ backgroundColor: '#000b11f5' });
        $('.table-custom').css({ borderColor: '#ffffff3b' });
        $('#table-search').addClass('dark');

    } else if (theme == "light") {
        $('.table-custom').removeClass('table-dark');
        $('#darkmode-btn').removeClass('dark-mode-on').addClass('light-mode-on');
        $('#theme-btn-text').html("Dark Mode");

        $('.pagination-custom').removeClass('pagination-custom-dark');
        $(`#page-${currentPage}`).css({ backgroundColor: '#078db9', color: '#fff' });
        $('.main-table-container').css({ backgroundColor: '#3d3d3da8' });
        $('.table-custom').css({ borderColor: '#0000003b' });
        $('#table-search').removeClass('dark');
    }
}

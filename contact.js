const countryData = {
    "India": {
        "Andaman and Nicobar Islands": ["Port Blair", "Diglipur", "Mayabunder"],
        "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
        "Arunachal Pradesh": ["Itanagar", "Tawang", "Naharlagun"],
        "Assam": ["Guwahati", "Dibrugarh", "Silchar"],
        "Bihar": ["Patna", "Gaya", "Bhagalpur"],
        "Chandigarh": ["Chandigarh"],
        "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur"],
        "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Silvassa", "Diu"],
        "Delhi": ["New Delhi", "North Delhi", "South Delhi"],
        "Goa": ["Panaji", "Margao", "Vasco da Gama"],
        "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
        "Haryana": ["Faridabad", "Gurgaon", "Panipat"],
        "Himachal Pradesh": ["Shimla", "Mandi", "Solan"],
        "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag"],
        "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
        "Karnataka": ["Bangalore", "Mysore", "Hubli"],
        "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
        "Ladakh": ["Leh", "Kargil"],
        "Lakshadweep": ["Kavaratti", "Minicoy", "Andrott"],
        "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
        "Manipur": ["Imphal", "Thoubal", "Bishnupur"],
        "Meghalaya": ["Shillong", "Tura", "Jowai"],
        "Mizoram": ["Aizawl", "Lunglei", "Saiha"],
        "Nagaland": ["Kohima", "Dimapur", "Mokokchung"],
        "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
        "Puducherry": ["Puducherry", "Karaikal", "Mahe"],
        "Punjab": ["Ludhiana", "Amritsar", "Jalandhar"],
        "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur"],
        "Sikkim": ["Gangtok", "Namchi", "Gyalshing"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
        "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
        "Tripura": ["Agartala", "Dharmanagar", "Udaipur"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
        "Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh"],
        "West Bengal": ["Kolkata", "Asansol", "Siliguri"]
    },
    "USA": {
        "California": ["Los Angeles", "San Francisco", "San Diego"],
        "New York": ["New York City", "Buffalo", "Rochester"],
        "Texas": ["Houston", "Dallas", "Austin"]
    },
    "UK": {
        "England": ["London", "Manchester", "Birmingham"],
        "Scotland": ["Glasgow", "Edinburgh", "Aberdeen"],
        "Wales": ["Cardiff", "Swansea", "Newport"]
    },
    "Australia": {
        "New South Wales": ["Sydney", "Newcastle", "Wollongong"],
        "Victoria": ["Melbourne", "Geelong", "Ballarat"],
        "Queensland": ["Brisbane", "Gold Coast", "Sunshine Coast"]
    },
    "Canada": {
        "Ontario": ["Toronto", "Ottawa", "Hamilton"],
        "Quebec": ["Montreal", "Quebec City", "Laval"],
        "British Columbia": ["Vancouver", "Victoria", "Kelowna"]
    },
    "France": {
        "Île-de-France": ["Paris", "Versailles", "Boulogne-Billancourt"],
        "Provence-Alpes-Côte d'Azur": ["Marseille", "Nice", "Cannes"],
        "Auvergne-Rhône-Alpes": ["Lyon", "Grenoble", "Saint-Étienne"]
    },
    "Germany": {
        "North Rhine-Westphalia": ["Cologne", "Düsseldorf", "Dortmund"],
        "Bavaria": ["Munich", "Nuremberg", "Augsburg"],
        "Baden-Württemberg": ["Stuttgart", "Karlsruhe", "Freiburg"]
    },
    "China": {
        "Beijing": ["Beijing", "Shijiazhuang", "Baoding"],
        "Shanghai": ["Shanghai", "Suzhou", "Hangzhou"],
        "Guangdong": ["Guangzhou", "Shenzhen", "Dongguan"]
    },
    "Brazil": {
        "São Paulo": ["São Paulo", "Campinas", "Santo André"],
        "Rio de Janeiro": ["Rio de Janeiro", "Niterói", "Duque de Caxias"],
        "Minas Gerais": ["Belo Horizonte", "Uberlândia", "Contagem"]
    },
    "Russia": {
        "Moscow": ["Moscow", "Saint Petersburg", "Novosibirsk"],
        "Tatarstan": ["Kazan", "Naberezhnye Chelny", "Nizhnekamsk"],
        "Sverdlovsk": ["Yekaterinburg", "Nizhny Tagil", "Kamensk-Uralsky"]
    },
    "Japan": {
        "Tokyo": ["Tokyo", "Yokohama", "Osaka"],
        "Kanagawa": ["Yokohama", "Kawasaki", "Sagamihara"],
        "Osaka": ["Osaka", "Sakai", "Higashiōsaka"]
    },
    "South Korea": {
        "Seoul": ["Seoul", "Incheon", "Suwon"],
        "Busan": ["Busan", "Ulsan", "Gimhae"],
        "Gyeonggi": ["Goyang", "Seongnam", "Yongin"]
    },
    "Mexico": {
        "Mexico City": ["Mexico City", "Ecatepec", "Guadalajara"],
        "Jalisco": ["Guadalajara", "Zapopan", "Tlaquepaque"],
        "Nuevo León": ["Monterrey", "Guadalupe", "San Nicolás de los Garza"]
    },
    "Italy": {
        "Lazio": ["Rome", "Latina", "Fiumicino"],
        "Lombardy": ["Milan", "Brescia", "Monza"],
        "Campania": ["Naples", "Salerno", "Torre del Greco"]
    },
    "Spain": {
        "Madrid": ["Madrid", "Móstoles", "Alcalá de Henares"],
        "Catalonia": ["Barcelona", "L'Hospitalet de Llobregat", "Badalona"],
        "Andalusia": ["Seville", "Málaga", "Córdoba"]
    }
};

const countryCodes = {
    "India": "+91",
    "USA": "+1",
    "UK": "+44",
    "Australia": "+61",
    "Canada": "+1",
    "France": "+33",
    "Germany": "+49",
    "China": "+86",
    "Brazil": "+55",
    "Russia": "+7",
    "Japan": "+81",
    "South Korea": "+82",
    "Mexico": "+52",
    "Italy": "+39",
    "Spain": "+34"
};

const queryString = window.location.search;
let urlParams = null;
if (queryString) {
    urlParams = new URLSearchParams(queryString);
}

let editIndex = null;
if (urlParams && urlParams.size != 0) {
    editIndex = Number(urlParams.get('editId'));
}

function populateOptions(selectElement, options) {
    selectElement.innerHTML = "<option value='' disabled selected>Select an Option</option>";
    for (let option of options) {
        selectElement.innerHTML += "<option value='" + option + "'>" + option + "</option>";
    }
}

function handleCountrySelection() {
    const selectedCountry = $("#contact-form-country").val();
    const contactFormState = $("#contact-form-state");
    const contactFormCity = $("#contact-form-city");
    const countryCode = $("#country-code");

    if (selectedCountry == "" || !countryData[selectedCountry]) {
        showFailureToast("Please select a valid country.");
        // alert("Please select a valid country.");
        $("#contact-form-country").focus();
        return;
    }

    countryCode.text(countryCodes[selectedCountry]);
    populateOptions(contactFormState[0], Object.keys(countryData[selectedCountry]));
    contactFormCity.html("<option value='' disabled selected>Select an Option</option>");
}

function handleStateSelection() {
    const selectedCountry = $("#contact-form-country").val();
    const selectedFormState = $("#contact-form-state").val();
    const contactFormCity = $("#contact-form-city");

    if (selectedCountry == "" || selectedFormState == "" || !countryData[selectedCountry][selectedFormState]) {
        $("#contact-form-country").focus();
        showFailureToast("Please select both country and state.");
        // alert("Please select both country and state.");
        return;
    }

    populateOptions(contactFormCity[0], countryData[selectedCountry][selectedFormState]);
}

function validateContactForm() {
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let country = $('#contact-form-country').val();
    let state = $('#contact-form-state').val();
    let city = $('#contact-form-city').val();
    let phoneno = $('#phone-no').val();
    let address = $('#writeaddress').val();
    let email = $('#email');

    const NameRegex = /^[a-zA-Z]+[']*[a-zA-Z]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let PhoneRegex = /[6789][0-9]{9}/;
    $('#contact-us-form').addClass('was-validated');


    if (firstName != null && lastName != null && country != null && state != null && city != null && phoneno != null && email.val() != null) {
        if (firstName.trim() === '' || lastName.trim() === '' || country.trim() === '' || state.trim() === '' || city.trim() === '' || phoneno.trim() === '' || email.val().trim() === '') {
            showFailureToast('Please fill all the Required Details');
            return false;
        }
    }
    else {
        showFailureToast('Please fill all the Required Details');
        return false;
    }

    if (!emailRegex.test(email.val())) {
        showFailureToast('Please enter a valid email address');
        email.focus();
        return false;
    }
    if (!NameRegex.test(firstName)) {
        showFailureToast('Please enter a valid First Name');
        $('#first-name').focus();
        return false;
    }

    if (!NameRegex.test(lastName)) {
        showFailureToast('Please enter a valid Last Name');
        $('#last-name').focus()
        return false;
    }

    if (!PhoneRegex.test(phoneno)) {
        showFailureToast('Please enter a valid phone no.');
        $('#phone-no').focus();
        return false;
    }

    let localstorage_arr = JSON.parse(localStorage.getItem("contact-us-data"));

    const isEmailExist = localstorage_arr && localstorage_arr.some((obj, index) => {
        if (editIndex != null && editIndex != NaN && index === editIndex) {
            return false;
        }
        return obj['email'] === email.val();
    });

    const isPhoneExist = localstorage_arr && localstorage_arr.some((obj, index) => {
        if (editIndex != null && editIndex != NaN && index === editIndex) {
            return false;
        }
        return obj['phoneno'] === phoneno;
    });

    if (isPhoneExist) {
        showFailureToast('Phone no. already in use!!');
        $('#phone-no').removeClass('is-valid').addClass('is-invalid');
        $('.phone-no').siblings('.valid-feedback').hide();
        $('.phone-no').siblings('.invalid-feedback').show().text('Phone Number already in use!');
        $('#phone-no').focus();
        return false;
    } else {
        $('#phone-no').removeClass('is-invalid').addClass('is-valid');
        $('.phone-no').siblings('.invalid-feedback').hide();
        $('.phone-no').siblings('.valid-feedback').show();
    }

    if (isEmailExist) {
        showFailureToast('Email already in use!!');
        $('#email').removeClass('is-valid').addClass('is-invalid');
        $('.email').siblings('.valid-feedback').hide();
        $('.email').siblings('.invalid-feedback').show().text('Email already in use!');
        $('#email').focus();
        return false;
    } else {
        $('#email').removeClass('is-invalid').addClass('is-valid');
        $('.email').siblings('.invalid-feedback').hide();
        $('.email').siblings('.valid-feedback').show();
    }

    const contact_us_obj = {
        firstName,
        lastName,
        country,
        phoneno,
        state,
        city,
        email: email.val(),
        address
    }
    return contact_us_obj;
}

function saveLocalStorage(cotact_us_obj) {
    let localstorage_arr = JSON.parse(localStorage.getItem("contact-us-data"));
    if (editIndex != null && editIndex != NaN) {
        localstorage_arr.splice(editIndex, 1, cotact_us_obj)
        localStorage.setItem("contact-us-data", JSON.stringify(localstorage_arr));
    }
    else {
        if ((localstorage_arr != '' && localstorage_arr != null) && localstorage_arr.length > 0) {
            localstorage_arr.push(cotact_us_obj);
            localStorage.setItem("contact-us-data", JSON.stringify(localstorage_arr));
        }
        else {
            let new_arr = [];
            new_arr.push(cotact_us_obj);
            localStorage.setItem("contact-us-data", JSON.stringify(new_arr));
        }
    }
    showSuccessToast();
    // alert("Data saved Successfully");
    setTimeout(function () {
        window.location.href = 'view_details.html';
    }, 2000);
}

function handleEdit(index) {
    let localstorage_arr = JSON.parse(localStorage.getItem("contact-us-data"));
    $('#first-name').val(localstorage_arr[index]['firstName']);
    $('#last-name').val(localstorage_arr[index]['lastName']);
    let selectedCountry = localstorage_arr[index]['country'];
    let selectedFormState = localstorage_arr[index]['state'];
    $('#contact-form-country').val(selectedCountry);

    populateOptions($('#contact-form-state')[0], Object.keys(countryData[selectedCountry]));
    $('#contact-form-state').val(selectedFormState);

    populateOptions($('#contact-form-city')[0], countryData[selectedCountry][selectedFormState]);
    $('#contact-form-city').val(localstorage_arr[index]['city']);

    $('#phone-no').val(localstorage_arr[index]['phoneno']);
    $('#email').val(localstorage_arr[index]['email']);
    $('#writeaddress').val(localstorage_arr[index]['address']);

    $('.send-btn').html("<i class='fas fa-save'></i> Save");
}

function showSuccessToast() {
    var toastElList = [].slice.call(document.querySelectorAll('#liveToast.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show());
}

function showFailureToast(msg) {
    var toastElList = [].slice.call(document.querySelectorAll('#liveToast2.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show());
    $('#liveToast2.toast span').text(msg);
}

// document.ready starts
$(document).ready(function () {
    $("#phone-no").on("input", function () {
        var inputValue = $(this).val();
        if (!/^\d+$/.test(inputValue) && inputValue) {
            $(this).val("");
            showFailureToast("Please enter only numbers (0 to 9).")
        }
    });

    const form = $('#contact-us-form');
    form.on("submit", function (e) {
        e.preventDefault();
        if (validateContactForm()) {
            saveLocalStorage(validateContactForm());
        }
    });

    form.on("reset", function () {
        $(this).removeClass('was-validated')
        $('#contact-form-state').html("<option value='' disabled selected>Select an Option</option>");
        $('#contact-form-city').html("<option value='' disabled selected>Select an Option</option>");
    });

    $('#contact-form-country').on('change', function () {
        handleCountrySelection();
    });

    $('#contact-form-state').on('change', function () {
        handleStateSelection();
    });

    if (editIndex != null && editIndex != NaN) {
        handleEdit(editIndex);
    }

});

// document.ready ends
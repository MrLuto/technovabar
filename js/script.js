const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


$(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
            GetOsiris(urlParams.get('auth'))
        });

function GetOsiris(api) {
    var data = { auth: api }
    const d = new Date();
    fetch("https://api.rainger.nl/osiris/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
        var TodayRooster = data["items"][0]["dagen"][d.getDay() - 1]["rooster"]
        // generate html for all the lessons in TodayRooster
        console.log(TodayRooster);
        var html = ""
        for (var i = 0; i < TodayRooster.length; i++) {
            html += `<label class="list-group-item d-flex gap-2">
                        <span>${TodayRooster[i]["onderwerp"]}
                            <small class="d-block text-muted">${TodayRooster[i]["tijd_vanaf"]} - ${TodayRooster[i]["tijd_tm"]} <br> ${getDocenten(TodayRooster[i]["docenten"])} <br> ${TodayRooster[i]["locatie"]}</small>
                        </span>
                    </label>`
        }
        document.getElementById("rooster").innerHTML = html
    });
}

function getDocenten(e) {
    var allDocenten = ""
e.forEach(e2 => {
    allDocenten += e2.naam
});
return allDocenten
}

function processData(data) {
    console.log(data);
}
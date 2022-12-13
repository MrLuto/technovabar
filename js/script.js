$(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
            GetOsiris("g2HsdDL6ZxvhHehKTYy8u4N9gpw")
            
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
    .then((data) => console.log(data["items"][0]["dagen"][d.getDay()]["rooster"]));
}
    
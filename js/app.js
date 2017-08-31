let users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

let user = "ShoutFactoryTV"

function checkUserStatus(user) {
    let authToken = "w4plbrjn342lrt20htpwepjkg4p3ff"
    let url = `https://wind-bow.gomix.me/twitch-api/streams/${user}?callback=?`

    $.getJSON(url,function (data, userNumber) {
    if (data.stream) {
            console.log("live");
            let url = data.stream.channel.url
            let logo = data.stream.channel.logo
            let desc = data.stream.channel.status

            let myHTML = `<div class="row justify-content-center content-row" id="${userNumber}">
                <div class="col-sm-1 stream-image online">
                    <img src="${logo}" alt="${url}" class="stream-logo">
                </div>
                <div class="col-sm-5 stream-info justify-content-left online">
                    <div class="user-name">${user}</div><div class="stream-desc">${desc}</div>
                </div>
            </div>`

            $(".content-container").append(myHTML)
            // $(`#${userNumber}`).click(window.location.href = url)

    } else {
        console.log("live");
        // let url = data.stream.channel.url
        // let logo = data.stream.channel.logo
        // let desc = data.stream.channel.status

        let myHTML = `<div class="row justify-content-center content-row" id="${userNumber}">
        <div class="col-sm-1 stream-image ofline">
            
        </div>
        <div class="col-sm-5 stream-info justify-content-left offline">
            <div class="user-name">${user}</div>
        </div>
        </div>`

        // <div class="col-sm-1 stream-image online">
        //     <img src="${logo}" alt="${url}" class="stream-logo">
        // </div>
        // <div class="col-sm-5 stream-info justify-content-left online">
        //     <div class="user-name">${user}</div><div class="stream-desc">${desc}</div>
        // </div>
        //
        $(".content-container").append(myHTML)
    }
    console.log(data);
})
}

for (var i = 0; i < users.length; i++) {
    checkUserStatus(users[i], i)
}

let script = document.createElement('script')

fetch('/apiKey')
.then((res) => {
    return res.text()

}).then((res) => {
    let googleReq = `https://maps.googleapis.com/maps/api/js?key=${res}&libraries=places&callback=initMap`;
    script.setAttribute('src', googleReq)
    script.setAttribute('async', true)
    script.setAttribute('defer', true)
    document.body.appendChild(script)

    return script
})
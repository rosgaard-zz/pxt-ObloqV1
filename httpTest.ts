//get post
Obloq.Obloq_http_setup(
    SerialPin.P1,
    SerialPin.P2,
    "yourSSID",
    "yourPASSWORD"
    )
    basic.forever(() => {
        basic.showString(Obloq.Obloq_http_post("4b7ff593-bf90-4109-acba-f6a331c36bfa", "100", 10000))
        basic.pause(60000)
    })

//get post
Obloq.Obloq_http_setup(
    SerialPin.P1,
    SerialPin.P2,
    "dfrobotYanfa",
    "hidfrobot"
    )
    basic.forever(() => {
        basic.showString(Obloq.Obloq_http_get("4b7ff593-bf90-4109-acba-f6a331c36bfa", 10000))
        basic.pause(50)
        basic.showString(Obloq.Obloq_http_post("4b7ff593-bf90-4109-acba-f6a331c36bfa", "100", 10000))
        basic.pause(50)
    })
    
//IFTTT
Obloq.Obloq_http_setup(
    SerialPin.P1,
    SerialPin.P2,
    "dfrobotYanfa",
    "hidfrobot",
    "maker.ifttt.com",
    80
    )
    basic.showString(Obloq.Obloq_wifi_ipconfig())
    basic.forever(() => {
        basic.showString(Obloq.Obloq_http_get("trigger/testobloq/with/key/h_srC8EuWGX5izhfi7pi5", 10000))
        basic.pause(100)
    })


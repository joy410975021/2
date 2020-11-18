input.onButtonPressed(Button.A, function () {
    radio.sendString("3")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("A")
})
radio.setGroup(5)

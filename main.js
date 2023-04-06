chrome.runtime.onMessage.addListener((req, res, next) => {
    const buttons = document.querySelectorAll('.button-12Fmur');
    if(req.type === 'mic'){
        const muteButton = buttons[1];
        muteButton.click();
        const status = muteButton.getAttribute('aria-checked')
        next(status)
    }else if(req.type === 'ask'){
        next([buttons[1].getAttribute('aria-checked'), buttons[2].getAttribute('aria-checked')])
    }else{
        const deafenButtom = buttons[2];
        const muteButton = buttons[1];
        deafenButtom.click();
        const status = deafenButtom.getAttribute('aria-checked')
        const status2 = muteButton.getAttribute('aria-checked')
        next([status, status2])
    }
});
chrome.runtime.onMessage.addListener((req, res, next) => {
    const buttons = document.querySelectorAll('.button-12Fmur');
    if(req.type === 'mic'){
        const muteButton = buttons[0];
        muteButton.click();
        const status = muteButton.getAttribute('aria-checked')
        next(status)
    }else if(req.type === 'ask'){
        next([buttons[0].getAttribute('aria-checked'), buttons[1].getAttribute('aria-checked')])
    }else{
        const deafenButtom = buttons[1];
        const muteButton = buttons[0];
        deafenButtom.click();
        const status = deafenButtom.getAttribute('aria-checked')
        const status2 = muteButton.getAttribute('aria-checked')
        next([status, status2])
    }
});
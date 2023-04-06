const urlDomain = `*://*.discord.com/*`
const muteButton = document.getElementById('mute');
const deafenButton  = document.getElementById('deafen');

const icons = {
    mic: `<i class="microphone icon" style="visibility: visible;"></i>`,
    micMuted: `<i class="microphone slash icon" style="visibility: visible;"></i>`,
    deafen: `<i class="volume up icon" style="visibility: visible;"></i>`,
    deafenMuted: `<i class="volume mute icon" style="visibility: visible;"></i>`
}

document.addEventListener('DOMContentLoaded', ()=>{
    chrome.tabs.query({url: urlDomain},(tabs)=>{
        if (tabs.length > 0){
            return chrome.tabs.sendMessage(tabs[0].id, {type: 'ask',}, (response)=>{
                const [mute, deafen] = response;
                const micIcon = (mute === 'false') ? icons['mic'] : icons['micMuted'] ;
                const deafIcon = (deafen === 'false') ? icons['deafen'] : icons['deafenMuted'];
                muteButton.innerHTML = micIcon;
                deafenButton.innerHTML = deafIcon;
            }
            )
        }
    });
})


muteButton.addEventListener('click', ()=>{
    chrome.tabs.query({url: urlDomain},(tabs)=>{
        if (tabs.length > 0){
            return chrome.tabs.sendMessage(tabs[0].id, {type: 'mic',}, (response)=>{
                micStatus = response;
                const micIcon = (micStatus === 'true') ? icons['mic'] : icons['micMuted'];
                muteButton.innerHTML = micIcon;
            }
            )
        }
    });
})



deafenButton.addEventListener('click', ()=>{
    chrome.tabs.query({url: urlDomain},(tabs)=>{
        if (tabs.length > 0){
            return chrome.tabs.sendMessage(tabs[0].id, {type: 'def',}, (response)=>{
                const [res1] = response
                const deafIcon = (res1 == 'true') ? icons['deafen'] : icons['deafenMuted'];
                deafenButton.innerHTML = deafIcon;
            }
            )
        }
    });
})


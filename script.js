const currentip = document.getElementById('curr-ip');
const fectdatabtn = document.getElementById('start-api');

async function getUserIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');   
        const data = await response.json();
        currentip.innerText = `Your Current IP Address is ${data.ip}`;
        return data.ip;
    } catch (error) {
        console.error('Error:', error);
        currentip.innerText = 'Error fetching IP address.';
    }
}

getUserIP();

fectdatabtn.addEventListener('click', async () => {
    const ip = await getUserIP();
    if (ip) {
        window.location.href = `listing.html?ip=${ip}`;
    }
});

window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ip = urlParams.get('ip');

    document.getElementById('ip-add').innerHTML = `IP Address : <span>${ip}</span>`;

    try {
        const response = await fetch(`https://ipapi.co/${ip}/json/`);
        const data = await response.json();
        console.log(data)
        getdataonui(data);
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching IP information: ' + error.message);
    }
   
};

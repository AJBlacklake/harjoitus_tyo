function getAllDevices () {
    console.log("Script loaded");
    document.addEventListener('DOMContentLoaded', function() {
        console.log("asdfasdf");
        fetch('https://api.restful-api.dev/objects')
            .then(response => response.json())
            .then(data => {
                const deviceList = document.getElementById("device-list");
                data.forEach(device => {
                    console.log(device);
                    const listItem = document.createElement('list-item');
                    listItem.setAttribute('name', device.name);
                    listItem.setAttribute("price", device?.data?.price ? device?.data?.price + "€" : "No price");
                    listItem.setAttribute("id", device.id);
                    deviceList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Error fetching device data:', error)
                alert("We are very sorry but you reached your limit of requests per day. Our current limit is equal to 100 requests per day. The reason for that is the fact that servers cost money and 200 requests per user per day is all that we can afford at the moment. Tomorrow the limit will reset and you will be able to continue. Thanks and have a good day!");
            });
    });
}

getAllDevices();
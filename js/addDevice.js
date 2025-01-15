export function addDevice (event) {
    event.preventDefault();
    const name = document.getElementById('device_name').value;
    const price = document.getElementById('device_price').value;
    const body = { name: name, data:{ price: price } };
    fetch('https://api.restful-api.dev/objects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((response) => response.json())
        .then((data) => {
            alert('Device added successfully');
            const deviceList = document.getElementById("device-list");
            const listItem = document.createElement('list-item');
            listItem.setAttribute("name", data.name);
            listItem.setAttribute("price", data?.data?.price ? data?.data?.price + "€" : "No price");
            listItem.setAttribute("id", data.id);
            deviceList.appendChild(listItem);
            document.getElementById('add-device-form').reset();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
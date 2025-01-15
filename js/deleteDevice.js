export function deleteDevice (event) {
    console.log(" --- DELETING ---", event.target);
    
    event.preventDefault();
    const id = event.target.getAttribute("id");
    fetch('https://api.restful-api.dev/objects/' + id,{
        method: 'DELETE',
    })
        .then((response) => {
            alert('Device deleted successfully');
            const deviceList = document.getElementById("device-list");
            const listItem = document.getElementById(id);
            deviceList.removeChild(listItem);
        })
        .catch((error) => {
            console.error('Error:', error);
    })
}


class ListItem extends HTMLElement {
    constructor() { 
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <li class="list-group-item border-bottom">
                <div class="row" style="align-items: center;" >
                    <div class="col-4">
                        <span class="h7" id="name" >${this.getAttribute('name')}</span>
                        <input type="text" class="form-control d-none" id="name-input" value="${this.getAttribute('name')}">
                    </div>
                    <div class="col-2">
                        <span class="h7" id="price" >${this.getAttribute('price')}</span>
                        <input type="" class="form-control d-none" id="price-input" value="${this.getAttribute('price')}">
                    </div>
                    <div class="col-6">
                        <button class="btn btn-outline-success d-none" id="save-button" >Save</button>
                        <button class="btn btn-outline-primary edit-button" >Edit</button>
                        <button class="btn btn-outline-danger delete-button"  >Delete</button>
                    </div>
                </div>
            </li>
        `;
        this.querySelector('.delete-button').addEventListener('click', (e) => this.deleteDevice(e));
        this.querySelector('.edit-button').addEventListener('click', (e) => this.toggleEdit(e));
        this.querySelector('#save-button').addEventListener('click', (e) => this.updateDevice(e));
    }

    deleteDevice(event) {
        console.log(" --- DELETING ---", event.target);
        event.preventDefault();
        const deviceId = this.getAttribute('id');
        
        console.log(`Deleting device with ID: ${deviceId}`);
        fetch('https://api.restful-api.dev/objects/' + deviceId,{
            method: 'DELETE',
        })
        .then((response) => {
            const deviceList = document.getElementById("device-list");
            const listItem = document.getElementById(deviceId);
            deviceList.removeChild(listItem);
            alert('Device deleted successfully');
        })
        .catch((error) => {
            console.error('Error:', error);
           
        })
    }

    toggleEdit(event) {
        event.preventDefault();
        const nameElement = this.querySelector('#name');
        const nameInput = this.querySelector('#name-input');
        const priceElement = this.querySelector('#price');
        const priceInput = this.querySelector('#price-input');
        const saveButton = this.querySelector('#save-button');

        if (nameInput.classList.contains('d-none')) {
            nameElement.classList.add('d-none');
            nameInput.classList.remove('d-none');
            priceElement.classList.add('d-none');
            priceInput.classList.remove('d-none');
            saveButton.classList.remove('d-none');
        } else {
            nameElement.classList.remove('d-none');
            nameInput.classList.add('d-none');
            priceElement.classList.remove('d-none');
            priceInput.classList.add('d-none');
            saveButton.classList.add('d-none');
        }
    }

    updateDevice(event) {
        console.log(" --- UPDATEING DEVICE ---");
        event.preventDefault();
        const deviceId = this.getAttribute('id');
        const nameInput = this.querySelector('#name-input');
        const priceInput = this.querySelector('#price-input');
        
        console.log(`Updating device with ID: ${deviceId}`);
        const body = { name: nameInput.value, data:{ price: priceInput.value } };
        fetch('https://api.restful-api.dev/objects/' + deviceId,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data, " --- DATA ---  ");
            
            // Päivitä custom elementin attribuutit
            this.setAttribute('name', data.name);
            this.setAttribute('price', data.data.price);

            // Päivitä elementin sisältö
            this.querySelector('#name').textContent = data.name;
            this.querySelector('#price').textContent = data.data.price;
            this.toggleEdit(event);
            alert('Device updated successfully');
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }

}

customElements.define('list-item', ListItem);
; (function () {
    'use strict'

    const registerButton = document.getElementById('registerButton');

    class Medicinal {
        constructor() {
            this.id = 1;
            this.arr = [];
        }

        add() {
            let product = this.lerDados();
            let name = document.getElementById('pdName').value;
            let qtd = document.getElementById('pdQtd').value;
            let classe = document.getElementById('pdClass').value;

            if (this.validate(product) == true) {
                this.save(product);
            }

            this.list()

        }

        lerDados() {
            let product = {};
            product.id = this.id;
            product.name = document.getElementById('pdName').value;
            product.qtd = document.getElementById('pdQtd').value;
            product.class = document.getElementById('pdClass').value;

            return product;
        }

        validate(p) {
            let msg = '';

            if (p.name == '' || p.qtd == '' || p.class == '') {
                msg += 'Insira corretamente os dados';
            }

            if (msg != '') {
                alert(msg);
                return false;
            }
            return true;
        }


        save(product) {
            this.arr.push(product)
            this.id++
        }


        list() {
            let tbody = document.getElementById('tbody');
            tbody.innerText = '';

            for (let i = 0; i < this.arr.length; i++) {
                let tr = tbody.insertRow();
                let td_id = tr.insertCell();
                let td_name = tr.insertCell();
                let td_qtd = tr.insertCell();
                let td_class = tr.insertCell();
                let td_remove = tr.insertCell();

                td_remove.setAttribute('id', 'deleteImg');

                td_id.innerText = this.arr[i].id;
                td_name.innerText = this.arr[i].name;
                td_qtd.innerText = this.arr[i].qtd;
                td_class.innerText = this.arr[i].class;

                let img = document.createElement('img');
                img.setAttribute('id', 'deleteImg');
                img.src = "assets/src/img/lixeira.png";

                img.addEventListener('click', () => {
                    this.delete(this.arr[i].id);
                });

                td_remove.appendChild(img);
            }
        }

        delete(id) {
            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i].id == id) {
                    this.arr.splice(i, 1);
                    tbody.deleteRow(i);
                    alert(`Você está apagando o medicamento com o ID ${id}\nItem apagado com sucesso!`);
                }
            }
            this.list()
        }
    }

    const product = new Medicinal();

    registerButton.addEventListener('click', () => {
        product.add()
    });

})();
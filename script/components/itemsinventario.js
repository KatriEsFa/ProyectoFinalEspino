
window.addEventListener('DOMContentLoaded', showItems);
function showItems() {
    const availableItemsList = document.getElementById("availableItemsList");
    const notAvailableItemsList = document.getElementById("notAvailableItemsList");

    fetch("/script/data/arrayitems.json")
        .then((response) => response.json())
        .then((data) => (
            data.forEach(element => {
                if (element.prestamo === false) {
                    const li = document.createElement("li");
                    li.classList.add("availableItem")
                    li.innerHTML =
                        `
                    <h3>${element.nombreItem}</h3>
                    <h4>${element.tipo}</h4>
                    <input type="button" value="Solicitar"> 
                        `
                    availableItemsList.append(li)
                } else {
                    const li2 = document.createElement("li");
                    li2.classList.add("unavailableItem")
                    li2.innerHTML =
                        `
                    <h3>${element.nombreItem}</h3>
                    <h4>${element.tipo}</h4>
                    <h3>Elemento no diponible</h3> 
                        `
                    notAvailableItemsList.append(li2)
                }
            })
        )
        )

}
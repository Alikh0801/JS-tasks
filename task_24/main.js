const tbody = document.querySelector("#cryptoTable tbody");

data.forEach(item => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${item.name}</td>

        <td>${item.ticker}</td>

        <td>${item.value}</td>
        
        <td style="color:${item.change.includes('-') ? 'red' : 'green'}">
          ${item.change}
        </td>
      `;

    tbody.appendChild(row);
});
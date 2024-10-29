fetch("https://6721115d98bbb4d93ca752a7.mockapi.io/linktree/links")
        .then(response => response.json())
        .then(data => {
          const linksContainer = document.getElementById('links-container');
          data.forEach((link, index) => {
            const li = document.createElement('li');
            li.classList.add(index % 2 === 0 ? 'right' : 'left'); // Alternar clases
            const a = document.createElement('a');
            a.classList.add('link');
            a.href = link.link;
            a.target = "_blank";
            a.textContent = link.name;
            li.appendChild(a);
            linksContainer.appendChild(li);
          });
        })
        .catch(error => console.error('Error fetching data:', error));
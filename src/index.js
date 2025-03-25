function createUserCard(user) {
    const content = document.getElementById('content');
    const card = document.createElement('div');
    card.innerHTML = `
        <h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Company: ${user.company}</p>
    `;
    content.appendChild(card);
}

const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    company: 'Tech Innovations Inc.'
};

createUserCard(user);

console.log('Webpack project is running!');
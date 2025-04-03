const { setupEventListeners, getDomElements, displayUserInfo } = require("./rest-my-account");

// Mock para window.alert
global.alert = jest.fn();

// Configuração básica do DOM antes de cada teste
beforeEach(() => {
    document.body.innerHTML = `
        <div id="account-info"></div>
        <div id="edit-form" style="display:none">
            <input id="firstName" />
            <input id="lastName" />
            <input id="email" />
            <input id="phone" />
            <input id="photoUrl" /> <!-- Adicionado photoUrl -->
        </div>
        <button id="edit-button"></button>
        <button id="cancel-edit"></button>
        <form id="update-form"></form> <!-- Added update-form element -->
    `;

    // Mock user data in localStorage
    const user = {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "1234567890",
        photoUrl: "photo.jpg" // Adicionado photoUrl
    };
    localStorage.setItem("userData", JSON.stringify(user));

    setupEventListeners();
});


// Teste: exibir informações do utilizador
test('Exibir informações do utilizador', () => {
    const user = {
        photoUrl: "photo.jpg",
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        email: "john.doe@example.com",
        phone: "1234567890"
    };
    displayUserInfo(user);
    const accountInfoDiv = document.getElementById('account-info');
    expect(accountInfoDiv.innerHTML).toContain("photo.jpg");
    expect(accountInfoDiv.innerHTML).toContain("John");
    expect(accountInfoDiv.innerHTML).toContain("Doe");
    expect(accountInfoDiv.innerHTML).toContain("johndoe");
    expect(accountInfoDiv.innerHTML).toContain("john.doe@example.com");
    expect(accountInfoDiv.innerHTML).toContain("1234567890");
});

// Teste: exibir mensagem de erro quando os dados do utilizador não estão disponíveis
test('Exibir mensagem de erro quando os dados do utilizador não estão disponíveis', () => {
    displayUserInfo(null);
    const accountInfoDiv = document.getElementById('account-info');
    expect(accountInfoDiv.innerHTML).toContain("Error: User data is not available.");
});
const { validateFields, registerUser, logoutUser } = require("./rest-register-user");
const { displayUserInfo, getDomElements } = require("./rest-my-account");

// Mock the global fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
        text: () => Promise.resolve(""),
    })
);

// Mock window.location.href
beforeAll(() => {
    delete window.location;
    window.location = { href: '' };
});

// Configuração mínima do DOM com todos os campos esperados pela API
beforeEach(() => {
    document.body.innerHTML = `
        <form id="register-form">
            <input id="first-name" value="John" />
            <input id="last-name" value="Doe" />
            <input id="username" value="testUser" />
            <input id="email" value="test@example.com" />
            <input id="phone" value="123456789" />
            <input id="password" value="password123" />
            <input id="confirm-password" value="password123" />
        </form>
        <div id="account-info"></div>
        <div id="edit-form" style="display:none">
            <input id="firstName" />
            <input id="lastName" />
            <input id="email" />
            <input id="phone" />
        </div>
        <button id="edit-button"></button>
        <button id="cancel-edit"></button>
        <form id="update-form"></form>
    `;
    sessionStorage.clear();
    jest.clearAllMocks();
});

// Testes para validateFields
// Verifica se retorna true quando todos os campos são preenchidos
test('validateFields retorna true com todos os campos preenchidos', () => {
    expect(validateFields()).toBe(true);
});

// Verifica se retorna false ao faltar um campo obrigatório
test('validateFields retorna false com campo obrigatório vazio', () => {
    document.getElementById('first-name').value = '';
    expect(validateFields()).toBe(false);
});

// Teste para registerUser - Senhas não coincidem
// Simula a falha e alerta do utilizador
test('registerUser alerta quando senhas não coincidem', async () => {
    document.getElementById('confirm-password').value = 'wrongPassword';
    window.alert = jest.fn();
    await registerUser({ preventDefault: () => {} });
    expect(window.alert).toHaveBeenCalledWith('The passwords do not match. Please try again.');
});

// Teste para logoutUser
// Verifica se sessionStorage é limpo corretamente
test('logoutUser limpa sessionStorage ao deslogar', async () => {
    sessionStorage.setItem('username', 'testUser');
    sessionStorage.setItem('password', 'testPassword');
    await logoutUser();
    expect(sessionStorage.getItem('username')).toBeNull();
    expect(sessionStorage.getItem('password')).toBeNull();
    expect(window.location.href).toBe('/frontend/homePage.html');
});

// Teste: verifica se displayUserInfo exibe corretamente os campos existentes
test('displayUserInfo exibe todos os dados corretamente', () => {
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        username: 'johndoe123',
        phone: '123456789',
        photoUrl: 'photo.jpg'
    };
    displayUserInfo(user);
    const accountInfo = document.getElementById('account-info').innerHTML;
    expect(accountInfo).toContain('John');
    expect(accountInfo).toContain('Doe');
    expect(accountInfo).toContain('john@example.com');
    expect(accountInfo).toContain('johndoe123');
    expect(accountInfo).toContain('123456789');
    expect(accountInfo).toContain('photo.jpg');
});


// Teste: clique no botão cancelar
test('Cancelar edição oculta o formulário', () => {
    document.getElementById('edit-button').click();
    document.getElementById('cancel-edit').click();
    expect(getDomElements().editForm.style.display).toBe('none');
});


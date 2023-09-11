class User {
  constructor(name, email, genero, nascimento, pais, senha, admin) {
    this._name = name;
    this._email = email;
    this._genero = genero;
    this._nascimento = nascimento;
    this._pais = pais;
    this._senha = senha;
    this._admin = admin;
    this._register = new Date();
  }
  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get genero() {
    return this._genero;
  }
  get nascimento() {
    return this._nascimento;
  }
  get pais() {
    return this._pais;
  }
  get senha() {
    return this._senha;
  }
  get admin() {
    return this._admin;
  }
  get foto() {
    return this._foto;
  }
  set foto(value) {
    this._foto = value;
  }
  get register() {
    return this._register;
  }
}

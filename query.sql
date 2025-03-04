CREATE TABLE Servicos (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  NumeroServico VARCHAR(20) NOT NULL,
  DataCriacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  Status VARCHAR(20) DEFAULT 'Pendente',
  EquipamentoID INT,
  CategoriaID INT,
  FOREIGN KEY (EquipamentoID) REFERENCES Equipamentos(ID),
  FOREIGN KEY (CategoriaID) REFERENCES Categorias(ID)
);

CREATE TABLE ServicosItens (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  ServicoID INT,
  PecaID INT,
  Quantidade INT DEFAULT 1,
  NumeroItem INT,
  Observacao TEXT,
  DataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ServicoID) REFERENCES Servicos(ID),
  FOREIGN KEY (PecaID) REFERENCES Pecas(ID)
);
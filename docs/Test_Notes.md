# Anotacoes sobre testes

Maior parte retirado da monitoria de testes.

### Unit tests
    Testes unitarios devem testar unidades do codigo, de forma individualizada para debugar de forma eficiente e com rapidez.

### Integration tests
    Podem ser unitarios ou end to end, envolve varios escopos da aplicacao. Testa o cenário real com dados reais e estado da aplicação. Debug com menos detalhes.

### End to End tests
    Testa o escopo total da aplicação. Com a perspectiva do usuário final (dados reais). Demora muito pra executar.

### Como saber?
    Se vc estiver mockando tudo (ou seja, criando objetos que existem apenas na instancia do teste), é um unit. Se está mockendo nada, é um End to End. Qualquer caso entre isso será considerado um integration test.

### O que testar no front?
    - Formulario
    - Envio de Imagens
    - Popups
    - Textos
    - Caminhos de Historias de Usuario

### O que testar no back?
    - http status
    - payload
    - Headers
    - Caminhos positivos e Respostas Negativas
    - Caminhos de Historias de Usuario

### Como escrever testes?
    Given-When-Then
    "O que tinha antes(opcional), o que eu estou fazendo e o que vai ter depois"

    Ex: 
    Funcionalidade: o usuario negocia acoes
    Cenario: O usuario solicita uma venda antes do fechamento da negociacao

    **GIVEN**   i have 100 shares of PETR4 stocks
                and i have 150 shares of VALE stocks
                all the time is before close of trading
    
    **WHEN**    i ask to sell 20 shares of PETR4 stock

    **THEN**    i should have 80 shares of PETR4 stocks
                and i should have 150 shares of VALE stocks
                and a sell order for 20 shares of PETR4 stock should have been executed  


    OR Should-When

    Ex:
    I should have 80 shares of PETR4 stocks
    And i should have 150 shares of VALE stocks
    And a sell order for 20 shares of PETR4 stock should have been executed.
    When i ask to sell 20 shares of PETR4 stocks

    Dividir a escrita do cenario ou teste em 3 secoes:
        GIVEN - Estado do mundo antes de voce iniciar o comportamento que está especificando neste cenário. Como se fosse pre-condicoes para o teste.
        WHEN - É o comportamento que voce está especificando
        THEN - descreve as mudanças que você espera devido ao comportamento especificado
--------------

## Conceitos de JEST

#### jest.fn()

O método jest.fn() é uma das funcionalidades mais fundamentais do Jest. Ele cria uma função "mock" (simulada). Essa função mantém um registro de suas chamadas, o que permite que você faça asserções sobre ela. Por exemplo, você pode verificar se a função foi chamada, quantas vezes foi chamada, e com quais argumentos foi chamada.

```javascript
const mockFunction = jest.fn();
mockFunction('arg1', 'arg2');
expect(mockFunction).toHaveBeenCalled();
expect(mockFunction).toHaveBeenCalledTimes(1);
expect(mockFunction).toHaveBeenCalledWith('arg1', 'arg2');
```

#### .mockReturnThis()

O método .mockReturnThis() é uma extensão da função jest.fn(). Ele faz com que a função mockada retorne this, permitindo a chamada encadeada de métodos.

No Express.js, é comum encadear métodos na resposta (res), como res.status(200).json(...). Para simular esse comportamento em um objeto mockado, usamos .mockReturnThis().

```javascript
const mockObject = {
    method1: jest.fn().mockReturnThis(),
    method2: jest.fn().mockReturnThis()
};
mockObject.method1().method2();
expect(mockObject.method1).toHaveBeenCalled();
expect(mockObject.method2).toHaveBeenCalled();
```

#### Promise.resolve()

Promise.resolve() é um método nativo do JavaScript que retorna uma Promise que é resolvida com o valor dado. É uma maneira conveniente de criar uma Promise que resolve imediatamente, sem precisar criar uma nova Promise e resolver manualmente.

Isso é particularmente útil quando se quer mockar funções assíncronas que retornam promessas. Por exemplo, muitas operações de banco de dados em Node.js são assíncronas e retornam promessas. Quando você está escrevendo testes unitários, geralmente não quer interagir com um banco de dados real, então você "mocka" essas funções para retornar valores predefinidos usando Promise.resolve().

```javascript
const mockAsyncFunction = jest.fn(() => Promise.resolve("mocked value"));
mockAsyncFunction().then(value => {
    expect(value).toBe("mocked value");
});
```
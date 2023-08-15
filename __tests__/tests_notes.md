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
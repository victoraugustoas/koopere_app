# App Koopere

## Descrição
Este é um projeto React Native que visa aplicar os conhecimentos para a vaga de desenvolvedor React Native pleno.

### Features
 - Listagem de QR Codes
 - Detalhes de um QR Code
 - Leitura de QR Code
 - Cadastrar QR Code

## Instalação
Siga os passos abaixo para configurar localmente.

## Pré-requisitos
A versão do NodeJS utilizada neste projeto foi a v18.13.0.

## Iniciando projeto

1. Instalação das dependências
```bash
yarn install
```
2. Iniciar servidor metro
```bash
yarn start
```
3. Instale o app no dispositivo android
```bash
yarn android
```
4. Pronto, agora o aplicativo será instalado em modo desenvolvedor
5. Para instalar o app em modo release, salve os dados abaixo em `~/.gradle/gradle.properties`
```bash
KOOPERE_UPLOAD_STORE_FILE=upload-key.keystore
KOOPERE_UPLOAD_KEY_ALIAS=upload-keytore
KOOPERE_UPLOAD_STORE_PASSWORD=teste123
KOOPERE_UPLOAD_KEY_PASSWORD=teste123
```
6. Desinstale outras versões para instalar o app em modo release
```bash
adb uninstall com.koopere_app
```
7. Então execute a instalação em um dispositivo
```bash
yarn install-android
```

## Estrutura do Projeto
```bash
.
├── assets                                          # Assets da aplicação
├── src
│   ├── global                                      # Configurações globais da aplicação
│   │   ├── http                                    # Configuração do cliente HTTP
│   │   ├── container                               # Configuração de inversão de dependências
│   │   ├── initializer.ts                          # Arquivo para inicialização de configurações globais
│   │   └── navigation
│   ├── App.tsx                                     # Arquivo principal de inicialização do app
│   ├── model
│   │   ├── dtos
│   │   └── enums
│   ├── network                                     # Configurações de API
│   │   ├── endpoints                               # Lista de endpoints
│   │   └── providers                               # Conjuto de classes para fazer requisições
│   ├── screens                                     # Telas do aplicativo
│   │   └── HomeView.tsx                          
│   ├── utils
│   │   ├── assets.ts                               # Mapeamento de assets
│   │   └── exceptions                              # Classes de exceção
│   └── components                                  # Componentes da aplicação
```

## Considerações

### Melhorias
- Adicionar i18n no projeto
- Adicionar envio de logs no projeto
- Criar classes de exceção específicas para cada cenário
- Tratar casos de exceção tais como listagens vazias, servidor offline e outros.
- Adicionar testes para telas

### Gerenciador de estado
Neste projeto, estamos utilizando o Inversify como container de injeção de dependências.

O container de injeção de dependências, em conjunto com os testes, nos ajuda a criar mocks de requisições nos testes de forma mais fácil.


## Capturas de tela
<!-- <img src="/readme_imgs/5.png" style="width: 20%; display: inline-block;" />
<img src="/readme_imgs/6.png" style="width: 20%; display: inline-block;" />
<img src="/readme_imgs/3.png" style="width: 20%; display: inline-block;" />
<img src="/readme_imgs/4.png" style="width: 20%; display: inline-block;" />
<img src="/readme_imgs/1.png" style="width: 20%; display: inline-block;" />
<img src="/readme_imgs/2.png" style="width: 20%; display: inline-block;" /> -->

| Imagem | Imagem | Imagem |
| :-----------------------------------: | :-----------------------------------: | :-----------------------------------: |
| <img src="/readme_imgs/5.png" style="width: 20%; display: inline-block;" /> | <img src="/readme_imgs/6.png" style="width: 20%; display: inline-block;" /> | <img src="/readme_imgs/3.png" style="width: 20%; display: inline-block;" /> |
| <img src="/readme_imgs/4.png" style="width: 20%; display: inline-block;" /> | <img src="/readme_imgs/1.png" style="width: 20%; display: inline-block;" /> | <img src="/readme_imgs/2.png" style="width: 20%; display: inline-block;" /> |
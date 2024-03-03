#Documentação Técnica: Garupa Beer
##Introdução
Este documento tem como objetivo detalhar as escolhas tecnológicas implementadas no projeto Garupa Beer, um aplicativo desenvolvido com React Native e Expo, utilizando TypeScript, Redux Saga, React Native Elements e Axios. O aplicativo consiste em duas telas principais: uma para listagem de cervejas e outra para detalhes da cerveja, integrando-se com a API PunkAPI V2.

##Escolhas Tecnológicas
TypeScript
TypeScript foi escolhido por oferecer um superset de JavaScript que permite a tipagem estática. Isso facilita a manutenção do código e a detecção de erros em tempo de desenvolvimento, proporcionando uma experiência de desenvolvimento mais robusta e segura, especialmente importante em projetos complexos e em escala de produção.

##Expo
Expo é uma ferramenta que acelera o desenvolvimento em React Native, permitindo um setup mais rápido e a possibilidade de testar o aplicativo em diferentes dispositivos sem a necessidade de instalar SDKs nativos. A escolha do Expo se deu pela sua eficiência em prototipagem rápida e pela facilidade de publicação do aplicativo.

##Redux Saga
Redux Saga é uma biblioteca que facilita o gerenciamento de efeitos colaterais em aplicações React/Redux, como operações assíncronas e acesso ao armazenamento local. A escolha dessa tecnologia se deve à sua capacidade de oferecer uma melhor organização do fluxo de dados assíncronos e uma separação clara da lógica de negócios das ações do usuário.

##React Native Elements
React Native Elements foi selecionado por fornecer um conjunto de componentes pré-construídos e personalizáveis para React Native. Isso permite um desenvolvimento mais ágil e uma consistência visual, alinhando-se ao objetivo de ter componentes rápidos e simples de implementar.

##Axios
Axios é um cliente HTTP baseado em promessas que facilita a realização de requisições para APIs. Sua escolha foi motivada pela simplicidade de uso, pela ampla compatibilidade com diferentes navegadores e pela capacidade de interceptar requisições e respostas, o que é útil para tratar tokens de autenticação e outras operações pré e pós-requisição.

## Instalação

Para instalar o aplicativo, você precisa ter o Node.js e o Expo CLI instalados no seu computador. Em seguida, siga os passos abaixo:

1. Clone este repositório para o seu computador.
2. Abra o terminal e navegue até a pasta do projeto.
3. Execute o comando `npm install` para instalar as dependências do projeto.
4. Execute o comando `expo start` para iniciar o servidor de desenvolvimento.
5. Abra o aplicativo Expo Go no seu dispositivo móvel e escaneie o código QR gerado pelo servidor.
6. Aproveite o aplicativo!

##Conclusão
As tecnologias escolhidas para o desenvolvimento do Garupa Beer visam otimizar o processo de desenvolvimento, garantir a qualidade do código e proporcionar uma experiência de usuário fluida e agradável. A combinação dessas ferramentas e bibliotecas reflete as melhores práticas da indústria e as necessidades específicas do projeto.

Espero que este exemplo ajude na elaboração da sua documentação. Se precisar de mais detalhes ou de alguma alteração, estou à disposição para ajudar!


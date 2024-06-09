![download](https://cdn.discordapp.com/attachments/932104587857522748/1247755470727286804/nomelogo.png?ex=66612e56&is=665fdcd6&hm=8e16c7c645cd68c01b659a39816fb0eace10905a856c470c44a0deb65e9da5c5&)

###### Pedro Cesár nº 20211192

## Universidade Europeia, IADE - Curso de Engenharia Informática

### Trabalho realizado no âmbito da Unidade Curricular de Projeto de Desenvolvimento Web

######

Trabalho desenvolvido em colaboração com:
Afonso Silva nº 20210859
Camila Madatali nº 20210832
Tatiana Yermachenkava nº 20211091

O contributo deste colegas para o desenvolvimento da backend foi imprescindível

# Nome do Projeto

###### 
O nome escolhido para este projeto de desenvolvimento de software é easy erasmus. Decidimos escolher este nome devido ao facto de o website ser direcionado à facilitação de procura de programas ERASMUS para estudantes. Como o nome indica, easy, que remete para a facilidade e eficácia de procura.  
Adicionalmente, decidimos reverter a posição da palavra easy de modo a cativar a atenção do utilizador e criar distinção de outros websites com o mesmo fim. 

# Ideia do Projeto

######
A ideia principal deste projeto é simplificar e melhorar a experiência dos estudantes que desejam participar no programa Erasmus. Compreendemos que o processo de planeamento e execução desta viagem pode ser complexa e desafiadora. Portanto, estamos a desenvolver um website que visa fornecer um conjunto de recursos, informações e suporte online.
Isso incluirá a seleção da universidade e o curso que cada aluno frequenta para receber toda a informação dos destinos associados, tal como informação atualizada quanto a vagas disponíveis, universidades, o tipo de programa e a cidade destino. Pretendemos também desenvolver um suporte onde os alunos de Erasmus possam partilhar as suas dúvidas em relação aos programas disponíveis. Para cada cidade de destino tencionamos fornecer as respetivas informações, assim o estudante fica a conhecer mais sobre a cidade de destino sem necessitar de recorrer a pesquisas sobre o mesmo. 
A nossa missão é tornar o processo de mobilidade académica mais acessível e agradável, permitindo que os alunos aproveitem ao máximo esta oportunidade enriquecedora.



# Pesquisa

######
O programa de Erasmus é um programa de mobilidade da união Europeia destinado a cidadãos, por norma são jovens universitários, que pretendem adquirir uma experiência no estrageiro, tal como acontece com vário programas de mobilidade para fora da Europa. Tendo estes programas como principal objetivo promover a educação de uma forma mais dinâmica, contribuindo assim para o desenvolvimento pessoal e profissional dos alunos.  

Uma vez que o processo de mobilidade é um tema com bastante abordagem nos dias de hoje, existem diversos websites que visam a fornecer algum suporte aos alunos. Por isso, decidimos realizar uma pesquisa sobre o que há no mercado para termos a oportunidade de criar um website inovador e diferenciador dos websites existentes. 

 Na pesquisa realizada deparámo-nos que os sites existentes visam a fornecer suporte quanto à disponibilidade de informação, recursos, detalhes sobre as oportunidades de educação entre outros. Destacamos assim quatro web sites: 

   - “Portal Erasmus+” que é o site oficial do programa Erasmus+ da Comissão Europeia que oferece informações abrangentes sobre oportunidades de mobilidade, projetos financiados, requisitos e muito mais.  

   - “Erasmus Student Network” que é uma organização estudantil internacional que oferece suporte e recursos para estudantes Erasmus. Este site contém informações úteis sobre vida universitária, integração e eventos.  

   - “Eurodesk” que é uma rede de informações europeia que fornece detalhes sobre oportunidades de educação, mobilidade e voluntariado na Europa, incluindo o programa Erasmus+.  

   - “Erasmus Mundus Association” que reúne estudantes e ex-alunos do programa Erasmus Mundus, oferecendo informações e recursos sobre oportunidades de mestrado e doutorado em toda a Europa.



![download](https://cdn.discordapp.com/attachments/932104587857522748/1247757206846443541/finito.png?ex=66612ff4&is=665fde74&hm=7c55f304e5e7a42322a9a755615e2aedead91b3f854c81a5dd0ab09112eecffa&)


x - O website é composto pela funcionalidade 


# Descrição do Objetivo

######
O nosso website tem como propósito fornecer informações essenciais e pertinentes a cada estudante sobre as opções de destino disponíveis no âmbito do programa Erasmus oferecidas pela respetiva universidade. Um dos principais objetivos desta plataforma é estabelecer um ambiente virtual onde cada instituição de ensino superior possa inserir detalhes relevantes sobre os países de destino, os tipos de programas oferecidos, as cidades associadas, as universidades parceiras e o número de vagas disponíveis para cada curso ou área de estudo específica. 
 
Ao consolidar todas essas informações num único website, a nossa plataforma reúne assim a informação de qualquer universidade, basta esta se registar no site e poderá administrar toda essa informação. Aqui cada instituição pode fazer upload dos seus dados pertinentes, permitindo, subsequentemente, que os seus alunos tenham acesso a essas informações de maneira eficiente. Assim, este website tem o propósito de unir instituições de ensino superior e estudantes num espaço virtual coeso, facilitando a divulgação e o acesso às oportunidades Erasmus disponíveis. 


# Público-Alvo

######
O nosso website é direcionado a estudantes universitários que têm interesse em seguir com o programa de mobilidade. Este público inclui jovens com idades compreendidas entre os 18 e os 25 anos. Estamos comprometidos em fornecer informações, orientações e recursos especialmente adaptados às necessidades e interesses desta faixa etária, que está no auge das suas experiências educacionais e busca de oportunidades de enriquecimento pessoal e académico no âmbito do programa Erasmus.  

# Descrição de Arquitetura

######
A arquitetura de Solução para o nosso Website "easyerasmus" irá ser uma arquitetura dividida em três partes:  User,  Web tier,  Data tier e. Esta divisão permite que as diferentes partes sejam escaladas independentemente, caso seja necessário no futuro.
1.	User, também conhecida como front-end e tal como o nome indica, representa a parte onde é possível os utilizadores obterem acesso e interagirem com o nosso website. Desta forma, é nesta parte onde está representada a componente WEB Browser.
2.	Web tier, também conhecida como back-end, esta é responsável por manter o nosso website operacional e disponível na internet. Assim, a Web tier é composta 1 Web Server, onde vai estar implementada a REST API para lidar com as solicitações dos clientes.
3.	Data tier  engloba um Database server para fornecer acesso à respetiva base de dado, que são responsáveis por armazenar e gerenciar os dados de forma eficiente e segura.
![image](https://cdn.discordapp.com/attachments/932104587857522748/1247758931833524224/Screenshot_2024-06-05_at_04.17.34.png?ex=6661318f&is=665fe00f&hm=bce66e75df8bb146178d7dfccc8da2fbff4d64e18c29db99cf68452a4bda5d1a&)


######

# Guiões de Teste 

######
Os guiões de teste são um meio para garantir a qualidade e a confiabilidade do software, através da identificação de problemas, da verificação de requisitos e da melhoria da experiência do utilizador.  

Por isso, com o propósito de criar um website eficaz iremos criar três guiões de teste, cada um uma abordagem diferente. 

#### 1. Descrever o foco principal do website para o utilizador.  

##### Objetivo: Avaliar a usabilidade da funcionalidade do website para os estudantes. 

##### Descrição do cenário de teste: 

######
   1) O utilizador entra no website pela primeira vez e depara-se com a página principal, homepage. 

   2) Ao descer na página em que está, o utilizador é solicitado a selecionar a sua universidade.  

   3) Após a universidade selecionada, o utilizador é direcionado para a página de registo.  

   4) O utilizador preenche as suas credenciais e clica no botão “Sign up”. 

   5) Com o registo bem-sucedido o utilizador entra na página informativa da sua universidade.  

   6) Ao visualizar os cursos disponíveis seleciona o seu.  

  7) Encontra-se agora noutra página onde visualiza uma tabela com os países, programas, universidades, cidades e vagas que tem disponível para fazer os seus Erasmus ou outra mobilidade internacional.

  8) O utilizador interessou-se por uma das universidades do programa e decide verificar se ainda existem vagas para o mesmo, por isso clica no botão de atualização de vagas. 

  9) Após a verificação vai à navbar e clica no perfil.

  10) Por fim, realiza o logout e sai do website.


#### 2. Descrever o foco principal do website para o utilizador administrativo. 

##### Objetivo: Avaliar a usabilidade da funcionalidade do website para os departamentos de mobilidade das universidades.  

##### Descrição do cenário de teste:  

######
   1) O departamento de mobilidade de uma universidade necessita de atualizar as informações que apresenta no website.

   2) Entra na página principal do website e clica na palavra login.

   3) Ao clicar no login terá de escolher entre a opção “student” e “university”.

   4) Escolhe a opção “university”.

   5) Inicia o login com as suas credenciais e clica no botão “login”.

   6) Depois vai à página onde apresenta as informações dos cursos que disponibilizou.

   7) Carrega num dos cursos e depois faz delete.

   8) Com a sua tarefa completa, sai do website.

#### 3. Abordagem ao uso de outras funcionalidades.
 
##### Objetivo: Avaliar a usabilidade de uma funcionalidade específica do website para os estudantes. 

##### Descrição do cenário de teste:

######
   1) O utilizador entra no website.

   2) Efetua o login com as suas credenciais.

   3) O login é efetuado com sucesso.

   4) O utilizador depara-se com uma dúvida.

   5) Entra na página principal, home page.

   6) 	Clica no ChatBot. 

   7) Escreve a sua dúvida e envia ao ChatBot.

   8) Espera pela resposta.

   9) Fica satisfeito com a resposta.

   10) Sai do website.

Estes três testes de guião irã ser realizados no futuro próximo para ajudar este projeto a encontrar quaisquer problemas e observações encontradas durante os testes. A partir desta avaliação irá ser mais fácil de compreender os pontos fortes e fracos da aplicação e tomar as decisões necessárias para o melhor desenvolvimento deste projeto.

# Modelo de Domínio

######
O modelo de domínio é essencial para o desenvolvimento de um website. Com o objetivo de assegurar que todos os elementos envolvidos neste projeto compreendam como o website vai ser estruturado e de que forma irá funcionar. Por isso, a partir do modelo de domínio é possível realizar uma representação abstrata e organizada das principais entidades, informações e interações que um website irá conter, o que é fundamental para o sucesso do nosso website. 
Este modelo de domínio criado irá evidenciar de forma mais eficaz as partes necessárias para definir um sistema de software, incluindo elementos relacionados aos eramus, a iteração entre os estudantes e as universidades, as informações que vão estar disponíveis no website e muito mais.

# Casos de uso
![download](https://cdn.discordapp.com/attachments/932104587857522748/1247855395653812234/casos.png?ex=66618b66&is=666039e6&hm=0f6e6c54de3dac52d93549140601784bbd9647d272afd8bade21188e7aebe618&)

Administrador:
######
Os administradores são os responsáveis pelos departamentos de mobilidade de cada universidade. Estes têm de efetuar o registo com o seu mail, universidade e password. De seguida, irão receber um mail para a confirmação do mesmo, assim terá acesso ao website como administrador. 

Após o registo e posterior login, o administrador consegue publicar informações quanto aos programas de mobilidade na plataforma. Ele pode adicionar novos programas, fornecendo informações detalhadas sobre os programas, como o país, nome do programa, universidade, cidade e informações da mesma, e vagas disponíveis. Além de publicar programas, o administrador é também responsável por manter as informações atualizadas. Se houver alterações nos programas existentes, como cursos oferecidos ou vagas disponíveis, o administrador deve atualizar essas informações no website. 

Os administradores também oferecem suporte aos alunos interessados nos programas. O website terá implementado um chatbot que responde a perguntas frequentes e fornece informações básicas sobre os programas. Caso seja efetuada uma pergunta à qual o chatbot não tem resposta, o administrador entra em contacto com o aluno.
######
Estudante:
######
O estudante inicia o processo ao registar-se no website, escolhendo a sua universidade e curso, posteriormente fornecendo a universidade e curso que frequentam, nome de utilizador, email e password. Este pode optar por realizar o login caso previamente registado. 

Após o registo e o posterior login, o aluno pode visualizar os programas de mobilidade disponíveis referentes à sua universidade e curso, acedendo a informações detalhadas sobre cada programa, como o país, nome do programa, universidade, cidade e vagas disponíveis. Para além disto, o aluno terá acesso a informações relativas às cidades onde se realizam estes programas.

Enquanto explora os programas, o aluno pode solicitar suporte para obter informações adicionais ou esclarecer dúvidas.

O suporte ao aluno é ampliado através da inclusão de um chatbot, onde este poderá iniciar uma conversa com o chatbot a qualquer momento para obter respostas rápidas e informações adicionais sobre os programas de mobilidade. Caso nos deseje contactar por um meio alternativo, poderá fazê-lo através do email.


# Esboço da Estrutura de Dados
Vamos apresentar um diagrama simples que apresente a relação entre as entidades-chave e as relações que formam a base deste modelo

![download](https://cdn.discordapp.com/attachments/932104587857522748/1247760142511116318/Screenshot_2024-06-05_at_01.52.59.png?ex=666132b0&is=665fe130&hm=85be98cb20aa951c6644fbdb91a52b28eb554200cc00767891c6cbeb120a4d12&)


# Interface

######
A interface do nosso website será caracterizada por um design simples, moderno e intuitivo. Uma vez que estamos a desenvolver este website para atender tanto a estudantes universitários como a instituições de ensino, é fundamental que a nossa interface seja adaptável a ambos os públicos. Esta deve transmitir uma impressão profissional, enquanto cria um ambiente descontraído, garantindo que os responsáveis pelos departamentos de mobilidade se sintam confiantes e seguros ao realizar o registo e compartilhar informações em nossa plataforma. Por outro lado, é igualmente importante que a interface seja clara e atrativa para os estudantes, proporcionando uma experiência de navegação confortável e tentadora. Queremos que os estudantes se sintam à vontade ao explorar o nosso website, facilitando o acesso a informações e recursos relevantes para a sua jornada de mobilidade.

# Mockups

![download](https://cdn.discordapp.com/attachments/932104587857522748/1247857364581748738/Frame_1.png?ex=66618d3b&is=66603bbb&hm=d61c04791672ae5d1ef30f0c9bcd8c023a515cb912c2f97781d9f9d05c90b49d&)

![download](https://cdn.discordapp.com/attachments/932104587857522748/1247857634921549874/Frame_5.png?ex=66618d7c&is=66603bfc&hm=eba36b5b83bba86e7ee4fb83e1ca379808782beffa48b14e492099b132e964a7&)

![download](https://cdn.discordapp.com/attachments/932104587857522748/1247857635143843943/Frame_6.png?ex=66618d7c&is=66603bfc&hm=8fd8e01c69989e9697427a6af5ecaed27d37681579e37bb425a1064cd8e456a8&)

![download](https://cdn.discordapp.com/attachments/932104587857522748/1247857635424735333/Frame_10.png?ex=66618d7c&is=66603bfc&hm=5d4121d1bda48b7fa77c0fd45ddcf43fb9d302f820451a6d7b8ad29d7226a83c&)

![download](https://cdn.discordapp.com/attachments/932104587857522748/1247857635701817446/Frame_11.png?ex=66618d7c&is=66603bfc&hm=83b5fa56b92b373d14c8b77059744e12840db1e1daee6d787d70210e42c07cfc&)

![download](https://cdn.discordapp.com/attachments/932104587857522748/1247857635945091082/Frame_7.png?ex=66618d7c&is=66603bfc&hm=d0c73499241ad24b98aa813f39e80ce8ddfee8d152e6a77bcb3f6d71c1d5356f&)

![download](https://cdn.discordapp.com/attachments/932104587857522748/1247857636280504420/Frame_8.png?ex=66618d7c&is=66603bfc&hm=7aa5edaac5679c83a26e8145007e5b5c6eba906daf79c4ed192f0dba43328eaf&)

![download](https://cdn.discordapp.com/attachments/932104587857522748/1247857636704256040/Frame_9.png?ex=66618d7c&is=66603bfc&hm=12787ecefaebb2d09f74a399158b54cb160d55e77cff98b14844e3a490a9ec63&)

![download](https://cdn.discordapp.com/attachments/932104587857522748/1247857637102583909/Frame_12.png?ex=66618d7c&is=66603bfc&hm=71d810596fd605a3698bd6535bf919fd3a912ec79cd52feb095c97b9c845cc51&)

# Cenários e Personas

![download](https://cdn.discordapp.com/attachments/932104587857522748/1247867518425632850/Screenshot_2024-06-05_at_11.58.40.png?ex=666196b0&is=66604530&hm=d66b1976b0f5c1c9a6651ed88387d2cdfc03d51841b8f24c70da04da9d9577f4&)

![download](https://cdn.discordapp.com/attachments/932104587857522748/1247867518891065397/Screenshot_2024-06-05_at_11.59.06.png?ex=666196b0&is=66604530&hm=54a2fbc2b522568ce47259daed86583ff52e5f0bb228a2b5ceaad19d86419dc9&)

![download](https://cdn.discordapp.com/attachments/932104587857522748/1247867519243391070/Screenshot_2024-06-05_at_11.59.13.png?ex=666196b0&is=66604530&hm=0e618e17f00fdc4bddf23d628cc24e196ca592290650e63803b9a767874ae15b&)


# Requisitos funcionais e não funcionais

######
É essencial para um website seguir uma lista de requisitos que assegure um produto final atendendo às expetativas dos utilizadores e às necessidades dos negócios. Aqui está na nossa tabela de requisitos funcionais e não funcionais para garantir o sucesso do easyerasmus.  

# Tabela de Requisitos 

|   id    |                                                            Descrição                                                     |    Categoria     |
|  -----  |    ---------------------------------------------------------------------------------    |    ----    |
|         |                                                                                                                          |                  |
| RF1     | O utilizador deve conseguir fazer o registo e o login.                                                                   | Must Have        |
| RF2     | O administrador pode fazer o upload de informações sobre os programas de Erasmus num template específico.                | Must Have        |
| RF3     | As informações fornecidas pelo admistrador devem ser aprovadas antes de serem publicadas no site.                        | Nice to Have     |
| RF4     | Cada cidade disponível para programas de Erasmus deve ter uma página dedicada com informações detalhadas.                | Must have        |
| RF5     | Os estuadantes podem partilhar o seu feedback em relação a experiências que obtiveram em progrmas de mobilidade.         | Nice to Have     |
| RF6     | O admistrador consegue e deve atualizar as vagas disponíveis para cada programa de mobilidade.                           | Must Have        |
| RF7     | O utilizador deve conseguir realizar o logout.                                                                           | Must Have        |
| RF8     | O utilizador deve conseguir apagar a sua conta.                                                                          | Should Have      |
| RF9    | O utilizador deve conseguir recuperar a sua password.                                                                    | Should Have      |
| RF10    | O estudante  deve ter acesso às ofertas de programas de mobilidade .                                                     | Must Have        |
| RF11    | O estudante deve ter acesso às informações sobre as cidades que cada programa de mobilidade disponibiliza.               | Must Have        |

RF- Requisito Funcional  

# Plano de Trabalho e Tecnologias 
| Front-end     	| -Usar HTML para criação do design do website; -CSS para estilizar o website; -JS para a interatividade do website;                                                                                                                             	|
|---------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Back-end      	| -Node.js e PostgresSQL para desenvolvimento da REST API; -Criar endpoints RESTful para manipular solicitações HTTP; -Uso de bibliotecas para gerar sessões de utilizadores e hashing de senhas;                                                	|
| Base de dados 	| -Configuação do servidor na instância AWS; -Criar o esquema de base de dados e como este será organizado e relacionado;  	|                                                                                         	|
| Organização   	| -Organização do projeto é realizada no GitHub                                                                                                                                                                                                  	|

# Testes e validações do Software

O teste ao software que estamos a desenvolver será feito por estudantes universitários. Ou seja, a partir da ferramenta ‘useberry’ pretendemos criar testes com a nossa interface, para perceber se esta está desenvolvida de forma compreensiva e sem hipótese de dúvida por parte do utilizador, é aqui que vamos ver encontrar possíveis falhas e assim podemos aperfeiçoar a interface consoante a necessidade do utilizador.

# Documentação REST
| Registar admin                                                                                                                              	|
|---------------------------------------------------------------------------------------------------------------------------------------------	|
| /api/admin/register (post)                                                                                                                  	|
| Parametros: adminmail adminuni password                                                                                                     	|
| Dados: { "adminmail" : "adminmail@gmail.com", "adminuni" : "Universidade Europeia", "password" : "1234" } 
Sucesso: Registered! You can now log in. 	|
| Erros: 404: "Not Found" 500: erro no servidor                                                                                               	|

| Login admin                                                                                                                              	|
|---------------------------------------------------------------------------------------------------------------------------------------------	|
| /api/admin/auth (post)                                                                                                                	|
| Parametros: adminmail password                                                                                                     	|
| Dados: { "adminmail" : "adminmail@gmail.com", "password" : "1234" } 
Sucesso: "msg": "Successful Login!" 	|
| Erros: 404: "Not Found" 500: erro no servidor                                                                                               	|

| Registar User                                                                                                                             	|
|---------------------------------------------------------------------------------------------------------------------------------------------	|
| /api/user/register (post)                                                                                                               	|
| Parametros: nome email password universidade curso                                                                                                    	|
| Dados: { "nome": "Nome", "email": "email2gmail.com", "pass":"123", "uni": "universidade", "curso": "curso" } 
Sucesso: "msg": "Registered! You can now log in." 	|
| Erros: 404: "Not Found" 500: erro no servidor                                                                                               	|

| Login User                                                                                                                             	|
|---------------------------------------------------------------------------------------------------------------------------------------------	|
| /api/user/auth (post)                                                                                                               	|
| Parametros: email password                                                                                                   	|
| Dados: { "nome": "Nome", "email": "email2gmail.com", "pass":"123", "uni": "universidade", "curso": "curso" } 
Sucesso: "msg": "Successful Login!" 	|
| Erros: 404: "Not Found" 500: erro no servidor                                                                                               	|

| Logout admin                                                                                                                           	|
|---------------------------------------------------------------------------------------------------------------------------------------------	|
| /api/admin/auth (delete)                                                                                                              	|
| Parametros: adminmail password                                                                                                 	|
| Dados: { "adminmail": "adminmail@gmail.com", "password": "1234" } 
Sucesso: Status 204 	|
| Erros: 404: "Not Found" 500: erro no servidor                                                                                               	|

| Upload Programa                                                                                                                         	|
|---------------------------------------------------------------------------------------------------------------------------------------------	|
| /api/programa/upload (post)                                                                                                             	|
| Parametros: tipo universidade pais cidade vaga                                                                                                 	|
| Dados: { "prog_tipo": "erasmus", "prog_uni": "universidade", "prog_pais": "espanha", "prog_cid": "barcelona", "prog_vaga": 50  } 
Sucesso: {"message": "Programa adicionado com sucesso"} 	|
| Erros: 404: "Not Found" 500: erro no servidor                                                                                               	|
   

# Conclusão

######

Nesta secção do nosso relatório iremos proporcionar uma breve conclusão relativamente à criação do website, ideias previstas, e comparações com outras plataformas com o mesmo fim. 

Como dito antes, o nosso objetivo com a criação do website é proporcionar uma experiência de utilizador mais simplificada no que diz respeito a procura e conhecimento por parte de estudantes do conceito de ERASMUS bem como poder ajudar os mesmos a tomarem a sua decisão.  

Também e possível encontrar uma pesquisa externa de comparação com possíveis concorrentes, que nos fez concluir que o nosso website será mais viável e irá cobrir mais aspetos chave do que os outros como por exemplo, informações sobre o programa, suporte aos alunos, e oportunidades educativas, coisas que, outros websites não cobrem estas três vertentes conjuntas.  

Como dito antes, o principal objetivo da criação deste website é de proporcionar uma experiência preponderante relativamente aos microsites existentes. 

Concluindo, esperemos que, o nosso website consiga criar vantagens para os utilizadores do mesmo. 


# Referências

######
Pexels. (2019). Free stock photos · Pexels. Pexels.com; Pexels. https://www.pexels.com

Figma. (2019). Figma: the collaborative interface design tool. Figma. https://www.figma.com

ChatGPT. (2023). ChatGPT. Chat.openai.com; OpenAI. https://chat.openai.com/

Flowchart Maker & Online Diagram Software. (n.d.). App.diagrams.net.
https://app.diagrams.net

Draw.io. (n.d.). Flowchart Maker & Online Diagram Software. App.diagrams.net. https://app.diagrams.net/

Docker. (2018). Enterprise Application Container Platform | Docker. Docker. https://www.docker.com/

Github. (2013). Build software better, together. GitHub. https://github.com

Balakrishnan, H. (2023, August 6). Replication of PostgreSQL Database using Docker-Compose. Medium. https://medium.com/@haridasan/replication-of-postgresql-database-using-docker-compose-ffba6a2d1bce

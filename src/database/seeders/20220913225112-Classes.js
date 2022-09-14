'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Classes',
    [
      {
        name: 'Como funciona a internet',
        description: 'Nesta aula vamos aprender como funciona a internet. Vamos ver o que acontece por baixo dos panos quando você digita uma URL no navegador.',
        tags: '#web',
        video_id: 'AABqPceCwZk',
        type: 'basico',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Como funcionam os navegadores web',
        description: 'Um navegador web te leva para qualquer lugar na internet. Ele obtém informações de outras partes da web e as exibe em seu computador ou dispositivo móvel.',
        tags: '#web',
        video_id: '91hpA4F1-jw',
        type: 'basico',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'O que é HTTP?',
        description: 'HTTP é um protocolo de transferência que possibilita que as pessoas que inserem a URL do seu site na Web possam ver os conteúdos e dados que nele existem. A sigla vem do inglês Hypertext Transfer Protocol.',
        tags: '#web',
        video_id: 'G9VlDTshk-k',
        type: 'basico',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'O que é front-end e back-end?',
        description: 'Nesta aula vamos aprender a diferença entre os profissionais front-end, back-end e o full stack.',
        tags: '#web',
        video_id: 'bnoXykE_ng0',
        type: 'basico',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Classes', null, {}),
};
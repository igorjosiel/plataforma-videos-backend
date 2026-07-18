'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
        title: 'API com Express',
        description: 'Curso de API com Express e MongoDB',
        date_start: '2023-01-01',
        category_id: 5,
        teacher_id: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'SpringBoot',
        description: 'Curso de Java com Spring Framework',
        date_start: '2023-01-01',
        category_id: 6,
        teacher_id: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Python Web com Django',
        description: 'Curso de aplicações web com Django',
        date_start: '2023-01-01',
        category_id: 7,
        teacher_id: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Orientação a Objetos com C#',
        description: 'Curso de C#: coleções, arquivos e libs',
        date_start: '2023-01-01',
        category_id: 8,
        teacher_id: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};

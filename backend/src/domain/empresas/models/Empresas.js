const db = require('../../../infrastructure/database/index');
const { DataTypes } = require('sequelize');

const Empresas = db.define(
  'Empresas',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    cnpj: {
      type: DataTypes.STRING(200),
    },
    logo: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    situacao: {
      type: DataTypes.ENUM('ativo', 'inativo'),
      allowNull: false,
      defaultValue: 'ativo',
    },
    criado: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    alteradoEm: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'empresas',
    createdAt: 'criadoEm',
    updatedAt: 'alteradoEm',
    timestamps: true,
  }
);

module.exports = Empresas;

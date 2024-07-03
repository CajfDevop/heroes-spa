export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!query-string|decode-uri-component|split-on-first|filter-obj)', // Añade aquí los módulos que necesitan ser transformados
  ],
};
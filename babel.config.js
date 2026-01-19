module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['next/babel'],
    ['@babel/preset-react', { runtime: 'automatic' }],
    ['@babel/preset-typescript', { allowDeclareFields: true }],
  ],
}

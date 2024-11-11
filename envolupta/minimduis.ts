const flatfileOptions = {
  filename: 'example.csv',
  delimiter: ',',
  enclosure: '"',
  newline: '\n',
  header: true,
  skipRows: 1,
  parseRows: true,
  parseColumns: true,
  parseOptions: {
    strings: true,
    trim: true
  }
};

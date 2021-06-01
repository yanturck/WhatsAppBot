var stages = {
  'x': {
    descricao: "Descobrindo Próximo Estágio",
    obj: require("./stages/x"),
  },
  'y': {
    descricao: "SubMenu de Unidades",
    obj: require("./stages/y"),
  },
  'z': {
    descricao: "SubMenu de Horarios",
    obj: require("./stages/z"),
  },
  0: {
    descricao: "Boas Vidas + Menu",
    obj: require("./stages/0"),
  },
  1: {
    descricao: "Vantagens",
    obj: require("./stages/1"),
  },
  2: {
    descricao: "Unidades",
    obj: require("./stages/2"),
  },
  2.1: {
    descricao: "Africanos",
    obj: require("./stages/2,1"),
  },
  2.2: {
    descricao: "Calhau",
    obj: require("./stages/2,2"),
  },
  2.3: {
    descricao: "Turu",
    obj: require("./stages/2,3"),
  },
  3: {
    descricao: "Horarios",
    obj: require("./stages/3"),
  },
  3.1: {
    descricao: "Africanos",
    obj: require("./stages/3,1"),
  },
  3.2: {
    descricao: "Calhau",
    obj: require("./stages/3,2"),
  },
  3.3: {
    descricao: "Turu",
    obj: require("./stages/3,3"),
  },
  4: {
    descricao: "Mensalidades",
    obj: require("./stages/4"),
  },
  // 5: {
  //   descricao: "Aula Experimental",
  //   obj: require("./stages/4"),
  // },
  // 6: {
  //   descricao: "Já sou Aluno",
  //   obj: require("./stages/5"),
  // },
  };
  
  exports.step = stages;  
export type KnowledgeArticle = {
  slug: string
  title: string
  category: string
  readTime: string
  intro: string
  steps: { title: string; description: string }[]
}

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: 'primeira-conciliacao', title: 'Como fazer sua primeira conciliação', category: 'Primeiros passos', readTime: '5 min de leitura',
    intro: 'Siga este roteiro para importar seu extrato, revisar as sugestões e finalizar o primeiro período com confiança.',
    steps: [
      { title: 'Acesse sua empresa', description: 'No painel inicial, selecione a empresa e o período que deseja conciliar.' },
      { title: 'Importe o extrato bancário', description: 'Envie o arquivo exportado pelo banco e confirme as informações identificadas pelo sistema.' },
      { title: 'Revise as sugestões', description: 'Confira os lançamentos encontrados e ajuste os itens que precisarem de uma validação manual.' },
      { title: 'Finalize o período', description: 'Quando não houver pendências, finalize a conciliação para registrar o resultado.' },
    ],
  },
  {
    slug: 'importar-extrato-bancario', title: 'Como importar um extrato bancário', category: 'Conciliação bancária', readTime: '4 min de leitura',
    intro: 'Prepare o arquivo exportado pelo banco e importe seus lançamentos para começar uma nova conciliação.',
    steps: [
      { title: 'Abra uma nova conciliação', description: 'Escolha a empresa, a conta bancária e o período que será analisado.' },
      { title: 'Selecione o arquivo', description: 'Envie o extrato no formato disponibilizado pelo seu banco e aguarde a leitura.' },
      { title: 'Confirme os dados', description: 'Valide o período, a conta e a quantidade de lançamentos antes de continuar.' },
    ],
  },
  {
    slug: 'revisar-lancamentos', title: 'Como revisar lançamentos sugeridos', category: 'Conciliação bancária', readTime: '6 min de leitura',
    intro: 'Use as sugestões da plataforma como ponto de partida e mantenha a decisão final sob seu controle.',
    steps: [
      { title: 'Abra a fila de revisão', description: 'Acesse os lançamentos pendentes para visualizar cada sugestão encontrada.' },
      { title: 'Compare as informações', description: 'Confira data, valor e histórico do extrato com o lançamento contábil correspondente.' },
      { title: 'Confirme ou ajuste', description: 'Aprove a sugestão, edite os dados necessários ou sinalize o item para revisão manual.' },
    ],
  },
  {
    slug: 'convidar-equipe', title: 'Como convidar alguém da sua equipe', category: 'Conta e configurações', readTime: '3 min de leitura',
    intro: 'Dê acesso às pessoas certas e mantenha sua operação organizada desde o primeiro dia.',
    steps: [
      { title: 'Abra as configurações', description: 'No menu da conta, acesse a área de usuários e permissões.' },
      { title: 'Envie o convite', description: 'Informe o email do colaborador e escolha o nível de acesso adequado.' },
      { title: 'Acompanhe o acesso', description: 'O colaborador receberá um convite por email e aparecerá na sua lista de usuários.' },
    ],
  },
]
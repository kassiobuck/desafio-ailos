import { Cooperado } from '../types/cooperado.type';

export class SearchUserService {

  constructor() { }

  searchByCpf(cpf:string): Promise<Cooperado> {
    if(!cpf) {
      throw 'CPF can not be empty';
    }

    const user:Cooperado = {
      nome: 'Mariane de Solva Oliveira',
      statusCpf: 'regular',
      cpf: cpf,
      contas: [
        {
          tipo: 'Conta Aplicação',
          instituicao: 'Cooperativa Viacred',
          numero: '557932-4'
        },
        {
          tipo: 'Conta Corrente',
          instituicao: 'Cooperativa Viacred',
          numero: '778461-8'
        }
      ]
    }


    return new Promise(resolve => setTimeout(()=>resolve(user), 1000));
  }
}

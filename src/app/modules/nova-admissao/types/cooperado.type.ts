import { Conta } from "./Conta.type";

export type Cooperado = {
    nome:string,
    cpf:string,
    statusCpf:'regular'|'irregular'|'pendente',
    contas: Conta[],
}
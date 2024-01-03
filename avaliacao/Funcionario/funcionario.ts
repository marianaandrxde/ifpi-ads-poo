abstract class  Funcionario {
    private _salario: number;

    constructor(_salario: number) {
        this._salario = _salario;
    }

    get salario(): number{
        return this._salario;
    }

    public abstract getBonificacao(): number;
}

export default Funcionario;
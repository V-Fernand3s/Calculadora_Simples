import { useState } from "react";

import "./FormCalculadora.css";

function FormCalculadora() {

    // ==========================================
    // ESTADOS DA CALCULADORA
    // ==========================================

    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");

    const [operacao, setOperacao] = useState("+");

    const [resultado, setResultado] = useState(null);

    const [mensagem, setMensagem] = useState("");

    const [calculou, setCalculou] = useState(false);


    // ==========================================
    // FUNÇÃO DE CÁLCULO
    // ==========================================

    function calcular() {

        // Verifica se os campos estão vazios
        if (numero1 === "" || numero2 === "") {

            setResultado(null);

            setMensagem(
                "Preencha os dois números para realizar o cálculo."
            );

            setCalculou(true);

            return;
        }


        // Converte os valores para números
        const valor1 = Number(numero1);
        const valor2 = Number(numero2);

        let resultadoCalculado;


        // ==========================================
        // OPERAÇÕES
        // ==========================================

        switch (operacao) {

            case "+":

                resultadoCalculado = valor1 + valor2;

                break;


            case "-":

                resultadoCalculado = valor1 - valor2;

                break;


            case "*":

                resultadoCalculado = valor1 * valor2;

                break;


            case "/":

                // Não permite divisão por zero
                if (valor2 === 0) {

                    setResultado(null);

                    setMensagem(
                        "Não é possível dividir um número por zero."
                    );

                    setCalculou(true);

                    return;
                }

                resultadoCalculado = valor1 / valor2;

                break;


            default:

                setResultado(null);

                setMensagem(
                    "Selecione uma operação válida."
                );

                setCalculou(true);

                return;
        }


        // ==========================================
        // FORMATAÇÃO DO RESULTADO
        // ==========================================

        if (!Number.isInteger(resultadoCalculado)) {

            resultadoCalculado =
                Number(resultadoCalculado.toFixed(2));
        }


        // Salva o resultado
        setResultado(resultadoCalculado);

        setMensagem("");

        setCalculou(true);
    }


    // ==========================================
    // FUNÇÃO LIMPAR
    // ==========================================

    function limpar() {

        setNumero1("");

        setNumero2("");

        setOperacao("+");

        setResultado(null);

        setMensagem("");

        setCalculou(false);
    }


    // ==========================================
    // TECLA ENTER
    // ==========================================

    function pressionarEnter(event) {

        if (event.key === "Enter") {

            calcular();
        }
    }


    // ==========================================
    // RETORNO DO COMPONENTE
    // ==========================================

    return (

        <div className="form-calculadora">

            {/* ==================================
                TÍTULO DO FORMULÁRIO
            ================================== */}

            <div className="titulo-formulario">

                <h2>Faça seu cálculo</h2>

                <p>
                    Informe os valores e escolha uma operação.
                </p>

            </div>


            {/* ==================================
                PRIMEIRO NÚMERO
            ================================== */}

            <div className="campo">

                <label htmlFor="numero1">
                    Primeiro número
                </label>

                <div className="input-container">

                    <span className="input-icone">
                        1
                    </span>

                    <input
                        id="numero1"
                        type="number"
                        placeholder="Digite o primeiro número"
                        value={numero1}
                        onChange={(event) =>
                            setNumero1(event.target.value)
                        }
                        onKeyDown={pressionarEnter}
                    />

                </div>

            </div>


            {/* ==================================
                OPERAÇÃO
            ================================== */}

            <div className="campo">

                <label htmlFor="operacao">
                    Operação
                </label>

                <div className="input-container">

                    <span className="input-icone">
                        =
                    </span>

                    <select
                        id="operacao"
                        value={operacao}
                        onChange={(event) =>
                            setOperacao(event.target.value)
                        }
                    >

                        <option value="+">
                            Adição (+)
                        </option>

                        <option value="-">
                            Subtração (-)
                        </option>

                        <option value="*">
                            Multiplicação (×)
                        </option>

                        <option value="/">
                            Divisão (÷)
                        </option>

                    </select>

                </div>

            </div>


            {/* ==================================
                SEGUNDO NÚMERO
            ================================== */}

            <div className="campo">

                <label htmlFor="numero2">
                    Segundo número
                </label>

                <div className="input-container">

                    <span className="input-icone">
                        2
                    </span>

                    <input
                        id="numero2"
                        type="number"
                        placeholder="Digite o segundo número"
                        value={numero2}
                        onChange={(event) =>
                            setNumero2(event.target.value)
                        }
                        onKeyDown={pressionarEnter}
                    />

                </div>

            </div>


            {/* ==================================
                BOTÕES
            ================================== */}

            <div className="botoes">

                <button
                    type="button"
                    className="btn-calcular"
                    onClick={calcular}
                >

                    <span className="icone-botao">
                        =
                    </span>

                    <span>
                        Calcular
                    </span>

                </button>


                <button
                    type="button"
                    className="btn-limpar"
                    onClick={limpar}
                >

                    <span className="icone-botao">
                        ↻
                    </span>

                    <span>
                        Limpar
                    </span>

                </button>

            </div>


            {/* ==================================
                RESULTADO
            ================================== */}

            {calculou && (

                <div
                    className={
                        resultado !== null
                            ? "resultado"
                            : "resultado erro"
                    }
                >

                    {resultado !== null ? (

                        <>

                            <div className="resultado-topo">

                                <span className="resultado-icone">
                                    ✓
                                </span>

                                <span>
                                    Resultado
                                </span>

                            </div>


                            <div className="resultado-valor">

                                {resultado}

                            </div>


                            <div className="operacao-realizada">

                                {numero1}
                                {" "}
                                {operacao === "*" ? "×" : operacao}
                                {" "}
                                {numero2}
                                {" "}
                                =
                                {" "}
                                {resultado}

                            </div>

                        </>

                    ) : (

                        <>

                            <div className="resultado-topo">

                                <span className="resultado-icone">
                                    !
                                </span>

                                <span>
                                    Atenção
                                </span>

                            </div>

                            <p className="mensagem-erro">
                                {mensagem}
                            </p>

                        </>

                    )}

                </div>

            )}

        </div>
    );
}

export default FormCalculadora;
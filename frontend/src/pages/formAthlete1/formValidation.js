import * as yup from "yup";

const validationSchema = yup.object({
  altura_mae: yup
    .number("Digite a altura em centímetros")
    .typeError("Digite um valor inteiro")
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(250, "Digite um valor possível para altura."),
  altura_pai: yup
    .number("Digite a altura em centímetros")
    .typeError("Digite um valor inteiro")
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(250, "Digite um valor possível para altura."),
  tem_atleta_na_familia: yup
    .bool(false)
    .typeError("Marque uma opção")
    .required("Campo obrigatório"),
  modalidade: yup
    .string("Digite a modalidade praticada")
    .required("Campo obrigatório")
    .typeError("Forneça uma modalidade"),
  pais_praticantes_esporte: yup
    .bool(false)
    .typeError("Marque uma opção")
    .required("Campo obrigatório"),
});

export default validationSchema;
import * as yup from "yup";

const validationSchema = yup.object({
  desempenho_percebido: yup
    .number("")
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  desempenho_comparativo: yup
    .number("")
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  questao1: yup
    .number("")
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  questao2: yup
    .number("")
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  questao3: yup
    .number("")
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  questao4: yup
    .number("")
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  questao5: yup
    .number("")
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  questao6: yup
    .number("")
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  questao7: yup
    .number("")
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  questao8: yup
    .number("")
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  questao9: yup
    .number("")
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  questao10: yup
  .number("")
  .typeError("Campo obrigatório")
  .required("Campo obrigatório"),
});

export default validationSchema;
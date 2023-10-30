import * as yup from "yup";

const validationSchema = yup.object({
  tem_orientacao_treinador: yup
    .bool("")
    .typeError("Marque uma opção")
    .required("Campo obrigatório"),
  qual_esporte_treina1: yup
    .string("Digite a modalidade praticada")
    .required("Campo obrigatório")
    .typeError("Digite um inteiro"),
  tempo_treinamento1: yup
    .number("Digite há quanto tempo treina")
    .required("Campo obrigatório")
    .min(0)
    .typeError("Digite um valor inteiro"),
  frequencia_semanal_treino1: yup
    .number("Digite a frequência semanal")
    .required("Campo obrigatório")
    .min(0)
    .typeError("Digite um valor inteiro"),
  duracao_treino_horas1: yup
    .number("Digite a duração do treino em horas")
    .required("Campo obrigatório")
    .min(0)
    .typeError("Digite um valor inteiro"),
  qual_esporte_treina2: yup
    .string("Digite a modalidade praticada")
    .required("Campo obrigatório")
    .typeError(""),
  tempo_treinamento2: yup
    .number("Digite há quanto tempo treina")
    .required("Campo obrigatório")
    .min(0)
    .typeError("Digite um valor inteiro"),
  frequencia_semanal_treino2: yup
    .number("Digite a frequência semanal")
    .required("Campo obrigatório")
    .min(0)
    .typeError("Digite um valor inteiro"),
  duracao_treino_horas2: yup
    .number("Digite a duração do treino em horas")
    .required("Campo obrigatório")
    .min(0)
    .typeError("Digite um valor inteiro"),
  instituicao_treinamento: yup
    .string("Digite em qual instituição treina")
    .required("Campo obrigatório")
    .typeError(""),
  esporte_preferido: yup
    .string("Digite qual o seu esporte favorito")
    .required("Campo obrigatório")
    .typeError(""),
  idade_inicio_futebol: yup
    .number("Digite a duração do treino em horas")
    .required("Campo obrigatório")
    .min(0)
    .typeError("Digite um valor inteiro"),
  participa_competicao: yup
    .bool("")
    .typeError("Marque uma opção")
    .required("Campo obrigatório"),
  maior_nivel_competicao: yup
    .number("")
    .required("Campo obrigatório")
    .min(0)
    .typeError(""),
  nome_competicao: yup
    .string("")
    .required("Campo obrigatório")
    .min(0)
    .typeError(""),
  maior_nivel_vitoria: yup
    .number("")
    .min(0)
    .required("Campo obrigatório")
    .typeError(""),
  nome_competicao_maior_vitoria: yup
    .string("Digite qual o nome da competição")
    .required("Campo obrigatório")
    .typeError(""),
  quer_ser_atleta: yup
    .bool("")
    .typeError("Marque uma opção")
    .required("Campo obrigatório"),
  modalidade: yup
    .string("Digite a modalidade futura")
    .required("Campo obrigatório")
    .typeError("Digite a modalidade futura"),
  teve_lesao: yup
    .bool("")
    .typeError("Marque uma opção")
    .required("Campo obrigatório"),
  quantas_lesoes: yup
    .number("")
    .required("Campo obrigatório")
    .typeError("Digite um valor inteiro"),
});

export default validationSchema;
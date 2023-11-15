--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.10
-- Dumped by pg_dump version 9.6.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: _atleta; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._atleta (
    id smallint,
    data_criacao character varying(10) DEFAULT NULL::character varying,
    nome_completo character varying(37) DEFAULT NULL::character varying,
    data_nascimento character varying(1) DEFAULT NULL::character varying,
    contato character varying(12) DEFAULT NULL::character varying,
    pais character varying(6) DEFAULT NULL::character varying,
    estado character varying(14) DEFAULT NULL::character varying,
    cidade character varying(13) DEFAULT NULL::character varying,
    sexo character varying(1) DEFAULT NULL::character varying,
    escolaridade character varying(1) DEFAULT NULL::character varying,
    tipo_escola character varying(1) DEFAULT NULL::character varying,
    repetente character varying(1) DEFAULT NULL::character varying,
    categoria_etaria character varying(6) DEFAULT NULL::character varying,
    posicao_jogo character varying(16) DEFAULT NULL::character varying,
    instituicao_clube character varying(16) DEFAULT NULL::character varying,
    senha character varying(3) DEFAULT NULL::character varying,
    possui_deficiencia character varying(1) DEFAULT NULL::character varying,
    qual_deficiencia character varying(2) DEFAULT NULL::character varying,
    algum_problema_saude character varying(1) DEFAULT NULL::character varying,
    qual_problema_saude character varying(9) DEFAULT NULL::character varying,
    qual_medicamento character varying(2) DEFAULT NULL::character varying,
    qualidade_sono character varying(1) DEFAULT NULL::character varying,
    recuperacao_ao_acordar character varying(2) DEFAULT NULL::character varying,
    dominancia_maos character varying(1) DEFAULT NULL::character varying,
    dominancia_pes smallint,
    ja_teve_menarca character varying(36) DEFAULT NULL::character varying,
    idade_menarca character varying(36) DEFAULT NULL::character varying,
    usa_medicamento_regularmente character varying(36) DEFAULT NULL::character varying
);


ALTER TABLE public._atleta OWNER TO rebasedata;

--
-- Name: _auth_group; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._auth_group (
    id character varying(1) DEFAULT NULL::character varying,
    name character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._auth_group OWNER TO rebasedata;

--
-- Name: _auth_group_permissions; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._auth_group_permissions (
    id character varying(1) DEFAULT NULL::character varying,
    group_id character varying(1) DEFAULT NULL::character varying,
    permission_id character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._auth_group_permissions OWNER TO rebasedata;

--
-- Name: _auth_permission; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._auth_permission (
    id smallint,
    content_type_id smallint,
    codename character varying(47) DEFAULT NULL::character varying,
    name character varying(55) DEFAULT NULL::character varying
);


ALTER TABLE public._auth_permission OWNER TO rebasedata;

--
-- Name: _auth_user; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._auth_user (
    id smallint,
    password character varying(88) DEFAULT NULL::character varying,
    last_login character varying(10) DEFAULT NULL::character varying,
    is_superuser smallint,
    username character varying(11) DEFAULT NULL::character varying,
    last_name character varying(1) DEFAULT NULL::character varying,
    email character varying(27) DEFAULT NULL::character varying,
    is_staff smallint,
    is_active smallint,
    date_joined character varying(10) DEFAULT NULL::character varying,
    first_name character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._auth_user OWNER TO rebasedata;

--
-- Name: _auth_user_groups; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._auth_user_groups (
    id character varying(1) DEFAULT NULL::character varying,
    user_id character varying(1) DEFAULT NULL::character varying,
    group_id character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._auth_user_groups OWNER TO rebasedata;

--
-- Name: _auth_user_user_permissions; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._auth_user_user_permissions (
    id smallint,
    user_id smallint,
    permission_id smallint
);


ALTER TABLE public._auth_user_user_permissions OWNER TO rebasedata;

--
-- Name: _avaliacao_aerobica; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._avaliacao_aerobica (
    id smallint,
    data_criacao character varying(10) DEFAULT NULL::character varying,
    estagio character varying(2) DEFAULT NULL::character varying,
    volta character varying(2) DEFAULT NULL::character varying,
    atleta_id smallint,
    treinador_id character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._avaliacao_aerobica OWNER TO rebasedata;

--
-- Name: _avaliacao_antropometrica_fisicomotora; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._avaliacao_antropometrica_fisicomotora (
    id smallint,
    data_criacao character varying(10) DEFAULT NULL::character varying,
    estatura numeric(4,1) DEFAULT NULL::numeric,
    altura_sentado numeric(3,1) DEFAULT NULL::numeric,
    envergadura numeric(4,1) DEFAULT NULL::numeric,
    dc_triciptal numeric(3,1) DEFAULT NULL::numeric,
    dc_perna numeric(3,1) DEFAULT NULL::numeric,
    flexibilidade_t1 numeric(3,1) DEFAULT NULL::numeric,
    flexibilidade_t2 numeric(3,1) DEFAULT NULL::numeric,
    flexibilidade_t3 character varying(4) DEFAULT NULL::character varying,
    preensao_manual_t1 numeric(3,1) DEFAULT NULL::numeric,
    preensao_manual_t2 numeric(3,1) DEFAULT NULL::numeric,
    preensao_manual_t3 character varying(4) DEFAULT NULL::character varying,
    salto_vertical_t1 numeric(3,1) DEFAULT NULL::numeric,
    salto_vertical_t2 numeric(3,1) DEFAULT NULL::numeric,
    salto_vertical_t3 numeric(3,1) DEFAULT NULL::numeric,
    velocidade_10m_t1 character varying(5) DEFAULT NULL::character varying,
    velocidade_10m_t2 character varying(5) DEFAULT NULL::character varying,
    velocidade_20m_t1 character varying(5) DEFAULT NULL::character varying,
    velocidade_20m_t2 character varying(5) DEFAULT NULL::character varying,
    agilidade_t1 character varying(5) DEFAULT NULL::character varying,
    agilidade_t2 character varying(5) DEFAULT NULL::character varying,
    drible_t1 character varying(6) DEFAULT NULL::character varying,
    drible_t2 character varying(6) DEFAULT NULL::character varying,
    atleta_id smallint,
    treinador_id character varying(1) DEFAULT NULL::character varying,
    massa_corporal numeric(3,1) DEFAULT NULL::numeric
);


ALTER TABLE public._avaliacao_antropometrica_fisicomotora OWNER TO rebasedata;

--
-- Name: _avaliacao_aspectos_intangiveis; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._avaliacao_aspectos_intangiveis (
    id smallint,
    data_criacao character varying(10) DEFAULT NULL::character varying,
    questao1 smallint,
    questao2 smallint,
    questao3 smallint,
    questao4 smallint,
    questao5 smallint,
    questao6 smallint,
    questao7 character varying(3) DEFAULT NULL::character varying,
    questao8 smallint,
    questao10 smallint,
    atleta_id character varying(2) DEFAULT NULL::character varying,
    treinador_id character varying(1) DEFAULT NULL::character varying,
    questao9 smallint
);


ALTER TABLE public._avaliacao_aspectos_intangiveis OWNER TO rebasedata;

--
-- Name: _avaliacao_potencial_esportivo; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._avaliacao_potencial_esportivo (
    id smallint,
    data_criacao character varying(10) DEFAULT NULL::character varying,
    modalidade_futura character varying(7) DEFAULT NULL::character varying,
    posicao_futura character varying(16) DEFAULT NULL::character varying,
    atleta_id smallint,
    treinador_id character varying(1) DEFAULT NULL::character varying,
    potencial_futuro smallint
);


ALTER TABLE public._avaliacao_potencial_esportivo OWNER TO rebasedata;

--
-- Name: _django_admin_log; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._django_admin_log (
    id smallint,
    object_id smallint,
    object_repr character varying(52) DEFAULT NULL::character varying,
    action_flag smallint,
    change_message character varying(83) DEFAULT NULL::character varying,
    content_type_id smallint,
    user_id smallint,
    action_time character varying(10) DEFAULT NULL::character varying
);


ALTER TABLE public._django_admin_log OWNER TO rebasedata;

--
-- Name: _django_content_type; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._django_content_type (
    id smallint,
    app_label character varying(15) DEFAULT NULL::character varying,
    model character varying(40) DEFAULT NULL::character varying
);


ALTER TABLE public._django_content_type OWNER TO rebasedata;

--
-- Name: _django_migrations; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._django_migrations (
    id smallint,
    app character varying(15) DEFAULT NULL::character varying,
    name character varying(81) DEFAULT NULL::character varying,
    applied character varying(10) DEFAULT NULL::character varying
);


ALTER TABLE public._django_migrations OWNER TO rebasedata;

--
-- Name: _django_session; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._django_session (
    session_key character varying(32) DEFAULT NULL::character varying,
    session_data character varying(227) DEFAULT NULL::character varying,
    expire_date character varying(10) DEFAULT NULL::character varying
);


ALTER TABLE public._django_session OWNER TO rebasedata;

--
-- Name: _questionario_acsi; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._questionario_acsi (
    id smallint,
    data_criacao character varying(10) DEFAULT NULL::character varying,
    questao1 character varying(1) DEFAULT NULL::character varying,
    questao2 character varying(1) DEFAULT NULL::character varying,
    questao3 character varying(1) DEFAULT NULL::character varying,
    questao4 character varying(1) DEFAULT NULL::character varying,
    questao5 character varying(1) DEFAULT NULL::character varying,
    questao6 character varying(1) DEFAULT NULL::character varying,
    questao7 character varying(1) DEFAULT NULL::character varying,
    questao8 character varying(1) DEFAULT NULL::character varying,
    questao10 character varying(1) DEFAULT NULL::character varying,
    questao11 character varying(1) DEFAULT NULL::character varying,
    questao12 character varying(1) DEFAULT NULL::character varying,
    questao13 character varying(1) DEFAULT NULL::character varying,
    questao14 character varying(1) DEFAULT NULL::character varying,
    questao15 character varying(1) DEFAULT NULL::character varying,
    questao16 character varying(1) DEFAULT NULL::character varying,
    questao17 character varying(1) DEFAULT NULL::character varying,
    questao18 character varying(1) DEFAULT NULL::character varying,
    questao19 character varying(1) DEFAULT NULL::character varying,
    questao20 character varying(1) DEFAULT NULL::character varying,
    questao21 character varying(1) DEFAULT NULL::character varying,
    questao22 character varying(1) DEFAULT NULL::character varying,
    questao23 character varying(1) DEFAULT NULL::character varying,
    questao24 character varying(1) DEFAULT NULL::character varying,
    questao25 character varying(1) DEFAULT NULL::character varying,
    questao26 character varying(1) DEFAULT NULL::character varying,
    questao27 character varying(1) DEFAULT NULL::character varying,
    atleta_id smallint,
    questao9 character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._questionario_acsi OWNER TO rebasedata;

--
-- Name: _questionario_competencia_suporte_familiar; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._questionario_competencia_suporte_familiar (
    id smallint,
    desempenho_percebido character varying(2) DEFAULT NULL::character varying,
    desempenho_comparativo character varying(2) DEFAULT NULL::character varying,
    questao1 smallint,
    questao2 character varying(1) DEFAULT NULL::character varying,
    questao3 character varying(1) DEFAULT NULL::character varying,
    questao4 character varying(1) DEFAULT NULL::character varying,
    questao5 character varying(1) DEFAULT NULL::character varying,
    questao6 smallint,
    questao7 smallint,
    questao8 smallint,
    questao9 smallint,
    questao10 smallint,
    atleta_id character varying(2) DEFAULT NULL::character varying,
    data_criacao character varying(10) DEFAULT NULL::character varying
);


ALTER TABLE public._questionario_competencia_suporte_familiar OWNER TO rebasedata;

--
-- Name: _questionario_pais_socioeconomico; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._questionario_pais_socioeconomico (
    id smallint,
    data_criacao character varying(10) DEFAULT NULL::character varying,
    altura_mae character varying(3) DEFAULT NULL::character varying,
    altura_pai character varying(3) DEFAULT NULL::character varying,
    atleta_id smallint,
    modalidade character varying(3) DEFAULT NULL::character varying,
    pais_praticantes_esporte character varying(1) DEFAULT NULL::character varying,
    tem_atleta_na_familia character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._questionario_pais_socioeconomico OWNER TO rebasedata;

--
-- Name: _questionario_pessoal; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._questionario_pessoal (
    id smallint,
    data_criacao character varying(10) DEFAULT NULL::character varying,
    tem_orientacao_treinador smallint,
    qual_esporte_treina1 character varying(7) DEFAULT NULL::character varying,
    tempo_treinamento1 character varying(2) DEFAULT NULL::character varying,
    frequencia_semanal_treino1 character varying(1) DEFAULT NULL::character varying,
    duracao_treino_horas1 character varying(1) DEFAULT NULL::character varying,
    qual_esporte_treina2 character varying(8) DEFAULT NULL::character varying,
    tempo_treinamento2 character varying(2) DEFAULT NULL::character varying,
    frequencia_semanal_treino2 character varying(1) DEFAULT NULL::character varying,
    duracao_treino_horas2 character varying(1) DEFAULT NULL::character varying,
    instituicao_treinamento character varying(1) DEFAULT NULL::character varying,
    esporte_preferido character varying(7) DEFAULT NULL::character varying,
    idade_inicio_futebol character varying(2) DEFAULT NULL::character varying,
    participa_competicao character varying(36) DEFAULT NULL::character varying,
    maior_nivel_competicao character varying(1) DEFAULT NULL::character varying,
    nome_competicao character varying(53) DEFAULT NULL::character varying,
    nome_competicao_maior_vitoria character varying(43) DEFAULT NULL::character varying,
    quer_ser_atleta character varying(1) DEFAULT NULL::character varying,
    modalidade character varying(1) DEFAULT NULL::character varying,
    teve_lesao character varying(1) DEFAULT NULL::character varying,
    atleta_id smallint,
    quantas_lesoes character varying(1) DEFAULT NULL::character varying,
    maior_nivel_vitoria character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._questionario_pessoal OWNER TO rebasedata;

--
-- Name: _questionario_soq; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._questionario_soq (
    id smallint,
    data_criacao character varying(10) DEFAULT NULL::character varying,
    questao1 character varying(1) DEFAULT NULL::character varying,
    questao2 character varying(1) DEFAULT NULL::character varying,
    questao3 character varying(1) DEFAULT NULL::character varying,
    questao4 character varying(1) DEFAULT NULL::character varying,
    questao5 character varying(1) DEFAULT NULL::character varying,
    questao6 character varying(1) DEFAULT NULL::character varying,
    questao7 character varying(1) DEFAULT NULL::character varying,
    questao8 character varying(1) DEFAULT NULL::character varying,
    questao10 character varying(1) DEFAULT NULL::character varying,
    questao11 character varying(1) DEFAULT NULL::character varying,
    questao12 character varying(1) DEFAULT NULL::character varying,
    questao13 character varying(1) DEFAULT NULL::character varying,
    questao14 character varying(1) DEFAULT NULL::character varying,
    questao15 character varying(1) DEFAULT NULL::character varying,
    questao16 character varying(1) DEFAULT NULL::character varying,
    questao17 character varying(1) DEFAULT NULL::character varying,
    questao18 character varying(1) DEFAULT NULL::character varying,
    questao19 character varying(1) DEFAULT NULL::character varying,
    questao20 character varying(1) DEFAULT NULL::character varying,
    questao21 character varying(1) DEFAULT NULL::character varying,
    questao22 character varying(1) DEFAULT NULL::character varying,
    questao23 character varying(1) DEFAULT NULL::character varying,
    questao24 character varying(1) DEFAULT NULL::character varying,
    questao25 character varying(1) DEFAULT NULL::character varying,
    atleta_id character varying(2) DEFAULT NULL::character varying,
    questao9 character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._questionario_soq OWNER TO rebasedata;

--
-- Name: _questionario_tacsi; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._questionario_tacsi (
    id smallint,
    data_criacao character varying(10) DEFAULT NULL::character varying,
    questao1 smallint,
    questao2 smallint,
    questao3 smallint,
    questao4 smallint,
    questao5 smallint,
    questao6 smallint,
    questao7 smallint,
    questao8 smallint,
    questao10 smallint,
    questao11 smallint,
    questao12 smallint,
    questao13 smallint,
    questao14 smallint,
    questao15 smallint,
    questao16 smallint,
    questao17 smallint,
    questao18 smallint,
    questao19 smallint,
    questao20 smallint,
    questao21 smallint,
    questao22 smallint,
    atleta_id character varying(2) DEFAULT NULL::character varying,
    questao23 smallint,
    questao24 smallint,
    questao25 smallint,
    questao26 smallint,
    questao27 smallint,
    questao28 smallint,
    questao29 smallint,
    questao30 smallint,
    questao31 smallint,
    questao32 smallint,
    questao33 smallint,
    questao34 smallint,
    questao35 smallint,
    questao36 smallint,
    questao9 smallint
);


ALTER TABLE public._questionario_tacsi OWNER TO rebasedata;

--
-- Name: _sqlite_sequence; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._sqlite_sequence (
    name character varying(41) DEFAULT NULL::character varying,
    seq smallint
);


ALTER TABLE public._sqlite_sequence OWNER TO rebasedata;

--
-- Name: _token_blacklist_blacklistedtoken; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._token_blacklist_blacklistedtoken (
    blacklisted_at character varying(10) DEFAULT NULL::character varying,
    token_id smallint,
    id smallint
);


ALTER TABLE public._token_blacklist_blacklistedtoken OWNER TO rebasedata;

--
-- Name: _token_blacklist_outstandingtoken; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._token_blacklist_outstandingtoken (
    token character varying(272) DEFAULT NULL::character varying,
    created_at character varying(10) DEFAULT NULL::character varying,
    expires_at character varying(1) DEFAULT NULL::character varying,
    user_id character varying(1) DEFAULT NULL::character varying,
    jti character varying(32) DEFAULT NULL::character varying,
    id smallint
);


ALTER TABLE public._token_blacklist_outstandingtoken OWNER TO rebasedata;

--
-- Name: _treinador; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._treinador (
    id smallint,
    data_criacao character varying(10) DEFAULT NULL::character varying,
    nome_completo character varying(30) DEFAULT NULL::character varying,
    email character varying(27) DEFAULT NULL::character varying,
    data_nascimento character varying(1) DEFAULT NULL::character varying,
    sexo smallint,
    instituicao_clube character varying(12) DEFAULT NULL::character varying,
    pais character varying(6) DEFAULT NULL::character varying,
    estado character varying(12) DEFAULT NULL::character varying,
    cidade character varying(10) DEFAULT NULL::character varying,
    senha smallint
);


ALTER TABLE public._treinador OWNER TO rebasedata;

--
-- Data for Name: _atleta; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._atleta (id, data_criacao, nome_completo, data_nascimento, contato, pais, estado, cidade, sexo, escolaridade, tipo_escola, repetente, categoria_etaria, posicao_jogo, instituicao_clube, senha, possui_deficiencia, qual_deficiencia, algum_problema_saude, qual_problema_saude, qual_medicamento, qualidade_sono, recuperacao_ao_acordar, dominancia_maos, dominancia_pes, ja_teve_menarca, idade_menarca, usa_medicamento_regularmente) FROM stdin;
2	2023-01-31	Arthur Rocha Coimbra		32999148215	Brasil	MG	JF	1	9	2	0	NA	0	Futebol/UFJF	123	0	NA	0	NA	NA	4	8	1	2	0	0	0
3	2023-01-31	Caio Mendes Leal		32991998330	Brasil	MG	JF	1	8	2	0	NA	Meio Campo	Futebol/UFJF	123	0	NA	0	NA	NA	4	10	1	3	0	0	0
4	2023-01-31	Danilo Sobreira de Paula		32991289456	Brasil	Minas Gerais	Juiz de Fora	1	2	1	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	3	8	1	2	0	0	0
5	2023-01-31	Davi Robert Pereira Tobias		NA	Brasil	MG	JF	1	8	1	0	NA	Meio Campo	Futebol/UFJF	123	0	NA	0	NA	NA	3	0	1	1	0	0	0
6	2023-01-31	David Vitor Lima Ferreira		NA	Brasil	Minas Gerais	Juiz de Fora	1	9	1	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	4	0	1	1	0	0	0
7	2023-01-31	Diego Emanuel Lopes		988553270	Brasil	Minas Gerais	Juiz de Fora	1	9	1	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	4	8	1	1	0	0	0
8	2023-01-31	Douglas Moreira Virgílio		32984817636	Brasil	MG	Pequeri	1	1	1	0	NA	0	Futebol/UFJF	123	0	NA	0	NA	NA	4	8	1	1	0	0	0
9	2023-01-31	Eggon Gabriel		32991500002	Brasil	Minas Gerais	Juiz de Fora	1	2	2	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	4	8	1	3	0	0	0
10	2023-01-31	Eick Campos Erossi Caetano		32998374644	Brasil	MG	Santus Dumont	1	9	2	0	NA	Meio Campo	Futebol/UFJF	123	0	NA	0	NA	NA	3	8	1	1	0	0	0
11	2023-01-31	Enrico DE Castro Geara		32987013733	Brasil	MG	JF	1	8	1	0	NA	Lateral Esquerdo	Futebol/UFJF	123	0	NA	0	NA	NA	4	8	2	2	0	0	0
12	2023-01-31	Enzo de Lima Moraes		32999216092	Brasil	Minas Gerais	Juiz de Fora	1	2	2	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	3	8	1	1	0	0	0
13	2023-01-31	Enzo Telles Pires Amaral		32984566442	Brasil	MG	jf	1	1	2	0	NA	Meia	Futebol/UFJF	123	0	NA	0	NA	NA	4	8	1	1	0	0	0
14	2023-01-31	Filipe José Laguardia Vieira		32991809874	Brasil	MG	JF	1	8	2	0	NA	Zagueiro	Futebol/UFJF	123	0	NA	0	NA	NA	4	8	1	1	0	0	0
15	2023-01-31	Gabriel Aparecido de Paula Silva		988270328	Brasil	MG	JF	1	9	1	0	NA	Meio Campo	Futebol/UFJF	123	0	NA	0	NA	NA	4	8	1	2	0	0	0
16	2023-01-31	Gabriel de Almeida		32984235876	Brasil	Minas Gerais	Juiz de Fora	1	1	2	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	4	9	1	3	0	0	0
17	2023-01-31	Gabriel Gonçalves Lauriano		32988546101	Brasil	MG	JF	1	9	1	0	NA	Atacante	Futebol/UFJF	123	0	NA	0	NA	NA	4	9	1	2	0	0	0
18	2023-01-31	Gabriel Nacarete Machado		3230318858	Brasil	MG	JF	1	9	1	0	NA	Lateral	Futebol/UFJF	123	0	NA	0	NA	NA	5	8	2	2	0	0	0
19	2023-01-31	Gabriel Oliveira Martins		981257575	Brasil	MG	JF	1	8	2	0	NA	Goleiro	Futebol/UFJF	123	0	NA	1	Asma	NA	3	6	1	1	0	0	0
20	2023-01-31	Gean Paulo Rocha Coealho		988739939	Brasil	MG	JF	1	8	2	1	NA	Meio Campo	Futebol/UFJF	123	0	NA	0	NA	NA	2	7	1	2	0	0	0
21	2023-01-31	Guilherme Henrique Bibiano Honório		32995099646	Brasil	Minas Gerais	Juiz de Fora	1	2	1	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	4	8	1	1	0	0	0
22	2023-01-31	Gustavo Henrique Gomes M costa		991236185	Brasil	MG	JF	1	8	1	1	NA	Lateral Esquerdo	Futebol/UFJF	123	0	NA	0	NA	NA	4	0	1	2	0	0	0
23	2023-01-31	Gustavo Lins Simoes		32988899080	Brasil	Minas Gerais	Juiz de Fora	1	1	2	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	4	7	2	2	0	0	0
24	2023-01-31	Gustavo Oliveira de Souza		32991822565	Brasil	MG	JF	1	9	1	0	NA	Zagueiro	Futebol/UFJF	123	0	NA	0	NA	NA	5	8	1	1	0	0	0
25	2023-01-31	Gustavo Pinheiro Vicente		32991687402	Brasil	MG	JF	1	8	2	0	NA	Goleiro	Futebol/UFJF	123	0	NA	0	NA	NA	4	9	1	2	0	0	0
26	2023-01-31	Gustavo Sartori Miranda		32988622041	Brasil	Minas Gerais	Juiz de Fora	1	2	2	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	5	7	1	1	0	0	0
27	2023-01-31	Higor Dias Azarias		32991213655	Brasil	Minas Gerais	Juiz de Fora	1	9	1	1	NA	NA	Futebol/UFJF	123	0	NA	1	Bronquite	NA	5	8	1	2	0	0	0
28	2023-01-31	Icaro Fernando V. Sad		32987032742	Brasil	Minas Gerais	Juiz de Fora	1	9	2	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	5	10	1	1	0	0	0
29	2023-01-31	Igor Cesario Siqueira		32999664317	Brasil	Minas Gerais	Juiz de Fora	1	1	1	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	4	8	1	1	0	0	0
30	2023-01-31	Igor Luís dos Santos Tomás		32988444452	Brasil	Minas Gerais	Juiz de Fora	1	1	1	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	3	7	1	2	0	0	0
31	2023-01-31	Jhonatan Oliveira Martins		NA	Brasil	NA	NA	1	0	0	0	NA	Lateral	Futebol/UFJF	123	0	NA	0	NA	NA	0	0	0	0	0	0	0
32	2023-01-31	João Márcio de Lima e Silva		32991142792	Brasil	MG	JF	1	9	1	0	NA	Goleiro	Futebol/UFJF	123	0	NA	0	NA	NA	3	8	1	1	0	0	0
33	2023-01-31	João Marcos Moura de Oliveira		NA	Brasil	Minas Gerais	NA	1	1	1	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	4	8	1	1	0	0	0
34	2023-01-31	João Pedro Dias		32984302905	Brasil	Minas Gerais	Juiz de Fora	1	9	1	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	4	7	1	2	0	0	0
35	2023-01-31	João Victor Oliveira de Sá		NA	Brasil	MG	JF	1	1	1	0	NA	Meia	Futebol/UFJF	123	0	NA	0	NA	NA	3	8	1	1	0	0	0
36	2023-01-31	João Victor Picorelli Lavro		32998130198	Brasil	MG	JF	1	1	2	0	NA	Lateral	Futebol/UFJF	123	0	NA	0	NA	NA	3	8	1	1	0	0	0
37	2023-01-31	João Vitor Ribeiro Lopes		32985016368	Brasil	Minas Gerais	Juiz de Fora	1	2	2	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	5	8	1	2	0	0	0
38	2023-01-31	Jonathan Lacerda Botti		32999262004	Brasil	Minas Gerais	Juiz de Fora	1	1	2	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	3	9	1	1	0	0	0
39	2023-01-31	Joner Leonardo da Costa Souza		32999791731	Brasil	MG	JF	1	7	1	1	NA	Lateral	Futebol/UFJF	123	0	NA	0	NA	NA	3	0	1	2	0	0	0
40	2023-01-31	Kauã Cassimiro		32984653346	Brasil	Minas Gerais	Juiz de Fora	1	2	1	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	3	9	1	1	0	0	0
41	2023-01-31	Kayky dos Santos Alves		32994502750	Brasil	Minas Gerais	Juiz de Fora	1	3	1	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	5	10	1	3	0	0	0
42	2023-01-31	Leonardo Gonçalves Pereira		3232240614	Brasil	Minas Gerais	Juiz de Fora	1	1	1	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	5	7	1	1	0	0	0
43	2023-01-31	Leonardo Gustavo Oliveira Dimentino		32987038445	Brasil	Minas Gerais	Juiz de Fora	1	8	1	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	2	7	1	1	0	0	0
44	2023-01-31	Lucas Borges de Freitas		32988961965	Brasil	MG	JF	1	9	2	0	NA	Atacante	Futebol/UFJF	123	0	NA	0	NA	NA	3	9	1	1	0	0	0
45	2023-01-31	Lucas de Souza cezar		32987099885	Brasil	MG	JF	1	9	1	0	NA	Atacante	Futebol/UFJF	123	0	NA	0	NA	NA	2	10	1	2	0	0	0
46	2023-01-31	Lucas Lopes de Souza		32988868883	Brasil	MG	JF	1	1	2	0	NA	Ponta	Futebol/UFJF	123	0	NA	0	NA	NA	4	9	1	3	0	0	0
47	2023-01-31	Luiz Antônio S. Ferreira		32999067517	Brasil	Minas Gerais	Beumiro Braga	1	1	1	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	3	10	2	2	0	0	0
48	2023-01-31	Luiz Felipe de Melo		32984250174	Brasil	Minas Gerais	Juiz de Fora	1	1	1	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	3	5	1	2	0	0	0
49	2023-01-31	Luiz Gustavo Messias de Oliveira		329988847366	Brasil	MG	JF	1	8	2	0	NA	Goleiro	Futebol/UFJF	123	0	NA	0	NA	NA	3	7	1	1	0	0	0
50	2023-01-31	Marcio da Silveira Júnior		32999425556	Brasil	MG	JF	1	1	2	0	NA	Meia	Futebol/UFJF	123	0	NA	0	NA	NA	3	8	1	2	0	0	0
51	2023-01-31	Mateus Monteiro Alves		3288126210	Brasil	Minas Gerais	Parque 1F	1	1	1	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	4	0	1	2	0	0	0
52	2023-01-31	Matheus Luiz Santos Abreu		3298131594	Brasil	MG	JF	1	9	2	0	NA	Zagueiro	Futebol/UFJF	123	0	NA	0	NA	NA	3	8	1	1	0	0	0
53	2023-01-31	Matheus Marques Lima da Silva		3291176352	Brasil	NA	NA	1	9	1	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	3	0	1	1	0	0	0
54	2023-01-31	Matheus Milione Eutierrez		NA	Brasil	MG	JF	1	9	2	0	NA	Atacante	Futebol/UFJF	123	0	NA	0	NA	NA	3	8	1	1	0	0	0
55	2023-01-31	Matheus Sanhudo de Paula		32984834216	Brasil	MG	JF	1	9	2	0	NA	Meio Campo	Futebol/UFJF	123	0	NA	0	NA	NA	4	9	1	1	0	0	0
56	2023-01-31	Matheus Virginio Rodrigues de Andrade		3232811415	Brasil	Minas Gerais	Lima Duart	1	3	1	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	3	0	1	2	0	0	0
57	2023-01-31	Natã Ribeiro		3298829104	Brasil	Minas Gerais	Juiz de Fora	1	1	0	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	4	7	1	1	0	0	0
58	2023-01-31	Otávio Augusto Ferreira de Assis		32999062005	Brasil	MG	Goianá	1	1	1	0	NA	Defensor	Futebol/UFJF	123	0	NA	0	NA	NA	4	7	2	2	0	0	0
59	2023-01-31	Pedro Araújo Coutinho		32984125393	Brasil	Minas Gerais	Juiz de Fora	1	2	2	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	4	7	1	1	0	0	0
60	2023-01-31	Pedro Augusto de Rezende Teixeira		32988517521	Brasil	Minas Gerais	Juiz de Fora	1	1	2	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	3	9	3	3	0	0	0
61	2023-01-31	Pedro Bellini Andrade		32988614743	Brasil	MG	JF	1	7	2	0	NA	Atacante	Futebol/UFJF	123	0	NA	0	NA	NA	5	9	1	2	0	0	0
62	2023-01-31	Pedro Braga Viclelo		984290000	Brasil	MG	JF	1	9	2	0	NA	Atacante	Futebol/UFJF	123	0	NA	0	NA	NA	3	6	1	2	0	0	0
63	2023-01-31	Pedro Henrique Andrés Nascimento		32988067642	Brasil	Minas Gerais	Juiz de Fora	1	2	0	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	3	10	1	2	0	0	0
64	2023-01-31	Pedro Rodrigues Pereira		329984967556	Brasil	MG	JF	1	1	2	0	NA	Meia	Futebol/UFJF	123	0	NA	0	NA	NA	5	9	1	1	0	0	0
65	2023-01-31	Samuel Heitor Tobias		3232164302	Brasil	MG	JF	1	9	1	0	NA	Lateral	Futebol/UFJF	123	0	NA	0	NA	NA	3	8	1	3	0	0	0
66	2023-01-31	Sanderley W. de Paula Filho		32987087393	Brasil	Minas Gerais	Juiz de Fora	1	9	1	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	3	6	1	1	0	0	0
67	2023-01-31	Thiago Alves de Oliveira		21981340345	Brasil	Rio de Janeiro	Niteroi	1	1	1	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	3	6	1	3	0	0	0
68	2023-01-31	Thiago Amaro de Oliveira		NA	Brasil	MG	JF	1	9	1	0	NA	Meia	Futebol/UFJF	123	0	NA	0	NA	NA	4	0	1	1	0	0	0
69	2023-01-31	Tiago		988126240	Brasil	Minas Gerais	Juiz de Fora	1	1	0	1	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	1	5	1	1	0	0	0
70	2023-01-31	Victor Candido Costa Ferreira		3232326721	Brasil	Minas Gerais	Juiz de Fora	1	2	2	0	NA	NA	Futebol/UFJF	123	0	NA	0	NA	NA	4	8	1	1	0	0	0
71	2023-01-31	Vinícius Furtado Giron		32987047362	Brasil	Minas Gerais	Juiz de Fora	1	3	1	0	NA	NA	Futebol/UFJF	123	0	NA	1	Refluxo	NA	3	8	1	1	0	0	0
72	2023-01-31	Vitor Valério Dos Santas		NA	Brasil	MG	JF	1	1	1	0	NA	Zagueiro	Futebol/UFJF	123	0	NA	0	NA	NA	4	9	1	1	0	0	0
73	2023-01-31	Wendel Mateus Maia		32999454999	Brasil	MG	JF	1	9	1	0	NA	Atacante	Futebol/UFJF	123	0	NA	0	NA	NA	4	0	1	1	0	0	0
74	2023-02-10	Lucas Moreira Abreu		NA	Brasil	Minas Gerais	Juíz de Fora	1	9	1	0	NA	Zagueiro	Futebol/UFJF	123	0	NA	0	NA	NA	5	7	1	3	0	0	0
75	2023-02-10	Matheus Layer Dias De Oliveira		32988699923	Brasil	Minas Gerais	Juíz de Fora	1	8	2	1	NA	Centro-avante	Futebol/UFJF	123	0	NA	0	NA	NA	3	8	1	1	0	0	0
76	2023-03-23	Ricardo Almeida Fernandes		991441099	Brasil	Minas Gerais	Juíz de Fora	1	9	1	0	NA	Atacante	Futebol/UFJF	123	0	NA	0	NA	NA	4	9	1	1	0	0	0
82	2023-05-31	Atleta Teste do Dev				MT						Sub-15	Defensor	GoldFit										3	unknown_value_please_contact_support	unknown_value_please_contact_support	unknown_value_please_contact_support
83	2023-05-31	Atleta Teste Dois				MA						Sub-15	Lateral	GoldFit										3	unknown_value_please_contact_support	unknown_value_please_contact_support	unknown_value_please_contact_support
84	2023-06-02	Teste Pontos Fracos				GO						Sub-14	Defensor	Teste 123										3	unknown_value_please_contact_support	unknown_value_please_contact_support	unknown_value_please_contact_support
85	2023-11-14	Enya				MG						Sub-16	Atacante	Atlético Mineiro										1	unknown_value_please_contact_support	unknown_value_please_contact_support	unknown_value_please_contact_support
86	2023-11-14	Nathann				MG						Sub-16	Lateral	Cruzeiro										3	unknown_value_please_contact_support	unknown_value_please_contact_support	unknown_value_please_contact_support
87	2023-11-14	Enya				MG						Sub-16	Atacante	Atlético Mineiro										1	unknown_value_please_contact_support	unknown_value_please_contact_support	unknown_value_please_contact_support
\.


--
-- Data for Name: _auth_group; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: _auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: _auth_permission; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._auth_permission (id, content_type_id, codename, name) FROM stdin;
1	1	add_logentry	Can add log entry
2	1	change_logentry	Can change log entry
3	1	delete_logentry	Can delete log entry
4	1	view_logentry	Can view log entry
5	2	add_permission	Can add permission
6	2	change_permission	Can change permission
7	2	delete_permission	Can delete permission
8	2	view_permission	Can view permission
9	3	add_group	Can add group
10	3	change_group	Can change group
11	3	delete_group	Can delete group
12	3	view_group	Can view group
13	4	add_user	Can add user
14	4	change_user	Can change user
15	4	delete_user	Can delete user
16	4	view_user	Can view user
17	5	add_contenttype	Can add content type
18	5	change_contenttype	Can change content type
19	5	delete_contenttype	Can delete content type
20	5	view_contenttype	Can view content type
21	6	add_session	Can add session
22	6	change_session	Can change session
23	6	delete_session	Can delete session
24	6	view_session	Can view session
25	7	add_treinador	Can add treinador
26	7	change_treinador	Can change treinador
27	7	delete_treinador	Can delete treinador
28	7	view_treinador	Can view treinador
29	8	add_atleta	Can add atleta
30	8	change_atleta	Can change atleta
31	8	delete_atleta	Can delete atleta
32	8	view_atleta	Can view atleta
33	9	add_questionariodadospessoais	Can add questionario dados pessoais
34	9	change_questionariodadospessoais	Can change questionario dados pessoais
35	9	delete_questionariodadospessoais	Can delete questionario dados pessoais
36	9	view_questionariodadospessoais	Can view questionario dados pessoais
37	10	add_questionarioinfopaissocieconomico	Can add questionario info pais socieconomico
38	10	change_questionarioinfopaissocieconomico	Can change questionario info pais socieconomico
39	10	delete_questionarioinfopaissocieconomico	Can delete questionario info pais socieconomico
40	10	view_questionarioinfopaissocieconomico	Can view questionario info pais socieconomico
41	11	add_questionariosoq	Can add questionario soq
42	11	change_questionariosoq	Can change questionario soq
43	11	delete_questionariosoq	Can delete questionario soq
44	11	view_questionariosoq	Can view questionario soq
45	12	add_questionariocomppercebidasuportefamiliar	Can add questionario comp percebida suporte familiar
46	12	change_questionariocomppercebidasuportefamiliar	Can change questionario comp percebida suporte familiar
47	12	delete_questionariocomppercebidasuportefamiliar	Can delete questionario comp percebida suporte familiar
48	12	view_questionariocomppercebidasuportefamiliar	Can view questionario comp percebida suporte familiar
49	13	add_questionarioacsi	Can add questionario acsi
50	13	change_questionarioacsi	Can change questionario acsi
51	13	delete_questionarioacsi	Can delete questionario acsi
52	13	view_questionarioacsi	Can view questionario acsi
53	14	add_questionariotacsi	Can add questionario tacsi
54	14	change_questionariotacsi	Can change questionario tacsi
55	14	delete_questionariotacsi	Can delete questionario tacsi
56	14	view_questionariotacsi	Can view questionario tacsi
57	15	add_avaliacaoantropometricafisicomotora	Can add avaliacao antropometrica fisicomotora
58	15	change_avaliacaoantropometricafisicomotora	Can change avaliacao antropometrica fisicomotora
59	15	delete_avaliacaoantropometricafisicomotora	Can delete avaliacao antropometrica fisicomotora
60	15	view_avaliacaoantropometricafisicomotora	Can view avaliacao antropometrica fisicomotora
61	16	add_avaliacaoaerobica	Can add avaliacao aerobica
62	16	change_avaliacaoaerobica	Can change avaliacao aerobica
63	16	delete_avaliacaoaerobica	Can delete avaliacao aerobica
64	16	view_avaliacaoaerobica	Can view avaliacao aerobica
65	17	add_avaliacaopotencialesportivo	Can add avaliacao potencial esportivo
66	17	change_avaliacaopotencialesportivo	Can change avaliacao potencial esportivo
67	17	delete_avaliacaopotencialesportivo	Can delete avaliacao potencial esportivo
68	17	view_avaliacaopotencialesportivo	Can view avaliacao potencial esportivo
69	18	add_avaliacaoaspectosintangiveis	Can add avaliacao aspectos intangiveis
70	18	change_avaliacaoaspectosintangiveis	Can change avaliacao aspectos intangiveis
71	18	delete_avaliacaoaspectosintangiveis	Can delete avaliacao aspectos intangiveis
72	18	view_avaliacaoaspectosintangiveis	Can view avaliacao aspectos intangiveis
73	19	add_blacklistedtoken	Can add blacklisted token
74	19	change_blacklistedtoken	Can change blacklisted token
75	19	delete_blacklistedtoken	Can delete blacklisted token
76	19	view_blacklistedtoken	Can view blacklisted token
77	20	add_outstandingtoken	Can add outstanding token
78	20	change_outstandingtoken	Can change outstanding token
79	20	delete_outstandingtoken	Can delete outstanding token
80	20	view_outstandingtoken	Can view outstanding token
\.


--
-- Data for Name: _auth_user; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._auth_user (id, password, last_login, is_superuser, username, last_name, email, is_staff, is_active, date_joined, first_name) FROM stdin;
1	pbkdf2_sha256$600000$dbsVPJ19DJ5dFPtFoFdWr4$+NLV2/KTkhVDQIBkT5OUjsxX4XZCrwBNsfRytPYxEas=	2023-07-19	1	julia		juliaeduardasousa@gmail.com	1	1	2023-01-31	
2	pbkdf2_sha256$600000$9VW8grSMYi7ZidNCPLTqKY$sbMEjOzZrsbWc7RljngX9m14RYhTOmOAMK/MZOqZE3Y=	2023-10-28	1	nathannzini		nathannzini@gmail.com	1	1	2023-10-28	
3	pbkdf2_sha256$600000$lNV3xlGfepZC2Df02b0SXa$FaBzLZLssWc0be5yNJLvYAy3kXitAJetmhiyf0S9v5w=		1	admin			1	1		
\.


--
-- Data for Name: _auth_user_groups; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: _auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
1	3	1
2	3	2
3	3	3
4	3	4
5	3	5
6	3	6
7	3	7
8	3	8
9	3	9
10	3	10
11	3	11
12	3	12
13	3	13
14	3	14
15	3	15
16	3	16
17	3	17
18	3	18
19	3	19
20	3	20
21	3	21
22	3	22
23	3	23
24	3	24
25	3	25
26	3	26
27	3	27
28	3	28
29	3	29
30	3	30
31	3	31
32	3	32
33	3	33
34	3	34
35	3	35
36	3	36
37	3	37
38	3	38
39	3	39
40	3	40
41	3	41
42	3	42
43	3	43
44	3	44
45	3	45
46	3	46
47	3	47
48	3	48
49	3	49
50	3	50
51	3	51
52	3	52
53	3	53
54	3	54
55	3	55
56	3	56
57	3	57
58	3	58
59	3	59
60	3	60
61	3	61
62	3	62
63	3	63
64	3	64
65	3	65
66	3	66
67	3	67
68	3	68
69	3	69
70	3	70
71	3	71
72	3	72
73	3	73
74	3	74
75	3	75
76	3	76
77	3	77
78	3	78
79	3	79
80	3	80
\.


--
-- Data for Name: _avaliacao_aerobica; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._avaliacao_aerobica (id, data_criacao, estagio, volta, atleta_id, treinador_id) FROM stdin;
2	2023-03-23	12	6	2	
3		9	7	3	
4		8	7	4	
5		11	5	5	
6		10	8	6	
7		8	6	7	
8		9	8	8	
9		9	7	9	
10		10	6	10	
11		12	2	11	
12		10	8	12	
13		8	10	13	
14		10	8	14	
15		12	2	15	
16		10	3	16	
17		8	10	17	
18		7	5	18	
19		8	10	19	
20		11	4	20	
21		11	7	21	
22		7	2	22	
23		9	2	23	
24		9	3	24	
25		11	8	25	
26		10	7	26	
27		9	2	27	
28		10	8	28	
29		13	2	29	
30		10	2	30	
31		11	7	31	
32		10	5	32	
33		10	1	33	
34		9	6	34	
35		10	4	35	
36		10	9	36	
37				37	
38		10	8	38	
39		9	2	39	
40		9	2	40	
41		10	4	41	
42		10	4	42	
43		8	4	43	
44		10	2	44	
45		8	2	45	
46		9	2	46	
47		8	2	47	
48		11	3	48	
49		7	10	49	
50		8	6	50	
51		10	8	51	
52		7	9	52	
53		7	4	53	
54		8	2	54	
55				55	
56		8	2	56	
57		7	2	57	
58		10	6	58	
59				59	
60		10	2	60	
61		11	8	61	
62		7	5	62	
63		10	10	63	
64		7	8	64	
65		8	7	65	
66		8	4	66	
67				67	
68		9	6	68	
69		10	5	69	
70		8	1	70	
71		9	7	71	
72		9	7	72	
73		9	7	73	
74		10	11	74	
75		10	11	75	
76		10	8	76	
78	2023-07-12	8	0	83	
\.


--
-- Data for Name: _avaliacao_antropometrica_fisicomotora; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._avaliacao_antropometrica_fisicomotora (id, data_criacao, estatura, altura_sentado, envergadura, dc_triciptal, dc_perna, flexibilidade_t1, flexibilidade_t2, flexibilidade_t3, preensao_manual_t1, preensao_manual_t2, preensao_manual_t3, salto_vertical_t1, salto_vertical_t2, salto_vertical_t3, velocidade_10m_t1, velocidade_10m_t2, velocidade_20m_t1, velocidade_20m_t2, agilidade_t1, agilidade_t2, drible_t1, drible_t2, atleta_id, treinador_id, massa_corporal) FROM stdin;
2	2023-03-23	166.0	84.0	165.0	3.0	2.6	34.0	36.0		48.7	47.6		45.2	46.8	46.8	2.009	1.923	3.28	3.169	8.791	8.634	10.73	11.274	2		61.2
3		165.0	82.0	164.0	6.1	3.7	31.0	28.0		33.3	31.7		27.4	25.7	28.0	1.877	1.823	3.234	3.232	7.621	7.585	10.751	10.907	3		52.0
4		176.0	90.0	175.0	11.2	13.3	27.0	29.0		32.5	33.0		28.2	29.0	30.2									4		74.8
5		170.9	83.7	179.5	5.1	5.1	31.0	33.5		28.2	25.4		31.6	31.1	31.4	1.879	1.853	3.226	3.202	7.293	6.99	11.881	10.511	5		55.7
6		188.5	93.5	192.0	6.7	9.9	30.5	29.0		52.6	53.8		32.3	31.6	34.2	1.726	1.339	3.246	3.353	8.148	7.874	10.966	10.793	6		77.2
7		174.5	84.0	182.0	3.0	3.2	25.0	25.0		37.1	36.7		33.4	35.0	34.4	1.791	1.732	3.172	3.106	7.807	8.375	10.18	10.528	7		56.4
8		178.0	91.5	177.0	4.9	6.2	28.0	26.0		53.0	52.5		37.8	36.1	37.0	1.928	1.793	3.228	3.097	7.976	8.031	11.066	11.143	8		76.7
9		167.0	88.0	166.0	8.8	7.0	27.5	25.0		35.2	33.8		28.0	23.4	26.5	1.88	1.901	3.277	3.241	8.156	8.171	10.107	10.528	9		52.3
10		176.5	89.4	180.0	7.9	5.2	29.0	31.0		47.2	48.2		34.2	35.0	32.5	1.371	2.045	3.434	3.409	7.355	7.652	10.898	10.539	10		70.6
11		179.0	85.5	168.0	4.0	4.2	27.0	26.0		43.5	38.5		35.2	36.7	39.8	1.793	1.748	3.001	2.941	8.106	7.508	11.411	10.033	11		50.5
12		180.0	90.0	190.0	3.1	3.5	30.0	31.0		37.0	36.0		30.7	27.9	30.0	1.68	1.713	2.901	2.917	7.387	7.474	10.456	11.239	12		61.7
13		173.0	88.0	177.0	7.2	6.7	36.5	36.0		36.2	36.3		38.7	37.6	38.9	1.895	1.908	3.195	3.197	8.638	8.867	11.051	11.096	13		68.6
14		176.0	89.0	184.0	3.1	2.3	26.0	26.4		41.6	44.0		41.0	42.0	42.7	1.726	1.108	2.93	3.444	8.202	7.948	10.73	10.325	14		68.7
15		180.0	91.0	187.0	4.9	5.7	25.5	26.0		50.3	45.7		35.1	32.3	32.4	1.748	1.345	3.188	3.254	7.659	7.877	12.949	11.101	15		73.3
16		173.0	88.0	174.0	4.3	6.9	20.0	24.5		40.0	35.7		34.4	38.9	38.0	1.867	1.838	3.174	3.096	8.284	8.24	10.442	10.674	16		53.0
17		172.0	88.5	176.0	11.2	10.0	16.5	21.0		36.8	36.0		38.9	38.3	38.0	1.888	1.968	3.201	3.299	8.397	7.96	11.998	10.422	17		73.6
18		183.5	92.0	189.0	6.4	5.1	22.0	27.0		52.2	52.2		35.2	37.9	36.5	1.881	1.846	3.306	3.199	7.987	7.644	13.154	11.252	18		71.4
19		184.5	94.5	187.0	6.4	8.4	21.5	23.5		41.5	42.8		31.9	32.3	33.4	1.816	1.861	3.212	3.168	8.269	8.601	10.802	10.255	19		71.5
20		173.0	90.0	173.0	4.7	2.5	30.0	31.0		57.5	56.1		41.2	40.7	39.6	1.879	1.709	3.142	3.097	7.337	7.355	9.81	9.725	20		72.8
21		188.0	91.0	193.0	4.2	2.2	13.5	12.0		34.6	30.5		35.2	33.3	36.0	1.815	1.876	3.098	3.253	8.104	7.355	10.397	9.809	21		69.3
22		166.0	83.0	164.0	8.2	4.3	23.5	25.5		31.3	30.7		27.4	27.2	26.3	1.914	1.906	3.282	3.298	7.391	6.869	9.839	9.986	22		56.2
23		178.0	88.5	188.0	9.0	6.6	29.0	34.0		47.5	44.6		31.8	32.4	25.8	1.278	1.722	3.321	3.156	8.741	8.544			23		79.2
24		174.0	89.0	178.0	2.5	2.4	29.5	29.5		43.6	38.5		36.0	36.5	36.0	1.835	1.737	3.096	3.007	8.285	8.417	12.685	12.191	24		55.6
25		176.0	92.0	176.0	5.2	5.6	19.0	22.0		41.5	48.8		29.8	27.1	28.8	1.817	1.831	3.102	3.102	7.46	7.866	10.692	10.846	25		61.7
26		171.0	89.0	175.0	4.5	4.4	29.5	32.0		49.8	43.4		38.0	37.8	36.0	1.801	1.969	3.223	3.267	8.0	8.267	11.945	10.98	26		66.6
27		172.5	81.0	186.0	5.2	4.5	32.5	32.5		34.9	32.0		34.3	39.8	37.0	1.739	1.796	3.006	3.074	7.467	7.632	14.313	10.658	27		63.0
28		184.5	90.0	190.0	5.3	5.5	23.0	24.5		41.7	39.1		31.4	28.7	39.7	1.28	1.768	3.113	3.123	9.252	8.893	11.198	10.89	28		69.2
29		180.6	89.8	182.5	4.4	4.4	25.0	24.5		43.5	38.2		38.6	39.8	40.0	1.778	1.722	3.153	2.95	7.156	7.485	10.513	10.206	29		66.8
30		172.0	87.5	179.0	5.6	5.0	32.0	33.0		34.4	37.7		35.6	38.6	38.0	2.157	2.988	3.625	3.432	8.038	8.212	10.185	10.743	30		67.5
31		167.0	90.0	167.0	9.6	4.5	24.5	24.5		33.3	30.6		43.7	40.0	39.8	2.027	1.793	3.372	3.081	7.824	8.218	10.882	10.358	31		61.7
32		179.0	91.0	177.0	3.1	3.0	25.0	28.0		43.9	42.9		38.3	38.7	33.2	1.699	1.691	2.882	2.898	7.75	8.106	13.818	12.507	32		61.0
33		171.5	92.5	174.0	4.4	5.5	23.0	23.0		50.9	45.4		34.4	34.3	36.5	1.914	1.929	3.403	3.242	8.468	8.424	11.768	10.436	33		66.9
34		179.0	90.0	185.0	10.0	5.6	16.0	18.0		42.8	40.8		34.0	31.6	30.9	1.93	1.307	3.423	3.315	9.568	9.089	11.506	11.868	34		78.0
35		168.0	85.5	169.0	9.2	7.2	20.0	20.5		31.1	32.1		35.5	35.1	36.1	1.817	1.836	3.077	3.074	8.234	8.101	10.161	13.378	35		64.2
36		167.0	83.0	164.0	5.6	7.6	26.0	27.5		38.5	34.0		35.0	29.7	31.6	1.922	1.912	3.247	3.205	8.311	8.663	9.884	9.746	36		55.3
37		166.0	81.0	167.0	21.4	21.5	31.0	30.0		26.1	23.8		24.0	27.3	28.8	1.958	2.131	3.627	3.817	8.997	8.797	14.279	14.006	37		65.0
38		162.0	82.5	165.0	4.8	4.2	23.5	25.0		30.6	30.0		29.3	28.2	27.4	1.864	1.896	3.339	3.375	8.302	8.33	10.113	10.676	38		44.2
39		162.5	79.0	172.0	4.2	5.1	29.5	30.5		27.2	24.7		30.9	27.1	33.3	1.767	1.73	3.171	3.161	7.282	7.007	10.529	10.278	39		49.0
40		149.0	74.0	150.0	8.5	10.1	23.0	25.0		16.3	16.2		22.7	22.7	21.7	2.325	2.087	3.933	3.717	8.503	8.389	11.265	11.601	40		38.2
41		158.5	74.0	161.0	9.2	11.4	25.0	23.5		23.3	18.4		26.5	27.5	26.6	2.221	2.208	3.805	3.828	7.714	7.805	11.538	11.391	41		48.4
42		164.0	83.0	162.0	5.7	6.2	26.0	25.5		35.0	32.4		31.5	33.3	34.4	1.785	1.957	3.175	3.343	7.857	7.534	10.722	10.643	42		51.4
43		175.0	84.0	175.0	8.0	7.2	16.0	16.0		30.2	32.3		32.1	30.8	30.8	1.749	1.896	3.257	3.271	7.757	7.562	11.034	12.675	43		63.5
44		158.5	76.5	155.0	6.2	9.8	23.0	23.0		27.2	23.9		29.8	28.7	29.7	2.131	2.02	3.657	3.631	7.876	8.113	11.175	11.046	44		44.9
45		162.0	78.5	164.0	10.0	12.1	13.0	18.5		24.6	24.4		26.5	31.6	29.0	1.883	1.961	3.468	3.527	8.267	7.812	10.753	12.707	45		49.2
46		161.0	81.0	167.0	7.6	6.2	23.5	26.5		27.7	32.0		30.9	31.6	31.5	1.798	1.913	3.217	3.311	7.258	7.342	10.046	8.936	46		52.0
47		160.5	79.0	160.0	6.1	8.4	23.0	25.0		25.0	24.8		24.9	26.4	29.0	1.927	1.98	3.491	3.475	8.28	8.187	9.511	10.35	47		45.0
48		176.0	85.5	178.0	2.8	4.8	22.5	22.0		39.7	36.8		34.4	30.8	32.0	1.739	1.893	3.116	3.247	7.239	7.231	11.07	10.446	48		59.4
49		167.5	83.5	181.0	6.4	7.7	39.0	38.0		37.2	30.0		29.0	25.5	29.4	1.922	1.919	3.446	3.423	8.632	8.855	12.829	13.134	49		67.5
50		185.5	93.5	186.0	8.0	8.2	29.0	28.0		51.2	48.5		33.9	30.0	30.5	1.747	1.747	3.006	3.019	7.079	7.16	9.838	9.361	50		78.0
51		168.0	88.0	172.0	5.1	5.1	27.0	28.0		38.7	35.8		35.6	37.5	36.3	1.85	1.733	3.167	3.034	8.072	7.605	11.284	10.452	51		59.4
52		163.0	76.5	171.0	6.4	8.0	28.0	26.0		35.0	31.3		34.3	38.0	32.5	1.768	1.806	3.164	3.207	8.137	7.933	10.667	10.778	52		54.0
53		165.0	82.3	178.0	4.8	5.6	28.0	28.0		34.8	36.2		29.0	31.3	29.1	1.932	1.872	3.366	3.327	8.362	8.278	10.355	11.543	53		58.7
54		170.5	87.5	173.0	7.3	10.4	30.0	27.0		25.0	23.9		22.9	22.8	24.8	2.047	2.047	3.529	3.565	7.301	7.588	10.013	9.696	54		63.2
55		153.5	62.5	160.0	9.6	6.7	22.0	24.0		23.1	21.8		24.2	24.8	24.4	1.907	1.991	3.478	3.575	8.491	8.262	11.585	12.518	55		44.0
56		177.5	83.5	189.0	3.2	3.1	27.0	26.5		41.1	39.7		40.8	37.6	39.8	1.632	1.637	3.021	3.0	7.658	7.427	12.002	12.594	56		61.1
57		167.0	85.0	168.0	9.3	9.4	27.5	32.0		30.9	31.7		37.8	37.0	38.9	1.873	1.844	3.241	3.203	7.841	7.784	11.289	10.365	57		68.5
58		160.0	84.5	164.0	2.8	4.0	38.0	35.0		32.4	33.6		33.3	32.1	34.3	1.649	1.638	3.212	3.267	8.146	8.129	10.817	10.737	58		52.3
59		160.5	77.5	163.0	4.3	4.7	23.0	22.0		33.7	32.5		41.0	39.0	39.0	2.004	2.048	3.373	3.429	8.422	8.634	11.565	10.577	59		48.4
60		170.0	85.0	173.0	6.0	5.7	17.0	20.0		37.5	34.6		33.4	35.2	34.3	1.932	1.326	3.356	3.229	7.526	7.409	11.512	10.277	60		58.5
61		164.0	83.1	169.0	6.7	5.5	31.0	31.0		31.7	31.7		38.7	39.1	36.1	1.677	1.646	3.038	3.011	7.43	7.42	10.164	9.789	61		53.1
62		152.5	72.0	155.0	6.4	4.2	18.0	22.0		18.7	19.9		34.0	32.5	31.5	1.426	1.817	3.502	3.274	7.874	7.791	10.887	10.665	62		43.8
63		167.0	86.0	168.0	8.2	8.4	24.0	26.0		36.5	28.2		32.3	34.3	35.1	1.804	1.85	3.167	3.203	7.57	7.479	9.835	9.639	63		57.1
64		166.0	85.0	173.0	4.7	6.1	35.0	35.0		37.5	34.5		35.5	36.0	37.0	1.304	1.759	3.94	3.046	7.778	7.897	10.593	10.52	64		58.0
65		169.0	83.5	176.0	3.8	4.2	29.0	31.0		31.6	33.7		33.3	34.6	34.3	1.686	1.691	2.969	2.939	7.906	7.584	9.945	9.879	65		63.5
66		172.0	81.0	179.0	5.1	6.7	28.0	30.5		27.5	24.5		27.4	28.5	28.5	1.9	1.79	3.38	3.27	8.08	7.67	10.73	10.85	66		56.5
67		160.0	80.5	165.0	15.7	13.0	28.5	30.0		25.6	24.8		23.0	22.4	20.6	2.02	2.09	3.6	3.76	9.09	9.0	13.03	12.05	67		69.6
68		160.0	76.5	159.0	7.0	7.9	23.0	23.0		31.6	29.9		25.5	28.1	26.4	1.99	1.98	3.56	3.53	8.07	8.28	11.52	11.66	68		47.2
69		172.0	86.0	176.0	4.6	5.1	28.0	30.0		34.1	36.2		37.1	37.1	35.1	1.96	2.04	3.31	3.42	7.19	7.03	10.14	9.44	69		56.9
70		163.0	82.5	165.0	3.7	3.2	22.0	22.0		32.6	35.2		29.0	29.8	30.4	1.75	1.69	3.09	3.03	8.26	8.2	10.88	9.94	70		50.5
71		180.5	90.5	182.0	5.0	6.0	31.0	32.0		45.2	46.2		28.2	27.4	29.8	1.77	1.79	3.14	3.38	8.03	7.73	12.14	11.5	71		65.3
72		168.5	81.0	174.0	7.0	6.0	21.0	21.0		36.1	39.1		37.1	38.9	38.2	1.7	1.72	3.01	3.04	7.25	7.08	9.29	9.7	72		64.6
73		173.0	84.0	175.0	4.8	6.5	35.0	33.0		41.2	41.7		35.4	38.9	35.8	1.73	1.72	3.02	3.0	8.07	8.07	11.24	10.06	73		65.1
74		162.0	78.5	168.0	5.4	4.7	29.5	30.0		28.8	28.0		36.1	34.8	34.0	1.919	2.008	3.306	3.404	8.162	7.665	11.453	10.819	74		44.0
75		179.0	91.5	181.0	5.1	5.6	32.0	33.0		48.1	43.0		30.7	34.3	36.0	1.616	1.801	3.14	3.136	8.029	7.406	9.875	10.601	75		69.2
76		171.5	85.5	181.0	3.4	5.0	35.0	38.0		46.6	47.5		43.7	42.2	47.0	1.305	1.229	3.119	3.129	7.811	7.532	10.779	11.88	76		65.7
79	2023-05-31	1.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	1.0	0.0	0.0	1.0	0.0	0.0	0.0	1.0	0.0	1.0	0.0	82		0.0
80	2023-05-31	2.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	2.0	0.0	0.0	2.0	0.0	0.0	0.0	2.0	0.0	2.0	0.0	83		0.0
81	2023-06-02	100.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	80.0	0.0	0.0	80.0	0.0	0.0	0.0	80.0	0.0	100.0	0.0	84		0.0
82	2023-07-05	2.0	3.0	4.0	5.0	6.0	10.0	10.0	10.0	10.0	10.0	10.0	10.0	10.0	10.0	10.0	10.0	10.0	10.0	10.0	10.0	10.0	10.0	83		1.0
83	2023-07-28	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	83		0.0
84	2023-10-28	23.0	32.0	31.0	32.0	3.0	32.0	3.0	32.0	23.0	32.0	23.0	23.0	23.0	23.0	32.0	23.0	23.0	32.0	23.0	23.0	23.0	23.0	5		23.0
\.


--
-- Data for Name: _avaliacao_aspectos_intangiveis; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._avaliacao_aspectos_intangiveis (id, data_criacao, questao1, questao2, questao3, questao4, questao5, questao6, questao7, questao8, questao10, atleta_id, treinador_id, questao9) FROM stdin;
2	2023-03-23	4	3	3	2	2	3	4	4	4	2		3
3		4	4	4	3	4	4	4	4	3	3		4
4		3	4	3	4	3	4	3	4	4	4		3
5		3	2	3	2	3	3	4	3	3	5		3
6		4	4	5	5	4	4	5	5	5	6		5
7		5	5	4	4	4	5	5	5	5	7		5
8		2	4	3	3	4	3	4	4	4	8		4
9		4	2	3	3	3	3	4	4	5	9		4
10		3	4	4	4	3	4	4	4	4	10		4
11		5	3	3	1	3	3	4	3	5	11		2
12		5	4	4	4	4	5	5	5	5	12		4
13		5	5	5	5	5	5	5	5	5	13		5
14		3	3	3	3	3	3	4	4	4	14		4
15		3	3	4	3	3	2	4	4	3	15		3
16		3	3	3	3	3	3	3	3	3	16		3
17		4	3	3	2	3	2	3	3	3	17		3
18		5	4	4	3	3	5	5	5	4	18		4
19		3	2	2	1	2	2	2	2	3	19		2
20		5	4	4	2	3	3	5	4	5	20		3
21		3	4	3	3	3	4	3	3	3	21		4
22		3	2	3	2	3	4	4	3	2	22		3
23		3	3	2	3	3	3	4	4	4	23		4
24		5	2	3	1	2	2	3	2	2	24		2
25		2	3	2	4	3	3	4	3	3	25		4
26		5	5	4	4	4	4	5	5	4	26		4
27		4	4	4	4	3	3	4	4	4	27		4
28		5	3	3	2	2	2	4	4	4	28		3
29		5	5	5	5	5	5	5	5	5	29		5
30		3	1	3	3	2	4	5	4	4	30		3
31		2	3	2	2	2	2	3	3	2	31		2
32		4	4	4	5	4	4	5	5	5	32		5
33		4	3	2	2	3	3	3	3	4	33		2
34		4	3	4	4	3	4	4	4	4	34		4
35		3	2	3	3	2	4	4	4	3	35		4
36		3	2	2	2	3	2	4	4	2	36		3
37		3	2	3	2	2	2	4	3	4	37		4
38		5	5	4	5	4	5	5	5	5	38		4
39		4	3	3	3	2	3	4	4	3	39		4
40		3	3	3	3	3	3	3	3	3	40		3
41		5	3	4	4	3	4	4	3	5	41		3
42		4	3	5	5	3	3	5	5	5	42		4
43		3	3	3	3	3	3	3	3	3	43		3
44		4	3	3	2	2	3	3	2	2	44		2
45		3	3	3	4	2	3	3	3	4	45		3
46		3	3	4	3	2	3	3	3	3	46		3
47		3	3	4	4	3	4	5	5	5	47		4
48		3	3	3	3	3	3	3	3	3	48		3
49		3	2	2	1	3	2	2	2	3	49		2
50		4	4	5	5	4	5	5	5	5	50		5
51		5	1	4	5	3	4	3	3	5	51		3
52		4	3	3	2	3	3	3	3	3	52		4
53		4	4	4	4	4	4	4	4	4	53		4
54		1	2	2	3	2	2	3	2	3	54		2
55		4	3	4	3	3	4	4	4	3	55		4
56		4	3	2	3	3	3	4	4	4	56		3
57		3	3	3	3	3	3	3	3	3	57		3
58		2	2	2	1	2	3	4	4	3	58		3
59		5	4	3	3	4	4	5	4	4	59		4
60		5	4	4	3	4	4	5	5	4	60		4
61		4	4	4	5	5	4	4	5	5	61		5
62		4	5	5	5	4	4	4	4	4	62		5
63		4	5	4	4	4	4	5	5	5	63		4
64		4	5	5	5	4	5	5	4	5	64		5
65		3	2	3	2	2	3	3	3	3	65		3
66		4	3	3	3	3	3	3	3	3	66		3
67		5	3	4	4	3	3	5	5	5	67		4
68		4	4	4	3	4	3	3	3	3	68		4
69		5	2	4	4	3	3	5	5	5	69		4
70		4	4	4	3	3	3	4	4	4	70		4
71		3	3	2	2	3	3	4	4	4	71		3
72		4	5	5	4	5	5	4	4	4	72		4
73		4	5	5	4	4	5	5	5	5	73		4
74		2	3	3	1	2	3	3	3	2	74		3
75		2	3	4	3	3	2		3	3	75		5
76		5	4	5	5	4	5	4	4	4	76		4
77	2023-07-04	20	20	20	20	20	20	20	20	20			20
78	2023-07-04	100	100	100	100	100	100	100	100	100			100
79	2023-07-04	20	20	20	20	20	20	20	20	20			20
\.


--
-- Data for Name: _avaliacao_potencial_esportivo; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._avaliacao_potencial_esportivo (id, data_criacao, modalidade_futura, posicao_futura, atleta_id, treinador_id, potencial_futuro) FROM stdin;
2	2023-03-23	Futebol		2		4
3		Futebol		3		4
4		Futebol		4		3
5		Futebol		5		4
6		Futebol		6		5
7		Futebol		7		3
8		Futebol		8		4
9		Futebol		9		4
10		Futebol		10		3
11		Futebol		11		4
12		Futebol		12		4
13		Futebol		13		3
14		Futebol		14		5
15		Futebol		15		3
16		Futebol		16		3
17		Futebol		17		4
18		Futebol		18		3
19		Futebol		19		3
20		Futebol		20		5
21		Futebol		21		3
22		Futebol		22		4
23		Futebol		23		3
24		Futebol		24		2
25		Futebol		25		4
26		Futebol		26		5
27		Futebol		27		4
28		Futebol		28		3
29		Futebol		29		3
30		Futebol		30		4
31		Futebol		31		3
32		Futebol		32		2
33		Futebol		33		4
34		Futebol		34		4
35		Futebol		35		3
36		Futebol		36		3
37		Futebol	Goleiro	37		2
38		Futebol	Meio Campo	38		4
39		Futebol	Atacante 	39		3
40		Futebol	Lateral Esquerdo	40		4
41		Futebol	Atacante 	41		2
42		Futebol	Meio Campo	42		4
43		Futebol	Zagueiro 	43		2
44		Futebol	Meio Campo	44		4
45		Futebol	Atacante 	45		2
46		Futebol	Meio Campo	46		4
47		Futebol	Lateral Esquerdo	47		3
48		Futebol	Zagueiro 	48		3
49		Futebol	Goleiro	49		3
50		Futebol	Atacante 	50		4
51		Futebol	Atacante 	51		4
52		Futebol	Lateral	52		2
53		Futebol	Meio Campo	53		3
54		Futebol	Centro-avante	54		2
55		futebol	lateral	55		2
56		futebol	zagueiro	56		3
57		futebol	atacante	57		3
58		futebol	Meia	58		3
59		futebol	lateral	59		3
60		futebol	lateral	60		4
61		futebol	lateral	61		3
62		futebol	Meia	62		3
63		futebol	Meia	63		5
64		futebol	atacante	64		5
65		futebol	Ponta	65		3
66		Futebol	Zagueiro	66		2
67		Futebol	Goleiro	67		2
68		Futebol	Lateral	68		3
69		Futebol	Meia	69		4
70		Futebol	Atacante	70		4
71		Futebol	Defensor	71		2
72		Futebol	Meia	72		4
73		Futebol	Atacante	73		5
74		Futebol	meio Campo	74		3
75		Futebol	Zagueiro 	75		4
76		futebol	goleiro	76		4
78	2023-06-01			83		20
79	2023-06-02			84		80
80	2023-06-29	Futebol	Goleiro	84		80
\.


--
-- Data for Name: _django_admin_log; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._django_admin_log (id, object_id, object_repr, action_flag, change_message, content_type_id, user_id, action_time) FROM stdin;
1	1	Julia Eduarda Miranda de Sousa	1	[{"added": {}}]	7	1	2023-01-31
2	1	Arthur Rocha Coimbra	2	[{"changed": {"fields": ["Posicao jogo"]}}]	8	1	2023-01-31
3	1	Arthur Rocha Coimbra	3		8	1	2023-01-31
4	1	QuestionarioSOQ object (1)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
5	2	QuestionarioSOQ object (2)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
6	3	QuestionarioSOQ object (3)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
7	4	QuestionarioSOQ object (4)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
8	5	QuestionarioSOQ object (5)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
9	6	QuestionarioSOQ object (6)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
10	7	QuestionarioSOQ object (7)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
11	8	QuestionarioSOQ object (8)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
12	9	QuestionarioSOQ object (9)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
13	10	QuestionarioSOQ object (10)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
14	12	QuestionarioSOQ object (12)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
15	13	QuestionarioSOQ object (13)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
16	13	QuestionarioSOQ object (13)	2	[]	11	1	2023-02-06
17	14	QuestionarioSOQ object (14)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
18	15	QuestionarioSOQ object (15)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
19	16	QuestionarioSOQ object (16)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
20	17	QuestionarioSOQ object (17)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
21	18	QuestionarioSOQ object (18)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
22	19	QuestionarioSOQ object (19)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
23	20	QuestionarioSOQ object (20)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
24	21	QuestionarioSOQ object (21)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
25	22	QuestionarioSOQ object (22)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
26	23	QuestionarioSOQ object (23)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
27	24	QuestionarioSOQ object (24)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
28	25	QuestionarioSOQ object (25)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-06
29	26	QuestionarioSOQ object (26)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
30	27	QuestionarioSOQ object (27)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
31	28	QuestionarioSOQ object (28)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
32	29	QuestionarioSOQ object (29)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
33	31	QuestionarioSOQ object (31)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
34	32	QuestionarioSOQ object (32)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
35	33	QuestionarioSOQ object (33)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
36	34	QuestionarioSOQ object (34)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
37	35	QuestionarioSOQ object (35)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
38	36	QuestionarioSOQ object (36)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
39	37	QuestionarioSOQ object (37)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
40	38	QuestionarioSOQ object (38)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
41	39	QuestionarioSOQ object (39)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
42	40	QuestionarioSOQ object (40)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
43	41	QuestionarioSOQ object (41)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
44	42	QuestionarioSOQ object (42)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
45	43	QuestionarioSOQ object (43)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
46	44	QuestionarioSOQ object (44)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
47	43	QuestionarioSOQ object (43)	2	[]	11	1	2023-02-07
48	45	QuestionarioSOQ object (45)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
49	46	QuestionarioSOQ object (46)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
50	47	QuestionarioSOQ object (47)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
51	48	QuestionarioSOQ object (48)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
52	49	QuestionarioSOQ object (49)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
53	50	QuestionarioSOQ object (50)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
54	51	QuestionarioSOQ object (51)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
55	52	QuestionarioSOQ object (52)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
56	53	QuestionarioSOQ object (53)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
57	54	QuestionarioSOQ object (54)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
58	55	QuestionarioSOQ object (55)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
59	56	QuestionarioSOQ object (56)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
60	57	QuestionarioSOQ object (57)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
61	58	QuestionarioSOQ object (58)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
62	59	QuestionarioSOQ object (59)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
63	60	QuestionarioSOQ object (60)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
64	61	QuestionarioSOQ object (61)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
65	62	QuestionarioSOQ object (62)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
66	63	QuestionarioSOQ object (63)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
67	64	QuestionarioSOQ object (64)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
68	65	QuestionarioSOQ object (65)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
69	66	QuestionarioSOQ object (66)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
70	67	QuestionarioSOQ object (67)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
71	68	QuestionarioSOQ object (68)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
72	69	QuestionarioSOQ object (69)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
73	70	QuestionarioSOQ object (70)	2	[{"changed": {"fields": ["Atleta"]}}]	11	1	2023-02-07
74	1	QuestionarioACSI object (1)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
75	2	QuestionarioACSI object (2)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
76	3	QuestionarioACSI object (3)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
77	4	QuestionarioACSI object (4)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
78	5	QuestionarioACSI object (5)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
79	6	QuestionarioACSI object (6)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
80	7	QuestionarioACSI object (7)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
81	8	QuestionarioACSI object (8)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
82	9	QuestionarioACSI object (9)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
83	10	QuestionarioACSI object (10)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
84	11	QuestionarioACSI object (11)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
85	12	QuestionarioACSI object (12)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
86	13	QuestionarioACSI object (13)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
87	14	QuestionarioACSI object (14)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
88	15	QuestionarioACSI object (15)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
89	16	QuestionarioACSI object (16)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
90	17	QuestionarioACSI object (17)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
91	18	QuestionarioACSI object (18)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
92	19	QuestionarioACSI object (19)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
93	20	QuestionarioACSI object (20)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
94	21	QuestionarioACSI object (21)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
95	22	QuestionarioACSI object (22)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
96	23	QuestionarioACSI object (23)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
97	24	QuestionarioACSI object (24)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
98	25	QuestionarioACSI object (25)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
99	26	QuestionarioACSI object (26)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
100	27	QuestionarioACSI object (27)	2	[{"changed": {"fields": ["Atleta"]}}]	13	1	2023-02-07
\.


--
-- Data for Name: _django_content_type; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
8	api	atleta
16	api	avaliacaoaerobica
15	api	avaliacaoantropometricafisicomotora
18	api	avaliacaoaspectosintangiveis
17	api	avaliacaopotencialesportivo
13	api	questionarioacsi
12	api	questionariocomppercebidasuportefamiliar
9	api	questionariodadospessoais
10	api	questionarioinfopaissocieconomico
11	api	questionariosoq
14	api	questionariotacsi
7	api	treinador
3	auth	group
2	auth	permission
4	auth	user
5	contenttypes	contenttype
6	sessions	session
19	token_blacklist	blacklistedtoken
20	token_blacklist	outstandingtoken
\.


--
-- Data for Name: _django_migrations; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2023-01-31
2	auth	0001_initial	2023-01-31
3	admin	0001_initial	2023-01-31
4	admin	0002_logentry_remove_auto_add	2023-01-31
5	admin	0003_logentry_add_action_flag_choices	2023-01-31
6	contenttypes	0002_remove_content_type_name	2023-01-31
7	auth	0002_alter_permission_name_max_length	2023-01-31
8	auth	0003_alter_user_email_max_length	2023-01-31
9	auth	0004_alter_user_username_opts	2023-01-31
10	auth	0005_alter_user_last_login_null	2023-01-31
11	auth	0006_require_contenttypes_0002	2023-01-31
12	auth	0007_alter_validators_add_error_messages	2023-01-31
13	auth	0008_alter_user_username_max_length	2023-01-31
14	auth	0009_alter_user_last_name_max_length	2023-01-31
15	auth	0010_alter_group_name_max_length	2023-01-31
16	auth	0011_update_proxy_permissions	2023-01-31
17	auth	0012_alter_user_first_name_max_length	2023-01-31
18	sessions	0001_initial	2023-01-31
19	api	0001_initial	2023-01-31
20	api	0002_remove_atleta_treinador_alter_atleta_posicao_jogo	2023-01-31
21	api	0003_alter_atleta_posicao_jogo	2023-01-31
22	api	0004_alter_questionariosoq_atleta	2023-02-06
23	api	0005_alter_questionarioacsi_atleta	2023-02-07
24	api	0006_alter_questionariotacsi_atleta	2023-02-07
25	api	0007_alter_questionarioinfopaissocieconomico_atleta	2023-02-24
26	api	0008_alter_questionarioinfopaissocieconomico_altura_mae_and_more	2023-02-24
27	api	0009_alter_questionarioinfopaissocieconomico_escolaridade_pessoa_referencia	2023-02-24
28	api	0010_alter_questionariocomppercebidasuportefamiliar_atleta_and_more	2023-02-24
29	api	0011_alter_questionariocomppercebidasuportefamiliar_data_criacao	2023-02-25
30	api	0012_alter_avaliacaoaspectosintangiveis_atleta_and_more	2023-02-25
31	api	0013_alter_avaliacaoaspectosintangiveis_questao1_and_more	2023-02-25
32	api	0014_alter_avaliacaoantropometricafisicomotora_agilidade_t1_and_more	2023-02-27
33	api	0015_rename_massa_corpotal_avaliacaoantropometricafisicomotora_massa_corporal	2023-02-27
34	api	0016_alter_avaliacaoantropometricafisicomotora_data_criacao	2023-02-27
35	api	0017_alter_avaliacaoantropometricafisicomotora_agilidade_t1_and_more	2023-02-27
36	api	0018_alter_avaliacaoantropometricafisicomotora_atleta_and_more	2023-02-27
37	api	0019_alter_avaliacaoaerobica_estagio_and_more	2023-02-27
38	api	0020_alter_avaliacaoaerobica_data_criacao	2023-02-27
39	api	0021_alter_avaliacaoaerobica_treinador	2023-02-27
40	api	0022_remove_questionariodadospessoais_quantas_lesoas_and_more	2023-02-27
41	api	0023_alter_questionariodadospessoais_maior_nivel_vitoria	2023-02-27
42	api	0024_alter_avaliacaopotencialesportivo_data_criacao_and_more	2023-02-27
43	api	0025_alter_questionariosoq_data_criacao_and_more	2023-02-27
44	api	0026_alter_questionarioacsi_data_criacao_and_more	2023-02-27
45	token_blacklist	0001_initial	2023-05-10
46	token_blacklist	0002_outstandingtoken_jti_hex	2023-05-10
47	token_blacklist	0003_auto_20171017_2007	2023-05-10
48	token_blacklist	0004_auto_20171017_2013	2023-05-10
49	token_blacklist	0005_remove_outstandingtoken_jti	2023-05-10
50	token_blacklist	0006_auto_20171017_2113	2023-05-10
51	token_blacklist	0007_auto_20171017_2214	2023-05-10
52	token_blacklist	0008_migrate_to_bigautofield	2023-05-10
53	token_blacklist	0010_fix_migrate_to_bigautofield	2023-05-10
54	token_blacklist	0011_linearizes_history	2023-05-10
55	token_blacklist	0012_alter_outstandingtoken_user	2023-05-10
56	api	0027_alter_atleta_algum_problema_saude_and_more	2023-05-25
57	api	0028_alter_avaliacaoantropometricafisicomotora_atleta	2023-05-26
58	api	0029_avaliacaoantropometricafisicomotora_habilidades_psicologicas_and_more	2023-05-29
59	api	0030_alter_avaliacaoantropometricafisicomotora_agilidade_t1_and_more	2023-05-29
60	api	0031_avaliacaoantropometricafisicomotora_idade_pvc_and_more	2023-05-29
61	api	0032_alter_avaliacaoantropometricafisicomotora_idade_pvc	2023-05-30
62	api	0033_avaliacaopotencialesportivo_intangivel_potencial_esportivo	2023-05-31
63	api	0034_alter_avaliacaopotencialesportivo_atleta	2023-06-01
64	api	0035_remove_avaliacaoantropometricafisicomotora_habilidades_psicologicas_and_more	2023-07-05
65	api	0035_alter_avaliacaopotencialesportivo_atleta_and_more	2023-07-19
66	api	0036_remove_avaliacaoantropometricafisicomotora_habilidades_psicologicas_and_more	2023-07-19
67	api	0037_remove_avaliacaopotencialesportivo_intangivel_potencial_esportivo_and_more	2023-07-19
68	api	0038_remove_avaliacaoantropometricafisicomotora_habilidades_psicologicas_and_more	2023-07-19
69	api	0039_remove_questionariocomppercebidasuportefamiliar_modalidade_and_more	2023-07-20
\.


--
-- Data for Name: _django_session; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._django_session (session_key, session_data, expire_date) FROM stdin;
8b67guh6e0l5t1s9zatjcg2hjmcc0ycd	.eJxVjMsOwiAQRf-FtSEDdSi4dN9vaGYYkKqBpI-V8d-1SRe6veec-1IjbWsZtyXN4yTqoow6_W5M8ZHqDuRO9dZ0bHWdJ9a7og-66KFJel4P9--g0FK-tRcwvSMJYJARz46NeMbkPYFAspAlBrLgbWdRENijE2P7HKJwl0G9P9B8N5I:1pMggz:bUenDWQf8pVd_jk7-uUUzPxeUWY_TQi20aQlKySpzN8	2023-02-14
qk9ev40dhn2bhkuhn5ppwllifxcbqg5j	.eJxVjMsOwiAQRf-FtSEDdSi4dN9vaGYYkKqBpI-V8d-1SRe6veec-1IjbWsZtyXN4yTqoow6_W5M8ZHqDuRO9dZ0bHWdJ9a7og-66KFJel4P9--g0FK-tRcwvSMJYJARz46NeMbkPYFAspAlBrLgbWdRENijE2P7HKJwl0G9P9B8N5I:1pQYbs:fKczUXToR4BwkPP1_V9XL7zGVhtAWTij3pMlZdBDCWQ	2023-02-24
zu4jxan2zygeq97ixe9vprmit9mkzwjt	.eJxVjMsOwiAQRf-FtSEDdSi4dN9vaGYYkKqBpI-V8d-1SRe6veec-1IjbWsZtyXN4yTqoow6_W5M8ZHqDuRO9dZ0bHWdJ9a7og-66KFJel4P9--g0FK-tRcwvSMJYJARz46NeMbkPYFAspAlBrLgbWdRENijE2P7HKJwl0G9P9B8N5I:1pRtcv:elR0hDicKgmEIUSKN3uGSORHzP-1I9YT9GDifdcxwtk	2023-02-28
gocn8icjq3nyn2bcnieg0n01fcs7sc5n	.eJxVjMsOwiAQRf-FtSEDdSi4dN9vaGYYkKqBpI-V8d-1SRe6veec-1IjbWsZtyXN4yTqoow6_W5M8ZHqDuRO9dZ0bHWdJ9a7og-66KFJel4P9--g0FK-tRcwvSMJYJARz46NeMbkPYFAspAlBrLgbWdRENijE2P7HKJwl0G9P9B8N5I:1pZoE9:jVbqGOoZ-YTjQOmIkkuz8R3CrxWUtxQdlerk5efvQpU	2023-03-22
dfq4zao5lf40n2dgo3lim92uxytl5zey	.eJxVjMsOwiAQRf-FtSEDdSi4dN9vaGYYkKqBpI-V8d-1SRe6veec-1IjbWsZtyXN4yTqoow6_W5M8ZHqDuRO9dZ0bHWdJ9a7og-66KFJel4P9--g0FK-tRcwvSMJYJARz46NeMbkPYFAspAlBrLgbWdRENijE2P7HKJwl0G9P9B8N5I:1pfLR1:XB6HMQl0GrT3mpv4cHqezNYDhnQpa0t2n5yDJW408rY	2023-04-06
npdfxpk2v4f84crokl9d0327zu3cm7sl	.eJxVjDsOwyAQRO9CHSFYG7ykTO8zoOUXnEQgGbuKcvdgyUUy5bw382aW9i3bvcXVLoFdmWSX386Rf8ZygPCgcq_c17Kti-OHwk_a-FxDfN1O9-8gU8t97aMJEsEFABSYhO5BAWYgUpj0KCgOmqSRzk1A0-hNQK8AB6U7kYl9vsvZN0Y:1pyg7Z:14gaUyoq9TaPlREHxFJ954N4HJZLBN8h6Xb2byHgW20	2023-05-29
p5krptthr8t7nqhp11rgx8hb9h5xz7rf	.eJxVjDsOwyAQRO9CHSFYG7ykTO8zoOUXnEQgGbuKcvdgyUUy5bw382aW9i3bvcXVLoFdmWSX386Rf8ZygPCgcq_c17Kti-OHwk_a-FxDfN1O9-8gU8t97aMJEsEFABSYhO5BAWYgUpj0KCgOmqSRzk1A0-hNQK8AB6U7kYl9vsvZN0Y:1q1w1h:L6mD3_pebPf0BzkYtepNiRLXGHatate74xyESVO1340	2023-06-07
6pd6hpz2y8shyaznestt65mncn67ad2o	.eJxVjDsOwyAQRO9CHSFYG7ykTO8zoOUXnEQgGbuKcvdgyUUy5bw382aW9i3bvcXVLoFdmWSX386Rf8ZygPCgcq_c17Kti-OHwk_a-FxDfN1O9-8gU8t97aMJEsEFABSYhO5BAWYgUpj0KCgOmqSRzk1A0-hNQK8AB6U7kYl9vsvZN0Y:1qExqX:VLixWBiMQT4byuZZl30s1eM9Cjq4ZEam4x6Ws8w3i4E	2023-07-13
fn20z47is9ukj28vyh1l93nb9olj2xnk	.eJxVjDsOwyAQRO9CHSFYG7ykTO8zoOUXnEQgGbuKcvdgyUUy5bw382aW9i3bvcXVLoFdmWSX386Rf8ZygPCgcq_c17Kti-OHwk_a-FxDfN1O9-8gU8t97aMJEsEFABSYhO5BAWYgUpj0KCgOmqSRzk1A0-hNQK8AB6U7kYl9vsvZN0Y:1qMDCk:19_zzD6Jy7f1mxg1S0dGL82qoCIPbw6dFMJFMYbJ-dw	2023-08-02
\.


--
-- Data for Name: _questionario_acsi; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._questionario_acsi (id, data_criacao, questao1, questao2, questao3, questao4, questao5, questao6, questao7, questao8, questao10, questao11, questao12, questao13, questao14, questao15, questao16, questao17, questao18, questao19, questao20, questao21, questao22, questao23, questao24, questao25, questao26, questao27, atleta_id, questao9) FROM stdin;
2	2023-03-23	2	1	0	2	3	0	3	3	0	0	3	3	2	3	2	3	0	3	2	3	0	0	3	2	3	3	2	2
3		1	3	0	3	3	2	2	3	0	1	2	2	3	3	3	2	2	1	3	3	3	2	3	3	3	3	3	3
4		3	2	0	3	3	2	1	2	0	2	3	3	3	3	3	3	3	1	2	3	3	1	3	1	3	3	4	3
5		0	2	1	3	1	2	3	1	2	3	3	2	3	2	1	1	0	3	2	0	0	3	0	0	2	2	5	3
6		1	1	1	0	1	1	0	2	0	0	2	0	2	1	1	1	3	0	1	1	3	0	0	0	0	1	6	3
7		1	3	0	1	3	1	1	2	0	1	2	2	2	3	1	1	1	1	2	1	1	2	1	2	3	3	7	3
8		1	3	0	3	3	2	2	3	0	3	1	1	3	3	2	3	2	1	1	3	3	2	2	1	3	3	8	3
9		1	3	0	2	2	1	1	2	0	1	1	2	3	2	2	2	3	1	2	2	3	1	2	2	3	3	9	3
10		1	3	0	3	3	2	2	2	0	1	2	1	3	3	3	1	2	0	2	2	2	3	2	3	3	3	10	3
11		3	3	0	3	3	2	1	3	0	2	2	2	3	3	3	3	3	2	3	3	3	2	3	3	3	3	11	3
12		2	3	0	3	2	2	2	1	0	2	0	2	3	3	2	2	3	2	2	1	3	0	2	3	2	3	12	3
13		0	3	0	3	1	2	0	1	0	3	0	2	0	3	1	3	2	0	0	2	3	0	3	2	3	3	13	3
14		1	3	0	2	2	1	1	2	0	1	3	2	3	3	2	2	2	1	2	1	2	1	2	1	3	3	14	3
15		0	1	2	3	1	2	0	2	2	1	1	2	1	0	1	3	0	1	3	1	0	2	0	1	2	2	15	3
16		2	2	0	3	2	2	0	3	0	2	2	2	3	3	3	3	3	2	3	3	3	2	2	3	3	3	16	3
17		2	3	0	3	3	3	1	2	0	2	2	3	3	0	3	2	3	3	1	2	3	1	2	3	3	3	17	3
18		1	3	0	3	1	1	1	1	0	1	1	1	3	3	3	2	1	1	2	0	3	0	3	2	1	3	18	3
19		2	3	0	2	3	3	1	3	0	2	3	2	3	3	2	3	2	1	1	1	2	1	1	2	3	3	19	3
20		1	3	0	2	2	2	1	1	0	0	2	2	2	2	2	2	1	1	2	1	1	0	1	1	3	3	20	2
21		1	2	0	2	2	1	3	3	0	3	1	2	3	3	3	3	2	3	3	0	3	3	2	1	2	2	21	2
22		1	1	1	1	2	3	1	2	2	1	2	2	1	1	2	3	2	2	1	2	3	2	1	3	2	1	22	3
23		1	3	0	3	2	2	3	3	0	3	3	3	3	3	2		2	3		2	2	3	2	3	3	3	23	3
24		1	2	0	3	1	1	0	3	1	0	0	3	3	3	1	3	0	3	1	0	0	3	0	3	3	3	24	0
25		1	3	0	3	3	2	2	3	0	0	0	1	3	3	3	3	3	1	1	3	3	0	3	3	3	3	25	3
26		1	3	0	3	3	3	1	1	0	1	0	2	3	3	3	2	3	0	2	3	3	1	3	3	3	3	26	3
27		1	3	0	3	2	2	1	3	0	2	1	1	3	3	3	1	2	3	2	3	3	3	3	3	3	3	27	3
28		3	2	0	3	2	3	3	3	0	3	2	3	3	3	2	3	3	3	3	2	3	3	2	2	3	3	28	3
29		1	2	0	3	1	3	1	1	0	1	2	2	2	2	2	1	1	0	0	2	1	2	1	1	2	3	29	3
30		1	2	0	1	1	1	2	1	0	2	0	0	3	3	2	1	1	2	1	2	3	2	2	2	3	3	30	3
31																												31	
32		2	3	1	3	3	3	3	3	1	2	1	3	3	1	2	2	3	3	3	1	3	3	2	3	3	2	32	3
33		1	2	0	1	2	2	1	2	1	2	2	1	2	2	1	3	2	2	2	2	1	1		1	3	2	33	2
34		0	0	0	0	0	1	0	1	1	0	0	1	0	0	1	0	1	0	1	1	1	2	0	2	2	2	34	0
35		1	2	1	2	2	2	1	3	1	2	2	2	3	2	2	2	2	2	1	3	3	1	2	1	3	3	35	3
36		2	2	1	3	2	2	3	3	1	2	2	2	3	2	2	2	2	2	2	2	2	1	3	2	3	3	36	2
37		1	2	0	3	2	3	1	1	1	2	1	1	3	1	2	2	3	1	0	1	3	0	3	3	2	3	37	2
38		1	2	1	3	3	3	1	3	1	2	2	2	3	2	3	3	3	3	3	2	3	0	2	3	3	3	38	3
39		1	1	0	2	1	1	1	3	1	0	2	1	1	2	1	1	1	1	1	2	1	1	2	1	3	1	39	2
40		2	3	0	3	2	3	3	3	0	3	2	3	3	3	2	2	3	1	3	2	2	3	3	3	3	2	40	3
41		2	3	0	1	2	3	0	2	0	2	2	3	3	0	1	0	3	1	2	0	2	0	0	2	3	2	41	3
42		1	3	0	3	2	3	1	1	0	2	2	1	3	3	2	3	3	1	3	3	3	1	2	3	2	2	42	3
43		1	2	0	3	3	3	3	3	0	2	2	1	2	3	3	1	2	3	2	1	3	3	1	2	2	3	43	3
44		1	2	0	3	2	1	1	1	0	1	1	1	3	3	2	2	3	1	1	1	2	1	1	2	3	3	44	2
45		3	2	0	1	2	2	2	1	0	1	3	1	2	3	2	2	3	2	1	2	2	3	2	1	2	3	45	3
46		2	3	0	2	3	2	0	3	0	3	1	3	3	3	3	2	3	1	3	2	3	1	2	3	2	3	46	3
47		3	2	1	2	2	3	1	3	1	1	3	3	3	3	3	3	3	1	2	3	3	0	3	3	3	3	47	3
48		1	1	1	1	1	1	1	0	1	1	1	1	1	1	2	1	2	3	1	2	0	2	1	1	1	1	48	0
49		2	2	0	3	3	2	1	2	0	2	2	2	3	2	1	0	1	3	1	1	2	3	0	1	2	2	49	1
50		1	3	1	2	2	2	1	2	1	2	2	2	2	1	1	1	1	1	2	2	1	1	1	2	2	2	50	3
51		3	3	1	3	3	1	0	3	2	2	3	3	3	1	2	3	3	2	2	3	3	1	2	1	3	2	51	3
52		1	3	1	0	1	3	3	2	0	1	2	2	1	3	3	2	3	3	1	3	3	2	1	2	2	3	52	3
53		0	2	2	2	3	2	0	2	0	2	2	1	3	2	2	2	3	2	2	1	2	2	1	1	2	1	53	3
54		1	2	0	2	2	3	2	1	0	1	2	3	3	2	2	2	2	3	3	2	2	0	1	1	3	3	54	2
55		2	3	0	3	2	1	0	3	0	2	3	3	3	3	2	2	2	0	3	2	2	2	3	3	2	2	55	3
56		3	3	0	3	3	3	3	3	0	0	3	3	3	3	3	3	3	1	3	3	3	1	3	3	3	3	56	3
57		3	2	0	2	2	2	2	2	1	2	2	2	2	2	2	2	2	3	2	2	2	2	2	3	2	2	57	2
58		2	2	0	2	2	3	1	3	0	1	2	2	3	3	2	2	3	2	2	1	2	1	2	2	3	3	58	3
59		2	2	2	3	2	3	2	2	0	2	1	2	1	3	2	3	3	0	2	1	3	1	2	3	3	3	59	3
60		1	2	0	3	2	1	1	0	0	2	3	1	3	3	3	2	2	3	0	1	2	3	1	3	2	3	60	3
61		2	3	0	3	3	2	1	2	0	2	3	2	3	0	3	3	2	3	1	2	3	1	3	3	3	3	61	3
62		2	2	0	3	2	3	1	3	0	1	3	3	3	3	2	3	2	0	1	2	2	2	2	3	3	3	62	3
63		2	3	0	0	3	3	2	3	0	0	3	2	3	1	2	2	3	1	2	1	2	2	2	0	3	3	63	2
64		2	3	1	3	2	2	0	2	0	1	0	2	3	2	3	2	3	0	2	1	3	0	2	3	3	3	64	3
65		2	0	0	2	2	2	1	3	0	1	1	2	3	0		2	1	0	2	1	2	1	2	2	3	3	65	3
66		1	2	0	2	3	2	2	2	0	3	2	1	2	3	1	3	1	2	1	2	2	3	2	3	3	3	66	2
67		1	2	0	1	2	1	3	2	0	2	1	1	1	3	2	1	1	1	1	1	2	2	1	2	2	2	67	2
68		1	1	0	2	0	2	1	2	0	0	2	2	2	1	1	1	2	3	1	0	2	3	0	3	2	3	68	2
69		0	3	0	2		2		2		1	2	1	2	1			2		1		2		1	2		1	69	2
70		2	2	0	2	2	2	1	2	0	1	1	2	2	3	2	2	2	2	1	1	1	1	1	2	3	3	70	2
71		3	3	0	3	3	2	0	3	0	3	0	3	3	3	3	3	3	1	3	3	2	1	3	3	3	3	71	3
72		2	2	1	2	2	3	2	3	1	1	2	2	3	1	2	2	3	1	3	2	3	2	3	3	3	2	72	3
73			3	0	1	1	1	2	3		1	1	1	1	1	1	1	1	1	2	2	1	1	3	3	1	0	73	3
74		0	2	1	3	1	3	0	1	0	1	0	3	1	3	2	1	3	0	1	3	3	0	2	3	2	3	74	1
75		1	2	0	2	2	1	3	0	3	3	2	1	3	2	2	3	2	3	1	1	1	2	1	3	3	3	75	2
76		2	3	0	3	3	2	1	3	0	2	3	3	2	1	2	3	3	2	2	2	2	2	3	2	3	3	76	3
77	2023-07-28	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	82	1
\.


--
-- Data for Name: _questionario_competencia_suporte_familiar; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._questionario_competencia_suporte_familiar (id, desempenho_percebido, desempenho_comparativo, questao1, questao2, questao3, questao4, questao5, questao6, questao7, questao8, questao9, questao10, atleta_id, data_criacao) FROM stdin;
2	3	3	3	2	4	1	3	2	3	4	3	4	2	2023-03-23
3	4	4	4	3	3	1	4	4	4	4	2	2	3	2023-02-25
4	4	4	2	1	3	2	4	4	4	4	4	4	4	2023-02-25
5	3	3	4	2	4	1	4	4	4	4	2	1	5	2023-02-25
6	4	3	1	1	2	1	3	1	2	1	3	1	6	2023-02-25
7	4	4	4	3	4	2	4	4	4	4	4	3	7	2023-02-25
8	4	4	3	2	4	3	4	4	4	4	4	4	8	2023-02-25
9	4	3	3	3	4	2	3	4	4	4	3	4	9	2023-02-25
10	5	4	1	3	2	2	1	4	4	3	3	3	10	2023-02-25
11	4	4	4	4	4	2		4	4	4	4	4	11	2023-02-25
12	4	4	4	1	4	2	4	4	4	3	4	4	12	2023-02-25
13	5	4	4	3	3	1	4	3	4	4	4	4	13	2023-02-25
14	3	4	4	4	4	2	3	4	4	3	4	3	14	2023-02-25
15	4	3	2	1	1	3	1	1	1	1	2	1	15	2023-02-25
16	5	4	4	3	3	2	4	4	3	3	4	3	16	2023-02-25
17	4	4	3	3	4	2	4	4	4	3	3	4	17	2023-02-25
18	4	3	4	4	4	1	4	4	4	4	4	4	18	2023-02-25
19	2	2	3	4	4	2	4	4	4	3	4	4	19	2023-02-25
20	4	3	3	2	2	1	4	3	4	3	3	4	20	2023-02-25
21	3	3	3	3	4	1	2	3	3	2	4	3	21	2023-02-25
22	4	3	3	2	3	3	2	3	2	3	3	3	22	2023-02-25
23	4	4	4	3	4	3	4	4	4	4	4	4	23	2023-02-25
24	4	4	2	1	1	1	4	4	4	4	2	2	24	2023-02-25
25	4	4	4	3	4	1	4	4	4	3	3	4	25	2023-02-25
26	4	3	3	2	2	1	4	4	4	3	4	4	26	2023-02-25
27	4	4	4	3	3	3	4	4	4	4	4	4	27	2023-02-25
28	3	2	2	1	4	1	3	4	3	4	3	1	28	2023-02-25
29	4	4	2	2	4	3	4	4	4	4	2	4	29	2023-02-25
30	2	3	4	1	4	2	3	4	4	3	4	4	30	2023-02-25
32	5	3	4	4	4	2	4	4	4	4	3	4	32	2023-02-25
33	4	3	2	2	2	1	2	3	4	4	4	2	33	2023-02-25
34	3	2	2	3	4	3	3	3	4	2	3	3	34	2023-02-25
35	4	4	2	1	3	3	4	4	4	4	3	3	35	2023-02-25
36	3	3	4	2	3	2	3	4	3	4	3	3	36	2023-02-25
37	4	3	3	3	2	2	4	3	3	4	3	3	37	2023-02-25
38	3	3	3	3	3	3	4	4	4	4	4	4	38	2023-02-25
39	5	4	2	3	4	2	4	3	4	4	3	4	39	2023-02-25
40	4	4	4	2	4	2	4	3	4	4	4	4	40	2023-02-25
41	5	4	2	1	3	1	4	2	4	4	4	2	41	2023-02-25
42	3	1	2	2	2	2	4	4	3	3	3	3	42	2023-02-25
43	4	3	2	2	3	1	4	4	4	4	4	4	43	2023-02-25
44	3	3	4	4	4	2	4	4	4	4	4	4	44	2023-02-25
45	3	4	2	1	2	1	3	2	2	3	4	2	45	2023-02-25
46	4	4	4	4	4	2	4	4	4	4	3	4	46	2023-02-25
47	4	4	1	2	2	1	3	1	3	2	4	3	47	2023-02-25
48	3	3	1	1	1	3	1	1	2	1	1	3	48	2023-02-25
49	2	3	1		2	2	1	4	4	4	2	4	49	2023-02-25
50	4	4	4	3	4	2	4	4	4	4	4	4	50	2023-02-25
51	4	5	4	2	4	1	4	4	4	4	2	4	51	2023-02-25
52	4	4	4	2	3	1	4	4	2	4	4	4	52	2023-02-25
53	4	4	4	4	4	1	4	4	4	4	4	4	53	2023-02-25
54	3	3	4	4	3	1	2	3	2	2	2	2	54	2023-02-25
55	4	4	3	4	4	2	3	4	3	3	4	4	55	2023-02-25
56	4	4	4	4	4	3	4	4	4	4	2	4	56	2023-02-25
57	5	5	1	2	2	2	3	3	3	3	2	2	57	2023-02-25
58	3	4	4	4	4	2	4	4	4	4	4	3	58	2023-02-25
59	4	3	3	2	4	2	4	2	4	3	4	4	59	2023-02-25
60	4	4	4	2	3	1	4	4	4	3	4	2	60	2023-02-25
61	4	4	4	3	4	2	4	4	4	3	3	4	61	2023-02-25
62	3	3	2	1	1	2	1	4	3	2	4	2	62	2023-02-25
63			3	2	3	2	4	4	4	4	3	3	63	2023-02-25
64	4	5	4	4	4	3	4	4	4	4	4	3	64	2023-02-25
65	4	4	2	1	3	1	1	4	4	1	3	3	65	2023-02-25
66	3	3	2	1	2	1	2	3	2	1	4	2	66	2023-02-25
67	3	4	4	4	3	2	4	4	4	4	4	4	67	2023-02-25
68	3	3	3	3	3	2	3	2	3	3	3	3	68	2023-02-25
69	4	4	1	2	4	1	4	4	4	4	4	4	69	2023-02-25
70	4	4	4	3	1	2	4	4	4	4	4	4	70	2023-02-25
71	4	4	4	4	4	1	3	1	3	2	4	3	71	2023-02-25
72	4	3	2	2	3	1	3	4	3	2	4	2	72	2023-02-25
73	3	4	2	2			4	4	4	4	1	4	73	2023-02-25
74	3	3	2	1	3	1	3	2	4	3	4	4	74	2023-02-25
75	4	3	4	3	4	2	4	4	4	4	4	4	75	2023-02-25
76	4	4	4	2	4	2	4	4	4	4	4	4	76	2023-02-25
77	20	20	1	1	1	3	2	2	2	3	3	3		2023-07-28
\.


--
-- Data for Name: _questionario_pais_socioeconomico; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._questionario_pais_socioeconomico (id, data_criacao, altura_mae, altura_pai, atleta_id, modalidade, pais_praticantes_esporte, tem_atleta_na_familia) FROM stdin;
1	2023-03-23	160	170	3			
2	2023-02-24	155	180	4			
3	2023-02-24	155	170	6			
4	2023-02-24	0	0	5			
5	2023-02-24	0	0	7			
6	2023-02-24	0	172	8			
7	2023-02-24	0	0	9			
8	2023-02-24	0	0	10			
9	2023-02-24	164	174	11			
10	2023-02-24	0	0	12			
11	2023-02-24	171	176	13			
12	2023-02-24	160	173	14			
13	2023-02-24	0	0	15			
14	2023-02-24	160	193	16			
15	2023-02-24	0	0	17			
16	2023-02-24	0	0	18			
17	2023-02-24	175	175	19			
18	2023-02-24	0	0	20			
19	2023-02-24	0	0	21			
20	2023-02-24	155	175	22			
21	2023-02-24	155	175	23			
22	2023-02-24	155	175	24			
23	2023-02-24	164	174	25			
24	2023-02-24	170	173	26			
25	2023-02-24	168	175	27			
26	2023-02-24	168	181	28			
27	2023-02-24	0	0	29			
28	2023-02-24	167	182	30			
29	2023-02-24	157	174	32			
30	2023-02-24	0	0	33			
31	2023-02-24	0	0	34			
32	2023-02-24	160	177	35			
33	2023-02-24	0	0	36			
34	2023-02-24	160	175	37			
35	2023-02-24			38			
36	2023-02-24	162	172	39			
37	2023-02-24			40			
38	2023-02-24			41			
39	2023-02-24			42			
40	2023-02-24	180	177	43			
41	2023-02-24	166	170	44			
42	2023-02-24	160	165	45			
43	2023-02-24	158	169	46			
44	2023-02-24	168	175	74			
45	2023-02-24	165	180	47			
46	2023-02-24	162	175	49			
47	2023-02-24	170	188	50			
48	2023-02-24			51			
49	2023-02-24	164	175	75			
50	2023-02-24			52			
51	2023-02-24			53			
52	2023-02-24			54			
53	2023-02-24	156	179	55			
54	2023-02-24	170	169	56			
55	2023-02-24			57			
56	2023-02-24		181	58			
57	2023-02-24			59			
58	2023-02-24	163	168	60			
59	2023-02-24			61			
60	2023-02-24	158	178	62			
61	2023-02-24	166	174	63			
62	2023-02-24	162	170	64			
63	2023-02-24			76			
64	2023-02-24	160	175	65			
65	2023-02-24			66			
66	2023-02-24			67			
67	2023-02-24	158	168	68			
68	2023-02-24	155	180	69			
69	2023-02-24			70			
70	2023-02-24			71			
71	2023-02-24			73			
72	2023-07-28	161	170	83	N/A	0	1
\.


--
-- Data for Name: _questionario_pessoal; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._questionario_pessoal (id, data_criacao, tem_orientacao_treinador, qual_esporte_treina1, tempo_treinamento1, frequencia_semanal_treino1, duracao_treino_horas1, qual_esporte_treina2, tempo_treinamento2, frequencia_semanal_treino2, duracao_treino_horas2, instituicao_treinamento, esporte_preferido, idade_inicio_futebol, participa_competicao, maior_nivel_competicao, nome_competicao, nome_competicao_maior_vitoria, quer_ser_atleta, modalidade, teve_lesao, atleta_id, quantas_lesoes, maior_nivel_vitoria) FROM stdin;
2		1	Futebol	7	6							Futebol	7	1	3		Comary Cup	1		0	2		3
3		1	Futebol	8	5	2						Futebol	8	1	2	Campeonato Mineiro 1°divisão	Campeonato Mineiro	1		0	3		2
4		1	Futebol									Futebol	10	1	2	Campeonato Mineiro 1°divisão	MG CUP	1		0	4		2
5		1	Futebol	11	5	2	Academia	4	2	1		Futebol	5	1	4	Go Cup	Go Cup	1		1	5	1	4
6		1	Futebol	10	5	2	Academia	4	2	1		Futebol	6	1	2	Campeonato Mineiro 1°divisão	Campeonato Mineiro	1		0	6		2
7		1	Futebol	10	5	2						Futebol	5	1	2	Campeonato Mineiro 1°divisão	MG CUP	1		1	7	2	2
8		1	Futebol	9	5	2						Futebol	8	unknown_value_please_contact_support	1	Copa Bahamas, Liga	Copa Bahamas	1		0	8		1
9		1	Futebol									Futebol	4	unknown_value_please_contact_support	2	Campeonato Mineiro 1°divisão	Regional	1		0	9		1
10		1	Futebol	6	5	2	Futsal	12	2	2		Futebol	5	1	2	Campeonato Mineiro 1°divisão	Campeonato Mineiro	1		1	10	2	2
11		1	Futebol	9	5	2						Futebol	6	1	4	Go Cup	MG CUP	1		1	11	1	2
12		1	Futebol	4	5	2						Futebol	11	1	2	Campeonato Mineiro 1°divisão	Copa Bahamas	1		1	12	1	1
13		1	Futebol	2	5	2						Futebol	14	1	2	Campeonato Mineiro 1°divisão	Copa Bahamas	1		1	13	2	1
14		1	Futebol	8	5	2						Futebol	9	1	4	Go Cup	Go Cup	1		1	14	1	4
15		1	Futebol	3	6	2						Futebol	9	1	2	Campeonato Mineiro 1°divisão	Campeonato Mineiro	1		0	15		2
16		1	Futebol	10	5	2						Futebol	5	1	4	Go Cup	MG CUP	1		1	16	1	2
17		1	Futebol	10	5	2						Futebol	5	1	2	Gothia Cup	Catarinense	1		1	17	1	2
18		1	Futebol	5	5	2						Futebol	8	1	2	Campeonato Mineiro 1°divisão		1		0	18		0
19		1	Futebol	9	5	2						Futebol	7	1	2	Campeonato Mineiro 1°divisão	Copa Bahamas	1		1	19	2	1
20		1	Futebol	12	5	2						Futebol	5	1	3	Comary Cup	Comary cup	1		1	20	2	3
21		1	Futebol	11	2	5	Handebol	2	1	2		Futebol	7	1	2	Campeonato Mineiro 1°divisão	Copa da Amizade SP	1		1	21	2	1
22		1	Futebol									Futebol	7	0	2	Campeonato Mineiro 1°divisão	Campeonato Mineiro	1		0	22		2
23		1	Futebol	8								Futebol	8	1	2	Campeonato Mineiro 1°divisão	Campeonato Mineiro	1		1	23	1	2
24		1	Futebol	6	5	2						Futebol	10	1	2	Campeonato Mineiro 1°divisão	Campeonato Mineiro	1		0	24		2
25		1	Futebol	8	6	2						Futebol	8	1	2	Campeonato Mineiro 1°divisão	Campeonato Mineiro	1		0	25		2
26		1	Futebol	11	6	2						Futebol	11	1	4	Go Cup	Go Cup	1		0	26		4
27		1										Futebol	7	1	4	Go Cup	MG Cup	1		1	27	2	2
28		1	Futebol	6	6	3						Futebol	10	0	1	Copa Bahamas/Liga/Zona Norte	Copa Bahamas	1		0	28		1
29		1	Futebol	11	5	2						Futebol	4	1	2	Carioca e Mineiro	Carioca e Mineiro	1		1	29	1	2
30		1	Futebol	9	5	2						Futebol	7	1	4	Go Cup	Go Cup	1		1	30	1	4
31		1	Futebol	8	5	2						Futebol	6	1	2	Campeonato Mineiro 1°divisão	Copa Bahamas	1		0	31		1
32		1	Futebol	4	5	2						Futebol	13	1	2	Campeonato Mineiro 1°divisão		1		0	32		0
33		1	Futebol	10	6	2						Futebol	6	1	4	Go Cup	Go Cup	1		0	33		4
34		1	Futebol	9	5	2						Futebol	9	1	2	Guilherme Embry	Escolinha do Coritiba	1		1	34	1	1
35		1	Futebol	8	5	2						Futebol	8	1	2	Campeonato Mineiro	Campeonato Mineiro	1		0	35		2
36		1	Futebol	11	5	2						Futebol	6	1	2	Campeonato Mineiro	Campeonato Mineiro	1		1	36	2	2
37		1	Futebol	7	4	2						Futebol	6	unknown_value_please_contact_support	1	Bahamas	Copa Caixa	1		1	37	1	1
38		1	Futebol	8	4	2						Futebol	6	1	1	Liga, Copa Zico e Bahamas	Liga e Copa Zico	1		1	38	1	1
39		1	Futebol	10	4	2						Futebol	4	unknown_value_please_contact_support	3	São Ludgero	Copa Bahamas	1		0	39		1
40		1	Futebol	7	4	2						Futebol	5	1	1		Regional de futebol, Liga de Juiz de fora	1		1	40	1	1
41		1	Futebol	3	4	2						Futebol	11	1	1	Liga, Bahamas, Copa zico	Liga	1		1	41	2	1
42		1	Futebol	9	4	2							5	1	1	Copa zico, Copa Bahamas, Liga de Juiz de Fora	Copa Zico e Liga de Juiz  de Fora	1		1	42	1	1
43		1	Futebol	8	4	2						Futebol		1	1					1	43	1	1
44		1	Futebol	6	4	2						Futebol	4	1	1	Zico, Zica	Zica	1		1	44	1	1
45		1	Futebol	7	4	2						Futebol	6	1	1	Liga, Bahamas	Liga	1		1	45		1
46		1	Futebol	8	4	2						Futebol		1	1	Liga de Futebol de campo	Liga de futebol de campo	1		0	46		1
47		1	Futebol	6	4	3						Futebol	6	1	0			1		0	47		0
48		1	Futebol	9	4	2						Futebol	4	1	1	Liga	Liga e Copa Zico	1		0	48		1
49		1	Futebol	9	4	2						Futebol	5	1	1	Bahamas(campo e futsal), Liga, Copa Zico	Bahamas (futsal), Liga, Copa Zico	1		0	49		1
50		1	Futebol	4	5	2						Futebol	10	1	2	Campeonato mineiro segunda divisão	ABS	1		0	50		1
51		1	Futebol	1	5	2						Futebol	6	1	2	Campeonato mineiro segunda divisão	Copa AOA	1		1	51	1	1
52		1	Futebol	10	5	1						Futebol	5	1	3	Comery cup	Liga de JF	1		1	52	1	1
53		1	Futebol	9	5	2						Futebol	5	1	2	Mineiro	Copa Bahamas	1		0	53		1
54		1	Futebol	9	5	2						Futebol	5	1	3	Copa São Ludgero	Copa Bahamas de Futebol	1		1	54	1	1
55		1	Futebol																		55		
56		1	futebol	8	4	2						futebol	6	1	1	Copa bahamas e liga	Liga	1		1	56		1
57		1	Futebol	8	4	2						futebol	6	1	1		Copa Bahamas, Liga, Copa Zico	1		0	57		
58		1	futebol	10	5	2						futebol	4	1	2	Campeonato Mineiro	Bahamas	1		1	58	2	1
59		1	futebol	7	5	2						futebol	7	1	3	Copa São Ludgero	Kids cup, Copa sesc, Copa AOA.	1		1	59	2	1
60		1	futebol	9	5	2						futebol	5	1	3	Comary Cup	Rio Minas	1		0	60		2
61		1	futebol	9	5	2						futebol	10	1	2	Campeonato Carioca	Soccer Rio	1		0	61		2
62		1	futebol	8	5	2						futebol	7	1	2	Campeonato Carioca	Copa Bahamas	1		1	62	2	1
63		1	Futebol	10	3	2						Futebol	4	1	2	Campeonato Mineirp 2ª divisão	Copa Bahamas	1		0	63		1
64		1	Futebol	8	5	2						Futebol	5	1	1	Bahamas	Bahamas	1		0	64		1
65		1	Futebol	9	5	1						Futebol	5	1	2	Campeonato Mineiro	Copa bahamas e Liga do Futebol Juiz de fora	1		1	65	1	1
66		1	futebol	3	4	2						Futebol	10	1	1			1		0	66		
67		1	futebol	9	4	2						Futebol	4	1	1	Copa Zico, Liga,  Bahamas copa e futsal 	Liga	1		1	67	4	1
68		1	futebol	8	5	2						Futebol	4	1	1	Copa Bahamas	Intercolegial	1		0	68		1
69		1	futebol	9	5	2						Futebol	6	1	2	Campeonato Mineiro de Futsal	Copa Bahamas de Campo	1		1	69	1	1
70		1	futebol	6	5	2						Futebol	9	1	1	Copa Bahamas (campo e quadra), Copa CAAFA, Copa Zico 	Copa CAAFA	1		0	70		1
71		1	futebol	12	5	2						Futebol	3	1	2	JEMG	Copa Bahamas 	1		1	71	1	1
72		1	futebol	10	5	2						Futebol	4	1	4	Go Cup	ABS	1		0	72		1
73		1	Futebol	5	5	2	Futsal	1	2	1		Futebol	10	1	3	São Ludgero	São Ludgero	1		0	73	1	3
74		1	Futebol	4	4	2						Futebol	9	0	1	Copa Bahamas		1		1	74	1	0
75		1	Futebol	6	6	2						Futebol	9	1	3	Copa Voltaço	Liga Juiz de Fora	1		1	75	1	1
76	2023-03-23	1	Futebol	5	5	2	Futsal	4	2	2		Futebol	9	1	4	Go cup	Copa São Ludgero	1		0	76		3
77	2023-07-28	0	1	1	1	1	1	1	1	1	a	a	2	0	0	a	a	0	a	0	83	2	0
\.


--
-- Data for Name: _questionario_soq; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._questionario_soq (id, data_criacao, questao1, questao2, questao3, questao4, questao5, questao6, questao7, questao8, questao10, questao11, questao12, questao13, questao14, questao15, questao16, questao17, questao18, questao19, questao20, questao21, questao22, questao23, questao24, questao25, atleta_id, questao9) FROM stdin;
2	2023-03-23	5	5	5	5	5	4	5	4	5	4	5	4	5	5	4	5	5	2	5	5	5	4	4	4	2	5
3		5	5	5	3	5	5	4	5	5	4	5	5	2	5	5	5	5	5	4	5	5	5	5	5	3	5
4		5	5	5	5	5	5	4	5	5	5	5	5	5	5	5	5	5	5	5	4	5	4	4	5	4	5
5		5	5	4	4	5	5	4	5	5	4	5	5	4	5	5	5	4	4	5	5	5	4	4	4	5	5
6		5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	4	5	4	6	5
7		5	5	5	5	5	5	4	5	5	4	5	4	5	5	5	5	5	5	5	5	5	5	5	5	7	5
8		5	5	5	5	5	5	5	4	4	5	4	5	4	5	5	5	4	4	5	5	5	5	5	5	8	4
9		5	5	5	5	5	5	5	4	5	5	5	5	4	5	5	5	4	4	5	4	5	4	4	5	9	4
10		5	5	5	5	5	5	5	4	5	5	5	5	5	5	5	5	5	5	5	5	5	3	4	5	10	5
11		5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	4	5	5	5	4	5	5	11	5
12		5	5	5	4	5	4	4	4	5	4	5	4	4	4	5	5	5	4	4	4	5	5	5	4	12	5
13		5	5	5	3	5	5	5	3	4	5	5	5	1	5	5	5	4	1	4	5	5	3	5	5	13	3
14		5	5	4	4	4	5	5	5	5	4	5	5	5	5	5	4	4	5	4	4	5	5	5	5	14	5
15		5	5	5	5	5	5	5	4	5	5	4	5	5	4	5	4	4	4	4	5	4	4	5	4	15	5
16		5	5	5	5	5	5	5	4	5	5	5	5	5	5	5	5	5	5	5	5	5	4	5	5	16	5
17		5	5	5	5	4	5	5	5	5	5	5	5	5	5	5	5	4	4	5	5	5	5	5	3	17	5
18		5	5	5	4	5	5	4	5	4	5	5	5	3	5	5	5	4	5	5	5	5	5	5	5	18	5
19		5	5	5	5	5	5	5	5	5	4	5	5	5	5	5	5	5	4	5	5	5	3	5	5	19	4
20		5	5	4	4	5	4	5	4	4	5	4	5	4	5	5	5	4	5	5	5	5	4	4	5	20	5
21		5	5	5	5	5	4	5	5	1	4	5	5	3	5	5	5	4	3	5	5	5	4	5	5	21	4
22		5	5	4	4	5	5	4	3	2	5	3	4	4	4	5	5	4	5	4	5	5	4	5	4	22	1
23		5	5	5	5	5	5	5	5	2	4	5	5	3	5	5	5	2	2	5	5	5	3	5	5	23	5
24		5	5	5	5	5	4	5	5	5	5	5	5	4	5	5	5	5	4	5	4	5	4	4	5	24	5
25		5	5	5	2	5	5	3	3	5	5	5	5	5	5	5	5	5	3	3	4	5	3	3	3	25	3
26		5	4	5	4	5	4	4	3	5	5	5	5	3	5	5	5	4	2	5	4	4	3	5	4	26	2
27		5	4	5	5	2	5	5	5	5	5	5	5	3	5	4	5	5	4	3	4	5	5	5	5	27	5
28		5	5	5	5	5	5	4	5	5	5	5	5	4	5	5	5	5	4	5	5	5	5	5	5	28	5
29		5	5	5	4	5	5	5	5	4	4	5	5	4	5	5	5	4	4	5	5	5	5	5	5	29	5
30		5	4		5	5	4	4	3	4	4	5	5	1	5	5	5	3	4	5	4	4	2	3	2	30	4
31																										31	
32		5	5	5	5	5	5	5	5	5	5	5	5	4	5	5	5	5	5	5	5	5	5	5	5	32	5
33		5	5	5	3	5	5	4	4	5	4	4	5	5	5	4	5	4	4	4	5	5	4	5	4	33	5
34		5	5	5	5	5	5	5	5	3	4	5	5	5	5	5	5	5	5	5	5	5	5	5	5	34	5
35		5	5	5	5	5	5	5	4	5	5	4	5	5	5	5	5	5		5	3	5	4	5	5	35	3
36		5	5	5	5	5	5	5	5	5	4	5	5	4	5	5	5	5	4	5	5	5	4	5	4	36	5
37		5	5	5	4	5	5	3	4	5	4	5	4	4	5	5	5	4	3	3	3	4	4	4	3	37	3
38		5	5	5	5	4	4	5	5	5	4	5	5	5	5	5	4	5	3	5	5	5	4	5	5	38	5
39		5	5	5	4	5	5	5	4	4	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	39	5
40		5	5	5	5	5	5	5	5	5	4	5	5	5	5	4	5	4	5	4	4	5	5	5	5	40	5
41		5	5	5	5	5	5	5	5	5	4	5	5	5	5	4	5	5	5	5	5	5	5	5	4	41	5
42		4	4	1	2	1	4	4	4	5	5	5	5	4	4	5	1	5	5	5	5	5	5	5	5	42	4
43		5	5	5	4	5	4	5	5	4	5	4	5	4	5	5	5	5	5	4	5	5	5	4	5	43	5
44		5	5	5	3	5	5	4	3	5	4	5	5	5	5	5	5	5	4	4	4	5	5	4	5	44	5
45		5	4	5	5	5	4	5	5	4	4	5	5	4	5	4	5		3	4	5	4	4	5	4	45	5
46		5	5	5	5	5	5	5	4	5	5	5	5	5	5	5	5	5	5	5	5	5	4	4	5	46	5
47		5	5	5	5	5	5	5	4	5	5	5	5	5	5	5	5	5	5	5	5	5	4	5	5	47	5
48		3	5	5	5	5	5	5	4	5	5	5	5	5	5	5	3	5	5	5	5	5	4	5	5	48	5
49		5	5	5	4	5	5	5	4	5	4	5	5	4	5	5	5	5	5	5	5	5	4	5	5	49	5
50		5	5	5	3	5	4	4	4	5	3	5	5	3	5	5	5	3	3	4	5	5	4	5	5	50	4
51		5	5	5	5	5	4	5	4	5	5	5	5	4	5	4	5	4	4	4	5	5	5	4	4	51	5
52		5	5	4	4	4	5	4	4	5	4	4	4	4	5	4	5	4	4	4	5	4	4	4	5	52	4
53		5	5	5	4	4	5	4	4	4	4	4	5	5	5	5	5	4	4	4	5	5	4	4	5	53	5
54		4	5	5	5	5	4	4	5	4	4	5	5	4	5	4	4	4	5	4	4	4	4	5	5	54	5
55		5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	4	4	5	5	4	5	5	55	5
56		5	5	5	5	5	5	5	2	5	5	5	5	2	5	5	5	5	5	2	5	5	5	5	5	56	5
57		5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	57	5
58		5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	4	5	5	5	4	5	5	58	5
59		4	5	5	5	4	5	4	5	5	4	5	5	4	5	5	5	4	4	4	5	4	5	5	5	59	5
60		5	5	5	5	5	5	5	4	5	5	4	5	4	5	5	5	5	5	5	5	5	5	4	5	60	5
61		5	5	5	5	4	5	5	5	5	5	5	5	5	5	5	4	4	5	5	5	5	5	5	3	61	5
62		5	5	5	5	5	4	5	5	5	4	5	5	5	5	5	5	5	5	5	5	5	5	5	5	62	5
63		5	5	5	4	5	5	5	5	4	5	5	5	4	5	5	5	5	4	5	5	5	3	5	5	63	5
64		5	5	5	5	5	4	5	5	5	5	5	5	5	5	5	5	5	2	5	5	5	4	5	5	64	5
65		5	4	5	4	5	4	5	4	4	5	5	4	4	5	5	5	4	4	5	5	5	4	5	4	65	4
66		5	5	5	4	5	5	5	5	5	5	5	4	5	5	5	5	5	5	5	5	5	5	5	5	66	4
67		5	5	5	4	5	5	5	4	5	4	5	5	4	5	5	5	5	4	5	5	5	4	5	5	67	4
68		5	5	5	5	5	4	5	5	5	4	5	4	5	5	5	5	5	1	5	5	5	4	5	5	68	3
69		5	5	5	5	5	5	5	5	5	5	5	5	5		5	5	5	5	5	5	5	5	5	5	69	5
70		4	5	5	5	5	5	4	4	5	4	4	5	4	4	5	4	4	4	5	5	5	4	4	5	70	3
71		5	5	5	5	5	4	4	2	5	4	5	5	4	5	5	5	5	4	5	5	5	4	4	5	71	5
72		5	4	5	5	5	4	5	5	5	5	4	5	4	5	4	5	5	5	4	5	5	5	4	5	72	5
73																										73	
74		5	4	3	5	5	2	1	5	1	3	5	3	4	5	5	4	4	5	5	5	4	5	5	3	74	5
75		5	5	5	4	5	4	4	4	5	4	5	5	3	5	5	5	4	5	4	5	4	4	4	5	75	5
76		5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	5	76	5
77	2023-07-28	3	1	4	3	5	5	1	5	4	3	3	3	3	3	2	5	2	3	4	3	4	5				3
\.


--
-- Data for Name: _questionario_tacsi; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._questionario_tacsi (id, data_criacao, questao1, questao2, questao3, questao4, questao5, questao6, questao7, questao8, questao10, questao11, questao12, questao13, questao14, questao15, questao16, questao17, questao18, questao19, questao20, questao21, questao22, atleta_id, questao23, questao24, questao25, questao26, questao27, questao28, questao29, questao30, questao31, questao32, questao33, questao34, questao35, questao36, questao9) FROM stdin;
1	2023-02-07	5	5	5	4	4	5	5	4	4	5	5	6	6	6	5	5	6	5	4	0	4	37	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
2	2023-03-23	4	3	4	5	4	4	0	4	4	4	4	5	5	5	5	4	5	5	4	4	2	2	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
3	2023-02-07	5	5	5	6	5	4	5	5	5	6	5	5	5	5	5	6	6	6	6	5	4	3	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
4	2023-02-07	5	5	5	6	5	6	6	3	3	5	5	6	6	6	6	6	6	5	4	5	4	4	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
5	2023-02-07	1	6	6	6	1	1	6	6	6	6	6	1	6	1	6	6	6	6	6	6	6	6	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1
6	2023-02-07	5	5	6	5	5	5	5	5	5	6	5	6	6	5	5	6	6	5	5	5	4	7	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
7	2023-02-07	5	5	6	6	4	4	6	6	5	4	4	4	6	5	6	5	5	5	4	6	4	8	0	0	0	0	0	0	0	0	0	0	0	0	0	0	6
8	2023-02-07	5	5	5	5	6	5	5	4	4	4	5	4	4	5	5	5	5	5	4	4	4	9	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
9	2023-02-07	5	6	4	5	5	6	5	6	5	5	5	4	6	6	5	6	5	5	6	6	6	10	0	0	0	0	0	0	0	0	0	0	0	0	0	0	6
10	2023-02-07	5	5	5	6	6	5	5	5	5	5	5	6	6	6	5	6	6	5	5	5	5	11	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
11	2023-02-07	5	4	5	5	4	5	5	4	4	5	5	6	6	6	5	6	5	5	4	6	2	12	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
12	2023-02-07	5	4	3	5	6	3	6	5	0	4	4	5	5	4	6	4	4	4	5	5	3	13	0	0	0	0	0	0	0	0	0	0	0	0	0	0	3
13	2023-02-07	5	4	5	5	4	4	4	5	4	4	5	4	6	5	4	4	5	4	5	6	4	14	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
14	2023-02-07	1	2	3	1	3	2	2	3	4	2	1	1	1	2	3	2	3	4	1	1	2	15	0	0	0	0	0	0	0	0	0	0	0	0	0	0	2
15	2023-02-07	4	5	5	6	5	4	5	5	6	5	5	6	5	6	6	6	6	5	5	5	4	16	0	0	0	0	0	0	0	0	0	0	0	0	0	0	6
16	2023-02-07	3	5	4	5	6	4	3	4	4	3	4	3	5	3	4	5	4	3	3	4	2	17	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
17	2023-02-07	5	5	5	5	5	4	4	4	4	3	4	5	6	4	5	5	5	5	4	4	3	18	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
18	2023-02-07	3	1	2	5	4	3	3	3	4	4	3	1	1	2	3	5	5	3	3	3	1	19	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
19	2023-02-07	5	5	5	5	5	4	4	4	4	5	5	5	5	4	5	5	5	6	6	6	5	20	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
20	2023-02-07	4	4	6	5	5	4	3	4	3	5	6	4	3	5	4	4	5	3	5	4	6	21	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
21	2023-02-07	4	4	0	3	4	3	5	6	6	3	4	3	4	5	6	4	4	4	5	6	4	22	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
22	2023-02-07	4	6	3	0	6	5	5	5	6	6	4	5	5	6	6	6	5	6	5	5	6	23	0	0	0	0	0	0	0	0	0	0	0	0	0	0	6
23	2023-02-07	3	4	6	4	4	6	3	0	0	5	6	6	6	1	4	3	4	5	3	3	4	19	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
24	2023-02-07	6	4	6	6	6	6	6	6	6	6	4	6	6	6	6	6	6	6	5	6	4	25	0	0	0	0	0	0	0	0	0	0	0	0	0	0	6
25	2023-02-07	5	4	5	6	5	6	5	4	5	6	6	6	5	5	4	5	4	5	3	4	4	26	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
26	2023-02-07	4	6	4	5	6	5	4	5	4	5	5	3	0	6	6	4	6	5	2	5	1	27	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
27	2023-02-07	4	5	4	5	6	4	3	3	4	4	5	5	5	4	4	5	5	4	5	5	4	28	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
28	2023-02-07	4	4	4	4	5	5	5	4	4	4	5	5	5	5	5	4	4	4	3	3	3	29	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
29	2023-02-07	5	5	2	5	3	4	5	4	4	4	2	5	4	4	3	6	5	5	4	5	3	30	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
30	2023-02-07	5	2	3	5	5	5	4	4	4	4	5	6	3	3	4	5	5	4	3	5	2	32	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
31	2023-02-07	5	3	2	5	6	5	4	5	4	4	5	4	5	4	4	3	4	6	3	6	2	33	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
32	2023-02-07	2	3	2	3	1	2	2	2	3	2	1	2	3	1	3	6	6	6	5	6	4	34	0	0	0	0	0	0	0	0	0	0	0	0	0	0	2
33	2023-02-07	4	6	5	5	4	3	5	4	5	5	4	5	6	6	5	4	5	5	5	5	6	35	0	0	0	0	0	0	0	0	0	0	0	0	0	0	6
34	2023-02-07	5	5	5	5	5	4	5	4	3	4	5	5	5	6	5	5	5	5	4	6	4	36	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
35	2023-02-07	5	5	5	4	4	5	5	4	4	5	5	6	6	6	5	5	6	5	4	0	4	37	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
36	2023-02-07	4	6	4	4	5	4	4	0	0	4	3	3	5	5	5	4	4	4	4	5	3	38	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
37	2023-02-07	4	5	4	5	5	5	5	4	4	5	5	4	4	4	4	4	4	5	5	4	5	39	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
38	2023-02-07	5	5	5	6	6	5	5	5	5	5	6	6	5	5	5	5	5	6	4	4	4	40	0	0	0	0	0	0	0	0	0	0	0	0	0	0	6
39	2023-02-07	4	5	4	5	5	5	5	5	4	4	4	5	6	5	5	6	5	4	4	4	6	41	0	0	0	0	0	0	0	0	0	0	0	0	0	0	6
40	2023-02-07	5	5	5	4	5	6	5	4	5	6	6	4	4	6	2	4	4	3	6	6	3	42	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
41	2023-02-07	4	3	5	5	5	5	5	4	4	5	6	6	5	4	5	5	5	5	5	4	4	43	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
42	2023-02-07	4	3	4	4	4	4	3	4	4	4	4	4	4	4	4	3	4	3	3	3	4	44	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
43	2023-02-07	4	5	4	4	4	3	3	3	4	5	5	4	4	5	0	5	5	4	4	5	4	45	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
44	2023-02-07	5	6	4	4	4	5	5	4	4	5	4	4	5	4	5	6	6	5	4	5	3	46	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
46	2023-02-10	3	4	3	4	6	2	4	4	0	0	5	6	4	2	4	2	4	4	2	3	1	74	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
47	2023-02-10	4	5	6	6	5	5	6	4	5	6	6	6	6	5	5	6	6	5	5	5	4	47	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
48	2023-02-10	5	4	3	4	4	4	4	4	4	4	4	6	6	5	5	5	5	5	4	5	3	48	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
49	2023-02-10	4	2	3	5	4	3	3	3	4	3	3	3	4	2	2	3	2	3	2	3	2	49	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
50	2023-02-10	4	3	4	4	4	3	4	4	4	4	4	4	5	4	4	3	5	4	4	4	3	50	0	0	0	0	0	0	0	0	0	0	0	0	0	0	3
51	2023-02-10	6	6	5	5	5	5	6	4	5	4	5	5	4	4	6	5	4	5	3	4	1	51	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
52	2023-02-10	3	3	4	4	2	3	3	2	3	4	2	3	4	5	3	3	2	2	1	3	2	75	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
53	2023-02-10	4	4	5	6	4	5	4	5	5	4	5	5	5	4	6	4	5	3	3	5	5	52	0	0	0	0	0	0	0	0	0	0	0	0	0	0	3
54	2023-02-10	4	4	4	5	4	5	3	4	5	3	3	2	5	4	3	4	4	3	3	3	3	53	0	0	0	0	0	0	0	0	0	0	0	0	0	0	6
55	2023-02-10	3	3	5	4	6	6	4	4	4	4	5	4	4	4	6	4	4	4	4	4	3	54	0	0	0	0	0	0	0	0	0	0	0	0	0	0	3
56	2023-02-10	5	4	5	5	6	5	6	5	6	4	5	6	5	4	4	5	4	5	3	6	4	55	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
57	2023-02-10	6	6	5	5	6	5	5	5	5	5	5	6	5	4	6	5	5	5	2	2	2	56	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
58	2023-02-10	6	5	6	5	5	5	6	5	5	5	5	6	6	6	6	6	6	6	6	6	4	57	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
59	2023-02-10	4	4	4	4	5	5	4	4	4	5	5	5	5	4	5	5	5	5	6	6	4	58	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
60	2023-02-10	5	4	5	4	5	5	4	4	4	4	5	5	5	4	4	5	4	4	4	5	4	59	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
61	2023-02-23	5	4	4	4	4	3	5	3	3	5	4	6	4	5	4	4	4	4	3	3	5	60	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
62	2023-02-23	5	5	3	5	5	6	4	5	3	3	6	6	4	6	6	6	6	5	6	6	4	61	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
63	2023-02-23	4	6	2	4	5	6	5	5	4	3	2	5	6	6	6	6	6	5	6	6	3	62	0	0	0	0	0	0	0	0	0	0	0	0	0	0	6
64	2023-02-23	5	6	4	6	6	4	6	5	5	3	4	6	6	5	5	5	5	6	4	4	2	63	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
65	2023-02-23	5	5	4	6	6	5	6	5	5	4	5	5	6	6	6	6	6	5	6	6	5	64	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
66	2023-02-23	5	6	4	5	5	6	5	5	2	4	3	5	4	6	5	5	5	4	5	3	5	76	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
67	2023-02-23	5	5	4	6	6	5	5	4	4	4	4	6	6	6	6	6	5	4	3	4	2	65	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
68	2023-02-23	5	4	5	4	6	5	5	4	4	5	0	6	5	4	6	6	6	6	1	1	1	66	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
69	2023-02-23	4	3	4	3	5	5	5	5	4	3	4	5	4	3	3	4	4	4	4	4	3	67	0	0	0	0	0	0	0	0	0	0	0	0	0	0	6
70	2023-02-23	4	5	5	5	6	4	4	5	5	4	5	6	6	4	5	4	4	4	4	5	2	68	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
71	2023-02-23	3	5	0	0	5	0	5	5	3	3	3	3	4	5	5	5	5	5	5	5	0	69	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
72	2023-02-23	4	5	4	4	4	4	4	5	5	4	4	6	6	5	4	5	5	5	5	5	4	70	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
73	2023-02-23	5	6	6	6	5	6	5	3	5	6	6	6	6	6	5	6	6	5	5	6	5	71	0	0	0	0	0	0	0	0	0	0	0	0	0	0	6
74	2023-02-23	5	5	5	5	5	5	5	5	5	5	5	6	6	5	5	4	5	4	4	5	5	72	0	0	0	0	0	0	0	0	0	0	0	0	0	0	5
75	2023-02-23	4	5	4	5	4	2	3	0	4	2	3	2	1	2	4	2	2	2	5	2	2	73	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
76	2023-07-28	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1		0	0	0	0	0	0	0	0	0	0	0	0	0	0	1
\.


--
-- Data for Name: _sqlite_sequence; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._sqlite_sequence (name, seq) FROM stdin;
django_migrations	69
django_admin_log	547
django_content_type	20
auth_permission	80
auth_group	0
auth_user	3
treinador	1
questionario_pais_socioeconomico	72
questionario_competencia_suporte_familiar	77
avaliacao_aspectos_intangiveis	79
avaliacao_aerobica	78
questionario_pessoal	77
questionario_soq	77
questionario_acsi	77
token_blacklist_blacklistedtoken	2963
token_blacklist_outstandingtoken	2985
atleta	87
avaliacao_potencial_esportivo	80
questionario_tacsi	76
avaliacao_antropometrica_fisicomotora	84
auth_user_user_permissions	80
\.


--
-- Data for Name: _token_blacklist_blacklistedtoken; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._token_blacklist_blacklistedtoken (blacklisted_at, token_id, id) FROM stdin;
2023-05-10	1	1
2023-05-15	13	2
2023-05-15	14	3
2023-05-15	15	4
2023-05-15	16	5
2023-05-15	17	6
2023-05-15	18	7
2023-05-15	19	8
2023-05-15	20	9
2023-05-15	21	10
2023-05-15	22	11
2023-05-15	23	12
2023-05-15	24	13
2023-05-15	25	14
2023-05-15	26	15
2023-05-15	27	16
2023-05-15	28	17
2023-05-15	29	18
2023-05-15	30	19
2023-05-15	31	20
2023-05-15	32	21
2023-05-15	33	22
2023-05-15	34	23
2023-05-15	35	24
2023-05-15	36	25
2023-05-15	37	26
2023-05-15	38	27
2023-05-15	39	28
2023-05-15	40	29
2023-05-15	41	30
2023-05-15	42	31
2023-05-15	43	32
2023-05-15	44	33
2023-05-15	45	34
2023-05-16	46	35
2023-05-16	47	36
2023-05-16	48	37
2023-05-16	49	38
2023-05-16	50	39
2023-05-16	51	40
2023-05-16	52	41
2023-05-16	53	42
2023-05-16	54	43
2023-05-16	55	44
2023-05-16	56	45
2023-05-16	57	46
2023-05-16	58	47
2023-05-16	59	48
2023-05-16	60	49
2023-05-16	61	50
2023-05-16	62	51
2023-05-16	63	52
2023-05-16	64	53
2023-05-16	65	54
2023-05-16	66	55
2023-05-16	67	56
2023-05-16	68	57
2023-05-16	69	58
2023-05-16	70	59
2023-05-16	71	60
2023-05-16	72	61
2023-05-16	73	62
2023-05-16	74	63
2023-05-16	75	64
2023-05-16	76	65
2023-05-16	77	66
2023-05-16	78	67
2023-05-16	79	68
2023-05-16	80	69
2023-05-16	81	70
2023-05-16	82	71
2023-05-16	83	72
2023-05-16	84	73
2023-05-16	85	74
2023-05-16	86	75
2023-05-16	87	76
2023-05-16	88	77
2023-05-16	89	78
2023-05-16	90	79
2023-05-16	91	80
2023-05-16	92	81
2023-05-16	93	82
2023-05-16	94	83
2023-05-16	95	84
2023-05-17	105	85
2023-05-17	106	86
2023-05-17	107	87
2023-05-24	108	88
2023-05-24	109	89
2023-05-24	110	90
2023-05-24	111	91
2023-05-24	112	92
2023-05-24	113	93
2023-05-24	114	94
2023-05-24	115	95
2023-05-24	116	96
2023-05-24	117	97
2023-05-24	118	98
2023-05-24	119	99
2023-05-24	120	100
\.


--
-- Data for Name: _token_blacklist_outstandingtoken; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._token_blacklist_outstandingtoken (token, created_at, expires_at, user_id, jti, id) FROM stdin;
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTUzMjk5NiwiaWF0IjoxNjgzNzU2OTk2LCJqdGkiOiI1YTBlNDdjZDVmMjM0OTk5YmM0MDdlYWI3NjU0NTFmMSIsInVzZXJfaWQiOjF9.P8asMNh3v-UGIIQo_C9pvrfssyzjYAU8w9KxAZ6jeFE	2023-05-10		1	5a0e47cd5f234999bc407eab765451f1	1
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTYwNDU0MCwiaWF0IjoxNjgzODI4NTQwLCJqdGkiOiI1ZGY5OGI3YjhjYTE0Y2UxYmFkNDExMmVjZGI1NTc3YSIsInVzZXJfaWQiOjF9.5GDN2vSLLUC0rZ4TmTzoPEv9n_RDcQIVNgWEebQnKHE	2023-05-11		1	5df98b7b8ca14ce1bad4112ecdb5577a	2
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTYwNDU4NSwiaWF0IjoxNjgzODI4NTg1LCJqdGkiOiJmNTVmZjcyOGNmNmY0YThkODkwZDM3ZGRjMTJlOGNiMiIsInVzZXJfaWQiOjF9.lQfPSv9HOojTCzF5CMmafypG277eBHJtqhHNTbxdzGc	2023-05-11		1	f55ff728cf6f4a8d890d37ddc12e8cb2	3
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTYwNDU5MCwiaWF0IjoxNjgzODI4NTkwLCJqdGkiOiI1MjJmNTBhZjMxZDU0NzhjYTllOWY3NjNmNGZlYzgwYyIsInVzZXJfaWQiOjF9.yQ1rX2JuwlrXoIUP34HejQbNhOrZvSBpFKJIeXXiALc	2023-05-11		1	522f50af31d5478ca9e9f763f4fec80c	4
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTYwNDYwNCwiaWF0IjoxNjgzODI4NjA0LCJqdGkiOiIwNjc3MzJlZDIwOTE0OGE0OGY5OWZmYmIwOTBjMGYxOSIsInVzZXJfaWQiOjF9.wprIJ5Kdn2VADc0GBkhDzEcfOMSKqZUwDT3gOXXEYqk	2023-05-11		1	067732ed209148a48f99ffbb090c0f19	5
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTYwNDYxOCwiaWF0IjoxNjgzODI4NjE4LCJqdGkiOiI0ZTMzNDVjMTNjMGQ0MWFjYTEyODQyOTRiMDUwMjFjMiIsInVzZXJfaWQiOjF9.Gr18_OzUZ4nd116ydXhpRPg5lozTWYgi2IUT1NjdymI	2023-05-11		1	4e3345c13c0d41aca1284294b05021c2	6
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTYwNjE3OSwiaWF0IjoxNjgzODMwMTc5LCJqdGkiOiIzOWQxNjNhZGUyMmI0YWNhYTcyZjhjNjA0Y2Q1ZmFjMCIsInVzZXJfaWQiOjF9.7xCl75Ng3eN9Zg2ouEP472w5fGk7RLWzyvz8taEyeq4	2023-05-11		1	39d163ade22b4acaa72f8c604cd5fac0	7
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTYwODc4MiwiaWF0IjoxNjgzODMyNzgyLCJqdGkiOiI1ODcwNWZhZjY0YzE0OTgwOGMwMTc0YzlkMzk1NDJlOCIsInVzZXJfaWQiOjF9.0_3sIADvPcq-rUBY31xTfeBcSz7ghQiu270PoVo7dT0	2023-05-11		1	58705faf64c149808c0174c9d39542e8	8
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk0MjgyMSwiaWF0IjoxNjg0MTY2ODIxLCJqdGkiOiI3OWNmNDM5Yjg5ZDY0MGQ5OTI5M2ZlZjdjMTlkZWE2ZCIsInVzZXJfaWQiOjF9.ijAef_CxpUcUaoigz9i1v1_oGTDQctRK1J4ZyXd3XKk	2023-05-15		1	79cf439b89d640d99293fef7c19dea6d	9
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk0NDA4NywiaWF0IjoxNjg0MTY4MDg3LCJqdGkiOiIzYTVmOGY3MWY4MzQ0MmNhYWM2YjA1MTI2ZDc4NzJjNCIsInVzZXJfaWQiOjF9.1ruA8bkXqZmfKys2EhHwUTS2IZc6zdzRFPdtdRU6MP8	2023-05-15		1	3a5f8f71f83442caac6b05126d7872c4	10
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk0NDEwNSwiaWF0IjoxNjg0MTY4MTA1LCJqdGkiOiJiYzkzNzQzOGQ2YmY0MzBjODA0ZDUzZjkwZGUwNzYwNiIsInVzZXJfaWQiOjF9.JyfaqbJjfAxre3wtKMfrkCjo2e7u1_H4qUsXUOIIk-w	2023-05-15		1	bc937438d6bf430c804d53f90de07606	11
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk1MzA2MywiaWF0IjoxNjg0MTc3MDYzLCJqdGkiOiI1Mzg5OTBiMDg3MGQ0YzhmODgyNDNmMzUxZjU2NTRhYiIsInVzZXJfaWQiOjF9.WDl2MCkFOZfGHPY4Msw3kph_yt8mzJuhZ9STe3Tb8T8	2023-05-15		1	538990b0870d4c8f88243f351f5654ab	12
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2MTAyMSwiaWF0IjoxNjg0MTg1MDIxLCJqdGkiOiI2NmEzMmUzY2VjM2M0YzE3Yjk1NDVlODBlNGZjZGQ3YyIsInVzZXJfaWQiOjF9.m7qxd5nZ4PJlcS5M2DXkjEN-ksrKdpJikejwLwujLi8	2023-05-15		1	66a32e3cec3c4c17b9545e80e4fcdd7c	13
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2MzU0OSwiaWF0IjoxNjg0MTg3NTQ5LCJqdGkiOiIzNGJiMjEzZGYxNTY0YmUwOWU0ZGI0NzQ1YjQyZWY5NCIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.b2sQDbflz8V7CKwLg8jB57RForM5QxpAzNwzyomY_6I				34bb213df1564be09e4db4745b42ef94	14
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2MzU0OSwiaWF0IjoxNjg0MTg3NTQ5LCJqdGkiOiI4ZGRhNGMzMzY5ZWY0ZjIyYTU0ZWRkOTQ0NjFlNGI2ZSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.YCkDY7vfbg8cJwI48Vln-soUzNT37wp2LMoxaMXdZgU				8dda4c3369ef4f22a54edd94461e4b6e	15
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2Mzc5MCwiaWF0IjoxNjg0MTg3NzkwLCJqdGkiOiJkOGE4YjI0NDRiMWI0MDA0OTYyZmVhZTUzOTJkMmI1ZiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.RT75PAAWFIDN2KxJEppySscskIg7U8TY_OWTL5xjzOw				d8a8b2444b1b4004962feae5392d2b5f	16
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NDAzMCwiaWF0IjoxNjg0MTg4MDMwLCJqdGkiOiI1YWQzM2RmZTViYjA0ZTI5OWE1MmVhOGM1NDNiYThkYiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.4eEssFf4eX0Decaz5-KvJctFZoVn4SuwSLQsbrrL2yM				5ad33dfe5bb04e299a52ea8c543ba8db	17
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NDA4OSwiaWF0IjoxNjg0MTg4MDg5LCJqdGkiOiI3OGU4NWYwMzY4YmM0ZjRmYjFjYjY0YjFkZjc5YzVmMyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.-tyZF1ZgFLYSngvtoHzkl3MnekBCZcHz7OGGTb6FzOM				78e85f0368bc4f4fb1cb64b1df79c5f3	18
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NDA5MCwiaWF0IjoxNjg0MTg4MDkwLCJqdGkiOiJjMWQ2YjZiNTMzMTQ0NWVlYTBiNTk4MTVjZTgwOTQ1YSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.EFGBxjHy0tVVxi3nmPH2P2k5oiOdh9VA8CS83a41bYY				c1d6b6b5331445eea0b59815ce80945a	19
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NDMzMCwiaWF0IjoxNjg0MTg4MzMwLCJqdGkiOiJiZTlhNjY1ZjZmYTg0ZGQ2OTE4MTlkY2NkOWM0YjllYSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.h9nJw2-D4CrQVAgwuLQ4y4hGP4gHCgVzQvTZTwLpc8A				be9a665f6fa84dd691819dccd9c4b9ea	20
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NDU3MCwiaWF0IjoxNjg0MTg4NTcwLCJqdGkiOiIzZDE4ZjFhOTY2MTM0MDYxYmE1Nzc2NGI0YTI3ZmM0OSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.8zyb3lvwxooknDRSgTcAbOPb6uCRbp9aMkFsmtAgCps				3d18f1a966134061ba57764b4a27fc49	21
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NDgxMCwiaWF0IjoxNjg0MTg4ODEwLCJqdGkiOiIzMzU2Y2YwMWQ3YzY0ZTlkOTJmZGFkNjUzZDk1MDcwMCIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.1gz-eCW_4aSvFUz6BKDtWsoFlWjWaw77JDNDSDJ9e8U				3356cf01d7c64e9d92fdad653d950700	22
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NTA1MCwiaWF0IjoxNjg0MTg5MDUwLCJqdGkiOiJhMTE3ZDdjM2Y3ZjU0ZmZlODM0NDkwZGUxMzRmYjMxZiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.VBRggeQqKE7XLeBCOynLRV9CUdBSJEJWy3pTAS2y6sM				a117d7c3f7f54ffe834490de134fb31f	23
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NTI5MCwiaWF0IjoxNjg0MTg5MjkwLCJqdGkiOiJlNzhlYzU4YWIyMmY0NjBjYjY2YjQ3ZTZhNDczM2UxYyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.mqlp4k-0USjkCBkJOs4pAo9_oA2ZUs6rOkvIF-jPk6A				e78ec58ab22f460cb66b47e6a4733e1c	24
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NTUzMCwiaWF0IjoxNjg0MTg5NTMwLCJqdGkiOiJlNTk5MGQ3OGY4ZWU0MDZhYjVjOTg3YWFjYzIwYzI1NyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.6NKEGd3swxPmvvSHPf0YFrQAH_JQp3uJ2fT4IF4fufI				e5990d78f8ee406ab5c987aacc20c257	25
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NTc3MCwiaWF0IjoxNjg0MTg5NzcwLCJqdGkiOiI4ZGVlMmE2YmQ4NzI0YWM0YmU3MWRmOGM1ZmJkMzM1MyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.COltF9CDLGuupTPYX7wxlbjox2JZwPcVNKVeX4ilTuc				8dee2a6bd8724ac4be71df8c5fbd3353	26
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NjAxMSwiaWF0IjoxNjg0MTkwMDExLCJqdGkiOiJkYWIyMmU0OGJlZmU0NjFmODI5NGJiNTFhNTQyMzRiMSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.huE4Zo2kfZz5i3k7nFjDKepY9Tpds9jJ437nhjlPMEw				dab22e48befe461f8294bb51a54234b1	27
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NjI1MSwiaWF0IjoxNjg0MTkwMjUxLCJqdGkiOiIwYTg0NWYzZDY0MDk0ODU0OTQ1NzY3YWM4ZTkxOWZmYyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.4NE5m4FW-IYVwq7RL7JhLksGeD0tciXAVeaDFCEtb5U				0a845f3d64094854945767ac8e919ffc	28
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NjQ5MSwiaWF0IjoxNjg0MTkwNDkxLCJqdGkiOiI5Zjg2NGRlOWZjYmE0ZTRkOTg2YjUyYzA4NDU4OTA5ZCIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.JI4xE9_Lm0eRrwMtqMCO6esQ8GmORwwrM8KBsWA9Ipg				9f864de9fcba4e4d986b52c08458909d	29
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NjczMSwiaWF0IjoxNjg0MTkwNzMxLCJqdGkiOiJmNDQzYjkwNTA2MTE0MzMyOTA4ZjY2ZmJlNWFkNDY2ZiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.Iuh8F8OO6R70Eaq2ULUebDdP38Tff1O-JU9r-SWh34E				f443b90506114332908f66fbe5ad466f	30
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2Njk3MiwiaWF0IjoxNjg0MTkwOTcyLCJqdGkiOiI3ZDIwZTU3NDdhMTc0ODk0OTFiMjRhZjVlY2E2N2M0NiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.9bnJokiZ9jwwvAaN_CLp71UiNptuTRH3jV-BE3jdAUI				7d20e5747a17489491b24af5eca67c46	31
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NzIxMiwiaWF0IjoxNjg0MTkxMjEyLCJqdGkiOiI1N2Y1NDljNmZkZWU0OTNkYTRmZjBmZjExNTc4ODRjOSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.DDANYb5W4kuFasPJEeBgQcSxpJaqLSW2Qp7NZip2fck				57f549c6fdee493da4ff0ff1157884c9	32
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NzQ1MiwiaWF0IjoxNjg0MTkxNDUyLCJqdGkiOiIyNmRiMWZjZjRlOTY0OGZjOTFkNmY0NmQ0Y2M3ZWJiOSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.OfD3eBEvO1eA34JAbe-LAavXGYwu5vOWDAx9774ZY1Y				26db1fcf4e9648fc91d6f46d4cc7ebb9	33
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NzY5MiwiaWF0IjoxNjg0MTkxNjkyLCJqdGkiOiJiZGI3NDhjNTg2MTg0ZmY0YWVlZmNiOWJhMGMxYWI1MyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.R2LFyJBUCH6ha4RZYxXfQuiayfBPrT22d_F7T0vk2pk				bdb748c586184ff4aeefcb9ba0c1ab53	34
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2NzkzMywiaWF0IjoxNjg0MTkxOTMzLCJqdGkiOiJiNjA1OTE3ZWJmYjk0ZjU0OTZhZjg3YWJiYWUwYTYxOSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.iQ7DbdFAkG7uJj-kscBvlQlJqJlo-F7deN_ZUxsY4mA				b605917ebfb94f5496af87abbae0a619	35
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2ODE3MywiaWF0IjoxNjg0MTkyMTczLCJqdGkiOiI0NzQ3YjJiZmY1NDU0NDU0YjhjNzAwMDc5NmIwYWZlMiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.rnea5bDfbw95GDyBgahcVECsBkNdtuqcI7uLuSoeTFI				4747b2bff5454454b8c7000796b0afe2	36
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2ODQxMywiaWF0IjoxNjg0MTkyNDEzLCJqdGkiOiI3ZWI3MDliOWI5M2Y0Njc3ODhmODY3NDIwNmViZWMwNiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ._aVYMSccCWTAeGnzl0XDAy0DHKo3AaEGqcY7OUaXuVE				7eb709b9b93f467788f8674206ebec06	37
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2ODY1MywiaWF0IjoxNjg0MTkyNjUzLCJqdGkiOiI3N2Q0YjVkYzg0Y2M0NzRhODIyMmNjY2QwNmQ2MjEwNCIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.6QRJtYMZ_qG1LXGCFZqHRRI_odJn6U6mZnVYKvSFhR4				77d4b5dc84cc474a8222cccd06d62104	38
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2ODg5MywiaWF0IjoxNjg0MTkyODkzLCJqdGkiOiJlODBlNjJmMGQ3NjM0ZTAyODI2MTRiNzZhNTRlNzUxZCIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.6i_-w59BbeEndFhlEne0lhHIw10wz6AzdRUWV6WNbNE				e80e62f0d7634e0282614b76a54e751d	39
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2OTEzMywiaWF0IjoxNjg0MTkzMTMzLCJqdGkiOiJlN2RkOTlmODdiMmE0ZDBiOWMzZGUzNmQ3MzBmMTQ3ZCIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.FZR7KBeovDQeEMKkFTJPiVFLMBnNLoAE-Kd17tsnopo				e7dd99f87b2a4d0b9c3de36d730f147d	40
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2OTM3MywiaWF0IjoxNjg0MTkzMzczLCJqdGkiOiI2YWMwMTZlZTU3OWE0MzBhYjdlN2JkYTI3NmE4YzIzMCIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.Ce9IvlrZvKO95JfKifkV3lrKjHXz41cRKFWVEQ4gOlg				6ac016ee579a430ab7e7bda276a8c230	41
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2OTYxNCwiaWF0IjoxNjg0MTkzNjE0LCJqdGkiOiI0ZjFhOGFiYjUzZGI0ZjY1Yjk3YjIyZjA3NTVjNGE4NSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.uW0cKBz2c6Lo_YzFmu9v_2mtqBkibIADsQcIzgA-Srg				4f1a8abb53db4f65b97b22f0755c4a85	42
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk2OTg1NCwiaWF0IjoxNjg0MTkzODU0LCJqdGkiOiI1MzVkZmRmMTM2NDc0NGI3YmM2NGNkMTAxNTUxYTBjOSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.EFKMvBsmf-5ZMT-v9nKlMkCk_HLXFuyMF9aRp8AB7ZE				535dfdf1364744b7bc64cd101551a0c9	43
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MDA5NCwiaWF0IjoxNjg0MTk0MDk0LCJqdGkiOiIzMzdlNDUzNmY0ZDU0YjQ2OTlkMjcwNjQ5YTg1YTk0YyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.R6Gtn_7nCZEqDLC2aASJcMD3yI2_ZTViVevfoJtPD5U				337e4536f4d54b4699d270649a85a94c	44
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MDMzNCwiaWF0IjoxNjg0MTk0MzM0LCJqdGkiOiI2ZGM1YjIzMTQwYmU0ZDg1OThkNmE3NTI2MzI1Njc2NyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.uq90bRIx1SCMDH0fuzfF19XAMi_3yxPWCJZ2AQKHGZs				6dc5b23140be4d8598d6a75263256767	45
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MDU3NCwiaWF0IjoxNjg0MTk0NTc0LCJqdGkiOiJlNDA2ZjExYTFjNzQ0MTRmODg2Zjg0NDdiMWZiMmYzNSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.klGzHSBn0z--7YzFF-bXAuE02HCEjidZ3aGqTgGGAqE				e406f11a1c74414f886f8447b1fb2f35	46
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MDgxNCwiaWF0IjoxNjg0MTk0ODE0LCJqdGkiOiIzMzU3ODQzNzRiNmI0MjcyYmJmM2VkNDczN2Q3ZTc1MiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.lqvUu4e_HuKNnybfcmEzcI0QXclsGynzdqgqzYhiVvk				335784374b6b4272bbf3ed4737d7e752	47
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MTA1NCwiaWF0IjoxNjg0MTk1MDU0LCJqdGkiOiIxMDljMDA1ZjY1ZGU0MjFlOGUxOTI1N2I2Mzg3MTg3NyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.idkijiXZAeupaWle4scuB9K9ATVG7_IHWXazvwToPhs				109c005f65de421e8e19257b63871877	48
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MTI5NCwiaWF0IjoxNjg0MTk1Mjk0LCJqdGkiOiI2N2QzYmYzMWEyMTU0NGRmYmMzMTZiMDg2YjJjN2VhNyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.NpZEh_HPjh1sGJyEl_9k4zpETHElGDNLTSn5rKNGMzo				67d3bf31a21544dfbc316b086b2c7ea7	49
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MTUzNCwiaWF0IjoxNjg0MTk1NTM0LCJqdGkiOiI5MzNiMWM5ZjliNGY0ZTYwYjBlZjg4ZjcxYjRjNWEyMSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.7u4s1alA_Tvs64Iujt0yWWqAMqzXXAtIvza4VE1bTbU				933b1c9f9b4f4e60b0ef88f71b4c5a21	50
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MTc3NCwiaWF0IjoxNjg0MTk1Nzc0LCJqdGkiOiI0YTkyYjlkOTc0N2E0MDY2YTRjMWM5ZTgxNTQwMDg5ZSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.VpEY9cMREJK7BrbpvNW54EbYOcJN1bzcstZVpwgXtcc				4a92b9d9747a4066a4c1c9e81540089e	51
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MjAxNCwiaWF0IjoxNjg0MTk2MDE0LCJqdGkiOiJmODQzMWYyZjk0NGQ0NTYwYjk4Yjk1MmQyZGJjYTBkMiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.783WYOpaAS1tsLQJPjFDEjiN9MwG3Z5uCmItRp7NoqE				f8431f2f944d4560b98b952d2dbca0d2	52
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MjI1NCwiaWF0IjoxNjg0MTk2MjU0LCJqdGkiOiI2YjVlYTIwZDQ5NjU0YzdjYTUwYzk2ZjVkZjg0Yzk3NiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.0dPj6VjJYhOR3La9r2dQdo7Ww-rh_VDXalK4fCvEu5Q				6b5ea20d49654c7ca50c96f5df84c976	53
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MjQ5NCwiaWF0IjoxNjg0MTk2NDk0LCJqdGkiOiIzZDcwMGUzMjM2NDU0ZGMwYTNiNmNhMDIzMmQzMmY2YSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.VJmcYepm-c_blrDoWoTy6QwywS07BeLldpX5l4BChEM				3d700e3236454dc0a3b6ca0232d32f6a	54
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MjczNCwiaWF0IjoxNjg0MTk2NzM0LCJqdGkiOiI4ODU1YWIzZDI1OGM0ZmJhOTAxYjc1NWY3MmRkMGIzMyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.hHm3BKQlLQoLaW4_OWq4oCkBcuyfVI62J8hqZvLI25c				8855ab3d258c4fba901b755f72dd0b33	55
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3Mjk3NSwiaWF0IjoxNjg0MTk2OTc1LCJqdGkiOiJjZGVhYThkNTliY2E0YWE0Yjc0MGFmNjM0NjIyMWQ0NyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.QiWBSZ2zS9gOYTgnjEH8fej62hXRapq498Wtaw3DLZo				cdeaa8d59bca4aa4b740af6346221d47	56
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MzIxNSwiaWF0IjoxNjg0MTk3MjE1LCJqdGkiOiJiZDhmZmFmZWYyMjc0MGVhYjk1MDFmYTY4OTFhNTIwNyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.lelJyBPPhJtbDdPY5Q_ql-74UsOYR0LhmwoVa1gfzUs				bd8ffafef22740eab9501fa6891a5207	57
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MzQ1NSwiaWF0IjoxNjg0MTk3NDU1LCJqdGkiOiIyZmZlNTM4N2VlOWI0NzcwYmZjNDRkYzExNTUyZTdiMyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.bs5-Cb39Wfymi7bTRvOcqbj6kMuQlMyWLIh-jLDFBtI				2ffe5387ee9b4770bfc44dc11552e7b3	58
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MzY5NSwiaWF0IjoxNjg0MTk3Njk1LCJqdGkiOiI1NTlmYmNlMThlOTU0ZjY1OTQ4YWQzOWYwMjkyMzM5MiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.tSNQfLzuVxOIBMVFux1-M1ier1CMdPLLNhMlcp9kJs0				559fbce18e954f65948ad39f02923392	59
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3MzkzNSwiaWF0IjoxNjg0MTk3OTM1LCJqdGkiOiI1ZDA3NzY0NTViOWY0NThhOTYyYTAyYmU2ZjQxZGQzYyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.YMSCKbTMxxOuvPzW2HUBdCTAHFYMkFJVCvXKMFq6V1U				5d0776455b9f458a962a02be6f41dd3c	60
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NDE3NSwiaWF0IjoxNjg0MTk4MTc1LCJqdGkiOiI0NDlhZDc1N2EwNDQ0NzdjYWUxMzE1NDk2ZTcwYjA3MyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.c98kXM46UreCjXYJ1Z8OudZLQY3xrvkwKnOoQr-1W7I				449ad757a044477cae1315496e70b073	61
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NDQxNSwiaWF0IjoxNjg0MTk4NDE1LCJqdGkiOiJkYmY5NWVmNzRmNDU0YTJiODc5MGY4ZjhhY2E5MDQyMSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.M2Bije1S3EKnv__GQC7DCHyYEH9LHsMfLUNtiAvAwko				dbf95ef74f454a2b8790f8f8aca90421	62
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NDY1NSwiaWF0IjoxNjg0MTk4NjU1LCJqdGkiOiIyNDBiZGYxNDg5MzM0OWJmODg2NTVjOTQxNjI2NWFiMSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.gw5PWA1F-gSNYa4O4JZRHLcDjxtcjeQvq44sTS8D8Jw				240bdf14893349bf88655c9416265ab1	63
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NDg5NSwiaWF0IjoxNjg0MTk4ODk1LCJqdGkiOiI1YmNjMDY3Yzg5MDY0YjYyYWEyNWE5YjhhZjIxNDNmNyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.IP4myvJiqwOfaSVAp4MrKy-C7ooPrd-zS8dRPGcfz0I				5bcc067c89064b62aa25a9b8af2143f7	64
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTEzNSwiaWF0IjoxNjg0MTk5MTM1LCJqdGkiOiI0ZWZmZDY3N2UwNGU0Y2Y1OWIzN2I0NzY2MTY1NjVkMCIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.DpbQwanLLXSKTLEZR40KFGJkcT2KgPWoPEMfsD8frPk				4effd677e04e4cf59b37b476616565d0	65
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTM3NSwiaWF0IjoxNjg0MTk5Mzc1LCJqdGkiOiI4YjJkMzU1NDg1YWQ0ZTkyOTYxNjA2ZmYzMjcyOTRlOSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.J7icv8s7THHS737xYRTo6SmmEW1F160yiKAhcO1Vz-4				8b2d355485ad4e92961606ff327294e9	66
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTYxNSwiaWF0IjoxNjg0MTk5NjE1LCJqdGkiOiJiMjM3MjQ5Njc4OGY0NTMxOTQyNDM1MTk1YTIxNTI2NCIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.jyetjPeYXMIyDw_0zZuWfuNzEifsPpsTl0nlNLeRh4Y				b2372496788f4531942435195a215264	67
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTg1NSwiaWF0IjoxNjg0MTk5ODU1LCJqdGkiOiJkMTRjZDFhZDcxZTk0YjE4YTgxZmZkOWE3NjUxMzEyYyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.lCNDdCLgK8VTEOdfstAzpOFpQF_-wJLd90Tdh7o4e9o				d14cd1ad71e94b18a81ffd9a7651312c	68
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTg3NCwiaWF0IjoxNjg0MTk5ODc0LCJqdGkiOiJmMDllYzA3NWI0YjY0NTQ3OGNkNTFlODQxZGI5YjY4NiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.YKJvLN1MUZXiNyWGc9WodmJ7Iogn9-Jvg_KsXB2O3tk				f09ec075b4b645478cd51e841db9b686	69
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTg3NCwiaWF0IjoxNjg0MTk5ODc0LCJqdGkiOiJhMDc5MzkwMjMzZDI0NTY1YjJhYzFmYTY2NTdlMjkwNyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.WNoXb5LFDVpgfP4P3Wlo3PpdErNSdpLIGRfkxYSMBGQ				a079390233d24565b2ac1fa6657e2907	70
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTg4MCwiaWF0IjoxNjg0MTk5ODgwLCJqdGkiOiJlY2JiYTVhZDQ5Njc0Y2RmODhmMTdkYWEzYTExMjIxNyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.MTQuDwneehA7QtDGR0jbcDsM2u2p35wmkDj9nHL2kE4				ecbba5ad49674cdf88f17daa3a112217	71
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTg4MCwiaWF0IjoxNjg0MTk5ODgwLCJqdGkiOiI5MzVmYjQ4MmM1OTg0ZGFjODI3MWRlNjc3Y2JlMjY0YiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.zmp3xGSSY8P3aR5OEVUKxpDpOhOUd9-Bc3qUZdXtJRs				935fb482c5984dac8271de677cbe264b	72
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTg4NCwiaWF0IjoxNjg0MTk5ODg0LCJqdGkiOiIzYTU1ODdhZGUxYzE0N2I1ODJlMjZhZDZhNGFjOTM3YiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.z1xVbbaU3N1bxc4fm3FSHq66Q2b3i7BEm3k6ztsVKXI				3a5587ade1c147b582e26ad6a4ac937b	73
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTg4NCwiaWF0IjoxNjg0MTk5ODg0LCJqdGkiOiJjNGJkZmMwZmQxNzY0YmY1OTVmODExYTU1OWI2NTM3ZSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.NvWD_Uilf-fB0KrXs15n9N9MZ41Rwx6OMLj9woMZC6U				c4bdfc0fd1764bf595f811a559b6537e	74
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTg5NCwiaWF0IjoxNjg0MTk5ODk0LCJqdGkiOiIzMTg1NzU3ODg3ZjI0N2JlOGM4NzczZTEyODkwNmEyZiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.oFf_9_bHRRrxUsVobG5OCNcjrExH8wMr6sQih8IQBFk				3185757887f247be8c8773e128906a2f	75
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTg5NSwiaWF0IjoxNjg0MTk5ODk1LCJqdGkiOiIyYjU5OWNkY2NlOTI0N2U1ODcxMjdmMjU0OGJkZGVkZSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.Hqp4jXCOGeg7xQQ3k_WqRcOfuAM-LD92I5J-VK7Wc7c				2b599cdcce9247e587127f2548bddede	76
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTg5OCwiaWF0IjoxNjg0MTk5ODk4LCJqdGkiOiJjMDhmZThjOTlmNDg0ODllYjZlYmZjM2RjN2U0ZmNkNyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.eTasn_hN_KFc_8vvZb4iK4BdJ6j-Phnp0UUgE2En6Ro				c08fe8c99f48489eb6ebfc3dc7e4fcd7	77
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTg5OCwiaWF0IjoxNjg0MTk5ODk4LCJqdGkiOiIwYTI1MzBiZjVhYWY0NDU5ODRlY2I5MWM3YTA2ZDRkYiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.dzjUvV10izN_PQ6hIktHq_UEi7nZsQbN5q_cMAicsiU				0a2530bf5aaf445984ecb91c7a06d4db	78
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTkxNCwiaWF0IjoxNjg0MTk5OTE0LCJqdGkiOiI5YTlmOGQ1YjE2OGM0NWE1OWQ4NWExZmI1Nzk3NjdhZCIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.VaLbsJowxvrO_4ZvAxrJ6UI8K8aCaNu1rkeFQMjGlCc				9a9f8d5b168c45a59d85a1fb579767ad	79
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTkxNCwiaWF0IjoxNjg0MTk5OTE0LCJqdGkiOiI5MGVmNTRhMjNjMjI0ZWI5YjI4MmI3ZTE5Mjc1YTg0MSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.f1HISaR_hKr-E2SLOtbRvETieCuA-VX-wf1R4QILdgs				90ef54a23c224eb9b282b7e19275a841	80
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTk3NCwiaWF0IjoxNjg0MTk5OTc0LCJqdGkiOiI0ZTE0ZTY1Yjc4Y2M0NDNhYWM2YzM2YWU1ZDNkNDQ2YiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.LZ_mt1OHRFGbVjyXq-15vXaObr6xusD0yJiHxVwIOgI				4e14e65b78cc443aac6c36ae5d3d446b	81
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NTk3NSwiaWF0IjoxNjg0MTk5OTc1LCJqdGkiOiIzMWRkZTE5MmU2ZWY0YzRlODA0NWVhYjMzNmEzNGNiMyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.ZHXA2woIdvfZIFVDMuAjbWs8EUVuL2kM9fbs9Y_wszU				31dde192e6ef4c4e8045eab336a34cb3	82
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NjA4MCwiaWF0IjoxNjg0MjAwMDgwLCJqdGkiOiJlNmNhNGI1NDMzNzU0OTBiYWYzYjFmN2I4ZGRmZjQ4ZSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.qmFVIlQ05pFaMLWtZujVManhGmkKHkuuAYxCrxcne7s				e6ca4b543375490baf3b1f7b8ddff48e	83
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NjA4MCwiaWF0IjoxNjg0MjAwMDgwLCJqdGkiOiI2Y2I4ZDU4ZjgwNTQ0MmFjODViOWY4MzQ1OTk4M2Q0MSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.Ztxp7NiSa4Nhn-5nHWCOhdCjSzdzAFypHwnW-9oWm88				6cb8d58f805442ac85b9f83459983d41	84
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NjI0MiwiaWF0IjoxNjg0MjAwMjQyLCJqdGkiOiJhMmJmMzY4Njk1ODI0ZTE3OTEzMjA4MzJkY2JhNjkxYiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.w8yUIbi8krbspBsnmhuKl4wdb3S9VKSoPVDcn7RH90c				a2bf368695824e1791320832dcba691b	85
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NjI0MywiaWF0IjoxNjg0MjAwMjQzLCJqdGkiOiIxYjQwNWNjZDg5MmM0NjBhOWFkOTllYjNiMmMwOGE4ZiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.1KY7SlRy_XYs10ajrDplH8swQMhBdEkZAoHNPZJIMiM				1b405ccd892c460a9ad99eb3b2c08a8f	86
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NjM1MywiaWF0IjoxNjg0MjAwMzUzLCJqdGkiOiJjZDBjNjkxNTBiNDc0ZDdlYjc3NGE5NjAyNDU2YzU4NiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.eWCsMCqMh_Cbl4YecwIUzvldZwfUYvsJb0IpAOANrvA				cd0c69150b474d7eb774a9602456c586	87
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NjM1MywiaWF0IjoxNjg0MjAwMzUzLCJqdGkiOiJjMzljZjNkYzVkN2Q0ZjhlYTFkNGJlOTVkNmY4ZDc4NyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.yqhZkfpet-b5LSIc1kRRx7L8so1bWTrsiV9wQLInTCo				c39cf3dc5d7d4f8ea1d4be95d6f8d787	88
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NjM1NywiaWF0IjoxNjg0MjAwMzU3LCJqdGkiOiJhYTNmNTE3Mjk3MGI0YjNkOTk1ZjQ0NWUzZjMyMjIxNiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.Um1bDo7Rpf4CPvGA4S6EM1uIt9rUmTs1J4VJjqBf3CY				aa3f5172970b4b3d995f445e3f322216	89
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NjM1NywiaWF0IjoxNjg0MjAwMzU3LCJqdGkiOiI3ZjQxMDBhZjU1M2U0OGZmOTFiMTdlZWZiZDA0MmQ0YyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.AFc_sWKYDir2meQ3iCpUC9o3vV9uKYhQj7zSi3qlNDM				7f4100af553e48ff91b17eefbd042d4c	90
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NjQyMSwiaWF0IjoxNjg0MjAwNDIxLCJqdGkiOiJkZjg2OWJiNWI3NDk0MGNmOWQ0MDY4NzQ2NTQ2NmFmOSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.EX6qFtUYejYj2eixuvcYsZ9Pa9C6ZSGmfGJ7e0pO014				df869bb5b74940cf9d40687465466af9	91
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NjQyMSwiaWF0IjoxNjg0MjAwNDIxLCJqdGkiOiJmOTZjYjE1NTYzMDU0YjE5ODhhMDYwOTIxZTQ5NWY3NiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.r_A_4XaBjASZLydbPQHNpjwONEnmle6Mv4Qv9APMxiw				f96cb15563054b1988a060921e495f76	92
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NjY2MSwiaWF0IjoxNjg0MjAwNjYxLCJqdGkiOiJiOWVjOTJhYTFiNGE0MGRiOWE5NGUxOGU4MGIwY2Y0NyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.xItlgP4A8d5RKgf0_1uwKuMLQlCAnUKzGgo3b66vHTM				b9ec92aa1b4a40db9a94e18e80b0cf47	93
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NjkwMSwiaWF0IjoxNjg0MjAwOTAxLCJqdGkiOiI0MjA4ZGYxMTY2NmM0YzVjOGRiNGRkMGFlMjYyODI1YyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.eDDHOVfy7c3mb_TtZY8uz9Zv0pPw4Rh5cZeoHeJ-cRY				4208df11666c4c5c8db4dd0ae262825c	94
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTk3NzExNywiaWF0IjoxNjg0MjAxMTE3LCJqdGkiOiJhMTNkNWNjMmM0MGI0OTczYWU2MWQ1MDliNmZhNmMzYSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoianVsaWEifQ.r5WY6j8o4Ao0Vy4nYUT7xjZxuAhN523U2CSvuBMnTko				a13d5cc2c40b4973ae61d509b6fa6c3a	95
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MjA0OTY4NywiaWF0IjoxNjg0MjczNjg3LCJqdGkiOiI1MTc1MDk5MmNjNGQ0N2I2YWYxOTJkOTIwNmE3Y2FhNSIsInVzZXJfaWQiOjF9.jjYhv1moOZeN1l8JNYTV3Qxl-opMWXzrFvSHjC90lsQ	2023-05-16		1	51750992cc4d47b6af192d9206a7caa5	96
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MjA1MDAyNSwiaWF0IjoxNjg0Mjc0MDI1LCJqdGkiOiJhZDZmZjdjNDY1YmM0ZGFjOGVjZjkzOTU2YzEwN2M1MyIsInVzZXJfaWQiOjF9.5qEAGszKRWFfdue0qN_hV9soNlG7PDnCWnURg3xmOmw	2023-05-16		1	ad6ff7c465bc4dac8ecf93956c107c53	97
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MjA1MDAyNSwiaWF0IjoxNjg0Mjc0MDI1LCJqdGkiOiI4NDliYmZiYjY4YmU0ZTFiOGFkNGQ2ZTE5NWEwMDk5MSIsInVzZXJfaWQiOjF9.VjbunyCPjj7CKohGlvJqOjvZv5hFtdSJXkn5xzRg7lQ	2023-05-16		1	849bbfbb68be4e1b8ad4d6e195a00991	98
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MjA1MDAyNSwiaWF0IjoxNjg0Mjc0MDI1LCJqdGkiOiI3YTViOGNjYTdmMjI0YjEzYTU1MjI1ODczZjA5ZGEzMiIsInVzZXJfaWQiOjF9.vop-zEaj4QEFoIH-UiTicHVEdbaiN5Q66ODrZMUp9sw	2023-05-16		1	7a5b8cca7f224b13a55225873f09da32	99
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MjA1MDA0MywiaWF0IjoxNjg0Mjc0MDQzLCJqdGkiOiI1N2ZiZDlkNTJjMTQ0NmZkOGFhMDljOTRmZTNhMWU3NyIsInVzZXJfaWQiOjF9.mF7GwKi4p68Ou6wEsUkBRDQ2lGy_NmYQajeq2RomPc4	2023-05-16		1	57fbd9d52c1446fd8aa09c94fe3a1e77	100
\.


--
-- Data for Name: _treinador; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._treinador (id, data_criacao, nome_completo, email, data_nascimento, sexo, instituicao_clube, pais, estado, cidade, senha) FROM stdin;
1	2023-03-23	Julia Eduarda Miranda de Sousa	juliaeduardasousa@gmail.com		2	GoldFit/UFOP	Brasil	Minas Gerais	Ouro Preto	123
\.


--
-- PostgreSQL database dump complete
--


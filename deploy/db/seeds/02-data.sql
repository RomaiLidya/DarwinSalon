--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3 (Debian 11.3-1.pgdg90+1)
-- Dumped by pg_dump version 11.3 (Debian 11.3-1.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: User; Type: TABLE DATA; Schema: darwinSalon; Owner: sdarwinSalon
--

INSERT INTO darwinSalon."User" (id, "loginName", password, "displayName", email, active, "createdAt", "updatedAt") VALUES (1, 'admin@huijie.com', 'Barbara1234', 'Admin', 'admin@huijie.com', true, '2019-11-04 18:46:56.029+08', '2019-11-04 18:46:57.222+08');


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: darwinSalon; Owner: darwinSalon
--

SELECT pg_catalog.setval('darwinSalon."User_id_seq"', 1, true);

--
-- Data for Name: Payroll; Type: TABLE DATA; Schema: darwinSalon; Owner: darwinSalon
--

INSERT INTO darwinSalon."Payroll" VALUES (1, '1998-09-09', '1998-09-12', 50, 150, 20, 3200, NULL);
INSERT INTO darwinSalon."Payroll" VALUES (2, '1988-19-09', '1998-29-12', 100, 50, 30, 4200, NULL);


--
-- Name: Payroll_id_seq; Type: SEQUENCE SET; Schema: darwinSalon; Owner: darwinSalon
--

SELECT pg_catalog.setval('darwinSalon."Payroll_id_seq"', 7, true);

--
-- Data for Name: Employee; Type: TABLE DATA; Schema: darwinSalon; Owner: darwinSalon
--

INSERT INTO darwinSalon."Employee" VALUES (1, 'Jane Doe','1992-09-13', 'Tenayan Road','6573534', 'John Doe', '65373826', 3000,'2019-11-05 17:12:27+08', '2019-11-05 17:12:30+08', 1);
INSERT INTO darwinSalon."Employee" VALUES (2, ' Maria','1982-03-23', 'KutaiKarta Road','6574345', 'Maria Carey', '65373896',2300, '2019-11-05 17:12:27+08', '2019-11-05 17:12:30+08', 2);

--
-- Name: Employee_id_seq; Type: SEQUENCE SET; Schema: darwinSalon; Owner: darwinSalon
--

SELECT pg_catalog.setval('darwinSalon."Employee_id_seq"', 10, true);

--
-- Data for Name: Commission; Type: TABLE DATA; Schema: darwinSalon; Owner: darwinSalon
--

INSERT INTO darwinSalon."Commission" VALUES (1, 50, '2019-11-05 17:20:08+08', '2019-11-05 17:20:11+08', 1);
INSERT INTO darwinSalon."Commission" VALUES (2, 150, '2019-11-05 17:20:08+08', '2019-11-05 17:20:11+08', 2);


--
-- Name: Commission_id_seq; Type: SEQUENCE SET; Schema: darwinSalon; Owner: darwinSalon
--

SELECT pg_catalog.setval('darwinSalon."Commission_id_seq"', 1, true);

--
-- Data for Name: Customer; Type: TABLE DATA; Schema: darwinSalon; Owner: darwinSalon
--

INSERT INTO darwinSalon."Customer" VALUES (1, 'Toon Pang', 'Paloh Road', '1978-09', 14010102120, NULL,'2019-11-05 17:24:13+08', '2019-11-05 17:24:16+08');
INSERT INTO darwinSalon."Customer" VALUES (2, 'Maaroon Beck', 'Tampan Road', '1998-09', 140323220, NULL,'2019-11-05 17:24:13+08', '2019-11-05 17:24:16+08');


--
-- Name: Customer_id_seq; Type: SEQUENCE SET; Schema: darwinSalon; Owner: darwinSalon
--

SELECT pg_catalog.setval('darwinSalon."Customer_id_seq"', 11, true);

--
-- Data for Name: Transaction; Type: TABLE DATA; Schema: darwinSalon; Owner: darwinSalon
--

INSERT INTO darwinSalon."Transaction" VALUES (1, 5, NULL,'Cash', 50, 1, 'Maaroon','Tenayan', '1998-09-08', 1401010221, 2, 'Hair Wash', 100, NULL, NULL, '2019-11-05 17:24:13+08', '2019-11-05 17:24:16+08', 1);

--
-- Name: Transaction_id_seq; Type: SEQUENCE SET; Schema: darwinSalon; Owner: darwinSalon
--

SELECT pg_catalog.setval('darwinSalon."Transaction_id_seq"', 21, true);

--
-- Data for Name: Item; Type: TABLE DATA; Schema: darwinSalon; Owner: darwinSalon
--

INSERT INTO darwinSalon."Item" VALUES (1, NULL, 50, NULL, NULL, '2019-11-05 17:07:46+08', '2019-11-05 17:07:49+08');


--
-- Name: Item_id_seq; Type: SEQUENCE SET; Schema: darwinSalon; Owner: darwinSalon
--

SELECT pg_catalog.setval('darwinSalon."Item_id_seq"', 17, true);


--
-- Data for Name: Stock; Type: TABLE DATA; Schema: darwinSalon; Owner: darwinSalon
--

INSERT INTO darwinSalon."Stock" VALUES (1,10, '2019-11-05 17:07:46+08', '2019-11-05 17:07:49+08',1);


--
-- Name: Stock_id_seq; Type: SEQUENCE SET; Schema: darwinSalon; Owner: darwinSalon
--

SELECT pg_catalog.setval('darwinSalon."Stock_id_seq"', 17, true);


--
-- Data for Name:  Purchase; Type: TABLE DATA; Schema: darwinSalon; Owner: darwinSalon
--

INSERT INTO darwinSalon."Purchase" VALUES (1,'2019-11-05', 'lzm12', 'QK1234', 5, 40, '2019-11-05 17:07:49+08', '2019-11-05 17:07:49+08',1, 1);
INSERT INTO darwinSalon."Purchase" VALUES (2,'2019-11-05', 'lml12', 'Ql1234', 15, 20, '2019-11-05 17:07:49+08', '2019-11-05 17:07:49+08',2, 1);


--
-- Name: Purchase_id_seq; Type: SEQUENCE SET; Schema: darwinSalon; Owner: darwinSalon
--

SELECT pg_catalog.setval('darwinSalon."Purchase_id_seq"', 17, true);

--
-- Data for Name:  Agent; Type: TABLE DATA; Schema: darwinSalon; Owner: darwinSalon
--

INSERT INTO darwinSalon."Agent" VALUES (1,'Trump', 'Paloh Road', '65238326', '2019-11-05 17:07:49+08', '2019-11-05 17:07:49+08');


--
-- Name: Agent_id_seq; Type: SEQUENCE SET; Schema: darwinSalon; Owner: darwinSalon
--

SELECT pg_catalog.setval('darwinSalon."Agent_id_seq"', 17, true);


--
-- PostgreSQL database dump complete
--
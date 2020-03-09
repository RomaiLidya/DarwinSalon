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
-- Name: darwinSalon; Type: SCHEMA; Schema: -; Owner: darwinSalon
--

CREATE SCHEMA darwinSalon;

ALTER SCHEMA darwinSalon OWNER TO darwinSalon;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: User; Type: TABLE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE TABLE darwinSalon."User" (
    id integer NOT NULL,
    "loginName" character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "displayName" character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);

ALTER TABLE darwinSalon."User" OWNER TO darwinSalon;

--
-- Name: TABLE "User"; Type: COMMENT; Schema: darwinSalon; Owner: darwinSalon
--

COMMENT ON TABLE darwinSalon."User" IS 'User stores all user information';


--
-- Name: User_id_seq; Type: SEQUENCE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE SEQUENCE darwinSalon."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE darwinSalon."User_id_seq" OWNER TO darwinSalon;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: darwinSalon; Owner: darwinSalon
--

ALTER SEQUENCE darwinSalon."User_id_seq" OWNED BY darwinSalon."User".id;

--
-- Name: User id; Type: DEFAULT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."User" ALTER COLUMN id SET DEFAULT nextval('darwinSalon."User_id_seq"'::regclass);


--
-- Name: User User_loginName_key; Type: CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."User"
    ADD CONSTRAINT "User_loginName_key" UNIQUE ("loginName");


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: Employee; Type: TABLE; Schema: darwinSalon; Owner: darwinSalon
--
CREATE TABLE darwinSalon."Employee" (
  id integer NOT NULL,
  name character varying(255) NOT NULL,
  "dateOfBirth" date NOT NULL,
  address character varying(255),
  "contactNumber" character varying(255) NOT NULL,
  "nameOfFamily" character varying(255) NOT NULL,
  "numberOfFamily" character varying(255) NOT NULL,
  "basicSalary" double precision DEFAULT '0'::double precision,
  "payrolId" integer,
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE darwinSalon."Employee" OWNER TO darwinSalon;

COMMENT ON TABLE darwinSalon."Employee" IS 'EMPLOYEE stores all employee information';


--
-- Name: Employee_id_seq; Type: SEQUENCE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE SEQUENCE darwinSalon."Employee_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE darwinSalon."Employee_id_seq" OWNER TO darwinSalon;

--
-- Name: Employee_id_seq; Type: SEQUENCE OWNED BY; Schema: darwinSalon; Owner: darwinSalon
--

ALTER SEQUENCE darwinSalon."Employee_id_seq" OWNED BY darwinSalon."Employee".id;


--
-- Name: Employe id; Type: DEFAULT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Employee" ALTER COLUMN id SET DEFAULT nextval('darwinSalon."Employee_id_seq"'::regclass);


--
-- Name: Employee Employee_pkey; Type: CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Employee" 
    ADD CONSTRAINT "Employee_pkey" PRIMARY KEY ("id");

--
-- Name: Employee Employee_PayrollId_fkey; Type: FK CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Employee"
    ADD CONSTRAINT "Employee_PayrollId_fkey" FOREIGN KEY ("PayrollId") REFERENCES "darwinSalon"."Payroll" ("id") ON DELETE CASCADE ON UPDATE CASCADE;


--
-- Name: Customer; Type: TABLE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE TABLE darwinSalon."Customer" (
  id integer NOT NULL,
  name character varying(255) NOT NULL,
  address character varying(255),
  "dateOfBirth" date NOT NULL,
  "contactNumber" character varying(255) NOT NULL,
  "idCard" integer,
  "remark" character varying(255),
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL  
);


ALTER TABLE darwinSalon."Customer" OWNER TO darwinSalon;

COMMENT ON TABLE darwinSalon."Customer" IS 'Customer stores all Customer of Employee';


--
-- Name: Customer_id_seq; Type: SEQUENCE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE SEQUENCE darwinSalon."Customer_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE darwinSalon."Customer_id_seq" OWNER TO darwinSalon;

--
-- Name: Customer_id_seq; Type: SEQUENCE OWNED BY; Schema: darwinSalon; Owner: darwinSalon
--

ALTER SEQUENCE darwinSalon."Customer_id_seq" OWNED BY darwinSalon."Customer".id;


--
-- Name: Customer id; Type: DEFAULT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Customer" ALTER COLUMN id SET DEFAULT nextval('darwinSalon."Customer_id_seq"'::regclass);


--
-- Name: Customer Customer_pkey; Type: CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Customer"
    ADD CONSTRAINT "Customer_pkey" PRIMARY KEY ("id");


--
-- Name: Transaction; Type: TABLE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE TABLE darwinSalon."Transaction" (
  id integer NOT NULL,
  discount double precision DEFAULT '0'::double precision NOT NULL,
  "discountType" character varying(255) DEFAULT 'NA'::character varying NOT NULL,
  "totalTransaction" integer,
  "paymentMethod" varying(255) NOT NULL,
  commission character varying(255) NOT NULL,
  "customerId" integer,
  name character varying(255) NOT NULL,
  address character varying(255),
  "dateOfBitrh" Date NOT NULL,
  "idCard" integer,
  "itemId" integer,
  "itemType" character varying(255) NOT NULL,
  "sellingPrice" integer,
  category character varying(255),
  remark character varying(255) ,
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL  
); 

 
ALTER TABLE darwinSalon."Transaction" OWNER TO darwinSalon;

COMMENT ON TABLE darwinSalon."Transaction" IS 'Transaction stores all Transaction of employee';


--
-- Name: Transaction_id_seq; Type: SEQUENCE; Schema: darwin; Owner: darwin
--

CREATE SEQUENCE darwinSalon."Transaction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE darwinSalon."Transaction_id_seq" OWNER TO darwinSalon;

--
-- Name: Transaction_id_seq; Type: SEQUENCE OWNED BY; Schema: darwinSalon; Owner: darwinSalon
--

ALTER SEQUENCE darwinSalon."Transaction_id_seq" OWNED BY darwinSalon."Transaction".id;


--
-- Name: Transaction id; Type: DEFAULT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Transaction" ALTER COLUMN id SET DEFAULT nextval('darwinSalon."Transaction_id_seq"'::regclass);


--
-- Name:  Transaction Transaction_pkey; Type: CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Transaction" 
    ADD CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id");


--
-- Name: Transaction Transaction_CustomerId_fkey; Type: FK CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Transaction"
    ADD CONSTRAINT "Transaction_CustomerId_fkey" FOREIGN KEY ("CustomerId") REFERENCES "darwinSalon"."Customer" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Name: Transaction Transaction_ItemId_fkey; Type: FK CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Transaction"
    ADD CONSTRAINT "Transaction_ItemId_fkey" FOREIGN KEY ("ItemId") REFERENCES "darwinSalon"."Item" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Name: Commission; Type: TABLE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE TABLE darwinSalon."Commission" (
  id integer NOT NULL,
  commission integer NOT NULL,
  "ItemId" integer
);


ALTER TABLE darwinSalon."Commission" OWNER TO darwinSalon;

COMMENT ON TABLE darwinSalon."Commission" IS 'Commission stores all Commission of Employee';


--
-- Name: Commission_id_seq; Type: SEQUENCE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE SEQUENCE darwinSalon."Commission_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE darwinSalon."Commission_id_seq" OWNER TO darwinSalon;

--
-- Name: Commission_id_seq; Type: SEQUENCE OWNED BY; Schema: darwinSalon; Owner: darwinSalon
--

ALTER SEQUENCE darwinSalon."Commission_id_seq" OWNED BY darwinSalon."commission".id;


--
-- Name: Commission id; Type: DEFAULT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Commission" ALTER COLUMN id SET DEFAULT nextval('darwinSalon."Commission_id_seq"'::regclass);


--
-- Name: Commission Commission_pkey; Type: CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Commission" 
    ADD CONSTRAINT "Commission_pkey" PRIMARY KEY ("id");


--
-- Name: Commistion Commission_ItemId_fkey; Type: FK CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Commission"
    ADD CONSTRAINT "Commission_ItemId_fkey" FOREIGN KEY ("ItemId") REFERENCES "darwinSalon"."Item" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Name: Item; Type: TABLE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE TABLE darwinSalon."Item" (
  id integer NOT NULL,
  "itemType" character varying(255) NOT NULL,
  "sellingPrice" integer NOT NULL,
  category character varying(255) NOT NULL,
  remark character varying(255),
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE darwinSalon."Item" OWNER TO darwinSalon;

COMMENT ON TABLE darwinSalon."Item" IS 'Item stores all item of Employee';


--
-- Name: Item_id_seq; Type: SEQUENCE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE SEQUENCE darwinSalon."Item_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE darwinSalon."Item_id_seq" OWNER TO darwinSalon;

--
-- Name: Item_id_seq; Type: SEQUENCE OWNED BY; Schema: darwinSalon; Owner: darwinSalon
--

ALTER SEQUENCE darwinSalon."Item_id_seq" OWNED BY darwinSalon."Item".id;


--
-- Name: Item id; Type: DEFAULT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Item" ALTER COLUMN id SET DEFAULT nextval('darwinSalon."Item_id_seq"'::regclass);


--
-- Name: Item Item_pkey; Type: CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Item" 
    ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("id");

--
-- Name: Stock; Type: TABLE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE TABLE darwinSalon."Stock" (
  id integer NOT NULL,
  stock integer NOT NULL,
  "itemId" integer,
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE darwinSalon."Stock" OWNER TO darwinSalon;

COMMENT ON TABLE darwinSalon."Stock" IS 'Stock stores all stock of Item';


--
-- Name: Stock_id_seq; Type: SEQUENCE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE SEQUENCE darwinSalon."Stock_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE darwinSalon."Stock_id_seq" OWNER TO darwinSalon;

--
-- Name: Stock_id_seq; Type: SEQUENCE OWNED BY; Schema: darwinSalon; Owner: darwinSalon
--

ALTER SEQUENCE darwinSalon."stock_id_seq" OWNED BY darwinSalon."Stock".id;


--
-- Name: Stock id; Type: DEFAULT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Stock" ALTER COLUMN id SET DEFAULT nextval('darwinSalon."Stock_id_seq"'::regclass);


--
-- Name: Stock Stock_pkey; Type: CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Stock" 
    ADD CONSTRAINT "Stock_pkey" PRIMARY KEY ("id");

--
-- Name: stock stock_ItemId_fkey; Type: FK CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Stock"
    ADD CONSTRAINT "Stock_ItemId_fkey" FOREIGN KEY ("ItemId") REFERENCES "darwinSalon"."Item" ("id") ON DELETE CASCADE ON UPDATE CASCADE;


--
-- Name: Purchase; Type: TABLE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE TABLE darwinSalon."Purchase" (
  id integer NOT NULL,
  "dateOfPurchase" integer NOT NULL,
  "itemId" integer,
  "agentId" integer,
  "stockCode" integer,
  "invoiceCode" character varying(255) NOT NULL,
  quantity integer,
  "purchasePrice" integer,
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE darwinSalon."Purchase" OWNER TO darwinSalon;

COMMENT ON TABLE darwinSalon."Purchase" IS 'Purchase of Item';


--
-- Name: Purchase_id_seq; Type: SEQUENCE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE SEQUENCE darwinSalon."Purchase_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE darwinSalon."Purchase_id_seq" OWNER TO darwinSalon;

--
-- Name: Purchase_id_seq; Type: SEQUENCE OWNED BY; Schema: darwinSalon; Owner: darwinSalon
--

ALTER SEQUENCE darwinSalon."Purchase_id_seq" OWNED BY darwinSalon."Purchase".id;


--
-- Name: Purchase id; Type: DEFAULT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Purchase" ALTER COLUMN id SET DEFAULT nextval('darwinSalon."Purchase_id_seq"'::regclass);


--
-- Name: Purcahse Purchase_pkey; Type: CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Purchase" 
    ADD CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id");

--
-- Name: stock Purchase_ItemId_fkey; Type: FK CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Purchase"
    ADD CONSTRAINT "Purchase_ItemId_fkey" FOREIGN KEY ("ItemId") REFERENCES "darwinSalon"."Item" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Name: stock Purchase_AgentId_fkey; Type: FK CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Agent"
    ADD CONSTRAINT "Purchase_AgentId_fkey" FOREIGN KEY ("AgentId") REFERENCES "darwinSalon"."Agent" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Name: Agent; Type: TABLE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE TABLE darwinSalon."Agent" (
  id integer NOT NULL,
  name character varying(255) NOT NULL,
  address character varying(255) NOT NULL,
  "contactNumber" character varying(255) NOT NULL,
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE darwinSalon."agent" OWNER TO darwinSalon;

COMMENT ON TABLE darwinSalon."Agent" IS 'Agent';


--
-- Name: Agent_id_seq; Type: SEQUENCE; Schema: darwinSalon; Owner: darwinSalon
--

CREATE SEQUENCE darwinSalon."Agent_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE darwinSalon."Agent_id_seq" OWNER TO darwinSalon;

--
-- Name: Agent_id_seq; Type: SEQUENCE OWNED BY; Schema: darwinSalon; Owner: darwinSalon
--

ALTER SEQUENCE darwinSalon."Agent_id_seq" OWNED BY darwinSalon."Agent".id;


--
-- Name: Agent id; Type: DEFAULT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Agent" ALTER COLUMN id SET DEFAULT nextval('darwinSalon."Agent_id_seq"'::regclass);


--
-- Name: Agent Agent_pkey; Type: CONSTRAINT; Schema: darwinSalon; Owner: darwinSalon
--

ALTER TABLE ONLY darwinSalon."Agent" 
    ADD CONSTRAINT "Agent_pkey" PRIMARY KEY ("id");

--
-- PostgreSQL database dump complete
--
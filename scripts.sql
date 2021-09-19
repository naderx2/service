CREATE TABLE employe
(
    id integer NOT NULL DEFAULT nextval('employee_seq'),
    name varchar(50) NOT NULL,
    imag varchar(50),
    cv varchar(50),
    dat_rec timestamp,
    email varchar(50),
    doc varchar(500),
    CONSTRAINT emp_cons PRIMARY KEY (id)
)

CREATE TABLE compagnie
(
    id integer NOT NULL DEFAULT nextval('compagnie_seq'),
    name varchar(50),
    email varchar(50),
    description varchar(500),
    CONSTRAINT comp_cons PRIMARY KEY (id)
)

CREATE TABLE societe
(
    id integer NOT NULL DEFAULT nextval('societe_seq'),
    employe_id integer NOT NULL,
    compagnie_id integer NOT NULL,
    CONSTRAINT societe_cons PRIMARY KEY (id),
    CONSTRAINT fk_employe FOREIGN KEY (employe_id) REFERENCES employe (id),
    CONSTRAINT fk_compagnie FOREIGN KEY (compagnie_id) REFERENCES compagnie (id)
    
        
)
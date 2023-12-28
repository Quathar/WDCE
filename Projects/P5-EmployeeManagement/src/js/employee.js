
'use strict'

// Etiquetas de campos: "ID","NOMBRE","APELLIDOS","Nº EMPLEADO","TIPO PUESTO","DEPARTAMENTO"
const FIELDS = [
    'ID',
    'NOMBRE',
    'APELLIDOS',
    'Nº EMPLEADO',
    'TIPO PUESTO',
    'DEPARTAMENTO'
];

export class Employee {

    static get fields() {
        return FIELDS;
    }

    // <<-CONSTRUCTOR->>
    constructor(id, name, surname, nemp, position, department) {
        this.id         = Number(id);
        this.name       = name == null ? '' : name;
        this.surname    = surname;
        this.nemp       = nemp;
        this.position   = position;
        this.department = department;
    }

    // <<-METHODS->>
    field(fieldName) {
        switch (fieldName) {
            case FIELDS[0]: return this.id;
            case FIELDS[1]: return this.name;
            case FIELDS[2]: return this.surname;
            case FIELDS[3]: return this.nemp;
            case FIELDS[4]: return this.position;
            case FIELDS[5]: return this.department;
        }
    }

    toString() {
        return `Employee {
            "id": ${this.id},
            "name": ${this.name},
            "surname": ${this.surname},
            "nemp": ${this.nemp},
            "position": ${this.position},
            "department": ${this.department}
        }`;
    }

}

import { Injectable } from '@angular/core';

import { IEmployee } from '../models/iemployee';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees():Array<IEmployee> {
    let projects = new Array<IEmployee>();

    let employeeA: IEmployee = {} as IEmployee;
    employeeA.firstname = 'Peter';
    employeeA.lastname = 'Vestergaard';
    employeeA.id = 'hgjdfghkfdg';
    projects.push(employeeA);

    let employeeB: IEmployee = {} as IEmployee;
    employeeB.firstname = 'Mikkel';
    employeeB.lastname = 'Stærk';
    employeeB.id = 'ertyuioiuy';
    projects.push(employeeB);

    let employeeC: IEmployee = {} as IEmployee;
    employeeC.firstname = 'Niclas';
    employeeC.lastname = 'Schumacher';
    employeeC.id = 'jhgfdsdfgyyy';
    projects.push(employeeC);

    let employeeD: IEmployee = {} as IEmployee;
    employeeD.firstname = 'Henrik';
    employeeD.lastname = 'Gedionsen';
    employeeD.id = 'nvkjfgfjhkfd';
    projects.push(employeeD);

    return projects;
  }

}

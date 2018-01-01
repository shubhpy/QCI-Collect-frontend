import { EventEmitter, Injectable, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from './APIService';

@Injectable()
export class ProjectService {

  constructor(private apiService: APIService, private router: Router ) {}

  cid() {
    let d = new Date();
    let cid = d.getTime() +""+ Math.floor(1000 + Math.random() * 8999);
    return cid;
  }

  cdate() {
    let d = new Date();
    let cdate = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+" "+d.getHours();
    let min  = d.getMinutes();
    let min2 = "";
    if(min<10) {
      min2 = "0"+min;
    } else{
      min2 = ""+min;
    }
    cdate += ":"+min2;
    return cdate;
  }

  emitFormElement = new EventEmitter<any>();
  emitFormElementTemp = new EventEmitter<any>();
  emitDeleteElement = new EventEmitter<any>();
  emitFormArray = new EventEmitter<any>();
  emitTemplateArray = new EventEmitter<any>();
  emitFormWithID = new EventEmitter<any>();
  emitTemplateWithID = new EventEmitter<any>();
  emitUpElement = new EventEmitter<any>();
  emitDownElement = new EventEmitter<any>();
  emitProject = new EventEmitter<any>();
  emitResponse = new EventEmitter<any>();
  emitResTable = new EventEmitter<any>();
  emitUsers = new EventEmitter<any>();
  emitAssessors = new EventEmitter<any>();
  emitFormResponse = new EventEmitter<any>();
  emitTableHeader = new EventEmitter<any>();
  emitSuccessRes = new EventEmitter<any>();
  emitWarningRes = new EventEmitter<any>();
  emitErrorRes = new EventEmitter<any>();
  emitInfoRes = new EventEmitter<any>();

  formArray = [
    // { Details: { name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' },
    //   Elements:  [{type: "text", required: false, name: "Name", value:"", cid:"a1", hepltext: ""},
    //                   {type: "email", required: false, hepltext: "", name: "Email ID", value:"", cid:"b1"},
    //                   {type: "number", required: false, hepltext: "", name: "Number Input", value:"", cid:"c1"},],
    //   Rules: [{cid:"211", name: 'Rule 1', elementName:'Name', elementType: "text", elementValue:"sam",elementCid:"a1", tempCid: '2332b', tempName: 'template1', satisfyAll:false},],
    // },
    // { Details: { name: 'Form2', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121',  status:'Online', cid:'a2121' },
    //   Elements:  [{type: "text", required: false, name: "Name2", value:"", cid:"a11", hepltext: ""},
    //                   {type: "email", required: false, value:"", cid:"a12", hepltext: "", name: "Email ID2"},
    //                   {type: "number", required: false, value:"", cid:"a13", hepltext: "", name: "Number Input2"},],
    //   Rules: [],
    // }
  ];

  templateArray = [
    // { Details:   { name: 'template1', rule: 'None', project:"N/A", cid:'2332b'},
    // Elements:  [{type: "text", required: false, name: "Name", value:"", cid:"a1q", hepltext: ""},
    //                 {type: "email", required: false, value:"", cid:"a1b", hepltext: "", name: "Email ID"},
    //                 {type: "number", required: false, value:"", cid:"a1c", hepltext: "", name: "Number Input"},],
    //
    // },
    // { Details:   { name: 'template2', rule: 'None', project:"N/A", cid:'2323b' },
    // Elements:  [{type: "text", required: false, name: "Name2", value:"", cid:"aa1", hepltext: ""},
    //               {type: "email", required: false, value:"", cid:"ba1", hepltext: "", name: "Email ID2"},
    //               {type: "number", required: false, value:"", cid:"ca1", hepltext: "", name: "Number Input2"},],
    // }
    ];

  projectArray = [
    // {cid:"p121", cdate:"26/11/2017 10:14", name: 'Project Name Here 1', form: 2, user: 3, assesor: 5, desc:'This is a test project about different design concepts we can adopt to show a card design. Lorem iThis is a test project about different design concepts we can adopt to show a card design. Lorem ipsum doler sit   kilpsum doler sit kil This is a test project about different design concepts we can adopt to show a card design. Lorem ipsum doler sit   kil'},
    // {cid:"p122", cdate:"26/11/2017 10:22", name: 'Project Name Here 2', form: 0, user: 0, assesor: 0,  desc:'This is again a test project about different design concepts we can adopt to show a card design. sit amet chip c This is a test project about different design concepts we can adopt to show a card designThis is a test project about different design concepts we can adopt to show a card design. Lorem ipsum doler sit   kil. Lorem ipsum doler sit   kil'},
    // {cid:"p123", cdate:"26/11/2017 10:25", name: 'Project Name Here 3', form: 0, user: 0, assesor: 0,  desc:'This is again  a test project about different design concepts we can adopt to show a card design. Lorem ipsum dole il This is a test project about different design concepts we can adopt to show a card design. Lorem ipsum doler sit This is a test project about different design concepts we can adopt to show a card design. Lorem ipsum doler sit   kil  kil'},
  ];

  responseArray1 = [
    {name:'sam ', position:'position status', office: 'noida', age: '22', startDate:'21/3/2010', salary: '$1500'},
    {name:'tom ', position:'position N/A', office: 'Delhi', age: '19', startDate:'01/11/2014', salary: '$3500'},
    {name:'gimmy ', position:'pos UP', office: 'New-Delhi', age: '31', startDate:'09/01/2015', salary: '$2500'},
    {name:'sam ', position:'position status', office: 'noida', age: '22', startDate:'21/3/2010', salary: '$1500'},
    {name:'tom ', position:'position N/A', office: 'Delhi', age: '19', startDate:'01/11/2014', salary: '$3500'},
    {name:'Gimmy ', position:'pos UP', office: 'New-Delhi', age: '31', startDate:'09/01/2015', salary: '$2500'},
    {name:'sam ', position:'position status', office: 'noida', age: '22', startDate:'21/3/2010', salary: '$1500'},
    {name:'Gimmy ', position:'pos UP', office: 'New-Delhi', age: '31', startDate:'09/01/2015', salary: '$2500'},
    {name:'tom ', position:'position N/A', office: 'Delhi', age: '19', startDate:'01/11/2014', salary: '$3500'},
    {name:'Gimmy ', position:'pos UP', office: 'New-Delhi', age: '31', startDate:'09/01/2015', salary: '$2500'},
    {name:'sam ', position:'position status', office: 'noida', age: '22', startDate:'21/3/2010', salary: '$1500'},
    {name:'tom ', position:'position N/A', office: 'Delhi', age: '19', startDate:'01/11/2014', salary: '$3500'},
    {name:'Gimmy ', position:'pos UP', office: 'New-Delhi', age: '31', startDate:'09/01/2015', salary: '$2500'},
    {name:'sam ', position:'position status', office: 'noida', age: '22', startDate:'21/3/2010', salary: '$1500'},
    {name:'tom ', position:'position N/A', office: 'Delhi', age: '19', startDate:'01/11/2014', salary: '$3500'},
    {name:'Gimmy ', position:'pos UP', office: 'New-Delhi', age: '31', startDate:'09/01/2015', salary: '$2500'},
  ];

  responseArray = [
    {
      ResCid:'1',
      ResDetails:{ name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' },
      ResElements:[
        {type: "text", required: false, name: "Name", value:"sammy", cid:"a1", hepltext: "", alias:" Username "},
        {type: "password", required: false, name: "SecretKey", value:"sammy_password", cid:"a2", hepltext: "", alias:" Password "}
      ],
      ResExtra:{}
    },
    {
      ResCid:'2',
      ResDetails:{ name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' },
      ResElements:[
        {type: "text", required: false, name: "Name", value:"sammy@dd.cc", cid:"a1", hepltext: "", alias:" Username "},
        {type: "password", required: false, name: "SecretKey", value:"sammy_dd.cc", cid:"a2", hepltext: "", alias:" Password "}
      ],
      ResExtra:{}
    },
    {
      ResCid:'3',
      ResDetails:{ name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' },
      ResElements:[
        {type: "text", required: false, name: "Name", value:"Tom_21", cid:"a1", hepltext: "", alias:" Username "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password "}
      ],
      ResExtra:{}
    },
    {
      ResCid:'4',
      ResDetails:{ name: 'Form2', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121',  status:'Online', cid:'a2121' },
      ResElements:[
        {type: "text", required: false, name: "Name", value:"Tom_21", cid:"a1", hepltext: "", alias:" Username2 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password2 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password21 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password22 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password23 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password24 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password25 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password26 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password27 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password28 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password29 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password210 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password211 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password212 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password213 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password265 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password276 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password286 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password296 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password2106 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password2116 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password2126 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password2136 "},
      ],
      ResExtra:{}
    },
    {
      ResCid:'5',
      ResDetails:{ name: 'Form2', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121',  status:'Online', cid:'a2121' },
      ResElements:[
        {type: "text", required: false, name: "Name", value:"Tom_21", cid:"a1", hepltext: "", alias:" Username2 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password2 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password21 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password22 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password23 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password24 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password25 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password26 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password27 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password28 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password29 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password210 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password211 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password212 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password213 "},

        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password265 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password276 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password286 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password296 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password2106 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password2116 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password2126 "},
        {type: "password", required: false, name: "SecretKey", value:"tom_pass_21", cid:"a2", hepltext: "", alias:" Password2136 "},
      ],
      ResExtra:{}
    }
  ];

  userArray = [
      {cid:"p121", cdate:"26/11/2017 10:14", name: 'Sam', email:" test@tes.com", project:[{cid:'p121', name:'Project Name Here 1'}], details:'Details'},
      {cid:"p122", cdate:"26/11/2017 10:13", name: 'Tom', email:" test@tes.com", project:[{cid:'p121', name:'Project Name Here 1'}], details:'Details'},
      {cid:"p123", cdate:"26/11/2017 10:20", name: 'Rony', email:" test@tes.com", project:[{cid:'p121', name:'Project Name Here 1'}], details:'Details'},
  ];

  assessorArray = [
      {cid:"p120", cdate:"26/11/2017 10:14", name: 'Ram', phone:'8998671234', form:[{ name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' },], details:'Details'},
      {cid:"p121", cdate:"26/11/2017 10:14", name: 'Sam', phone:'9238672331', form:[{ name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' },], details:'Details'},
      {cid:"p122", cdate:"26/11/2017 10:14", name: 'Sammy', phone:'8965766734', form:[{ name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' },], details:'Details'},
      {cid:"p123", cdate:"26/11/2017 10:14", name: 'Tom', phone:'9796631232', form:[{ name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' },], details:'Details'},
      {cid:"p124", cdate:"26/11/2017 10:14", name: 'Rick', phone:'8894810231', form:[{ name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' }, { name: 'Form2', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121',  status:'Online', cid:'a2121' }], details:'Details'},
  ];

  getProject() {
    this.apiService.GetAllProjects().subscribe(res=> {
      if(res){
        // console.log(res);
        this.projectArray = res.data;
        // console.log(this.projectArray);
        this.emitProject.emit(this.projectArray);

      } else {}
    },err=> {
      console.log(err);
    });

  }

  addNewProject(pname: string, pdesc: string) {

    let tempData : any;
    let cid = this.cid();
    let cdate = this.cdate();
    tempData = { cid:cid, cdate:cdate, name: pname, desc: pdesc, form:0, user: 0, assesor: 0};
    this.apiService.AddNewProject(tempData).subscribe(res=>{
      // console.log(res);
      if(res.success) {
        this.emitSuccessRes.emit(res.message);
        this.projectArray.push(tempData);
      } else {
        this.emitErrorRes.emit(res.message);
      }
    },err=>{
      console.log(err);
      this.emitErrorRes.emit("Somethisng went wrong");
    });

    // this.getProject();
  }

  getFormArray() {
    this.apiService.GetFormArray().subscribe(res=>{
      // console.log(res);

      if(res.success) {
        this.formArray = [];
        if(res.formArray.length) {
          for(let i = 0; i< res.formArray.length; i++) {
            this.formArray.push(res.formArray[i].form_json);
          }
        }
        this.emitFormArray.emit(this.formArray);
      }else {}
    }, err=>{
      console.log(err);
    });
    // this.emitFormArray.emit(this.formArray);
  }

  getTemplateArray() {
    this.apiService.GetTeplateArray().subscribe(res=>{
      // console.log(res);

      if(res.success) {
        this.templateArray = [];
        if(res.tempArray.length) {
          for(let i = 0; i< res.tempArray.length; i++) {
            this.templateArray.push(res.tempArray[i].temp_json);
          }
        }
        this.emitTemplateArray.emit(this.templateArray);
      }else {}
    }, err=>{
      console.log(err);
    });

    // this.emitTemplateArray.emit(this.templateArray);
  }

  updateFormJson(form: any){
    this.apiService.UpdateFormJson(form).subscribe(res=>{
      // console.log(res);
      if(res.success) {
        // this.emitSuccessRes.emit(res.message);
      }else {}
    }, err=>{
      console.log(err);
    });
  }

  updateTempJson(temp: any){
    this.apiService.UpdateTempJson(temp).subscribe(res=>{
      // console.log(res);
      if(res.success) {
        // this.emitSuccessRes.emit(res.message);
      }else {}
    }, err=>{
      console.log(err);
    });
  }

  pushIntoForm(data: any) {

    this.apiService.PushIntoForm(data).subscribe(res=>{
      console.log(res);
      if(res.success) {
        this.emitSuccessRes.emit(res.message);
        this.formArray.push(data);
        this.router.navigate(['dash/form']);
      }else {}
    }, err=>{
      console.log(err);
    });

  }

  pushIntoTemplate(data: any) {
    this.apiService.PushIntoTemplate(data).subscribe(res=>{
      console.log(res);
      if(res.success) {
        this.emitSuccessRes.emit(res.message);
        this.templateArray.push(data);
        this.router.navigate(['dash/form']);
      }else {}
    }, err=>{
      console.log(err);
    });
    // this.templateArray.push(data);

  }

  addNewRule(fcid: any,newRule: any) {

    if(newRule.ruleFormQuestion != undefined) {           // If Rule is a Form Question

      let cid = this.cid();
      let template: any = {Details:{},Elements:[]};       // generate new template
      template.Details.name = 'Form question';            // generate template properties
      template.Details.rule = '';
      template.Details.project = '';
      template.Details.cid = cid;
      template.Elements.push(newRule.ruleFormQuestion);   // push elements

      this.pushIntoTemplate(template);                    // update server template
      this.templateArray.push(template);                  // push new generated template on the template array

      for(let i = 0; i< this.formArray.length; i++) {
        if(this.formArray[i].Details.cid == fcid) {
          for(let j=0; j< this.formArray[i].Elements.length; j++) {
            if(this.formArray[i].Elements[j].cid == newRule.ruleFormQuestion.cid) {
              this.formArray[i].Elements.splice(j,1);     // remove form question from from to template
              break;
            }
          }
        }
      }
      newRule.tempCid = cid;                               // insert tempID on the rule list
      newRule.tempName = template.Details.name;            // insert temp Name on the rule list
      // console.log(newRule);

    }

    // this.apiService.RulesArray(fcid,newRule);

    let i=0;
    let temp: any;
    for(i=0; i<this.formArray.length; i++) {
      if(fcid == this.formArray[i].Details.cid) {
        temp = i;
        break;
      }
    }
    if(temp != undefined) {
      this.formArray[temp].Rules.push(newRule);            // update local formArray
      this.apiService.UpdateFormJson(this.formArray[temp]);// update server formArray
    }
    console.log(newRule);
  }

  getAssessors() {
    this.apiService.GetAllAssesors().subscribe(res=> {
      console.log(res);
      if(res){
        this.assessorArray = res.data;
        this.emitAssessors.emit(this.assessorArray);
      } else {}
    },err=> {
      console.log(err);
    });
    // this.emitAssessors.emit(this.assessorArray);
  }

  addAssessorArray(name, phone, details) {
    let cid = this.cid();
    let cdate = this.cdate();

    let formObj = [];
    formObj.push(details);
    if(name =="" || name == undefined) {
      name = 'N/A';
    }
    let tempArray = {cid:cid, cdate:cdate, name: name, phone: phone, form:formObj, details:'Details'};
    this.apiService.AddAssesorArray(tempArray).subscribe(res=>{
      console.log(res);
      if(res.success){
        this.emitSuccessRes.emit(res.message);
      } else {}
    },err=> {
      console.log(err);
    });
    this.assessorArray.push(tempArray);
    this.incAssessorCount(details.projectcdi);
  }

  assignNewFormToAssessor(cid,form) {
    let temp: any;
    for(let i = 0;i<this.assessorArray.length;i++) {
      if(cid == this.assessorArray[i].cid) {
        temp = i;
        break;
      }
    }

    this.assessorArray[temp].form.push(form.Details);
    this.apiService.AddAssesorArray(this.assessorArray[temp]).subscribe(res=>{
      if(res.success){
        this.emitSuccessRes.emit(res.message);
      } else {}
    },err=> {
      console.log(err);
    });

    this.incAssessorCount(form.Details.projectcdi);
  }

  addUserArray(name, email, project) {
    let cid = this.cid();
    let cdate = this.cdate();
    let temp = { 'cid':project.cid, 'name':project.name };
    let projObj = [];
    projObj.push(temp);
    let tempObj = {cid:cid, cdate:cdate, name: name, email:email, project:projObj, details:'Details'};

    this.apiService.AddUser(tempObj).subscribe(res=>{
      // console.log(res);
      if(res.success){
        this.emitSuccessRes.emit(res.message);
        this.userArray.push(tempObj);
      } else {}
    },err=> {
      console.log(err);
    });

    this.incUserCount(project.cid);
  }

  getUsers() {
    this.apiService.GetAllUsers().subscribe(res=> {
      if(res){
        this.userArray = res.data;
        this.emitUsers.emit(this.userArray);
      } else {}
    },err=> {
      console.log(err);
    });
    // this.emitUsers.emit(this.userArray);
  }

  assignNewProjectToUser(cid,project) {
    let array = {cid:project.cid, name: project.name};
    let temp : any;
    for(let i=0; i<this.userArray.length; i++) {
      if(cid == this.userArray[i].cid) {
        temp = i;
        break;
      }
    }

    this.userArray[temp].project.push(array);
    this.apiService.AddUser(this.userArray[temp]).subscribe(res=>{
      // console.log(res);
      if(res.success){
        this.emitSuccessRes.emit(res.message);
      } else {}
    },err=> {
      console.log(err);
    });

    this.incUserCount(project.cid);
  }

  getResponseArray(formId) {
    let formResponse = [];
    let tableHeader = [];
    for(let i = 0; i< this.responseArray.length; i++) {
      if(this.responseArray[i].ResDetails.cid == formId) {
        formResponse.push({ ResElements: this.responseArray[i].ResElements, ResCid: this.responseArray[i].ResCid, ResFormId: this.responseArray[i].ResDetails.cid});

        for(let j=0; j< this.responseArray[i].ResElements.length; j++) {
          tableHeader.push(this.responseArray[i].ResElements[j].alias);
        }

      }
    }
    tableHeader = Array.from(new Set(tableHeader));
    // console.log(formResponse);
    // console.log(tableHeader);

    this.emitFormResponse.emit(formResponse);
    this.emitTableHeader.emit(tableHeader);
  }

  incUserCount(cid) {
    for(let proj of this.projectArray) {
      if(proj.cid === cid) {
        proj.user++;
        break;
      }
    }
  }

  descUserCount(cid) {
    for(let proj of this.projectArray) {
      if(proj.cid === cid) {
        proj.user--;
        break;
      }
    }
  }

  descAsrCount(cid) {
    for(let proj of this.projectArray) {
      if(proj.cid === cid) {
        proj.assesor--;
        break;
      }
    }
  }

  incAssessorCount(cid) {
    for(let proj of this.projectArray) {
      if(proj.cid === cid) {
        proj.assesor++;
        break;
      }
    }
  }

  incFromCount(cid) {
    for(let proj of this.projectArray) {
      if(proj.cid === cid) {
        proj.form++;
        break;
      }
    }
  }

  getResponse() {
    this.emitResponse.emit(this.responseArray);
  }

  deleteProjectUserArray(uCid,pCid) {
    let ipos: any;
    let jpos: any;
    for(let i = 0; i< this.userArray.length; i++) {
        if(uCid == this.userArray[i].cid) {
            ipos = i;
            break;
      }
    }

    for(let j = 0; j< this.userArray[ipos].project.length; j++) {
      if(pCid == this.userArray[ipos].project[j].cid) {
        jpos = j;
        break;
      }
    }
    this.userArray[ipos].project.splice(jpos,1);
    this.descUserCount(pCid);
  }

  deleteFormAssessorArray(cid, fCid, pCid) {
    let ipos: any;
    let jpos: any;
    for(let i = 0; i< this.assessorArray.length; i++) {
        if(cid == this.assessorArray[i].cid) {
            ipos = i;
            break;
      }
    }

    for(let j = 0; j< this.assessorArray[ipos].form.length; j++) {
      if(fCid == this.assessorArray[ipos].form[j].cid) {
        jpos = j;
        break;
      }
    }
    this.assessorArray[ipos].form.splice(jpos,1);
    this.descAsrCount(pCid);
  }

  getFormArrayWithID(cid) {

    let i=0;
    let temp: any;
    for(i=0; i<this.formArray.length; i++) {
      if(cid == this.formArray[i].Details.cid) {
        temp = i;
        break;
      }
    }
    if(temp != undefined)
    this.emitFormWithID.emit(this.formArray[temp]);
  }

  getTemplateArrayWithID(cid) {

    let i=0;
    let temp: any;
    for(i=0; i<this.templateArray.length; i++) {
      if(cid == this.templateArray[i].Details.cid) {
        temp = i;
        break;
      }
    }
    if(temp != undefined) {
      this.emitTemplateWithID.emit(this.templateArray[temp]);
    }
  }

  updateFormArray(cid: any, data: any) {
    let i=0;
    let temp: any;
    for(i=0; i<this.formArray.length; i++) {
      if(cid == this.formArray[i].Details.cid) {
        temp = i;
        break;
      }
    }
    if(temp != undefined) {
      this.formArray[temp].Elements = data;
    }

  }

  updateTempArray(cid: any, data: any) {
    let i=0;
    let temp: any;
    for(i=0; i<this.templateArray.length; i++) {
      if(cid == this.templateArray[i].Details.cid) {
        temp = i;
        break;
      }
    }
    if(temp != undefined) {
      this.templateArray[temp].Elements = data;
    }

  }

  calFormArrayLength() {
    return (this.formArray.length+'');
  }

  calTemplateArrayLength() {
    return (this.templateArray.length+'');
  }

  syncAll() {
    this.apiService.SyncAll(this.formArray, this.templateArray).subscribe(res=>{
      console.log(res);
    });
  }

  emitResponseForResTable(data) {
    let tempArray :any = [];
    for(let m of this.responseArray1) {
        if(m.office == data) {
          tempArray.push(m);
        }
    }
    this.emitResTable.emit(tempArray);
  }

}
